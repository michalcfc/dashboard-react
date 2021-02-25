import { useState } from "react"

import {
    AsideWrapper,
    AsideContent,
    AsideItems,
    AsideItem,
    AsideExit,
} from "./AsideRight.styles"

import Cross from "../../../components/Icons/Cross"

import Button from "@components/Button"


import { 
    AsideRightProps
 } from "./AsideRight.d"

const AsideRight:React.FC<AsideRightProps> = ({
    isFixed,
    isDisplay,
    links
}) => {
    const [isOpen, setShowAside] = useState(false) 
    return (
        <>
        {isDisplay && isOpen && 
        <AsideWrapper isFixed={isFixed}>
            <AsideContent>
            <AsideExit
                onClick={() => setShowAside(!isOpen)}
            ><Cross />
            </AsideExit>
            <AsideItems>
                {links.map((link, id) => {
                    return <AsideItem key={id}>{link.name}</AsideItem> 
                })}
            </AsideItems>
            </AsideContent>
        </AsideWrapper>
        }
        </>
    )
}

export default AsideRight