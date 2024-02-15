import { socials } from '@/utils/socials';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Links() {
  return (
    <main className="flex flex-col items-center w-full flex-1 px-4 pt-4 text-center bg-black text-white">
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl p-4 w-full gap-4 flex items-center justify-center border border-gray-700 mb-4 max-w-xl"
        >
          <FontAwesomeIcon icon={social.icon} />
          {social.name}
        </a>
      ))}
    </main>
  );
}
