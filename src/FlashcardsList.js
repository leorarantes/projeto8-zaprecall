import Flashcard from "./Flashcard";

export default function FlashcardsList(props) {
    const flashcardsArray = [
        {flashcardState: 0, flashcardKey: 1, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 2, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 3, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 4, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 5, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 6, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 7, flashcardQuestion: "teste"},
        {flashcardState: 0, flashcardKey: 8, flashcardQuestion: "teste"},
    ];

        return (
            <ul className="flashcards-list">
                {flashcardsArray.map(element => {
                    return (
                    <Flashcard elementId={element} setDone={props.setDone} key={element.flashcardKey}/>);})}
            </ul>
        );
}