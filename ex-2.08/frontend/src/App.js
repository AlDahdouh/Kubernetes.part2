import { Container } from "semantic-ui-react";
import InvertedMenu from "./components/InvertedMenu";
import MainBody from "./components/MainBody";
import React, { useState } from "react";
import DailyImage from "./components/DailyImage";
import Todos from "./components/Todos";

function App() {
  const [menu, setMenu] = useState({ activeItem: "home" });

  return (
    <Container>
      <InvertedMenu menu={menu} setMenu={setMenu} />
      <MainBody menu={menu} />
      <DailyImage menu={menu} />
      <Todos menu={menu} />
    </Container>
  );
}

export default App;
