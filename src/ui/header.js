import MenuIcon from "../assets/menu.svg";

const createHeader = () => {
  const header = document.createElement("header");

  const menuButton = document.createElement("button");
  menuButton.id = "menu-button";
  const menuIcon = new Image();
  menuIcon.src = MenuIcon;

  menuButton.appendChild(menuIcon);

  const appName = document.createElement("h1");
  appName.textContent = "ToDoList";

  header.appendChild(menuButton);
  header.appendChild(appName);

  return header;
};

export default createHeader;
