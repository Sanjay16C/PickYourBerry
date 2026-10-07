import { useState } from "react";

const Chat = () => {
    const [transcript,setTranscript] = useState();
    const [isListening,setIsListening] = useState(false);
   
    const voiceAi = async() =>{
        try {
            
        } catch (error) {
            console.error(error);
        }
    }
    return ( 
        <div className="chat">
            <h1>Chat</h1>
            {/* {isListening && } */}
            <button onClick={()=>{
                voiceAi();
                setIsListening(true);
            }}>Speak</button>
            <button onClick={()=>setIsListening(false)}>Stop</button>
            <p>You said:</p>
            <h3>{transcript}</h3>
        </div>
     );
}
 
export default Chat;