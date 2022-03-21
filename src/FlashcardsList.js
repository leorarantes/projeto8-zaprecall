import Flashcard from "./Flashcard";
import { useState } from "react";

export default function FlashcardsList(props) {
    const [flashcardStt, setFlashcardStt] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

    const flashcardsArray = [
        {flashcardState: flashcardStt[0], flashcardKey: 1, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[1], flashcardKey: 2, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[2], flashcardKey: 3, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[3], flashcardKey: 4, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[4], flashcardKey: 5, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[5], flashcardKey: 6, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[6], flashcardKey: 7, flashcardQuestion: "teste"},
        {flashcardState: flashcardStt[7], flashcardKey: 8, flashcardQuestion: "teste"},
    ];

        return (
            <ul className="flashcards-list">
                {flashcardsArray.map(element => {
                    return (
                        <Flashcard elementId={element} setDone={props.setDone} key={element.flashcardKey} done={props.done} setFlashcardStt={flashcardSttId => {setFlashcardStt(flashcardSttId)}} flashcardStt={flashcardStt} />
                    );})}
            </ul>
        );
}