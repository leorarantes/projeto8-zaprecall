import Logo from "./Logo";
import FlashcardsList from "./FlashcardsList";
import Footer from "./Footer";
import { useState } from "react";

export default function Screen2(props) {
    const [done, setDone] = useState(0);
    console.log(done);
    while(done !== 8) {
        return (
            <div className="body2">
                <Logo classId="logo2"/>
                <FlashcardsList setDone={doneValue => {setDone(doneValue);}} />
                <Footer footerState="1" done={done} />
            </div>
        );
    }

    return (
        <div className="body2">
            <Logo classId="logo2"/>
            <FlashcardsList />
            <Footer footerState="2"/>
        </div>
    );
}