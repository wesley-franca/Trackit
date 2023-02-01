import { PostDone, PostUndone } from "../tools/UseAxios.js"
import checksimbol from "../assets/images/checksimbol.png";
import styled from "styled-components";
import Context from '../tools/Context.js';
import { useContext } from "react";

function Task({ habit, reload, setReload }) {
    let lineColor = false
    if (habit.highestSequence > 0 && habit.currentSequence === habit.highestSequence) {
        lineColor = true
    }
    const [profile] = useContext(Context);
    const id = habit.id

    function Click() {
        if (habit.done === false) {
            PostDone(profile.token, id)
                .then((res) => {
                    setReload(!reload)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            PostUndone(profile.token, id)
                .then((res) => {
                    setReload(!reload)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <Wrapper>
            <div>
                <TaskTitle>{habit.name}</TaskTitle>
                <Main done={habit.done}>Sequência atual: <span>{habit.currentSequence} dias</span></Main>
                <Record lineColor={lineColor}>Seu recorde: <span>{habit.highestSequence} dias</span></Record>
            </div>
            <div>
                <CheckBox done={habit.done}>
                    <img src={checksimbol} alt="" onClick={() => { Click() }} />
                </CheckBox>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
`
const CheckBox = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TaskTitle = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`
const Main = styled.p`
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
span{
    color: ${props => props.done ? "#8FC549" : " #666666"};
}
`
const Record = styled.p`
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
span{
    color: ${props => props.lineColor ? "#8FC549" : " #666666"};
}
`

export default Task;