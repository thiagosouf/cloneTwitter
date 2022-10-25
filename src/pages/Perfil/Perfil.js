import styled from "styled-components"
import Voltar from "../Voltar"
import PerfilUser from "./PerfilUser"

export default function Perfil() {
    return (
        <ContainerMain>
            <Voltar />
            <PerfilUser />
            <Tweets>Tweets</Tweets>
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


const Tweets = styled('div')`
`