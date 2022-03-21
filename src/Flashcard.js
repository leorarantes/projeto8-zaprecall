import { useState } from "react";

export default function Flashcard(props) {
    const [flashcardState, setFlashcardState] = useState(1);

    if(flashcardState === 1) {
        return (
            <li className="flashcard-state1">
                <a>Pergunta {props.elementId.flashcardKey}</a>
                <ion-icon onCLick={() => {
                    props.setDone(props.done + 1); 
                    setFlashcardState(2);}}
                name="play-outline"></ion-icon>
            </li>
        );
    }
}