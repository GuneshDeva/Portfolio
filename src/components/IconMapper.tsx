import {
  Server,
  Coffee,
  Leaf,
  Database,
  Layers,
  Boxes,
  Webhook,
  MessageSquare,
  Radar,
  Network,
  Layout,
  Triangle,
  Braces,
  Code,
  Palette,
  HardDrive,
  GitBranch,
  Github,
  Package,
  Circle,
  Container,
  Workflow,
  Cloud,
  FileCode,
  Globe,
  Bug,
  Film,
  Clapperboard,
  Aperture,
  Video,
  PenTool,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Coffee,
  Leaf,
  Database,
  Layers,
  Boxes,
  Webhook,
  MessageSquare,
  Radar,
  Network,
  Layout,
  Triangle,
  Braces,
  Code,
  Palette,
  HardDrive,
  GitBranch,
  Github,
  Package,
  Circle,
  Container,
  Workflow,
  Cloud,
  FileCode,
  Globe,
  Bug,
  Film,
  Clapperboard,
  Aperture,
  Video,
  PenTool,
};

const brandIconMap: Record<string, string> = {
  Coffee: 'https://cdn.simpleicons.org/java',
  Leaf: 'https://cdn.simpleicons.org/spring',
  Database: 'https://cdn.simpleicons.org/mysql',
  Triangle: 'https://cdn.simpleicons.org/angular',
  Braces: 'https://cdn.simpleicons.org/javascript',
  Code: 'https://cdn.simpleicons.org/html5',
  Palette: 'https://cdn.simpleicons.org/css3',
  GitBranch: 'https://cdn.simpleicons.org/git',
  Github: 'https://cdn.simpleicons.org/github',
  Package: 'https://cdn.simpleicons.org/apachemaven',
  Container: 'https://cdn.simpleicons.org/docker',
  Workflow: 'https://cdn.simpleicons.org/jenkins',
  Cloud: 'https://cdn.simpleicons.org/amazonaws',
  FileCode: 'https://cdn.simpleicons.org/python',
  Globe: 'https://cdn.simpleicons.org/django',
  Bug: 'https://cdn.simpleicons.org/selenium',
};

export function Icon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const brandIcon = brandIconMap[name];
  if (brandIcon) {
    return (
      <img
        src={brandIcon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={className}
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  const Cmp = iconMap[name] ?? Circle;
  return <Cmp className={className} size={size} />;
}
