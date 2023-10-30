import styles from "./style.module.css";

const Chat = (props) => {
    return  <div className={styles.chat}>
    <div className={styles.chat2}>Чат</div>
    {props.messageData.map((el, i) => {
        return (
            <div className={styles.text} key={i}>
                 {el}
            </div>
        )
    })}
</div>
}

export default Chat