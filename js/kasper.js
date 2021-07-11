/* For Change Colors */
let mainColor = localStorage.getItem("color-option-main"),
transColor = localStorage.getItem("color-option-trans"),
colors = document.querySelectorAll('.colors-list li');

if (mainColor !=null && transColor != null){

    document.documentElement.style.setProperty("--main-color", mainColor);
    document.documentElement.style.setProperty("--transparent-color", transColor);

    colors.forEach(element => {
        element.classList.remove('active');

        if (element.dataset.color == mainColor){
            element.classList.add('active');
        }
    });
}
// console.log(colors);
colors.forEach(li => {
    li.addEventListener("click", (e)=> {
        // console.log(e.target.dataset.color);
        // console.log(e.target.dataset.trans);
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        document.documentElement.style.setProperty("--transparent-color", e.target.dataset.trans);

        localStorage.setItem("color-option-main", e.target.dataset.color);
        localStorage.setItem("color-option-trans", e.target.dataset.trans);

        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});
/*End Change Colors */
/* Start Add Active Class To Links */
let links = document.querySelectorAll('.links-list li');
// console.log(links);
links.forEach(li => {

    li.addEventListener("click", (e)=> {
        // console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});