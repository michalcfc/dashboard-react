
import {
    Flex
} from "./Flexbox.styles"

import { FlexBoxProps } from "./Flexbox.d"

const Flexbox: React.FC<FlexBoxProps> = ({
 children
}) => (
        <Flex>
            {children}
        </Flex>
)

export default Flexbox