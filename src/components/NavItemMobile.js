import React from "react";

const NavItemMobile = props =>{
    const {href, nameLink} = props;
    return(
        <a className="block mt-1 py-1 px-3 font-semibold rounded text-black  hover:bg-brandingYellow" href={href} >{nameLink}</a>
    )
}
export default NavItemMobile;