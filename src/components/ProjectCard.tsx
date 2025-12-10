import Typography from "./ui/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { TechBadge } from "./ui/TechBadge"

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
        <div className="flex flex-col items-center justify-center gap-10">
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-lg border-2 border-neutral-offwhite/30"
            />

            <div>
                <Typography
                    variant="mobileH3"
                    className="text-neutral-white"
                >
                    {title}
                </Typography>

                <div className="mt-4 pt-4 border-t border-neutral-offwhite/20">
                    <Typography
                        variant="mobileH5"
                        className="text-neutral-white"
                    >
                        Tech Stack
                    </Typography>

                    <div className="mt-2 flex flex-wrap gap-3">
                        {techStack.map(tech => (
                            <TechBadge key={tech} name={tech} />
                        ))}
                    </div>
                </div>

                <Typography
                    variant="mobileBodyMD"
                    className="mt-4 text-neutral-offwhite"
                >
                    {description}
                </Typography>

                <div className="mt-8 w-full flex flex-col justify-center gap-4">
                    <Typography
                        variant="mobileH5"
                        className="text-neutral-white pt-4 border-t border-neutral-offwhite/20"
                    >
                        LINKS
                    </Typography>

                    <div className="flex items-center gap-4">
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 
                        p-4 bg-primary text-neutral-black 
                        font-bold text-[0.875rem] leading-none tracking-normal uppercase 
                        rounded-full cursor-pointer hover:bg-primary-hover active:bg-primary-active"
                        >
                            LIVE DEMO
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="text-[0.875rem]"
                            />
                        </a>

                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 
                        p-4 bg-primary text-neutral-black 
                        font-bold text-[0.875rem] leading-none tracking-normal uppercase 
                        rounded-full cursor-pointer hover:bg-primary-hover active:bg-primary-active"
                        >
                            GITHUB
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="text-[0.875rem]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
