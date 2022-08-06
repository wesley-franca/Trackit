import { Link } from "react-router-dom";
import styled from "styled-components";

function TodayGoal() {
    return (
            <Wrapper>
                <Link to="/hoje">
                    <Holder>
                        <p>Hoje</p>
                    </Holder>
                </Link>
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
    background-color: #52B6FF;
    border-radius: 50%;
    p{
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #FFFFFF !important;; 
    }
    a{
        text-decoration: none;
    }
`
const Holder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default TodayGoal;