import logo from "../../assets/images/logo.png"

import styled from "styled-components"

function MainLogo() {
    return (
        <Top>
            <img src={logo} alt="" />
        </Top>
    )
}

const Top = styled.div`
display: flex;
justify-content: center;
margin: 68px 0 35px 0;

img{

}
`

export default MainLogo;