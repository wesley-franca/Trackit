import WeekDay from "./WeekDay.js"
import Context from '../tools/Context.js';
import { PostHabit } from "../tools/UseAxios";


import { useState } from "react";
import { useContext } from "react";
import {  ThreeDots } from  'react-loader-spinner';
import styled from "styled-components";

function CreateHabit({create, setCreate, setHabitDays, habitDays, SetIsDisable, isDisable }) {
    const weekDays = ["D","S","T","Q","Q","S","S"];
    const [habitName, setHabitName] = useState("");
    const [profile] = useContext(Context);
    const load = ( isDisable? <ThreeDots 
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/>    
        : "Salvar")

    function SendHabit(){
        if(habitName.length !== 0 && habitDays.length !== 0){
            setHabitDays(habitDays.sort()) 
            SetIsDisable(true)
            const config = { headers: { Authorization: `Bearer ${profile.token}` } }
            let body = {
                name: habitName,
                days: habitDays
            }
            
            PostHabit(body, config)
                .then((res) => {
                    setCreate(false)
                })
                .catch((error) => {
                    SetIsDisable(false)
                    alert(`Ops, operação não efetuada, erro ${error.response.status}.`)
                })
               

            
        }else{
            alert("Dê um nome ao seu novo hábito e selecione quando deseja pratica-lo")
        }
    }
    function handleChange(e) {
        setHabitName(e.target.value)
    }
    if(create){
        return (
            <CreateBox>
                <div>
                    <Createinput 
                    type="text" 
                    name="habit" 
                    placeholder="nome do hábito" 
                    disabled={isDisable}
                    onChange={handleChange} />
                </div>
                <DayHolder>
                    {weekDays.map((day, index)=>{
                        return <WeekDay day={day} index={index} setHabitDays={setHabitDays} habitDays={habitDays} isDisable={isDisable} key={index} />
                    })}
                </DayHolder>
                <ButtomHolder>
                    <Press size="white" onClick={() => setCreate(false)}>Cancelar</Press>
                    <Press onClick={() => SendHabit()}>{load}</Press>
                </ButtomHolder>
            </CreateBox>
        )
    }
    return ""
}

const CreateBox = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 18px;
`
const DayHolder = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 29px;
`
const ButtomHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const Createinput = styled.input`
    width: 100%;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    ::placeholder {
        color: #DBDBDB;
        }
`
const Press = styled.div`
    width: ${props => props.size==="small"? "40px" : "84px"};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${props => props.size==="white"? "#FFFFFF" : "#52B6FF"};
    border-radius: 4.63636px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props => props.size==="small"? "29px" : "16px"};
    color: ${props => props.size==="white"? "#52B6FF" : "#FFFFFF"};
    margin-right: ${props => props.size==="white"? "20px" : ""}
`

export default CreateHabit;