//(function () {
    const model = (function _model() {
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

        function Cat(name, linkImg, clickCount) {
            return {
                name,
                linkImg,
                clickCount
            };
        }

        function createCats(names, images) {
            let cats = [];
            for (let index = 0; index < names.length; index++) {
                const cat = Cat(names[index], images[index], 0);
                cats.push(cat);
            }
            return cats;
        }

        let cats = createCats(catNames, catImgLinks);

        return {
            getAllCats: _ => cats,
            
            getCat: function(id) {
                return cats[id];
            },

            increaseCounter: function(id) {
                cats[id].clickCount++;
            }
        };

    })();

    const octopus = (function _octopus() {
        let currentCat = model.getCat(0);
        return {
            init: function () {
                catListView.init(model.getAllCats());
                catListView.render();
                catDisplayView.display(model.getCat(0));
            },

            getCurrentCat: function(){
                return currentCat;
            },

            setCurrentCat: function(cat) {
                currentCat = cat;
            },

            increaseCat: function() {
                currentCat.clickCount++;
            }
        };
    })();

    const catListView = (function _catListView() {
        let domCatList = document.getElementById("catList");
        let catList = [];
        return {
            init: function(cats) {
                catList = cats;
                for (let index = 0; index < cats.length; index++) {
                    const catElem = cats[index];
                    let domUl = document.createElement("li");
                    domUl.textContent = catElem.name;
                    domCatList.insertAdjacentElement("beforeend", domUl);
                }
            },
            render: function() {
                let catNames = domCatList.getElementsByTagName("li");
                console.log("DEBU: render method");
                for (let index = 0; index < catNames.length; index++) {
                    const domCatName = catNames[index];
                    domCatName.addEventListener("click", function(cat){
                        return function(){
                            catDisplayView.display(cat);
                        };
                    }(catList[index]));
                }
            }
        };
    })();

    const catDisplayView = (function _catDisplayView() {
        let catArea = document.getElementById("catArea");
        let paragraphs = catArea.getElementsByTagName("p");
        let catPic = catArea.getElementsByTagName("img")[0];
        let dompCatText = paragraphs[0];
        let dompClickCount = paragraphs[1];
        let currentCat = octopus.getCurrentCat();

        catPic.addEventListener("click", function(){
            dompClickCount.innerText = `you have clicked ${++currentCat.clickCount} times`;
        });

        return {
            init: "",
            display: function(cat) {
                currentCat = cat;
                catPic.src = cat.linkImg;
                catPic.alt = cat.name;
                dompCatText.innerText = cat.name;
                dompClickCount.innerText = `you have clicked ${currentCat.clickCount} times`;   
            }
        };
    })();

    octopus.init();

//})();