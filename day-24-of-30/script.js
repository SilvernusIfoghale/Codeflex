const divContainer = document.querySelector(".flag-container");
const btn = document.querySelector(".btnEl");
const div = document.createElement("div");

const url = "https://restcountries.com/v3.1/all";

btn.addEventListener("click", () => {
  fetchData();
});

//Query and Search Functionality
const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const result = data;
      const returnedResult = result
        .map(
          (data) => `
      <div class="single-card">
              <div class="img-container">
                <img src=${data.flags.png} alt="" />
              </div>
              <div class="text-container">
                <p class="country">${data.name.common}</p>
                <p><b>Population:</b> <span>${data.population.toLocaleString(
                  "en-Us"
                )} </span></p>
                <p><b>Region:</b> <span>${data.region}</span></p>
                <p><b>Capital:</b> <span>${data.capital}</span></p>
              </div>
            </div>
      `
        )
        .join("");
      divContainer.innerHTML = returnedResult;
    });
};
