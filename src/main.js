

function catClicker(id, domSection, catName, img) {
    domSection.innerHTML = `<p>${catName}</p>
    <img id="catPicture_${id}" src="${img}" alt="cat picture">
    <p></p>`;
    let clickCounter = 0;
    let catElem = document.getElementById(`catPicture_${id}`);
    catElem.addEventListener("click", function(){
        let clickCounterSection = document.getElementById(`counter${id}`);
        clickCounterSection.innerHTML = `<p>You have Clicked ${++clickCounter} times</p>`;
    });
}

let domSection1 = document.getElementById("catClicker1");
let domSection2 = document.getElementById("catClicker2");

catClicker(1, domSection1, "Gauss", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426");
catClicker(2, domSection2, "Pashmino", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496");