import { useState } from "react"

import Main         from "./components/Main"
import Header       from "./components/Header"
import Footer       from "./components/Footer"
import Wrapper      from "./components/Wrapper"
import AsideLeft    from "./components/AsideLeft"
import AsideRight   from "./components/AsideRight"

import routes from "./../Routes/routes"

const Layout = ({
    children, 
    toggleTheme
}) => {
    const [view, setView] = useState<String>(null)
    const showLeftAside = view == "withLeftAside"
    const showRightAside = view == "withRightAside"


    const menuLinks = [
        {   
            icon: '',
            path: 'blog',
            name: 'Blog'
        },
        {
            icon: '',
            path: '/form',
            name: 'Form'
        },
        {
            icon: '',
            path: '/form',
            name: 'Reviews'
        }
    ]
    return (
        <Wrapper view={"withLeftAside"}>
            <Header 
                setView={setView} 
                toggleTheme={toggleTheme}
                
                />
            <AsideLeft 
                links={routes}
                isDisplay={"withLeftAside"} 
            />
            <Main>
                {children}
            </Main>
            <AsideRight
                isFixed
                links={menuLinks}
                isDisplay={showRightAside} 
            />
            <Footer/>
        </Wrapper>
    )
}

export default Layout