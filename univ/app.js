let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector(".search-btn")
let ol = document.querySelector("ol"); 
let country =""; 

btn.addEventListener("click",async ()=>{
    ol.innerText= "" ;
    country= document.querySelector("input").value 
    console.log("Button Clicked")
    console.log(country); 
    let collegeArray = await searchCollege(country); 
    show(collegeArray); 
    console.log(collegeArray); 

})
function show(arr){ 
    for(let a of arr){ 
      // let li = document.createElement("li"); 
      let li = document.createElement("li"); 
      li.innerText = a.name; 
      ol.appendChild(li) 
    } 
  } 


async function searchCollege (country){ 
    try{ 
      let res = await axios.get(url+country); 
      return res.data; 
    }catch(e){ 
      console.log("Error:",e); 
      return [] 
    } 
  }