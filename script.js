var data = [
    {
        title: "Deep earth",
        image: "./images/mobile/image-deep-earth.jpg"
    },
    {
        title: "Night arcade",
        image: "./images/mobile/image-night-arcade.jpg"
    },
    {
        title: "Soccer team VR",
        image: "./images/mobile/image-soccer-team.jpg"
    },
    {
        title: "The grid",
        image: "./images/mobile/image-grid.jpg"
    },
    {
        title: "From up above VR",
        image: "./images/mobile/image-from-above.jpg"
    },
    {
        title: "Pocket borealis",
        image: "./images/mobile/image-pocket-borealis.jpg"
    },
    {
        title: "The curiosity",
        image: "./images/mobile/image-curiosity.jpg"
    },
    {
        title: "Make it fisheye",
        image: "./images/mobile/image-fisheye.jpg"
    }
];


var worksList = document.querySelector('.works-list'); 


window.onload = () => {
    worksList.append(...makeList());
};


const makeList = () => {
    return data?.map((item) => makeListItem(item));
};

const makeListItem = (item) => {

    let div = document.createElement("div");
    div.className = "list-item";

    let gradient = document.createElement("div");
    gradient.className = "gradient";

    let h2 = document.createElement("h2");
    h2.innerText = `${item.title}`;

    let img = document.createElement("img");
    img.src = `${item.image}`;
    img.alt = '';

    div.append(img, gradient, h2);

    return div;
};