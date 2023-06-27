let userCards = document.getElementById("userCards");
const btnSuivant = document.getElementById("pageSuivante");
const btnPrecedent = document.getElementById("pagePrecedente");
const btnActuel = document.getElementById("pageActuelle");

let page = 1;

const getData = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      userCards.innerHTML += `
        <div class="user">
            <img src="${data.data[i].avatar}" alt="" />
            <p class="id">#id ${data.data[i].id}</p>
            <p class="name">${data.data[i].first_name}</p>
            <p class="name">${data.data[i].last_name}</p>
            <a href="mailto:${data.data[i].email} class="email">${data.data[i].email}</a>
        </div>`;
    }
    if (page >= data.total_pages) {
      btnSuivant.style.display = "none";
    } else {
      btnSuivant.style.display = "flex";
      }
      
    if (page === 1) {
      btnPrecedent.style.display = "none";
    } else {
      btnPrecedent.style.display = "flex";
      }
      
  } catch (error) {
    console.log("ERROR");
  }
};

getData(1);

btnSuivant.addEventListener("click", () => {
    page += 1;
    userCards.innerHTML = "";
    btnActuel.innerText = `${page}`
    getData();
  }
);

btnPrecedent.addEventListener("click", () => {
    page -= 1;
    userCards.innerHTML = "";
    btnActuel.innerText = `${page}`;
    getData();
  }
);
