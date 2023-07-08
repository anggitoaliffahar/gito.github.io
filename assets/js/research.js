/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Make A Sciencetific reserch report",
    authors:
      "Anggito Alif Fahar Rifqi",
    conferences:
      "Make Indonesian language research with the topic of the use of information technoloogy in education, especially in the school environment.",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/img/Blog penelitian.jpg",
    citation: {
      moocLink: "https://bahasaindonesiaproposalsma.blogspot.com/2023/04/penggunaan-teknologi-dan-informasi.html",
    },
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="https://anggitoalifseaqis.blogspot.com/2023/04/penggunaan-teknologi-dan-informasi.html" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
