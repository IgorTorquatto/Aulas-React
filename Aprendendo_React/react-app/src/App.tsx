import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["São Paulo", "Rio de Janeiro", "Curitiba"];
  return (
    <div>
      <ListGroup items={items} heading="Cidades" />
    </div>
  );
}

export default App;
