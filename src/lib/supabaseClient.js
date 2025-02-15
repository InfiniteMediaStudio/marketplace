import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  'https://apbbljyxlbccrcyipgrl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwYmJsanl4bGJjY3JjeWlwZ3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NTIwOTYsImV4cCI6MjA1NTAyODA5Nn0.CpFddtvFJJvIGkmsJiWhwbPnYOBFTAHIbib2ZfCe0dE',
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: true,
    },
  }
);
