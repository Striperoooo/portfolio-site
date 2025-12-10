import Typography from "./ui/Typography"
import { TechBadge } from "./ui/TechBadge"

export default function AboutMeSection() {
    return (
        <section id="about" className="mt-16 mb-24 md:mt-32 md:mb-40 scroll-mt-32">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10">
                <div className="md:col-span-1">
                    <Typography
                        variant="mobileH2"
                        className="text-neutral-white md:text-5xl md:sticky md:top-32"
                    >
                        ABOUT ME
                    </Typography>
                </div>

                <div className="md:col-span-1">
                    <Typography
                        variant="mobileBodyMD"
                        className="mt-4 md:mt-0 text-neutral-offwhite md:text-lg"
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
            </div>
        </section>
    )
}