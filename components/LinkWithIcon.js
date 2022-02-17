import Link from "next/link"

function LinkWithIcon({ text, icon, href = "#" }) {
    return (
        <Link href={href}>
            <a className="flex items-center gap-3 _link" >
                {text}
                {icon}
            </a>
        </Link>
    )
}

export default LinkWithIcon
