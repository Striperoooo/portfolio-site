import Typography from "./ui/Typography"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
    return (
        <main id="projects" className="scroll-mt-32">
            <div>
                <Typography
                    variant="mobileH2"
                    className="text-neutral-white"
                >
                    Featured Projects
                </Typography>
            </div>

            {/* E-COMMERCE SECTION */}
            <div className="mt-5">
                <ProjectCard
                    title="Audiophile E-commerce Platform"
                    description="Engineered a high-fidelity e-commerce platform featuring robust global state management for complex cart logic. Ensured application reliability by implementing custom form validation and a comprehensive suite of integration tests."
                    imageSrc="/assets/optimized-ecommerce.gif"
                    imageAlt="A short GIF demonstration of the Audiophile E-commerce Platform"
                    techStack={["React", "TypeScript", "Tailwind", "React Router", "Vitest", "React Testing Library", "Vite"]}
                    demoLink="https://ecommerce-charles.netlify.app/"
                    githubLink="https://github.com/Striperoooo/ecommerce-app?tab=readme-ov-file#audiophile-e-commerce-platform"
                />
            </div>

            {/* SEPARATOR */}
            <div className="w-full h-px bg-neutral-offwhite/20 my-16"></div>

            {/* KANBAN SECTION */}
            <div>
                <ProjectCard
                    title="Kanban Task Management App"
                    description="Developed a fully accessible task management app featuring keyboard-friendly drag-and-drop interactions. Architected a normalized state system to ensure predictable data flow and validated core logic with provider-level unit tests."
                    imageSrc="/assets/optimized-kanban.gif"
                    imageAlt="A short GIF demonstration of the Kanban Task Management App"
                    techStack={["React", "TypeScript", "Tailwind", "Vitest", "React Testing Library", "Vite", "dndkit"]}
                    demoLink="https://kanban-charles.netlify.app/"
                    githubLink="https://github.com/Striperoooo/kanban-task-management-app?tab=readme-ov-file#kanban-task-management-app"
                />
            </div>
        </main>
    )
}
