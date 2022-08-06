import Footer from "./Bars/Footer.js";
import Top from "./Bars/Top.js";

import styled from "styled-components";

function HabitPage() {
    return (
        <>
            <Top />
            <Holder>
                <p>Meus hábitos</p>
            </Holder>
            
            <Footer />
        </>
    )
}

const Holder = styled.div`
    margin: 70px 17px;
`

export default HabitPage;