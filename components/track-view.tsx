"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function TrackView({ listingId }: { listingId: string }) {
  useEffect(() => {
    void supabase.from("listing_events").insert({
      listing_id: listingId,
      event_type: "view",
      session_id: typeof crypto !== "undefined" ? crypto.randomUUID() : undefined,
    });
  }, [listingId]);

  return null;
}
