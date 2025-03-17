"use server";
import { Episode } from "@/types/episode";
import supabase from "@/utils/supabase";

export async function getEpisodes(size?: number, pageNumber?: number) {
  let episodes;

  if (size && pageNumber !== undefined) {
    episodes = await supabase
      .from("episodes")
      .select("*", { count: "exact" })
      .order("id", { ascending: false })
      .range(pageNumber * size, pageNumber * size + size - 1)
      .returns<Array<Episode>>();
  } else {
    episodes = await supabase
      .from("episodes")
      .select("*")
      .order("id", { ascending: false })
      .returns<Array<Episode>>();
  }

  return {
    episodes: episodes.data,
    hasNextPage: size && pageNumber !== undefined && episodes.count ? episodes.count > (pageNumber + 1) * size : false
  };
}

export async function getEpisode(id: number) {
  const { data: episodes } = await supabase
    .from("episodes")
    .select("*")
    .order("id", { ascending: false })
    .eq("id", id)
    .returns<Array<Episode>>();
  return episodes ? episodes[0] : null;
}
