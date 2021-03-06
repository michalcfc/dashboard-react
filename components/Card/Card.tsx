
import {
    CardContainer,
    CardFigure,
    CardTitle,
    CardContent,
    CardFooter,
    CardImg
} from "./Card.styles"

import { CardProps } from './Card.d';

const Card: React.FC<CardProps> = ({ 
    img, 
    key,
    children,
    title,
    columnSpan,
    hoverEffect,
    pointer,
    mb,
    mt
}) => {
    return (
        <CardContainer
            key={key}
            mb={mb}
            mt={mt}
            pointer={pointer}
            columnSpan={columnSpan}
            hoverEffect={hoverEffect}
        >
            {img && <CardFigure>
                <CardImg 
                    src={img} 
                />
            </CardFigure>}
            <CardContent>
                <CardTitle>
                    {title}
                </CardTitle>
                {children}
            </CardContent>
        </CardContainer>
    )
}

export default Card