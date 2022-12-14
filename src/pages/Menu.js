import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Menu() {
    const navigate = useNavigate();


    return (
        <ContainerMenu>
            <ContainerSup>
                <Logo src="/assets/logo.webp" />
                <Itens>
                    <Item onClick={() => navigate("/")}><HomeOutlinedIcon /><Span>Página Inicial</Span></Item>
                    <Item onClick={() => navigate("/notificacoes")}><NotificationsOutlinedIcon /><Span>Notificações</Span></Item>
                    <Item onClick={() => navigate("/mensagens")}><MailOutlineOutlinedIcon /><Span>Mensagens</Span></Item>
                    <Item onClick={() => navigate("/favoritos")}><FavoriteBorderOutlinedIcon /><Span>Favoritados</Span></Item>
                    <Item onClick={() => navigate("/perfil")}><PersonIcon /><Span>Perfil</Span></Item>
                </Itens>
                <Botao>
                    Tweetar
                </Botao>
            </ContainerSup>
            <ContainerInf>
                <Conta>
                    <Perfil onClick={() => {
                        window.location.href = 'https://www.linkedin.com/in/prof-thiago-ferreira/';
                        return null;
                    }}>
                        <Foto></Foto>
                        <NomeLogin>
                            <p>Thiago189</p>
                            <P2>@prof.thiago189</P2>
                        </NomeLogin>
                    </Perfil>
                    <Sair><ExitToAppIcon /></Sair>
                </Conta>
            </ContainerInf>
        </ContainerMenu>
    )
}

const ContainerMenu = styled('div')`
    height: 94vh;
    width: 20%;
    padding: 5vh 2rem 1vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ContainerInf = styled('div')`
    height: 10%;
    color: white;
    
`

const Conta = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
`

const Perfil = styled('div')`
    display: flex;
    cursor: pointer; 
    height: 3rem;       
`

const Foto = styled('div')`
    background-color: gray;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.7rem;
    
`

const NomeLogin = styled('div')`
    text-align: left;
    
    p{
        margin: 0;
        
    }  
`

const P2 = styled('p')`
    font-weight: 400;
`

const Sair = styled('div')`
cursor: pointer;
`

const ContainerSup = styled('div')`
color: white;
display: flex;
flex-direction: column;
height: 60vh;
`

const Logo = styled('img')`
width: 2rem;
`

const Item = styled('li')`
    list-style-type: none;
    display: flex;
    align-items: center;
    :hover{
        color: #33A1F2;
    }
`
const Span = styled('span')`
    margin-left: 1rem
`

const Itens = styled('ul')`
    height: 45%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const Botao = styled('button')`
height: 3rem;
background-color: #33A1F2;
border: none;
color: white;
border-radius: 25px;
font-weight: 700;
font-size: 1rem;
:hover {
 animation: gradient 3s infinite;
 transform: scale(1.05);
}
:active {
 animation: gradient 3s infinite;
 transform: scale(1);
}
`
