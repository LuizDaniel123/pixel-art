import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-gap: 1px;
    height: 50vh;
    margin-top: 3rem;
    width: 50vh;

    div {
       background-color: silver;
    }

`;


export default Container;
