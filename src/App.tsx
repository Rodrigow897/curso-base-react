import { useState } from "react";


export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer cafe', complete: false },
    { id: '2', label: 'Fazer cafe', complete: false },
    { id: '3', label: 'Fazer almoço', complete: false },
    { id: '4', label: 'Fazer janta', complete: false },
  ]);

  return (
    <div>
      
      <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
      <button onClick={() => {setList([
        ...list, { id: String(list.length + 1), label: value, complete: false}
      ]);
      setValue('');
      }} >Adicionar</button>

      <ol>
        {list.map((listitem) => (
          <li key={listitem.id}>
            {listitem.label}

            {listitem.complete ? <span>(concluido)</span> : ''}
          
          <button onClick={()=>{
              setList(list.map(item =>({...item, complete: item.id === listitem.id ? true : item.complete})))}}>
              Concliur
            </button>

            <button onClick={()=>{
              setList(list.filter(item => item.id !== listitem.id))}}>
              Remover
            </button>
          </li>
        ))}
      </ol>
    </div>  
  )
}