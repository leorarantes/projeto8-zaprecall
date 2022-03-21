import party from "./assets/party.png";
import sad from "./assets/sad.png";

export default function Footer(props) {
    const footerState = parseInt(props.footerState);
    console.log("footerState = " + footerState);
    let donee = [...props.done];
    donee[0] = -1;
    console.log(donee);

    if (footerState == 1) {
        return (
            <footer>
                <a>{props.done[0]}/8 CONCLUÍDOS</a>
                <div className="icons-box">
                    {donee.map(element => {
                        if (element == 0) {
                            return (
                                <ion-icon class="red" name="close-circle"></ion-icon>
                            );
                        }
                        if (element == 1) {
                            return (
                                <ion-icon class="orange" name="help-circle"></ion-icon>
                            );
                        }
                        if (element == 2) {
                            return (
                                <ion-icon class="green" name="checkmark-circle"></ion-icon>
                            );
                        }
                    })}
                </div>
            </footer>
        );
    }
    else {
        donee[0] = 0
        let resultado = 0;
        donee.forEach(element => {
            resultado += element;
        });
        console.log(resultado);
        donee[0] = -1;

        if (resultado == 16) {
            return (
                <footer className="footer-state-2">
                    <div className="result">
                        <img src={party} />
                        <span>Parabéns!</span>
                    </div>
                    <a>Você não esqueceu de nenhum flashcard!</a>
                    <a>{props.done[0]}/8 CONCLUÍDOS</a>
                    <div className="icons-box">
                        {donee.map(element => {
                            if (element == 0) {
                                return (
                                    <ion-icon class="red" name="close-circle"></ion-icon>
                                );
                            }
                            if (element == 1) {
                                return (
                                    <ion-icon class="orange" name="help-circle"></ion-icon>
                                );
                            }
                            if (element == 2) {
                                return (
                                    <ion-icon class="green" name="checkmark-circle"></ion-icon>
                                );
                            }
                        })}
                    </div>
                </footer>
            );
        }
        else {
            return (
                <footer className="footer-state-2">
                    <div className="result">
                    <img src={sad} />
                    <span>Putz...</span>
                    </div>
                    <a>Ainda faltam alguns, mas não desanime!</a>
                    <a>{props.done[0]}/8 CONCLUÍDOS</a>
                    <div className="icons-box">
                        {donee.map(element => {
                            if (element == 0) {
                                return (
                                    <ion-icon class="red" name="close-circle"></ion-icon>
                                );
                            }
                            if (element == 1) {
                                return (
                                    <ion-icon class="orange" name="help-circle"></ion-icon>
                                );
                            }
                            if (element == 2) {
                                return (
                                    <ion-icon class="green" name="checkmark-circle"></ion-icon>
                                );
                            }
                        })}
                    </div>
                </footer>
            );
        }
    }
}