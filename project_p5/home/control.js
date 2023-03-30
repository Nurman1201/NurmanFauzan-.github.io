// AWAL CONTROL SIDE BAR
$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
$('.feat-btn').click(function () {
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});

$('.serv-btn').click(function () {
    $('nav ul .serv-show').toggleClass("show");
    $('nav ul .second').toggleClass("rotate");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});
// AKHIR CONTROL SIDE BAR
// AWAL CONTROL SEARCH BAR
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {

        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar', 'search-button');
// AKHIR CONTROL SEARCH BAR
// AWAL CONTROL SEARCH BAR
$('.bar1-btn').click(function () {
    $('menu1 ul .bar1-show').toggleClass("tampil");
});