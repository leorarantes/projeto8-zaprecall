import Logo from "./Logo";
import Button from "./Button";

export default function Screen1(props) {
    return (
        <div className="body1">
            <Logo classId="logo1"/>
            <Button setScreen={props.setScreen} />
        </div>
    );
}