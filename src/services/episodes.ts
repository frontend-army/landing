import supabase from "@/utils/supabase";

export async function getEpisodes(limit?: number) {
  const { data: episodes } = await supabase.from("episodes").select("*").order("id", { ascending: false }).limit(limit as number);
  return episodes;
}

export async function getEpisode(id: number) {
  const { data: episodes } = await supabase.from("episodes").select("*").order("id", { ascending: false }).eq("id", id);
  return episodes ? episodes[0]: null;
}
