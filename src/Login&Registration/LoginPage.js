import MainLogo from "./styles/MainLogo.js";
import Login from "./Login.js";

import { Link } from "react-router-dom";
import styled from "styled-components";

function LoginPage() {

    return (
            <Wrapper>
                <MainLogo />
                <Login />
                <Link to={`/cadastro`} >
                    <New>Não tem uma conta? Cadastre-se!</New>
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

export default LoginPage;