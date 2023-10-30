import { useState } from "react";
import { useLocaleStorage } from "../hook/useLocalStorage";
import styles from "./style.module.css";

const Home = () => {
    const [user, setUser] = useLocaleStorage("USER");
    const [inputValue, setInputValue] = useState("");


    return (
        <div className={styles.container}>
            {user && (
                <div>
                    <div className={styles.hi}>Приветствую вас, уважаемый {user}</div>
                    <button className={styles.button2} onClick={() => setUser("") }>Выйти</button>
                </div>
            )}

            {!user && (
                <div className={styles.container}>
                    <label className={styles.name} >Введите ваше имя</label>
                    <input maxLength="35" className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                    <button className={styles.button} onClick={() => setUser(inputValue)}>Сохранить</button>
                </div>
            )}
        </div>
    )
}

export default Home