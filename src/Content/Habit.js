import trash from "../assets/images/trash.png";
import styled from "styled-components";

function Habit({ habit }) {
    console.log(habit)
    return (
        <Wrapper>
                <Flex>
                    <HabitName>{habit.name}</HabitName>
                    <img src={trash} alt="" />
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
    background-color: ${(props) => props.color? "#FFFFFF" : "#D5D5D5"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(props) => props.color? "#D5D5D5" : "#FFFFFF"};
`

export default Habit;