import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["São Paulo", "Rio de Janeiro", "Curitiba"];

  //Capturar um evento de mouse
  const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> Não foi encontrado nenhum item</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active " // if true
                : "list-group-item" //if false
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
