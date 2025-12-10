import Typography from "./ui/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"



export default function Header() {
    return (
        <header>
            <div className="py-6 flex justify-between items-center">
                <Typography
                    variant="mobileHeaderH1" className="text-neutral-offwhite"
                >
                    CHARLES D. VILLANUEVA
                </Typography>

                <FontAwesomeIcon
                    icon={faBars}
                    className="text-neutral-offwhite text-[25px] cursor-pointer"
                />
            </div>
        </header>

    )
}