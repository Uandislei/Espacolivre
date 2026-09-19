export const dynamic = "force-dynamic";

import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ListingCard } from "@/components/listing-card";

type Listing={id:string;title:string|null;description:string|null;listing_type:string|null;market_category:string|null;market_subcategories:string[]|null;city:string|null;city_name:string|null;image_url:string|null;image_urls:string[]|null;price_label:string|null;price_per_hour:number|null;price_per_day:number|null;capacity:number|null};

const categories=["Espaços","Mesas e cadeiras","Brinquedos","Tendas e estruturas","Equipamentos"];

export default async function Explorar({searchParams}:{searchParams:Promise<{q?:string;cidade?:string}>}) {
  const params=await searchParams;
  const q=params.q||"";
  const city=params.cidade||"";
  const {data}=await supabase.from("marketplace_listings").select("id,title,description,listing_type,market_category,market_subcategories,city,city_name,image_url,image_urls,price_label,price_per_hour,price_per_day,capacity").order("title");
  const items=(data||[]) as Listing[];
  const filtered=items.filter(item=>{
    const text=[item.title,item.description,item.city,item.city_name,item.market_category,...(item.market_subcategories||[])].filter(Boolean).join(" ").toLowerCase();
    return (!q||text.includes(q.toLowerCase()))&&(!city||[item.city,item.city_name].filter(Boolean).join(" ").toLowerCase().includes(city.toLowerCase()));
  });
  return <main className="page">
    <section className="page-heading"><span className="eyebrow">Catálogo</span><h1>Encontre tudo para organizar seu evento.</h1><p className="muted">Espaços, equipamentos e itens para festa. Negocie direto com quem anuncia.</p></section>
    <form className="filters" action="/explorar"><input name="q" defaultValue={q} placeholder="O que você precisa?"/><input name="cidade" defaultValue={city} placeholder="Onde?"/><select name="categoria" defaultValue=""><option value="">Todas as categorias</option>{categories.map(x=><option key={x}>{x}</option>)}</select><button className="button primary" type="submit">Buscar</button></form>
    <div className="category-row"><Link href="/explorar">Tudo</Link>{categories.map(x=><Link key={x} href={`/explorar?q=${encodeURIComponent(x)}`}>{x}</Link>)}</div>
    {filtered.length===0?<div className="empty">Nenhum anúncio encontrado.</div>:<div className="listing-grid">{filtered.map(item=><ListingCard key={item.id} listing={item}/>)}</div>}
  </main>;
}