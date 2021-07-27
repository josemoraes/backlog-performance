import { renderComponents } from "./components";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";

const routes = {
  "/": Home,
  "new-project": NewProject,
};

const renderRoute = ($App) => {
  let currentPage = window.location.hash.replace("#", "");
  currentPage = currentPage.length ? currentPage : "/";
  $App.innerHTML = routes[currentPage]._getTemplate();
  if (routes[currentPage]._page_events) {
    routes[currentPage]._page_events();
  }
  renderComponents();
};

const navigator = {
  goToHome: () => {
    location.hash = "#";
  },
};

export { renderRoute, routes, navigator };
