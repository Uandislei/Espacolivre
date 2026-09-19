"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Listing={id:string;title:string|null;city:string|null;listing_type:string|null;market_category:string|null;approval_status:string|null;is_active:boolean|null};

export default function AdminAnuncios(){
  const [items,setItems]=useState<Listing[]>([]);
  const [message,setMessage]=useState("");
  const [loading,setLoading]=useState(true);
  const load=async()=>{setLoading(true);const{data,error}=await supabase.from("spaces").select("id,title,city,listing_type,market_category,approval_status,is_active").in("approval_status",["pending","approved","blocked"]).order("created_at",{ascending:false});if(error)setMessage(error.message);else setItems((data||[]) as Listing[]);setLoading(false)};
  useEffect(()=>{void load()},[]);
  const update=async(id:string,status:"approved"|"blocked")=>{setMessage("");const{error}=await supabase.from("spaces").update({approval_status:status,is_active:status==="approved"}).eq("id",id);if(error)setMessage(error.message);else await load()};
  return <main className="page"><span className="eyebrow">Administração</span><h1>Moderação de anúncios</h1><p className="muted">A autorização é aplicada pelo RLS do Supabase. Esta tela não concede acesso por conta própria.</p>{message?<p className="notice">{message}</p>:null}{loading?<div className="empty">Carregando...</div>:items.length===0?<div className="empty">Nenhum anúncio encontrado ou usuário sem permissão.</div>:<div className="dashboard-list">{items.map(x=><article key={x.id}><div><strong>{x.title||"Sem título"}</strong><p className="muted">{[x.market_category,x.listing_type,x.city,x.approval_status].filter(Boolean).join(" · ")}</p></div><div className="quick-links">{x.approval_status!=="approved"?<button className="button primary" onClick={()=>update(x.id,"approved")}>Publicar</button>:null}{x.approval_status!=="blocked"?<button className="button secondary" onClick={()=>update(x.id,"blocked")}>Bloquear</button>:null}</div></article>)}</div>}</main>;
}