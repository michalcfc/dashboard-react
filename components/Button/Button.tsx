
import {
    ButtonWrapper
} from "./Button.styles"

import { ButtonProps } from "./Button.d";

const Button: React.FC<ButtonProps> = ({ 
    name, 
    color,
    bg,
    onClick }) => {
    return (
        <ButtonWrapper
            bg={bg}
            color={color}
            onClick={onClick} 
        >
            {name}
        </ButtonWrapper>
    )
}

export default Button