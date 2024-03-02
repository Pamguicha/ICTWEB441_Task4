 //function mouseover and mouseout links menu bar

 const changeColorMenuBtn = document.querySelectorAll(".linksMenu");

 changeColorMenuBtn.forEach(color => {
  color.addEventListener("mouseover", function(){
  color.style.backgroundColor = "#00d0b7";
  color.style.padding = "16px";
 });

 color.addEventListener("mouseout", function(){
 color.style.backgroundColor = "#8c15e9";
 color.style.padding = "16px";
 });

});

//function mouseover and mouseout button checkoy

const changeColorCheckoutBtn = document.querySelector(".checkout");

changeColorCheckoutBtn.addEventListener("mouseover", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#8c15e9";
});

changeColorCheckoutBtn.addEventListener("mouseout", function(){
  changeColorCheckoutBtn.style.backgroundColor = "#00d0b7";
});


//function mouseover and mouseout search button

const btnSearchChange = document.querySelector(".btnSearchBar");

btnSearchChange.addEventListener("mouseover", function(){
  btnSearchChange.style.backgroundColor = "#f8f3ff";
  btnSearchChange.style.color = "#5928ed";
});

btnSearchChange.addEventListener("mouseout", function(){
  btnSearchChange.style.backgroundColor = "#00d0b7";
  btnSearchChange.style.color = "#f8f3ff";
});
