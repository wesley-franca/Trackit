import styled from "styled-components";
import Context from '../../tools/Context.js';

import { useContext } from "react";

function Top() {
    const [profile] = useContext(Context);
    return (
        <Wrapper>
            <p>TrackIt</p>
            <img src={profile.image} alt="" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 15px;
    p{
        font-family: 'Playball', cursive;
        font-size: 39px;
        color: #FFFFFF;
    }
    img{
        height:50px;
        width: 50px;
        border-radius: 50%;
    }
`

export default Top;