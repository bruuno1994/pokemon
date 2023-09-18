import styled from 'styled-components'

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 300px;
    margin: 0 auto;
`

export const ContainerSearch = styled.div`
    width: 300px;
    height: 100px;
`

export const Input = styled.input`
    width: 250px;
    height: 30px;
    border-radius: 5px;
    padding: 3px;
    border-color: orange;
`

export const Button = styled.button`
    color: red;
    background-color: yellow;
    border-color: orange;
    box-shadow: 3px 3px 5px orange;
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    width: 250px;

    &:hover {
    color: yellow;
    background-color: red;
    border-color: orange;
    box-shadow: 3px 3px 5px orange;
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    width: 250px;
    }
`   