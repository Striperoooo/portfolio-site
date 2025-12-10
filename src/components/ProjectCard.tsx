import Typography from "./ui/Typography"
import { TechBadge } from "./ui/TechBadge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    techStack: string[]
    demoLink: string
    githubLink: string
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    imageAlt,
    techStack,
    demoLink,
    githubLink
}: ProjectCardProps) {
    return (
        <article className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:items-center">
            {/* Image Section */}
            <div className="w-full h-auto rounded-lg overflow-hidden border border-neutral-offwhite/10 md:order-1">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="mt-6 md:mt-0 md:order-2">
                <Typography variant="mobileH3" className="text-neutral-white md:text-3xl">
                    {title}
                </Typography>

                <Typography variant="mobileBodyMD" className="mt-4 text-neutral-offwhite md:text-lg">
                    {description}
                </Typography>

                <div className="mt-6 flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-bold uppercase tracking-wide text-sm"
                    >
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-offwhite hover:text-white transition-colors font-bold uppercase tracking-wide text-sm"
                    >
                        View Code
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </article>
    )
}
