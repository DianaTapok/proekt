import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Message from "../message";
import TestApi from "../test-api";
import styles from "./style.module.css";
import Quiz from "../quiz";

const Main = () => {
    return <div className={styles.container}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/message" component={Message} />
            <Route path="/test" component={TestApi} />
            <Route path="/quiz" component={Quiz}/>
        </Switch>
    </div>
}

export default Main