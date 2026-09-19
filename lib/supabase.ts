import { createClient } from "@supabase/supabase-js";

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://pjrtkswtpjmswojimkco.supabase.co";

const key =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_oOB61qt3OYE-g4RkoPi7lQ_6a2QtZGs";

export const supabase = createClient(url, key);
