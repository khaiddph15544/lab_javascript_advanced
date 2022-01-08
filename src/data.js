const menu = [
    {
        name: "Trang chủ",
        link: "/",
    },
    {
        name: "Tuyển sinh",
        link: "/about",
    },
    {
        name: "Chương trình đào tạo",
        link: "/",
    },
    {
        name: "Góc sinh viên",
        link: "/",
    },
    {
        name: "Tuyển dụng",
        link: "/",
    },

];

const news = [
    {
        image: "https://picsum.photos/150/100",
        title: "Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2018",
        content: "Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh Ong vàng Poly, tuyên dương 295 cá nhân và 05 CLB có thành tích xuất sắc trong học tập cũng như hoạt",
    },
    {
        image: "https://picsum.photos/150/100",
        title: "Sinh viên khối ngành Kinh tế cách “chạm” vào cảm xúc khách hàng",
        content: "Với sự tham gia của chuyên gia trong lĩnh vực kinh doanh, chương trình đã thu hút đông đảo sinh viên Cao đẳng FPT Polytechnic tham dự. Đặc biệt các bạn sinh viên bị lôi cuốn bởi",
    },
    {
        image: "https://picsum.photos/150/100",
        title: "Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh Luxury",
        content: "Với triết lý đào tạo “Thực học – Thực nghiêp”, Cao đẳng FPT Polytechnic Đà Nẵng thường xuyên tổ chức cho sinh viên tham quan các đơn vị doanh nghiệp",
    },
];

const data = {
    showmenu: () => menu.map((m) => `
                                        <li class="display: inline;"><a href="${m.link}" class="m-5 hover:border-b-2">${m.name}</a></li>
                                    `).join(""),

    show_post: () => news.map((element) => `<div class="px-5 border border-red-300 py-3">
                                                <img src="${element.image}" class="w-full m-auto py-3" alt="" />
                                                <h4 class="text-lg font-bold text-orange-700"> ${element.title}</h4>
                                                <p class="mt-5 text-sm">${element.content}</p>
                                            </div>`).join(""),
};

export default data;