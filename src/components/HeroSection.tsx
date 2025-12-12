import Typography from "./ui/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    return (
        <section className="mt-10 mb-16 md:mt-20 md:mb-32">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="md:flex-1 md:order-1">
                    <Typography
                        variant="mobileH1"
                        className="text-neutral-white md:text-[5rem] md:leading-tight"
                    >
                        hi, i am <br />
                        charles deiniel villanueva.
                    </Typography>

                    <Typography
                        variant="mobileBodyMD"
                        className="mt-3 text-neutral-offwhite md:text-lg md:max-w-lg"
                    >
                        Front-End Developer based in the Philippines, dedicated to building accessible and visually polished web experiences.
                    </Typography>

                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="/assets/CharlesDeinielVillanueva_Resume_2025" // Path to the PDF in your public folder
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 
                        p-4 bg-primary text-neutral-black 
                        font-bold text-[0.875rem] leading-none tracking-normal uppercase 
                        rounded-full cursor-pointer hover:bg-primary-hover active:bg-primary-active"
                        >
                            MY RESUME
                            <FontAwesomeIcon
                                icon={faFile}
                                className="text-[0.875rem]"
                            />
                        </a>

                        <a
                            href="www.linkedin.com/in/charlesdeiniel-villanueva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-12 h-12 bg-misc-fill rounded-full cursor-pointer
                        hover:bg-misc-fill-hover active:bg-misc-active"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                className="text-primary text-lg group-hover:text-primary/75 group-active:text-primary/45"
                            />
                        </a>

                        <a
                            href="https://github.com/Striperoooo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center w-12 h-12 bg-misc-fill rounded-full cursor-pointer
                        hover:bg-misc-fill-hover active:bg-misc-active"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="mr-[1px] text-primary text-xl group-hover:text-primary/75 group-active:text-primary/45"
                            />
                        </a>
                    </div>
                </div>

                <div className="mt-16 md:mt-0 md:flex-1 md:order-2 flex justify-center md:justify-end">
                    <img
                        src="/assets/my-hero-image.jpg"
                        alt="Studio-style photo of Charles Deiniel Villanueva in a graduation toga"
                        className="w-auto h-[400px] rounded-lg md:h-[500px] object-cover"
                    />
                </div>
            </div>
        </section>
    )
}