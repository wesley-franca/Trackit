import MainLogo from "./styles/MainLogo.js";
import Registration from "./Registration.js";

import {Link} from "react-router-dom";
import styled from "styled-components";

function RegistrationPage() {
    return (
        <Wrapper>
            <MainLogo />
            <Registration />
            <Link to={`/`} >
                <New>Já tem uma conta? Faça login!</New>
            </Link>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        text-decoration: none;
    }
`
const New = styled.p`
    font-size: 14;
    color: #52B6FF;
    text-decoration-line: underline;
`

export default RegistrationPage;