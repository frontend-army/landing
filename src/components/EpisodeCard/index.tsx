import { Episode } from "@/types/episode";

interface Props {
  episode: Episode
};

export const EpisodeCard: React.FC<Props> = ({episode}) => {
  return (
    <div className="episode">
      <h4 className="episode-number">Capitulo {episode.id}:</h4>
      <h3 className="episode-title">{episode.title}</h3>
      <p className="episode-description">{episode.description}</p>
      <div className="episode-links">
        {
          episode.sources.map((source) => (
            <a key={source.url} className="episode-link spotify" href={source.url}>
              <i className={`"fa-brands fa-${source.name.toLowerCase()}`}></i>
              <span className="episode-source-name">{source.name}</span>
            </a>
          ))
        }
      </div>
    </div>
  );
} 
