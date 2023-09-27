import React from 'react'
import Button from './Button'

const Header = (props)=> {
  const onClick = () => {
    console.log("click");
  }

  return (
   <>
   <header className='header'>
    <h1>{props.title}</h1>
    <Button color="green" text="button" onClick={onClick}/> {/*O ideal é criar a função onCLick aqui já que nem todo botão terá a mesma funcionalidade,logo passamos a função onclick como uma prop */}
   </header>
   </>
  )
}

export default Header