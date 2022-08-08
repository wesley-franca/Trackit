import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState, useEffect } from "react";
import Context from '../../tools/Context.js';
import { GetToday } from "../../tools/UseAxios"
import { useNavigate } from "react-router-dom";

function TodayGoal(reload) {
    const navigate = useNavigate()
    const [profile] = useContext(Context);
    const [done, setDone] = useState([])
    const [notDone, setNotone] = useState([])
    const percentage = ((100/(done.length+notDone.length))*done.length)

    useEffect(() => {
        GetToday(profile.token)
            .then((res) => {
                setDone(res.data.filter(task => task.done === true))
                setNotone(res.data.filter(task => task.done === false)) 
            })
            .catch((error) => {
                console.log(error)
                alert(`Ops, operação não efetuada, erro ${error.response.status}, faça o login`)
                return (navigate("/"))
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);
    return (
            <Wrapper>
                <Link to="/hoje">
                    <Holder>
                    <CircularProgressbar
        value={percentage}
        text={`Hoje`}
        styles={buildStyles({
          textColor: "#FFFFFF",
          pathColor: "#FFFFFF",
          trailColor: "#52B6FF",
          textSize: '22px'
        })}
      />
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
    display:flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
    }
`
const Holder = styled.div`
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default TodayGoal;