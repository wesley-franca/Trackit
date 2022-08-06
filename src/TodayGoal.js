import styled from "styled-components";

function TodayGoal() {
    return (
        <Wrapper>
            <p>Hoje</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 91px;
    width: 91px;
    position: fixed;
    bottom: 10;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    border-radius: 50%;
    p{
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
    }
`

export default TodayGoal;