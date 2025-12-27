function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("show");
}

const page = location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link=>{
  if(link.getAttribute("href")===page){
    link.classList.add("active");
  }
});
