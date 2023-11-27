import { useState } from "react";
import { v4 as uuid } from "uuid";


import { Button, Container, Input, ListItem, TodoList,Trash,Check,Text } from "./styles";

function App() {
  //A  list ser  variavel,e a setList servira para alterar o valor de list
  //Por padrao,sempre colocara o nome set na frente da variavel
  // Dentro dos parenteses do useState,fica o  valor inicial

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function inputChanged(event) {
    setTask(event.target.value);
  }

  function clickedButton() {
    if(task){
      setList([...list, { id: uuid(), task, finished: false }]);
    }
     //Quando a chave e valor for o mesmo nome não é necessario repetir o nome
  }

  function finishedTodo(id){

    const newList = list.map(item => (//Aqui no caso,se o item for igual ao id procurado,apenas
    //ira esparramar o item inteiro na tela e mudar apenas o finished para true,e caso não seja
    //o id,o item fica como esta
      item.id === id ? {...item, finished: !item.finished } : item
    ));
        setList(newList);
    }

    function deletItem(id){
      const newList = list.filter((item) => item.id !== id)
      setList(newList);
    }

  return (
    //Todo componente react pode retornar apenas um elemento html
    //O fragment pode ser usado apenas para cumprir a regra,no caso de não querer usar div
    //<></>esse é o fragment
    //onchange,toda vez que há uma mudança
    //O javascript dentro do html deve ser escrito dentro de {}
    //O event passa as informaçoes
    //Para encontrar o valor  que esta dentro do input usa-se event.target.value
    //Onclick,quando o evento for clicado
    //a chave key sempre fica no componente pai 

    <Container>
      <TodoList>
        <Input onChange={inputChanged} placeholder="O que tenho para fazer" />
        <Button onClick={clickedButton}>Adicionar</Button>

        <ul>
          
           { 
           
          list.length > 0 ? (
            list.map((item) => (
              <>
                <ListItem isFinished = {item.finished} key={item.id}>
                <Check onClick={() => finishedTodo(item.id)}/>
                <li >{item.task}</li>
                <Trash onClick={() => deletItem(item.id)}/>
                </ListItem>
              </>
            ))

           ) : (
            <Text>Não há itens na lista</Text>
           )}
           
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
