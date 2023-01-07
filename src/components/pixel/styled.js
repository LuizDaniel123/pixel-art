import styled from 'styled-components'

const Container = styled.main`
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-gap: 1px 1px;
    margin-top: 3rem;

    div {
       background-color: silver;
       width: 5rem;
       height: 5rem;
       border-radius: 5px;
    }

`;


export default Container;
