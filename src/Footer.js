export default function Footer(props) {
    let footerState = parseInt(props.footerState);
    let done = props.done;

    if (footerState == 1) {
        return (
            <footer>
                <a>{done}/8 CONCLUÍDOS</a>
            </footer>
        );
    }
}