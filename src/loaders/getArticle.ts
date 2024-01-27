import { LoaderFunctionArgs } from "react-router-dom";
import { supabase } from "./supabase";

async function getArticle(args: LoaderFunctionArgs) {
  const { params } = args;
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", params.slug);
  return data;
}

export { getArticle };
