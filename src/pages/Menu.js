import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';

export default function Menu(){
    return(
        <ContainerMenu>
            <Logo src="/assets/logo.webp" />
            <Itens>
                <Item><HomeOutlinedIcon/><Span>Página Inicial</Span></Item>
                <Item><NotificationsOutlinedIcon/><Span>Notificações</Span></Item>
                <Item><MailOutlineOutlinedIcon/><Span>Mensagens</Span></Item>
                <Item><FavoriteBorderOutlinedIcon/><Span>Favoritados</Span></Item>
                <Item><PersonIcon/><Span>Perfil</Span></Item>
            </Itens>
            <Button variant="contained">
                Tweetar
            </Button>
        </ContainerMenu>
    )
}

const ContainerMenu = styled('div')`
width: 20%;
height: 100vh;
background-color: black;
color: white;
padding: 2rem 50px;

display: flex;
flex-direction: column;
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
    height: 30%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

/* const Button = styled('button')`
height: 3rem;
background-color: #33A1F2;
border: none;
color: white;
border-radius: 25px;
font-weight: 700;
font-size: 1rem;
` */