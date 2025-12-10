import Typography from "./ui/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
    return (
        <section className="mt-10 mb-16">
            <div>
                <Typography
                    variant="mobileH1"
                    className="text-neutral-white"
                >
                    hi, i am <br />
                    charles deiniel villanueva.
                </Typography>

                <Typography
                    variant="mobileBodyMD"
                    className="mt-3 text-neutral-offwhite"
                >
                    A Sydney based front-end developer passionate about building accessible and user friendly websites.
                </Typography>

                <div className="mt-8 flex items-center gap-4">
                    <a
                        href="/assets/CharlesDeiniel_Villanueva_Resume.pdf" // Path to the PDF in your public folder
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
                        href="https://google.com"
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
                        href="https://google.com"
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

                <div className="mt-16 inline-flex items-center justify-center w-full">
                    <img
                        src="/assets/my-hero-image.jpg"
                        alt="Studio-style photo of Charles Deiniel Villanueva in a graduation toga"
                        className="w-auto h-[400px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}