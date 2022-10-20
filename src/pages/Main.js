import styled from "styled-components"
import MensagemTexto from "./MensagemTexto"

export default function Main() {
    return (
        <ContainerMain>
            <MensagemTexto />
        </ContainerMain>
    )
}

const ContainerMain = styled('div')`
    background-color: black;
    margin: 0;
    padding: 0;
    width: 50%;
    color: white;
`



