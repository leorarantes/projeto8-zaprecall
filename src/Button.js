import Screen2 from "./Screen2";

export default function Button(props) {
    return (
        <div onClick={() => {props.setScreen(<Screen2 />)}} className="initiate-button">
            <a>Iniciar Recall!</a>
        </div>
    )
}