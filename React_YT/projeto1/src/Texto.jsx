function Texto ({exemplo}){
 return(
    <div>
        <p><i>{exemplo ? exemplo : "Caiu no senão"}</i> aplicado </p>
    </div>
 )
}

export default Texto