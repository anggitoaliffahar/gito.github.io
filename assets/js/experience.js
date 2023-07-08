AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Seameo Qitep In Science Intership batch 3",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "SEAQIS, ITB ( Bandung )",
    time: "( 19 Juni, 2023 - 11 July 2023)",
    desp: "<li>Make a Portofolio web</li> <li>Make metaverse.</li> <li>Learn abaout public speaking in english.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Id camp digital summit 2022",
    subtitle: "Participation",
    image: "assets/images/idcamp-digital-summit-2022-certificate_page-0001.jpg",
    desp: "I'm the participation for id camp digital summit 2022 by dicoding and indosat ooredo.",
    href: "https://drive.google.com/file/d/1c_rWWdRGBx1ufAHQH7okoiA4EaiE1Lsg/view",
  },
  {
    title: "potency to be ios developer",
    subtitle: "Participation",
    image: "assets/images/potensi-karier-menjadi-ios-developer-di-masa-depan-certificate_page-0001.jpg",
    desp: "I'm the participation for dicoding event by theme of potency to be ios developer",
    href: "https://drive.google.com/file/d/12pzXrgkBnTU_VThVzCYjvyaJlorEELCv/view",
  },
  {
    title: " Dicoding webminar",
    subtitle: "Participation",
    image: "assets/images/line-indonesia-x-dicoding-webinar-engineering-solid-design-pattern-javascript-modules-and-current-updates-certificate_page-0001.jpg",
    desp: "I'm the participation for javascript engineer by dicoding and line Indonesia",
    href: "https://drive.google.com/file/d/11-CMuWtUDDgCeKBRc8MSua0YRz5ylfmq/view",
  },
  {
    title: "The kominfo event",
    subtitle: "Participation",
    image: "assets/images/91_page-0001.jpg",
    desp: "I'm the participation for ministry of communication and informatic in Indonesia event.",
    href: "https://drive.google.com/file/d/1x2ayj8FOobnGATFsPJ_VhYV0HM8vR42e/view",
  },
  {
    title: " Dicoding workshop",
    subtitle: "Participation",
    image: "assets/images/Screenshot 2023-06-26 155616.jpg",
    desp: "Webminar about how to make our product but the standart is unicorn startup",
    href: "https://drive.google.com/file/d/10fxKUVhBVrCjMJtjYPuLUG0fdzkJB1Ef/view?usp=sharing",
  },
  {
    title: "Dicoding Event",
    subtitle: "Participation",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Webminar about how to become the great software engineer ",
    href: "https://drive.google.com/file/d/1vb3LwZ4YCtotWjAA1RRQnWP7aSP08AZZ/view",
  },
  {
    title: "Dicoding event",
    subtitle: "Participation",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "Webminar about the strategy to become google cloud architect",
    href: "https://drive.google.com/file/d/1BGeYnLjmXDnjbfxVP3xZAEHSI8C-jDUZ/view",
  },
  {
    title: "Dicoding phyton class",
    subtitle: "Student ",
    image: "assets/images/experience-page/atlas.png",
    desp: " Take a courses about the phyton languange program.",
    href: "https://drive.google.com/file/d/1CGhIzCDSD6QdcnFxnxEWNP-M8GSr99UA/view",
  },
  {
    title: "ESQ Training",
    subtitle: "Participation ",
    image: "assets/images/experience-page/neo.png",
    desp: " Webminar training about how to become a good public speaker.",
    href: "https://drive.google.com/file/d/1zC-Az7EOsGA76xM4dORsW8BgycSVRcxR/view",
  },
  {
    title: "Dicoding excel class",
    subtitle: "Student ",
    image: "assets/images/experience-page/mission.png",
    desp: "Take the dicoding courses about how to use excel",
    href: "https://drive.google.com/file/d/1hxxBQEruh584Ag6XkXratz1fKz8r4dW6/view",
  },
  {
    title: "Dicoding Logical Programming class",
    subtitle: "Student",
    image: "assets/images/experience-page/hack3.png",
    desp: "Take the dicoding courses about logical programming.",
    href: "https://drive.google.com/file/d/1u5ljw-it3jP2PmtHZgxwrc7lzLnYv4c3/view",
  },
  {
    title: "Dicoding event",
    subtitle: "Participation",
    image: "assets/images/experience-page/jithack.png",
    desp: "Participation in dicoding event about what is it security role in devops",
    href: "https://drive.google.com/file/d/1GrSFaE72w3tkj8ZRskDgCQAHTuxg_une/view",
  },
  {
    title: "Dicoding event",
    subtitle: "Participation",
    image: "assets/images/experience-page/recess.png",
    desp: "Participation in dicoding event about how to incrase software delivery with CI/CD.",
    href: "https://drive.google.com/file/d/1NQPiGq6zqmjJyVwwO44wrkCbrUOB3S85/view",
  },
  {
    title: "Dicoding class data",
    subtitle: "Student",
    image: "assets/images/experience-page/citro.png",
    desp: "Student in dicoding courses about introduce data in programming</li>",
    href: "https://drive.google.com/file/d/1cBgzu8fLUutYhkqugbTlKPT5Mim1q2zN/view",
  },
  {
    title: "Dicoding class software developer",
    subtitle: "Student",
    image: "assets/images/experience-page/nhacks.png",
    desp: "Student in dicoding courses about what is software developer",
    href: "https://drive.google.com/file/d/1M9dOTbiRSjlxYQr3af3aFiKuTOjAjN7c/view",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
