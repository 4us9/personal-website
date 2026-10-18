import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  repo?: string;      // optional — omit for "Launching soon"
  tags?: string[];
};

export default function ProjectCard({ image, title, description, repo, tags }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/10">
      {/* thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-white/70">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-sky-500/15 px-3 py-1 text-xs text-sky-300">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* link OR "launching soon" */}
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-sky-400"
          >
            <AiFillGithub className="text-lg" />
            View on GitHub
          </a>
        ) : (
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-sky-300/80">
            🚀 Launching soon
          </span>
        )}
      </div>
    </div>
  );
}