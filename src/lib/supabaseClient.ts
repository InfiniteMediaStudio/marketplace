import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_KEY, {
  auth: {
    flowType: "pkce",
    autoRefreshToken: false,
    detectSessionInUrl: false,
    persistSession: true,
  },
}
);