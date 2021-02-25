import { MessageInputProps } from "./MessageInput.d"

import Input from 'components/Input';
import Button from 'components/Button';

import { 
        MessageInputStyle,
        MessageInputContainer,
} from "./MessageInput.styles"

const MessageInput: React.FC<MessageInputProps> = ({
        writeText, 
        addMessage,
}) => (
<MessageInputContainer>
        <MessageInputStyle 
                placeholder="Napisz wiadomość" 
                onChange={writeText}
        />
        <Button 
                // color="success" 
                name="link" 
                onClick={addMessage} 
        />
</MessageInputContainer>

)

export default MessageInput;