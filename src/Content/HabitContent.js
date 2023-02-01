import Habit from "./Habit.js";
import { GetHabit } from "../tools/UseAxios";
import Context from '../tools/Context.js';
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

function HabitContent({ reload, setReload }) {
    const [profile] = useContext(Context);
    const [haveHabits, setHaveHabits] = useState(false);
    const [list, setList] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        GetHabit(profile.token)
            .then((res) => {
                setHaveHabits(true)
                setList(res.data)
            })
            .catch((error) => {
                console.log(error)
                return (navigate("/"))
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    if (haveHabits) {
        return (
            <>
                {list.map((habit, index) => {
                    return <Habit habit={habit} reload={reload} setReload={setReload} key={index} />
                })}
            </>
        )
    } else {
        return (
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        )
    }
}

const Text = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18;
    line-height: 22px;
    color: #666666;
`

export default HabitContent;