
var elNavItems = document.querySelectorAll(".sitenav__item");
var elNavLinks = document.querySelectorAll(".sitenav__link");

elNavLinks.forEach((link) => {
    link.addEventListener("click", function(){
        elNavItems.forEach(function(item){
            item.classList.remove("sitenav__item--active");
        })

        link.parentElement.classList.add("sitenav__item--active");
    })
})

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(item of arr){
//     console.log(item)
// }

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item){
//     console.log(item);
// });


