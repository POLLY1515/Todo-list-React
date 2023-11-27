import styled from 'styled-components';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";


//Obrigatorio o nome do componente ser com letra maiuscula
//Ordem de como usar o styled components,primeiro coloca o nome do componente sempre com letra maiuscula,depois = nome
// do import,na frente o que irei estilizar,ex: div,h1,h2,p,etc.
//Logo as estilização fica entre ``

 export const Container = styled.div`
    background: linear-gradient(90deg,#383838 0%,#000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TodoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;
 
    ul{
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    width: 342px;
    margin-right: 40px;
 

`


export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    border: none;
    color:#FFFFFF ;
    width: 130px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`

export const ListItem = styled.div`
    background:${props => props.isFinished ? '#E8FF8B': '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li{
        list-style: none;
    }

`

export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`

export const Check = styled(FcCheckmark)`
cursor: pointer;
`

export const Text = styled.h1`
    color: Blue;
    display: flex;
    justify-content: center;
    align-items: center;

`

//Quando vai exportar apenas um arquivo usa export default
//Quando é mais de um arquivo,não se usa default,mais usa se na importacao os {}