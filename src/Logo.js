import imagemLogo from "./assets/imagem-logo.svg";

export default function Logo(props) {
    const classId = props.classId;

    if (classId == "logo1") {
        return (
            <div className={classId}>
                <img src={imagemLogo} />
                <a className="logo-title">ZapRecall</a>
            </div>
        );
    }
    else {
        return (
            <div className={classId}>
                <img src={imagemLogo} />
                <a className="logo-title">ZapRecall</a>
            </div>
        );
    }
}