const btnFilter = document.getElementById("btn-filter");
const btnCloseFilter = document.getElementById("btn-close-filter");
const filterList = document.getElementById("filter-list");
const locations = document.getElementById("locations");
const mobileMap = document.getElementById("mobile-map");

const viewList = document.getElementById("viewList");
const viewMap = document.getElementById("viewMap");

btnFilter.addEventListener("click", function () {
    filterList.style.display = "block";
    mobileMap.style.cssText = "display: none !important";
    locations.style.display = "none";
});

btnCloseFilter.addEventListener("click", showList);
viewList.addEventListener("click", showList);

viewMap.addEventListener("click", function () {
    viewMap.classList.add("active");
    viewList.classList.remove("active");
    filterList.style.display = "none";
    locations.style.display = "none";
    mobileMap.style.display = "block";
});

function showList() {
    viewList.classList.add("active");
    viewMap.classList.remove("active");
    filterList.style.display = "none";
    mobileMap.style.display = "none";
    locations.style.display = "block";
}
