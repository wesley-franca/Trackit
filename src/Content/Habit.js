import { DeleteHabit } from "../tools/UseAxios";
import Context from '../tools/Context.js';
import { useContext, useState } from "react";
import styled from "styled-components";
import trash from "../assets/images/trash.png";
import { ThreeDots } from 'react-loader-spinner';

function Habit({ habit, reload, setReload }) {
    const [clicked, setClicked] = useState(false)
    const [profile] = useContext(Context);
    const id = habit.id
    const [isDisable, setIsDisable] = useState(false)
    const load = (isDisable ? <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />
        : "Sim")

    function Delete() {
        setIsDisable(!isDisable)

        DeleteHabit(profile.token, id)
            .then((res) => {
                setIsDisable(!isDisable)
                setClicked(!clicked)
                setReload(!reload)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <Wrapper>
            <Flex>
                <HabitName>{habit.name}</HabitName>
                <img src={trash} alt="" onClick={() => { setClicked(!clicked) }} />
            </Flex>
            <Flex>
                <Daybox color={habit.days.includes(0)}>D</Daybox>
                <Daybox color={habit.days.includes(1)}>S</Daybox>
                <Daybox color={habit.days.includes(2)}>T</Daybox>
                <Daybox color={habit.days.includes(3)}>Q</Daybox>
                <Daybox color={habit.days.includes(4)}>Q</Daybox>
                <Daybox color={habit.days.includes(5)}>S</Daybox>
                <Daybox color={habit.days.includes(6)}>S</Daybox>
            </Flex>
            <DeleteBox clicked={clicked}>
                <p>Tem certeza que deseja deletar o habito "{habit.name}" permanentemente?</p>
                <Flex>
                    <Press onClick={() => { setClicked(!clicked) }}>Cancelar</Press>
                    <Press onClick={() => { Delete() }}>{load}</Press>
                </Flex>
            </DeleteBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 18px;
`
const HabitName = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    img{
        height: 20px;
        width: 15px;
    }
`
const Daybox = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color ? "#FFFFFF" : "#D5D5D5"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(props) => props.color ? "#D5D5D5" : "#FFFFFF"};
`
const DeleteBox = styled.div`
    width: 90%;
    height: 250px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 30px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.clicked ? "initial" : "none"};
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin: 30px 0;
    }
`
const Press = styled.div`
    width: ${props => props.size === "small" ? "40px" : "84px"};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color:#ffffff;    
`

export default Habit;