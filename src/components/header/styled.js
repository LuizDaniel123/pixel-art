import styled from "styled-components";

const Container = styled.header`
    display: flex;
    position: absolute;
    padding: 1rem;
    top: 0;

    div {
        background-color: #202020;
        border-radius: 5px;
        height: 3rem;
        margin-right: 5px;
        width: 3rem;
        
    }

    div:nth-child(6) {
        margin-right: 0;
    }
`;

export default Container;
