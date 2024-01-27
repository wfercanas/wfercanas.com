import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cxckwdonskgsdldtjwlv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y2t3ZG9uc2tnc2RsZHRqd2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4MDYyNDcsImV4cCI6MjAyMTM4MjI0N30.hdNDFsnUgIuVvu-VcKNJLD_JkPIXmyOdCs-DIxJSzE4",
);

export async function getArticles() {
  const { data } = await supabase.from("articles").select();
  console.log(data);
  return data;
}
