import Navigo from "navigo";
import Header from "./components/header";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Footer from "./components/footer";

const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

const render = (content) => {
    header.innerHTML = Header.show();
    main.innerHTML = content.show();
    footer.innerHTML = Footer.show();
};

const route = new Navigo("/", { linksSelector: "a" });

route.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
});

route.resolve();