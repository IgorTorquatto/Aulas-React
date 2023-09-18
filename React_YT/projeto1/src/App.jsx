//Fazer o componente com o mesmo nome do arquivo:
import Titulo from "./Titulo"
import Paragrafo from "./Paragrafo"
import Texto from "./Texto"
import ParagrafoCor from "./ParagrafoCor"

function App(){
  return (

    <div>
      <Titulo/>
      <Paragrafo/>
      <Texto exemplo="Esse é um exemplo de props"/>
      <Texto/>
      <ParagrafoCor cor="red"/>
    </div>
  )
}

export default App