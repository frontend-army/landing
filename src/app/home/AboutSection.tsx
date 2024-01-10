import { HostCard } from "@/components/HostCard";
import { Host } from "@/types/host";

interface Props {
};

export const AboutSection: React.FC<Props> = () => {
  const mockHosts: Host[] = [
    {
      name: "Host1",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host1.",
    },
    {
      name: "Host2",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host2.",
    },
    {
      name: "Host3",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host3.",
    },
    {
      name: "Host4",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host4.",
    },
    {
      name: "Host5",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host5.",
    },
    {
      name: "Host6",
      avatarUrl: "https://placehold.it/220x200",
      socials: [
        { name: "Github", url: "https://twitter.com/host1" },
        { name: "Twitter", url: "https://instagram.com/host1" },
        { name: "LinkedIn", url: "https://instagram.com/host1" },
      ],
      description: "This is the description for Host6.",
    },
  ];

  return (
    <div className="flex gap-2">
      {mockHosts.map((host) => (<HostCard key={host.name} host={host} />))
      }
    </div>
  );
} 
