import supabase from "@/utils/supabase";

export async function getEpisodes(limit?: number) {
  const { data: episodes } = await supabase.from("episodes").select("*").order("id", { ascending: false }).limit(limit as number);
  return episodes;
}
