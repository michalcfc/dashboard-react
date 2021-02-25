import { useState } from "react"

import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import { MenuProps } from "./Menu.d"

import Bell from "@components/Icons/Bell"
import Moon from "@components/Icons/Moon"

import Avatar from "@components/Avatar"


const Menu: React.FC<MenuProps> = ({
    links,
    toggleTheme
}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <MenuItem>     
                <Bell />
            </MenuItem>
            <MenuItem>
                <Moon 
                    onClick={() => toggleTheme()} 
                />
            </MenuItem>
            <MenuItem>
                <Avatar 
                    img="/img/avatar-4.jpg" 
                /> Hi, Stranger
            </MenuItem>
        </MenuWrapper>
    )
}

export default Menu