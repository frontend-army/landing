import { EpisodeCard } from "@/components/EpisodeCard";
import { Episode } from "@/types/episode";

interface Props {
};

export const EpisodesSection: React.FC<Props> = () => {
  const mockEpisodes: Episode[] = [
    {
      id: "1",
      title: "Episode 1",
      description: "This is the description for Episode 1.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
    {
      id: "2",
      title: "Episode 2",
      description: "This is the description for Episode 2.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
    {
      id: "3",
      title: "Episode 3",
      description: "This is the description for Episode 3.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
    {
      id: "4",
      title: "Episode 4",
      description: "This is the description for Episode 4.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
    {
      id: "5",
      title: "Episode 5",
      description: "This is the description for Episode 5.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
    {
      id: "6",
      title: "Episode 6",
      description: "This is the description for Episode 6.",
      sources: [
        { name: "YouTube", url: "https://youtube.com/watch?v=episode1" },
        { name: "Spotify", url: "https://soundcloud.com/episode1" },
      ],
    },
  ];
  return (
    <div className="flex gap-2">
      {
        mockEpisodes.map((episode) => (<EpisodeCard key={episode.id} episode={episode} />))
      }
    </div>
  );
} 
