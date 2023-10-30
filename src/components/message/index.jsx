import { useState } from "react";
import { useLocaleStorage } from "../hook/useLocalStorage";
import Chat from "./chat";
import Coment from "./coment";
import styles from "./style.module.css";

const Message = () => {
const [messageData, setMessageData] = useLocaleStorage("CHAT", []);
const [inputValue, setInputValue] = useState("")
const [user] = useLocaleStorage("USER");


const changeChat = () => {
    setMessageData([...messageData, `${user ? user : "Аноним"}: ${inputValue}`]);
    setInputValue("");
};
    return (
        <div className={styles.container}>
        <Chat messageData={messageData} />
                <Coment
                setInputValue={setInputValue}
                inputValue={inputValue}
                changeChat={changeChat}
                setMessageData={setMessageData}
                 />
            
            
        </div>
    )
}

export default Message