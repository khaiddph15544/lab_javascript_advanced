import data from "../data";

const HomePage = {
    show: () => `<div>
                    <img src="https://picsum.photos/500/150" class="w-full m-auto pt-3" alt="" />
                 </div>
                 
                 <h3 class="font-bold text-2xl my-5 text-sky-900">TIN TỨC HỌC TẬP</h3>
                 <div class="grid grid-cols-3 gap-8">
                    ${data.show_post()}
                 </div>
                 <h3 class="font-bold text-2xl my-5 text-sky-900">HOẠT ĐỘNG SINH VIÊN</h3>
                 <div class="grid grid-cols-3 gap-8">
                    ${data.show_post()}
                 </div>
                 `,
};

export default HomePage;