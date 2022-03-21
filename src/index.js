import ReactDOM from "react-dom";
import Screen1 from "./Screen1";
import { useState } from "react";

import "./styles/reset.css";
import "./styles/style.css";

function App() {
    const [screen, setScreen] = useState(<Screen1 setScreen={screenId => {setScreen(screenId)}} />);

    return (
        screen
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));