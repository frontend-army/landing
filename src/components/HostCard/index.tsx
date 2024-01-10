import { Host } from "@/types/host";
import Image from "next/image";

interface Props {
  host: Host
};

export const HostCard: React.FC<Props> = ({host}) => {
  return (
    <div className="host">
      <Image className="host-avatar" src={host.avatarUrl} alt={`${host.name}'s profile picture`} />
      <div className="host-socials">
        {
          host.socials.map(social =>(
            <a key={social.url} className="host-social" href={social.url}>
              <i className={`fa-brands fa-${social.name.toLowerCase()} social-icon`} />
            </a>
          ))
        }
      </div>
      <p className="host-name">{host.name}</p>
      <p className="host-description">{host.description}</p>
    </div>
  );
} 
