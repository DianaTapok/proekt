import { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";

const TestApi = () => {
const [teamData, setTeamData] = useState([]);
const [isLoad, setIsLoad] = useState(true)

useEffect (() => {
    const url = "https://free-nba.p.rapidapi.com/teams?page=0"
    const options = {
        method : 'GET',
        headers: {
            'X-RapidAPI-Key': 'af088f0fc0mshf4b591cebe3f782p15491ejsn9fd122d7111b',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        },
    };
    fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
        setTeamData(res.data);
        setIsLoad(false)
      });    
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.text}>Команды</div>
            <div className={styles.api} >
                {isLoad && <div>Загрузка данных...</div>}
                {teamData.map((el, i) => {
                    return (
                        <div key={el.id}>
                            {i + 1 }. {el.abbreviation} {el.city}
                           <img
                           src="https://agrox.by/files/images/promishlinie_pilisosi/trash-bin-symbol_318-10194.jpg"
                           style={{width: "15px", height: "15px"}}
                        onClick={() => {
                            setTeamData(
                                teamData.filter(
                                    (filterElement) => el.id !== filterElement.id
                                )
                            )
                        }}
                           />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TestApi