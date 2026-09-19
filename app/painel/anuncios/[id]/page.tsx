"use client";
import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditarAnuncio() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState({ title:"", description:"", market_category:"", city:"", state:"", price_label:"", whatsapp:"" });
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    (async () => {
      const { data:{ user } } = await supabase.auth.getUser();
      if (!user) { router.replace("/entrar"); return; }
      const { data, error } = await supabase.from("spaces").select("title,description,market_category,city,state,price_label,whatsapp").eq("id", id).eq("owner_id", user.id).maybeSingle();
      if (error || !data) { router.replace("/painel"); return; }
      setForm({ title:data.title||"", description:data.description||"", market_category:data.market_category||"", city:data.city||"", state:data.state||"", price_label:data.price_label||"", whatsapp:data.whatsapp||"" });
      setBusy(false);
    })();
  }, [id, router]);

  const set = (key:string, value:string) => setForm(f => ({...f, [key]:value}));
  const submit = async (event:FormEvent) => {
    event.preventDefault(); setBusy(true);
    const { error } = await supabase.from("spaces").update({...form, approval_status:"pending"}).eq("id", id);
    if (error) setMessage(error.message); else setMessage("Salvo e enviado novamente para revisão.");
    setBusy(false);
  };

  if (busy && !form.title) return <main className="page"><div className="empty">Carregando...</div></main>;

  return <main className="page narrow">
    <span className="eyebrow">Editar anúncio</span><h1>Atualize sua oferta</h1>
    <form className="form" onSubmit={submit}>
      <label>Título<input value={form.title} onChange={e=>set("title",e.target.value)} required /></label>
      <label>Categoria<input value={form.market_category} onChange={e=>set("market_category",e.target.value)} required /></label>
      <label>Descrição<textarea value={form.description} onChange={e=>set("description",e.target.value)} rows={7} required /></label>
      <div className="form-grid"><label>Cidade<input value={form.city} onChange={e=>set("city",e.target.value)} required /></label><label>Estado<input value={form.state} onChange={e=>set("state",e.target.value)} /></label></div>
      <div className="form-grid"><label>Preço exibido<input value={form.price_label} onChange={e=>set("price_label",e.target.value)} /></label><label>WhatsApp<input value={form.whatsapp} onChange={e=>set("whatsapp",e.target.value)} required /></label></div>
      <button className="button primary" disabled={busy}>{busy ? "Salvando..." : "Salvar alterações"}</button>
      {message ? <p className="notice">{message}</p> : null}
    </form>
  </main>;
}
