import setaVirar from "./assets/setinha.png";

export default function Flashcard(props) {
    console.log(props.elementId.flashcardState);

    if (props.elementId.flashcardState === 1) {
        return (
            <li className="flashcard-state1">
                <a>Pergunta {props.elementId.flashcardKey}</a>
                <ion-icon onClick={() => {
                    let flashcardSttAux = [...props.flashcardStt];
                    flashcardSttAux[props.elementId.flashcardKey - 1] = 2;
                    props.setFlashcardStt([...flashcardSttAux]);
                }}
                    name="play-outline"></ion-icon>
            </li>
        );
    }
    else if (props.elementId.flashcardState === 2) {
        return (
            <li className="flashcard-state2">
                <a>{props.elementId.flashcardQuestion}</a>
                <img onClick={() => {
                    let flashcardSttAux = [...props.flashcardStt];
                    flashcardSttAux[props.elementId.flashcardKey - 1] = 3;
                    props.setFlashcardStt([...flashcardSttAux]);
                }} src={setaVirar} />
            </li>
        );
    }
    else if (props.elementId.flashcardState === 3) {
        console.log("oi");
        return (
            <li className="flashcard-state3">
                <div className="flashcard-answer-box">
                    <a>{props.elementId.flashcardQuestion}</a>
                </div>
                <div className="flashcard-user-answer-box">
                    <div onClick={() => {
                        let doneAux = [...props.done];
                        doneAux[0] += 1;
                        doneAux[props.elementId.flashcardKey] = 0;
                        props.setDone([...doneAux]);
                        let flashcardSttAux = [...props.flashcardStt];
                        flashcardSttAux[props.elementId.flashcardKey - 1] = 4;
                        props.setFlashcardStt([...flashcardSttAux]);
                    }}>
                        <a>Não lembrei</a>
                    </div>
                    <div onClick={() => {
                        let doneAux = [...props.done];
                        doneAux[0] += 1;
                        doneAux[props.elementId.flashcardKey] = 1;
                        props.setDone([...doneAux]);
                        let flashcardSttAux = [...props.flashcardStt];
                        flashcardSttAux[props.elementId.flashcardKey - 1] = 4;
                        props.setFlashcardStt([...flashcardSttAux]);
                    }}>
                        <a>Quase não lembrei</a>
                    </div>
                    <div onClick={() => {
                        let doneAux = [...props.done];
                        doneAux[0] += 1;
                        doneAux[props.elementId.flashcardKey] = 2;
                        props.setDone([...doneAux]);
                        let flashcardSttAux = [...props.flashcardStt];
                        flashcardSttAux[props.elementId.flashcardKey - 1] = 4;
                        props.setFlashcardStt([...flashcardSttAux]);
                    }}>
                        <a>Zap!</a>
                    </div>
                </div>
            </li>
        );
    }
    else {
        if(props.done[props.elementId.flashcardKey] == 0) {
            return (
                <li className="flashcard-state4">
                    <a className="red">Pergunta {props.elementId.flashcardKey}</a>
                    <ion-icon class="red" name="close-circle"></ion-icon>
                </li>
            );
        }
        else if(props.done[props.elementId.flashcardKey] == 1) {
            return (
                <li className="flashcard-state4">
                    <a className="orange">Pergunta {props.elementId.flashcardKey}</a>
                    <ion-icon class="orange" name="help-circle"></ion-icon>
                </li>
            );
        }
        else {
            return (
                <li className="flashcard-state4">
                    <a className="green">Pergunta {props.elementId.flashcardKey}</a>
                    <ion-icon class="green" name="checkmark-circle"></ion-icon>
                </li>
            );
        }
    }
}