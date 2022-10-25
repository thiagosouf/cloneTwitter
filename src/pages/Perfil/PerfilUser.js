import styled from "styled-components"

// import { useNavigate } from "react-router-dom";


export default function PerfilUser() {
    // const navigate = useNavigate();

    return (
        <>
            <UserBackground />
            <FotoBotao>
                <Foto />
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
    min-width: 7.5rem;
    height: 7.5rem;
    border: 0.4rem solid black;
    border-radius: 50%;

    position: relative;
    top: -4.5rem;
    
`

const Editar = styled('div')`
    color: #33A1F2;
    border: 1px solid #33A1F2;
    height: 1rem;
    padding: 0.7rem;
    margin-top: 0.5rem;
    border-radius: 25px;
`