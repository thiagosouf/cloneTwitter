import styled from "styled-components"

// import { useNavigate } from "react-router-dom";


export default function PerfilUser() {
    // const navigate = useNavigate();

    return (
        <>
            <UserBackground />
            <FotoBotao>
                <Info>
                    <Foto />
                    <p>Nome Sobrenome</p>
                    <TextoSimples>@nome_de_usuario</TextoSimples>
                    <TextoSimplesNegrito>Desenvolvido por <Blue>@prof.thiago189</Blue></TextoSimplesNegrito>
                    <TextoSimples>(icon) Cidade, País</TextoSimples>
                    <TextoSimples>(icon) Nascido(a) em data de ano</TextoSimples>
                </Info>
                <Editar>
                    Editar perfil
                </Editar>
            </FotoBotao>
        </>
    )
}

const UserBackground = styled('div')`
    width: 100%;
    height: 10rem;
    background-color: #33A1F2;
`
const FotoBotao = styled('div')`
    display: flex;
    justify-content: space-between;
    margin:  0 0.7rem;
`

const Foto = styled('div')`
    background-color: gray;
    width: 7.5rem;
    height: 7.5rem;
    border: 0.4rem solid black;
    border-radius: 50%;

    
    
`

const Editar = styled('div')`
    color: #33A1F2;
    border: 1px solid #33A1F2;
    height: 1rem;
    padding: 0.7rem;
    margin-top: 0.5rem;
    border-radius: 25px;
`

const Info = styled('div')`
    display: flex;
    flex-direction: column;

    position: relative;
    top: -4.5rem;
    text-align: left;
    
    p{
        margin: 0;
    }
`

const TextoSimples = styled('span')`
    font-weight:100;
    margin-bottom: 0.1rem;
`

const TextoSimplesNegrito = styled('span')`
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`

const Blue = styled('span')`
    color: blue;
`