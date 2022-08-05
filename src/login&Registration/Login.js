import styled from "styled-components";

function Login() {
    function handleForm(e) {
        e.preventDefault();
    }
    return (
        <>
            <Loginform onSubmit={handleForm}>
                <input type="email"
                    name="email"
                    placeholder="email"
                    required />

                <input type="password"
                    name="password"
                    placeholder="senha"
                    required />
                <Loginbutton>Entrar</Loginbutton>
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
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    font-size: 21px;
    color: #FFFFFF;
    margin-bottom: 25px;
`

export default Login;