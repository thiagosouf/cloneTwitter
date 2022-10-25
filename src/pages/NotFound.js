import styled from "styled-components"

export default function NotFound() {
    return (
        <ContainerMain>
            Essa Pagina Não Existe
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