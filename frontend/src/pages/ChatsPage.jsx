// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
// require('dotenv').config();
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    // const chatProps = useMultiChatLogic(
    //     import.meta.env.VITE_PROJECT_ID, 
    //     props.user.username, 
    //     props.user.secret);
    console.log('import.meta.env.VITE_PROJECT_ID:',import.meta.env.VITE_PROJECT_ID)
    return (
        <div style={{ height: '100vh', }}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} /> */}
            <PrettyChatWindow
                projectId={import.meta.env.VITE_PROJECT_ID}
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;