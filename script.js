// =======================
// 📦 ข้อมูลสินค้า
// =======================

const products = [

/* ================= MAINBOARD ================= */

{
id:1,
name:"Asus TUF GAMING B860M PLUS WiFi DDR5 LGA1851",
price:7990,
category:"Mainboard",
brand:"ASUS",
image:"images/1.jpg"
},

{
id:2,
name:"Asus B760M-AYW WIFI DDR5 LGA1700 Micro ATX",
price:5290,
category:"Mainboard",
brand:"ASUS",
image:"images/2.jpg"
},

{
id:3,
name:"Asus ROG STRIX B850-I GAMING WIFI AM5",
price:8990,
category:"Mainboard",
brand:"ASUS",
image:"images/3.jpg"
},

{
id:4,
name:"MSI MPG Z890 EDGE TI WIFI DDR5",
price:12990,
category:"Mainboard",
brand:"MSI",
image:"images/4.jpg"
},

{
id:5,
name:"ASRock X870 STEEL LEGEND WIFI AM5",
price:10990,
category:"Mainboard",
brand:"ASRock",
image:"images/5.jpg"
},

{
id:6,
name:"Gigabyte H310M-H DDR4",
price:2490,
category:"Mainboard",
brand:"Gigabyte",
image:"images/6.jpg"
},

{
id:7,
name:"MSI PRO B860 P DDR5",
price:5590,
category:"Mainboard",
brand:"MSI",
image:"images/7.jpg"
},

{
id:8,
name:"MSI PRO B860 P WIFI DDR5",
price:5990,
category:"Mainboard",
brand:"MSI",
image:"images/8.jpg"
},

{
id:9,
name:"MSI MAG B860M MORTAR WIFI DDR5",
price:7290,
category:"Mainboard",
brand:"MSI",
image:"images/9.jpg"
},

{
id:10,
name:"MSI PRO H610M-S DDR4",
price:2290,
category:"Mainboard",
brand:"MSI",
image:"images/10.jpg"
},

{
id:11,
name:"ASRock B760M HDV/M.2 DDR5",
price:4590,
category:"Mainboard",
brand:"ASRock",
image:"images/11.jpg"
},

/* ================= RAM ================= */

{
id:12,
name:"PNY XLR8 Gaming EPIC-X RGB 16GB",
price:1990,
category:"RAM",
brand:"PNY",
image:"images/12.jpg"
},

{
id:13,
name:"Kingston FURY BEAST 16GB DDR4 3600",
price:2190,
category:"RAM",
brand:"Kingston",
image:"images/13.jpg"
},

{
id:14,
name:"KLEVV BOLT X 16GB DDR4 3200",
price:1790,
category:"RAM",
brand:"KLEVV",
image:"images/14.jpg"
},

{
id:15,
name:"Kingston FURY BEAST 16GB DDR4 3600",
price:2190,
category:"RAM",
brand:"Kingston",
image:"images/15.jpg"
},

/* ================= CPU ================= */

{
id:16,
name:"Intel Core Ultra 5 225F",
price:9990,
category:"CPU",
brand:"Intel",
image:"images/16.jpg"
},

{
id:17,
name:"Intel Core i9-14900F",
price:18990,
category:"CPU",
brand:"Intel",
image:"images/17.jpg"
},

{
id:18,
name:"AMD Ryzen 5 7500F",
price:6290,
category:"CPU",
brand:"AMD",
image:"images/18.jpg"
},

{
id:19,
name:"Intel Core i5-9500",
price:3990,
category:"CPU",
brand:"Intel",
image:"images/19.jpg"
},

{
id:20,
name:"AMD Ryzen 9 9950X3D",
price:26990,
category:"CPU",
brand:"AMD",
image:"images/20.jpg"
},

/* ================= GPU ================= */

{
id:21,
name:"Asus TUF Gaming RTX 5060 Ti 16GB",
price:18990,
category:"GPU",
brand:"ASUS",
image:"images/21.jpg"
},

{
id:22,
name:"Asus PRIME RTX 5070 12GB White",
price:21990,
category:"GPU",
brand:"ASUS",
image:"images/22.jpg"
},

{
id:23,
name:"Asus PRIME RTX 5050 8GB",
price:12990,
category:"GPU",
brand:"ASUS",
image:"images/23.jpg"
},

{
id:24,
name:"Asus PRIME RX 9060 XT 16GB",
price:17990,
category:"GPU",
brand:"ASUS",
image:"images/24.jpg"
},

{
id:25,
name:"Asus PRIME RTX 5060 Ti 8GB",
price:15990,
category:"GPU",
brand:"ASUS",
image:"images/25.jpg"
},

/* ================= PSU ================= */

{
id:26,
name:"ASUS ROG THOR 1000W Platinum",
price:10990,
category:"PowerSupply",
brand:"ASUS",
image:"images/26.jpg"
},

{
id:27,
name:"ASUS ROG STRIX 850W Gold",
price:5490,
category:"PowerSupply",
brand:"ASUS",
image:"images/27.jpg"
},

{
id:28,
name:"ASUS TUF Gaming 450W Bronze",
price:1890,
category:"PowerSupply",
brand:"ASUS",
image:"images/28.jpg"
},

{
id:29,
name:"ASUS TUF Gaming 1000W Gold",
price:6990,
category:"PowerSupply",
brand:"ASUS",
image:"images/29.jpg"
},

{
id:30,
name:"ASUS ROG LOKI 850W Platinum",
price:7990,
category:"PowerSupply",
brand:"ASUS",
image:"images/30.jpg"
},

/* ================= CASE ================= */

{
id:31,
name:"Asus Prime AP202 ARGB mATX",
price:2490,
category:"Case",
brand:"ASUS",
image:"images/31.jpg"
},

{
id:32,
name:"Asus PRIME AP201 mATX",
price:1990,
category:"Case",
brand:"ASUS",
image:"images/32.jpg"
},

{
id:33,
name:"ASUS A21 Micro-ATX",
price:1790,
category:"Case",
brand:"ASUS",
image:"images/33.jpg"
},

{
id:34,
name:"Asus TUF Gaming GT301 ATX",
price:2690,
category:"Case",
brand:"ASUS",
image:"images/34.jpg"
},

{
id:35,
name:"Zalman P30 Mini Tower",
price:1590,
category:"Case",
brand:"Zalman",
image:"images/35.jpg"
},

/* ================= HDD ================= */

{
id:36,
name:"WD My Passport 1TB External",
price:1990,
category:"HDD",
brand:"WD",
image:"images/36.jpg"
},

{
id:37,
name:"WD My Passport 1TB White",
price:1990,
category:"HDD",
brand:"WD",
image:"images/37.jpg"
},

{
id:38,
name:"โน๊ตบุ๊ค Asus ROG Strix G16 G615LW-S5194W Ultra9 Volt Green",
price:79990,
category:"laptop",
brand:"ASUS",
image:"images/38.jpg"
},

{
id:39,
name:"โน๊ตบุ๊ค Asus ROG Strix G16 G615JHR-S5029W i7 Gen14 สีเทา",
price:65990,
category:"laptop",
brand:"ASUS",
image:"images/39.jpg"
},

{
id:40,
name:"โน๊ตบุ๊ค Asus ROG Strix G16 G615LP-S5041W Ultra9 Volt Green",
price:82990,
category:"laptop",
brand:"ASUS",
image:"images/40.jpg"
},

{
id:41,
name:"โน๊ตบุ๊ค Asus ROG Zephyrus G14 GA403UH Ryzen 9",
price:75990,
category:"laptop",
brand:"ASUS",
image:"images/41.jpg"
},

{
id:42,
name:"โน๊ตบุ๊ค Asus ROG Strix G614PM Ryzen 9 Eclipse Gray",
price:69990,
category:"laptop",
brand:"ASUS",
image:"images/42.jpg"
},

{
id:43,
name:"โน๊ตบุ๊ค Asus ROG Strix G16 G614FH Ryzen 9",
price:67990,
category:"laptop",
brand:"ASUS",
image:"images/43.jpg"
},

{
id:44,
name:"คอมตั้งโต๊ะ Asus V500 Mini Tower i5 Gen13",
price:19990,
category:"pc",
brand:"ASUS",
image:"images/44.jpg"
},

{
id:45,
name:"Asus ExpertCenter D7 SFF i5 Gen14",
price:23990,
category:"pc",
brand:"ASUS",
image:"images/45.jpg"
},

{
id:46,
name:"Asus ExpertCenter PM700SK Ryzen 5",
price:17990,
category:"pc",
brand:"ASUS",
image:"images/46.jpg"
},

{
id:47,
name:"Asus ExpertCenter PM700MK Ryzen 5",
price:16990,
category:"pc",
brand:"ASUS",
image:"images/47.jpg"
},

{
id:48,
name:"Printer HP Smart Tank 520",
price:4590,
category:"printer",
brand:"HP",
image:"images/48.jpg"
},

{
id:49,
name:"Printer HP Smart Tank 580",
price:5590,
category:"printer",
brand:"HP",
image:"images/49.jpg"
},

{
id:50,
name:"Printer HP Smart Tank 750",
price:7590,
category:"printer",
brand:"HP",
image:"images/50.jpg"
},

{
id:51,
name:"Printer Epson L3210",
price:4390,
category:"printer",
brand:"EPSON",
image:"images/51.jpg"
},

{
id:52,
name:"Printer Brother MFC-J2340DW",
price:9990,
category:"printer",
brand:"BROTHER",
image:"images/52.jpg"
},

{
id:53,
name:"Brother Toner TN-2560XL",
price:1990,
category:"accessory",
brand:"BROTHER",
image:"images/53.jpg"
},

{
id:54,
name:"HP Ink 680 Black",
price:590,
category:"accessory",
brand:"HP",
image:"images/54.jpg"
},

{
id:55,
name:"Monitor Asus PA329CRV 4K 31.5 IPS",
price:32990,
category:"monitor",
brand:"ASUS",
image:"images/55.jpg"
},

{
id:56,
name:"Monitor Asus VA27EHF 27 IPS 100Hz",
price:3990,
category:"monitor",
brand:"ASUS",
image:"images/56.jpg"
},

{
id:57,
name:"Monitor Asus ROG Swift OLED 32 240Hz",
price:49990,
category:"monitor",
brand:"ASUS",
image:"images/57.jpg"
},

{
id:58,
name:"Asus ROG Ally X Handheld",
price:32990,
category:"console",
brand:"ASUS",
image:"images/58.jpg"
},

{
id:59,
name:"Asus ROG Ally Handheld",
price:24990,
category:"console",
brand:"ASUS",
image:"images/59.jpg"
},

{
id:60,
name:"Nintendo Switch 2 Console",
price:18990,
category:"console",
brand:"NINTENDO",
image:"images/60.jpg"
},

{
id:61,
name:"Smartphone Asus ROG 9 FE",
price:29990,
category:"tablet",
brand:"ASUS",
image:"images/61.jpg"
},

{
id:62,
name:"Tablet Lenovo Idea Tab Pro",
price:14990,
category:"tablet",
brand:"LENOVO",
image:"images/62.jpg"
},

{
id:63,
name:"Tablet Lenovo Legion Tab Gen3",
price:18990,
category:"tablet",
brand:"LENOVO",
image:"images/63.jpg"
},

{
id:64,
name:"โปรโมชั่นพิเศษ ลดราคาสินค้า",
price:0,
category:"promotion",
brand:"PROMO",
image:"images/64.jpg"
},
];


// =======================
// 📄 Pagination
// =======================

let currentPage = 1;
const perPage = 9;

let currentList = products;
let currentCategory = "all";


// =======================
// 🛍️ โหลดสินค้า
// =======================

function loadProducts(list){

const div =
document.getElementById("products");

if(!div) return;

div.innerHTML = "";


/* คำนวณสินค้าในหน้า */

const start =
(currentPage - 1) * perPage;

const end =
start + perPage;

const showList =
list.slice(start,end);


/* แสดงสินค้า */

showList.forEach(p=>{

div.innerHTML += `

<div class="card">

<img src="${p.image}"
class="product-img">

<h3>${p.name}</h3>

<p class="price">
${p.price.toLocaleString()} บาท
</p>

<button onclick="viewProduct(${p.id})">
ดูสินค้า
</button>

</div>

`;

});


/* สร้างเลขหน้า */

createPagination(list);

}



// =======================
// 🔢 Pagination
// =======================

function createPagination(list){

let old =
document.getElementById("pagination");

if(old) old.remove();


const totalPage =
Math.ceil(list.length / perPage);


const pageDiv =
document.createElement("div");

pageDiv.id = "pagination";

/* style */

pageDiv.style.textAlign = "center";
pageDiv.style.margin = "40px 0";


for(let i=1;i<=totalPage;i++){

pageDiv.innerHTML += `

<button onclick="goPage(${i})"
style="
margin:5px;
padding:10px 14px;
background:orange;
color:white;
border:none;
cursor:pointer;
border-radius:6px;
">

${i}

</button>

`;

}


/* ใส่ล่างสุดของหน้า */

document.body.appendChild(pageDiv);

}



// =======================
// 👉 เปลี่ยนหน้า
// =======================

function goPage(page){

currentPage = page;

loadProducts(currentList);

/* เลื่อนขึ้นด้านบน */

window.scrollTo({
top:0,
behavior:"smooth"
});

}



// =======================
// 🔍 Filter หมวดหมู่
// =======================

function filter(cat){

currentCategory = cat;

currentPage = 1;

if(cat === "all"){

currentList = products;

loadProducts(products);

updateBrandButtons(products);

return;

}

const filtered =
products.filter(p =>
p.category === cat
);

currentList = filtered;

loadProducts(filtered);

updateBrandButtons(filtered);

}



// =======================
// 🔍 Filter ยี่ห้อ
// =======================

function filterBrand(brand){

currentPage = 1;

let list = products;

if(currentCategory !== "all"){

list =
products.filter(p =>
p.category === currentCategory
);

}

const filtered =
list.filter(p =>
p.brand === brand
);

currentList = filtered;

loadProducts(filtered);

}



// =======================
// 🏷️ ปุ่มยี่ห้อ
// =======================

function updateBrandButtons(list){

const brandBox =
document.getElementById("brandBox");

if(!brandBox) return;


const brands =
[...new Set(
list.map(p => p.brand)
)];

brandBox.innerHTML = "";


brands.forEach(b=>{

brandBox.innerHTML += `

<button onclick="filterBrand('${b}')">
${b}
</button>

`;

});

}



// =======================
// 💰 Filter ราคา
// =======================

function cheap(){

currentPage = 1;

const filtered =
products.filter(p =>
p.price < 10000
);

currentList = filtered;

loadProducts(filtered);

}



// =======================
// 🔗 ไปหน้าสินค้า
// =======================

function viewProduct(id){

const product =
products.find(p =>
p.id === id
);

localStorage.setItem(
"product",
JSON.stringify(product)
);

window.location.href =
"product.html";

}



// =======================
// 🔎 SEARCH (เพิ่มให้แล้ว)
// =======================

const searchInput =
document.querySelector(".search");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const keyword =
this.value.toLowerCase();

currentPage = 1;

const filtered =
products.filter(p =>
p.name.toLowerCase().includes(keyword)
);

currentList = filtered;

loadProducts(filtered);

});

}



// =======================
// โหลดตอนเปิดเว็บ
// =======================

if(document.getElementById("products")){

currentList = products;

loadProducts(products);

updateBrandButtons(products);

}