import { RegistrationPost } from "../tools/UseAxios.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";

function Registration() {
    const [isDisable, SetIsDisable] = useState(false)
    const navigate = useNavigate()
    const load = (isDisable ? <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />
        : "Cadastrar")

    function handleForm(e) {
        e.preventDefault();
        SetIsDisable(true)
        const body = {
            email: e.target[0].value,
            name: e.target[2].value,
            image: e.target[3].value,
            password: e.target[1].value
        }

        RegistrationPost(body)
            .then((res) => {
                return (navigate("/"))
            })
            .catch((error) => {
                SetIsDisable(false)
                alert("Por favor, verifique os dados inseridos")
            })
    }
    return (
        <>
            <Regitform onSubmit={handleForm}>
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
                <input type="text"
                    name="name"
                    placeholder="nome"
                    disabled={isDisable}
                    required />
                <input type="url"
                    name="url"
                    placeholder="foto"
                    disabled={isDisable}
                    required />
                <Registbutton bluur={isDisable}>{load}</Registbutton>
            </Regitform>
        </>
    )
}

const Regitform = styled.form`
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
const Registbutton = styled.button`
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
    opacity: ${props => props.bluur ? 0.7 : 1};
`

export default Registration;