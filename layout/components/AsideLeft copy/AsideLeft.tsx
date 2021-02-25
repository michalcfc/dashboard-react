import Link from "next/link"

import {
    AsideWrapper,
    AsideContent,
    AsideItems,
    AsideItem,
    StyledLink
} from "./AsideLeft.styles"

import { AsideLeftProps } from "./AsideLeft"

const AsideLeft: React.FC<AsideLeftProps> = ({
    isDisplay,
    links
}) => {
    return (
        <>
        {isDisplay && 
        <AsideWrapper>
            {links.map((link, id) => {
                return <AsideItem key={id}>
                    <Link href={link.path}>
                        <StyledLink>{link.name}</StyledLink>
                    </Link>
                </AsideItem> 
            })}
        </AsideWrapper>
        }
        </>
    )
}

export default AsideLeft