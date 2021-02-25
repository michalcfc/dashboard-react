import {
    BrandLogo,
    HeaderWrapper,
    HeaderContent
} from "./Header.styles"

import Menu     from "./components/Menu"
import Search   from "@components/Search"

import {HeaderProps} from "./Header.d"

const Header: React.FC<HeaderProps> = ({
    links,
    setView, 
    toggleTheme,
}) => {
    const options = [
        {
            value: 1,
            label: 'fullWidth'
        },
        {
            value: 2,
            label: 'withAsides'
        },
        {
            value: 3,
            label: 'withLeftAside'
        },
        {
            value: 4,
            label: 'withRightAside'
        }
    ]

    const selectedLayout = (e) => {
        const view = options.filter(option => e.target.value == option.value).pop()
        setView(view.label)
    }

    return (
        <HeaderWrapper>
            <HeaderContent>
            <BrandLogo>Demo dashboard</BrandLogo>
            <Search />
            {/* <Select 
                label="Select templates"
                onChange={(e) => selectedLayout(e)}
                defaultOptions={options}
            /> */}
            <Menu 
                links={[]}
                toggleTheme={toggleTheme}
            />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header