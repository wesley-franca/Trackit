import Top from "./Bars/Top.js";
import Footer from "./Bars/Footer.js";
import TodayTasks from "./TodayTasks.js"
import { GetToday } from "../tools/UseAxios"
import styled from "styled-components"
import Context from '../tools/Context.js';
import { useContext, useState, useEffect } from "react";


function TodayPage() {
    const [profile] = useContext(Context);
    const [reload, setReload] = useState(true)
    const [done, setDone] = useState([])
    const [notDone, setNotone] = useState([])
    const percentage = ((100/(done.length+notDone.length))*done.length)
    const doneTasks = done.length===0? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`
    const dayjs = require('dayjs')
    let day = dayjs().date().toString()
    if(day.length === 1){
        day= "0" + day
    }
    let month = dayjs().month()
    month = (month + 1).toString()
    if(month.length === 1){
        month= "0" + month
    }
    let week = dayjs().day()
        if(week===1){
            week = "Segunda"
        } else if(week===2){
            week = "Terça"
        } else if(week===3){
            week = "quarta"
        } else if(week===4){
            week = "quinta"
        } else if(week===5){
            week = "sexta"
        } else if(week===6){
            week = "sabado"
        } else if(week===0){
            week = "Terça"
        }
       
        

    useEffect(() => {
        GetToday(profile.token)
            .then((res) => {
                setDone(res.data.filter(task => task.done === true))
                setNotone(res.data.filter(task => task.done === false))
            })
            .catch((error) => {
                console.log(error)
                alert(`Ops, operação não efetuada, erro ${error.response.status}, faça o login`)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);



    
    return (
        <Wrapper>
            <Top />
            <TaskHolder>
                <Title>{week}, {day}/{month}</Title>
                <Message percentage={percentage}>{doneTasks}</Message>
                <TodayTasks reload={reload} setReload={setReload} />
            </TaskHolder>
            
            <Footer reload={reload}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    overflow: scroll;
    padding-bottom: 32px;
`

const TaskHolder = styled.div`
    padding: 100px 17px 40px 17px;
`
const Title= styled.p`
    font-size: 23px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
    margin-bottom: 17px;
`
const Message = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    color: ${props=> props.percentage===0? "#666666" : "#8FC549"} ;
    padding-bottom: 25px;
`

export default TodayPage;