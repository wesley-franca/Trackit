import Footer from "./Bars/Footer.js";
import Top from "./Bars/Top.js";
import HabitContent from "./HabitContent.js"
import CreateHabit from "./CreateHabit.js";
import { useState } from "react";
import styled from "styled-components";

function HabitPage() {
    const [create, setCreate] = useState(false)
    const [habitDays, setHabitDays] = useState([])
    const [isDisable, SetIsDisable] = useState(false);
    const [reload, setReload] = useState(true)
    return (
        <Wrapper>
            <Top />
            <Content>
                <Holder>
                    <Title>Meus hábitos</Title>
                    <Press size="small" onClick={() => {
                        setCreate(true)
                        SetIsDisable(false)
                        setHabitDays([])
                    }}>+</Press>
                </Holder>
                <CreateHabit
                    create={create}
                    setCreate={setCreate}
                    setHabitDays={setHabitDays}
                    habitDays={habitDays}
                    setReload={setReload}
                    reload={reload}
                    SetIsDisable={SetIsDisable}
                    isDisable={isDisable} />
                <HabitContent reload={reload} setReload={setReload} />
            </Content>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    overflow: scroll;
    padding-bottom: 32px;
`
const Content = styled.div`
    margin: 70px 17px;    
`
const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
`
const Title = styled.p`
    font-size: 23px;
    font-weight: 400;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
    margin-bottom: 17px;
`
const Press = styled.div`
    width: ${props => props.size === "small" ? "40px" : "84px"};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${props => props.size === "white" ? "#FFFFFF" : "#52B6FF"};
    border-radius: 4.63636px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: ${props => props.size === "small" ? "29px" : "16px"};
    color: ${props => props.size === "white" ? "#52B6FF" : "#FFFFFF"};
    margin-right: ${props => props.size === "white" ? "20px" : ""}
`

export default HabitPage;