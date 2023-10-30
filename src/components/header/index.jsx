import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
    return <div className={styles.container}>
        <nav className={styles.navbar}>
            <Link className={styles.link} to="/">Домашняя страница</Link>
            <Link className={styles.link} to="/message">Чат</Link>
            <Link className={styles.link} to="/test">Подгрузка данных</Link>
            <Link className={styles.link} to="/quiz">Тест</Link>
            
        </nav>
    </div>
}

export default Header