import styled from "styled-components";

const Container = styled.header`
    display: flex;
    height: 5rem;
    width: 50vw;

    div {
        background-color: #202020;
        border-radius: 5px;
        margin-right: 1rem;
        height: 100%;
        width: 100%;
        
    }

    div:nth-child(6) {
        margin-right: 0;
    }
`;

export default Container;
