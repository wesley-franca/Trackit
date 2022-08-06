import TodayGoal from "./TodayGoal.js"
import styled from "styled-components"

function Footer() {
    return (
        <Wrapper>
            <p>Hábitos</p>
            <p>Histórico</p>
            <TodayGoal />
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
`

export default Footer;