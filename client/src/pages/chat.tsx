import { useState } from "react";

const Chat = () => {
    const [transcript,setTranscript] = useState();
    
    return ( 
        <div className="chat">
            <h1>Chat</h1>
            <button>Speak</button>
            <p>You said:</p>
            <h3>{transcript}</h3>
        </div>
     );
}
 
export default Chat;