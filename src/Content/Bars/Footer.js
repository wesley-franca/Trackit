import TodayGoal from "./TodayGoal.js";

import { Link } from "react-router-dom"
import styled from "styled-components"

function Footer(reload) {
    return (
        <Wrapper>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>

            <TodayGoal reload={reload} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #FFFFFF;
    box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.1);
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }
    a{
        text-decoration: none;
    }
`

export default Footer;