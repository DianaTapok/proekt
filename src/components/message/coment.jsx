import styles from "./style.module.css";

const Coment = (props) => {


    return (
        <div className={styles.wrapper}>
            <label className={styles.com}>Напиши коментарий</label>
                <input maxLength="35"
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)} />
                <button className={styles.button1} onClick={props.changeChat}>Отправить</button>
            <button className={styles.button2} onClick={() => props.setMessageData([])}>Удалить</button>
        </div>
    )
}

export default Coment