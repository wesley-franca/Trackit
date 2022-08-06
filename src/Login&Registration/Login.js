import { LoginPost } from "../tools/UseAxios.js"
import Context from "../tools/Context.js";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {  ThreeDots } from  'react-loader-spinner';
import styled from "styled-components";

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [profile, setProfile] = useContext(Context);
    const [isDisable, SetIsDisable] = useState(false)
    const navigate = useNavigate()
    const load = ( isDisable? <ThreeDots 
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/>    
        : "Entrar")

    function handleForm(e) {
        e.preventDefault();
        SetIsDisable(true)
        const body = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        LoginPost(body)
        .then((res) => {
            const token = res.data.token
            setProfile(res.data)
            return (navigate("/hoje", { state:token }))
        })
        .catch((error) => {
            SetIsDisable(false)
            alert("Por favor, verifique os dados inseridos")
        })
    }
    return (
        <>
            <Loginform onSubmit={handleForm}>
                <input type="email"
                    name="email"
                    placeholder="email"
                    disabled={isDisable}
                    required />

                <input type="password"
                    name="password"
                    placeholder="senha"
                    disabled={isDisable}
                    required />
                <Loginbutton bluur={isDisable}>{load}</Loginbutton>
            </Loginform>
        </>
    )
}



const Loginform = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        border: solid 1px #D5D5D5;
        font-weight: 400;
        font-size: 20px;
        padding: 15px;
        border-radius: 5px;
        ::placeholder {
        color: #DBDBDB;
        }
        }
`
const Loginbutton = styled.button`
    height: 45px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    font-size: 21px;
    color: #FFFFFF;
    margin-bottom: 25px;
    opacity: ${props=>props.bluur? 0.7 : 1};
`

export default Login;