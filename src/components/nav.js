import data from "../data";

const Nav = {
    show: () => `<ul class="text-white flex" id="header_bottom">
                    ${data.showmenu()}
                 </ul>`,
};

export default Nav;