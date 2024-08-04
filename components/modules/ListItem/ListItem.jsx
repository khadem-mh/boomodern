import Link from "next/link"

const ListItem = ({ route = '#', text = "text", children }) => {
    return (
        <li className="navbar__li">
            <Link href={route}>
                <div className="navbar__item-icon">
                    {children}
                </div>
                {text}
            </Link>
        </li>
    )
}

export default ListItem