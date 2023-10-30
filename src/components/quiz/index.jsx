import { useState } from "react";
import { useLocaleStorage } from "../hook/useLocalStorage";
import styles from "./style.module.css";
const Quiz = () => {
   const questions = [
    {
        questionText: 'Какое полное имя у Гарри?',
        answerOptions: [
            { answerText: 'Гарри Брайан Поттер', isCorrect: false},
            { answerText: 'Гарри Джеймс Поттер', isCorrect: true},
            { answerText: 'Гарри Персиваль Поттер', isCorrect: false},
            { answerText: 'Гарри Джеймс Уизли', isCorrect: false},
        ],
    },
    {
        questionText: 'Как зовут родителей Гарри?',
        answerOptions: [
            { answerText: 'Лили и Джеймс', isCorrect: true},
            { answerText: 'Молли и Артур', isCorrect: false},
            { answerText: 'Белатрисса и Альбус', isCorrect: false},
            { answerText: 'Эмма и Уолтер', isCorrect: false},
        ],
    },
    {
        questionText: 'Как Гарри Поттер получил шрам?',
        answerOptions: [
            { answerText: 'Он подрался', isCorrect: false},
            { answerText: 'Он попал в аварию', isCorrect: false},
            { answerText: 'Тёмный Лорд попытался убить его', isCorrect: true},
            { answerText: 'Его били родители', isCorrect: false},
        ],
    },
    {
        questionText: 'Кто такой Бродяга?',
        answerOptions: [
            { answerText: 'Люпин', isCorrect: false},
            { answerText: 'Джеймс', isCorrect: false},
            { answerText: 'Питер', isCorrect: false},
            { answerText: 'Сириус', isCorrect: true},
        ],
    },
   ];
   const [currentQues, setCurrentQues] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [score, setScore] = useState(0)
   const onClickButton = (isCorrect) => {
    if(isCorrect === true) {
        setScore(score + 1)
    }

    const nextQues = currentQues + 1;
    if(nextQues < questions.length){
        setCurrentQues(nextQues);
    } else {
        setShowScore(true)
    }
   
   };
   const resetClick = () => {
    setCurrentQues(0)
    setShowScore(false);
    setScore(0)
   }

   return (
    <div className={styles.component}>
        
        {showScore ? (
            <div className={styles.res} >Вы ответили верно на {score} вопросов  из {questions.length}</div> 
            ) : (
                <div>
                     <div>
                         <div className={styles.ques}>
                            <h2>Узнайте насколько хорошо вы знаете Гарри Поттера</h2>
                             <span>Вопрос {currentQues + 1}</span>/{questions.length}
                        </div>
                         <div className={styles.text}>{questions[currentQues].questionText}</div>
                    </div>
                    < div  className={styles.button2} >
                       {questions[currentQues].answerOptions.map((answerOptions) => (
                       <button className={styles.button} onClick={ () => onClickButton(answerOptions.isCorrect) }>{answerOptions.answerText}</button>))}
                    </div>
                   
                </div>
        )}
                    <div>
                        <button className={styles.button3} onClick={resetClick}>Пройти тест еще раз</button>
                    </div>
    </div>
   )
   
}

export default Quiz