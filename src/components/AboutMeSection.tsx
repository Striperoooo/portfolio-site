import Typography from "./ui/Typography"
import { TechBadge } from "./ui/TechBadge"

export default function AboutMeSection() {
    return (
        <section id="about" className="mt-16 mb-24">
            <div>
                <Typography
                    variant="mobileH2"
                    className="text-neutral-white"
                >
                    ABOUT ME
                </Typography>

                <Typography
                    variant="mobileBodyMD"
                    className="mt-4 text-neutral-offwhite"
                >
                    I am a Front-End Developer eager to contribute to modern web teams. I focus on building accessible, high-fidelity responsive interfaces and writing clean, maintainable code.
                </Typography>

                <div className="mt-6">
                    <Typography
                        variant="mobileH5"
                        className="text-neutral-white mb-3"
                    >
                        My Toolkit
                    </Typography>
                    <div className="flex flex-wrap gap-3">
                        {["React", "TypeScript", "Tailwind", "Git", "Figma", "Vitest"].map(tech => (
                            <TechBadge key={tech} name={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}