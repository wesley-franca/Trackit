import { useState } from "react";
import styled from "styled-components";

function WeekDay({ day, index, setHabitDays, habitDays, isDisable }) {
    const [clicked, setClicked] = useState(false)
    function differentIndex(value) {
        return value !== index
    }
    function chooseDay() {
        if (!isDisable) {
            if (clicked) {
                setHabitDays(habitDays.filter(differentIndex))
                setClicked(!clicked)
            } else {
                setHabitDays([...habitDays, index])
                setClicked(!clicked)
            }
        }
    }
    return (
        <Daybox clicked={clicked} onClick={() => chooseDay()}>{day}</Daybox>
    )
}

const Daybox = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.clicked ? "#D5D5D5" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(props) => props.clicked ? "#FFFFFF" : "#D5D5D5"};
`

export default WeekDay;