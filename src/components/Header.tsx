import { useState } from "react"
import Typography from "./ui/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-primary-fill/95 backdrop-blur-sm border-b border-neutral-offwhite/10">
            <div className="py-6 flex justify-between items-center px-4">
                <Typography
                    variant="mobileHeaderH1" className="text-neutral-offwhite"
                >
                    CHARLES D. VILLANUEVA
                </Typography>

                <button onClick={toggleMenu} aria-label="Toggle menu" className="z-50 relative">
                    <FontAwesomeIcon
                        icon={isMenuOpen ? faXmark : faBars}
                        className="text-neutral-offwhite text-[25px] cursor-pointer transition-all duration-300"
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay - Slide from Right */}
            <div
                className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-misc-fill shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-start gap-8 pt-24 pl-8">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-neutral-offwhite hover:text-primary transition-colors text-left"
                    >
                        <Typography variant="mobileH3">Projects</Typography>
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-neutral-offwhite hover:text-primary transition-colors text-left"
                    >
                        <Typography variant="mobileH3">About</Typography>
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-neutral-offwhite hover:text-primary transition-colors text-left"
                    >
                        <Typography variant="mobileH3">Contact</Typography>
                    </button>
                </nav>
            </div>

            {/* Backdrop for closing menu when clicking outside */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    )
}