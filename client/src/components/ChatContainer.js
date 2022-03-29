import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import {useState} from "react";

const ChatContainer = ({user}) => {

    const [clickUser,setClickedUser] = useState(null)
    return (
        <div className='chat-container'>
            <ChatHeader user={user}/>
            <div>
                <button className='option' onClick={() => setClickedUser(null)}>Matches</button>
                <button className='option' disabled={!clickUser}>Chat</button>
            </div>
            {!clickUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}

            {clickUser && <ChatDisplay user={user} clickedUser={clickUser}/>}
        </div>
    )
}

export default ChatContainer