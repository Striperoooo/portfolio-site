import Typography from "./ui/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer id="contact" className="mt-24 mb-10 md:mt-40 md:mb-20 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
                <div className="md:w-1/2">
                    <Typography
                        variant="mobileH2"
                        className="text-neutral-white md:text-5xl"
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        variant="mobileBodyMD"
                        className="text-neutral-offwhite mt-6 md:text-lg md:max-w-md"
                    >
                        Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                    </Typography>
                </div>

                <div className="md:w-1/2 flex flex-col md:items-end gap-6">
                    <a
                        href="mailto:charlesdeiniel@gmail.com"
                        className="flex items-center gap-3 text-neutral-white hover:text-primary transition-colors w-fit"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                        <Typography variant="mobileH3" className="font-bold text-lg sm:text-2xl">
                            charlesdeiniel@gmail.com
                        </Typography>
                    </a>

                    <div className="flex items-center gap-4 mt-2">
                        <a
                            href="/assets/CharlesDeiniel_Villanueva_Resume.pdf"
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
                            href="https://linkedin.com"
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
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-offwhite/20 text-center">
                <Typography variant="mobileBodyMD" className="text-neutral-offwhite text-sm">
                    &copy; 2025 Charles Deiniel Villanueva
                </Typography>
            </div>
        </footer>
    )
}