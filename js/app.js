const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
const paragraph = document.querySelector(".animated-paragraph");
text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.05}s`;
  paragraph.appendChild(span);
});

const texts = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
const paragraphs = document.querySelector(".animate-paragraph");
text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${index * 0.05}s`;
  paragraphs.appendChild(span);
});


$(".slider-logos").slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
