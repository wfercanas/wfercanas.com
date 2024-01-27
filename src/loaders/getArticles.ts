import { supabase } from "./supabase";

async function getArticles() {
  const { data } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });
  console.log(data);
  return data;
}

export { getArticles };
