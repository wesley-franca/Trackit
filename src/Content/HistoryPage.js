import Footer from "./Bars/Footer.js"
import Top from "./Bars/Top.js"

import styled from "styled-components";

function HistoryPage() {
    return (
        <Wrapper>
            <Top />
            <Holder>
                <Title>Historico </Title>
                <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>
            </Holder>
            
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #f2f2f2;
    height: 100%;
`
const Holder = styled.div`
    padding: 100px 17px;
    
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
    color: #666666;
`

export default HistoryPage;