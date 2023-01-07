import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    flex-wrap: wrap;
    position: absolute;
    top: 2rem;

    div {
        border-radius: 5px;
        cursor: pointer;
        height: 3rem;
        width: 3rem;
        margin: 2px;
    }

    div:nth-child(6) {
        margin-right: 0;
    }

    div:hover {
        opacity: 60%;

    }
`;

export default Container;
