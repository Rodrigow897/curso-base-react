import { useState } from "react";


export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer cafe' },
    { id: '2', label: 'Fazer cafe' },
    { id: '3', label: 'Fazer almoço' },
    { id: '4', label: 'Fazer janta' },
  ]);

  return (
    <div>
      
      <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
      <button onClick={() => {setList([
        ...list, { id: String(list.length + 1), label: value }
      ]);
      setValue('');
      }} >Adicionar</button>

      <ol>
        {list.map((listitem) => (
          <li key={listitem.id}>{listitem.label}</li>
        ))}
      </ol>
    </div>  
  )
}