import styled from "styled-components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


export default function Voltar() {
    const navigate = useNavigate();

    return (
        <>

            <VoltarSpan onClick={() => navigate("/")}>
                <ArrowBackIcon />
                <p>Pagina Inicial</p>
            </VoltarSpan>
        </>
    )
}

const VoltarSpan = styled('span')`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1rem;
    p{
        margin-left: 0.5rem;
    }
`