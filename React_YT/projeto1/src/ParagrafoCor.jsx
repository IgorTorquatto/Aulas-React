import React from 'react'
import { useState } from 'react'

//Criar estados como uma espécie de "memória" dos componentes

function ParagrafoCor({cor}) {
    const [texto,setTexto] = useState("Um título do estado inicial")
  return (
    <div>
        <p style={{color: cor}}>{texto}</p>
        <button onClick={()=>{setTexto("Mudei via botão")}}>Mudar</button>
    </div>
  )
}

export default ParagrafoCor