
const catNames = [
    "Pashmino",
    "Gauss",
    "Gardfield",
    "Meow",
    "Micifuz"
];
const catImgLinks = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

function Cat(name, linkImg) {
    return {
        name,
        linkImg
    };
}

function createCats(names, images) {
    let cats = [];
    for (let index = 0; index < names.length; index++) {
        const cat = Cat(names[index], images[index]);
        cats.push(cat);
    }
    return cats;
}

function generateDomCatList(cats, showCatFunc) {
    let domCatList = document.getElementById("catList");

    for (let index = 0; index < cats.length; index++) {
        let domUl = document.createElement("li");
        domUl.textContent = cats[index].name;
        domCatList.insertAdjacentElement("beforebegin", domUl);
        domUl.addEventListener("click", _ => showCatFunc(cats[index]));
    }

}

function showCatCount(cat) {
    let catArea = document.getElementById("catArea");
    // cleaning content
    catArea.innerHTML = "";
    let domp = document.createElement("p");
    domp.innerText = cat.name;
    catArea.insertAdjacentElement("afterbegin", domp);
    let catPic = document.createElement("img");
    catPic.src = cat.linkImg;
    catPic.alt = cat.name;
    catArea.insertAdjacentElement("beforeend", catPic);

    let dompCount = document.createElement("p");
    let clickCount = 0;

    catArea.addEventListener("click", function() {
        dompCount.innerText = `You have clicked ${++clickCount} times!`;
    });

    catArea.insertAdjacentElement("beforeend", dompCount);
}


let cats = createCats(catNames, catImgLinks);
generateDomCatList(cats, showCatCount);
document.getElementsByName("img");
