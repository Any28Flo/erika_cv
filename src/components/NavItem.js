import React from "react"

const NavItem = props =>{
    const { href, nameLink } = props
    return(
        <li className="mr-3">
            <a className="inline-block py-2 px-4 text-black  no-underline rounded hover:bg-brandingYellow" href={href}>{nameLink}</a>
        </li>

    )
};

export default  NavItem;