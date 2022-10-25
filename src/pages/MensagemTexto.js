import styled from "styled-components"

export default function MensagemTexto() {
    return (
        <>
            <Perfil>
                <Foto></Foto>
                <NomeLogin>
                    <Titulo>
                        <p>Thiago189 </p>
                        <P2>@prof.thiago189 - 20 de out</P2>
                    </Titulo>
                    <Texto>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Texto>
                </NomeLogin>
            </Perfil>
        </>
    )
}




const Perfil = styled('div')`
    border: 1px solid white;
    display: flex;     
`

const Foto = styled('div')`
    background-color: pink;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.7rem;
    
`

const NomeLogin = styled('div')`
    text-align: left;
    display: flex;
    flex-direction: column;
    p{
        margin: 0;
        
    }  
`

const P2 = styled('p')`
    font-weight: 400;
    padding-left: 10px;
    font-size: 0.95rem;
`

const Titulo = styled('div')`
    text-align: left;
    display: flex;
    margin-bottom: 0.5rem;

`

const Texto = styled('p')`
    font-weight: 500;
    font-style: italic;
    `