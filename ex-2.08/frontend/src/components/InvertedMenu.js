import React from "react";
import { Menu } from "semantic-ui-react";

function InvertedMenu({ menu, setMenu }) {
  const handleItemClick = (e, { name }) => {
    setMenu({ activeItem: name });
  };
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={menu === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="daily image"
        active={menu === "daily image"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="todos"
        active={menu === "todos"}
        onClick={handleItemClick}
      />
    </Menu>
  );
}

export default InvertedMenu;
