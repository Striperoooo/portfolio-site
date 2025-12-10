import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faRoute, faFlask, faVial, faCode, faGripVertical } from "@fortawesome/free-solid-svg-icons"
import { faReact, faCss3 } from "@fortawesome/free-brands-svg-icons"

const techConfig: Record<string, { icon: any, color: string, bg: string }> = {
    React: { icon: faReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
    TypeScript: { icon: faCode, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
    Tailwind: { icon: faCss3, color: "text-[#38B2AC]", bg: "bg-[#38B2AC]/10" },
    "React Router": { icon: faRoute, color: "text-[#CA4245]", bg: "bg-[#CA4245]/10" },
    Vitest: { icon: faFlask, color: "text-[#FCC72B]", bg: "bg-[#FCC72B]/10" },
    "React Testing Library": { icon: faVial, color: "text-[#FF4400]", bg: "bg-[#FF4400]/10" },
    Vite: { icon: faBolt, color: "text-[#646CFF]", bg: "bg-[#646CFF]/10" },
    dndkit: { icon: faGripVertical, color: "text-[#C7C7C7]", bg: "bg-[#C7C7C7]/10" },
}

export const TechBadge = ({ name }: { name: string }) => {
    const config = techConfig[name] || { icon: faCode, color: "text-neutral-offwhite", bg: "bg-neutral-offwhite/10" }
    return (
        <span className={`text-xs ${config.bg} ${config.color} px-3 py-1.5 rounded-md flex items-center gap-2 font-medium`}>
            <FontAwesomeIcon icon={config.icon} />
            {name}
        </span>
    )
}
