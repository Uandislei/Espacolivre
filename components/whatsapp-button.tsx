"use client";

import { supabase } from "@/lib/supabase";

function cleanPhone(value: string) {
  return value.replace(/\D/g, "");
}

export function WhatsAppButton({ listingId, phone, title }: { listingId: string; phone: string; title: string }) {
  const handleClick = async () => {
    await supabase.from("listing_events").insert({
      listing_id: listingId,
      event_type: "whatsapp_click",
      session_id: typeof crypto !== "undefined" ? crypto.randomUUID() : undefined,
    });

    const message = encodeURIComponent(
      `Olá! Vi o anúncio "${title}" no Espaço Livre e gostaria de saber mais detalhes.`
    );
    window.open(`https://wa.me/${cleanPhone(phone)}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return <button className="button whatsapp" onClick={handleClick}>Chamar no WhatsApp</button>;
}
