import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Personal from "./Components/Personal/Personal";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Personal mode="edit" />
      <Skills />
      <div>
        <Button type="submit">Save</Button>
      </div>
    </div>
  );
};

export default App;
