var data = [
  {
    title: "Deep earth",
    images: {
      mobile: "./images/mobile/image-deep-earth.jpg",
      desktop: "./images/desktop/image-deep-earth.jpg"
    },
  },
  {
    title: "Night arcade",
    images: {
      mobile: "./images/mobile/image-night-arcade.jpg",
      desktop: "./images/desktop/image-night-arcade.jpg"
    },
  },
  {
    title: "Soccer team VR",
    images: {
      mobile: "./images/mobile/image-soccer-team.jpg",
      desktop: "./images/desktop/image-soccer-team.jpg"
    },
  },
  {
    title: "The grid",
    images: {
      mobile: "./images/mobile/image-grid.jpg",
      desktop: "./images/desktop/image-grid.jpg"
    },
  },
  {
    title: "From up above VR",
    images: {
      mobile: "./images/mobile/image-from-above.jpg",
      desktop: "./images/desktop/image-from-above.jpg"
    },
  },
  {
    title: "Pocket borealis",
    images: {
      mobile: "./images/mobile/image-pocket-borealis.jpg",
      desktop: "./images/desktop/image-pocket-borealis.jpg"
    },
  },
  {
    title: "The curiosity",
    images: {
      mobile: "./images/mobile/image-curiosity.jpg",
      desktop: "./images/desktop/image-curiosity.jpg"
    },
  },
  {
    title: "Make it fisheye",
    images: {
      mobile: "./images/mobile/image-fisheye.jpg",
      desktop: "./images/desktop/image-fisheye.jpg"
    },
  },
];

// References
const worksList = document.querySelector(".works-list");
const mobileMenu = document.querySelector(".navbar nav");
const btnMenu = document.querySelector(".btn-menu");

window.onload = () => {
  worksList.append(...makeList());

  btnMenu.addEventListener("click", toggleMobileMenu);
};

// Functions
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

  let imgMobile = document.createElement("img");
  imgMobile.classList.add('img-mobile');
  imgMobile.src = `${item.images.mobile}`;
  imgMobile.alt = "";

  let imgDesktop = document.createElement("img");
  imgDesktop.classList.add('img-desktop');
  imgDesktop.src = `${item.images.desktop}`;
  imgDesktop.alt = "";

  div.append(imgMobile, imgDesktop, gradient, h2);

  return div;
};

const toggleMobileMenu = () => {
  if (mobileMenu.className.includes("menu-open")) {
    btnMenu.style.backgroundImage = "url('./images/icon-hamburger.svg')";
    mobileMenu.classList.remove('menu-open');
  } else {
    btnMenu.style.backgroundImage = "url('./images/icon-close.svg')";
    mobileMenu.classList.add("menu-open"); 
  } 
}; 