import supabase from "@/utils/supabase";

export async function getEpisodes() {
  const { data: episodes } = await supabase.from("episodes").select("*");
  return episodes;
}