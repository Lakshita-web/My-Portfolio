alert("Please zoom out your webpage to 100% for better viewing experience")
let NAME = document.getElementById("name");
NAME.innerText= "<LAKSHITA KADAM>";
console.log("hello user");

let navbar =  document.querySelector(".navbar")

let mode = document.querySelector("#mode");
let currentmode = "light";

mode.addEventListener("click",()=>{
    if (currentmode==="light") {
        currentmode="dark";
        document.querySelector("header").style.backgroundColor = "#291600";   
        document.querySelector("#options").style.backgroundColor = "#291600"; 
         document.querySelector("section").style.backgroundImage= "url('https://raw.githubusercontent.com/Lakshita-web/image-hosting/refs/heads/main/bg.png')"; 
             document.querySelector("section").style.backgroundSize = "cover";  
             document.querySelector("section").style.paddingTop= "70px";
             document.querySelector("#About_Me").style.backgroundColor = "#ffeccf";
             document.querySelector("#intro").style.backgroundColor ="#ffeccf";
             document.querySelector(".description").style.backgroundColor = "#ffeccf";
             document.querySelector(".description").style.color = "black";
             document.querySelector(".description_").style.backgroundColor ="#ffeccf";
             document.querySelector(".description_").style.color = "black";
             document.querySelector("#projects").style.backgroundColor = "#ffeccf";
             document.querySelector("#projects").style.color = "black";
             document.querySelector("h1").style.color = "black";
             document.querySelector("#heading").style.color = "black";
             document.querySelector("#About_Me").style.color = "black";
             document.querySelector("#intro").style.color = "black";
             document.querySelector("p").style.color = "black";
             document.querySelector("#beginner").style.color = "black";
             document.querySelector("#beginner").style.paddingLeft = "21rem";
             document.querySelector("h1").style.paddingLeft = "25rem";
             document.querySelector("h1").style.paddingRight = "30rem";
             document.querySelector("#My_Works").style.backgroundColor ="#ffeccf";
             document.querySelector("#My_Works").style.color = "black";
             document.querySelector("h4").style.backgroundColor = "#5c331a";
             document.querySelector("h4").style.color = "white";
             document.querySelector("#footer").style.backgroundColor = "#5c331a";
             document.querySelector("#footer").style.color = "black";
             document.querySelector("#end").style.backgroundColor = "#5c331a";
             document.querySelector("#end").style.color = "black";
             document.querySelector("#contactinfo").style.color = "black";
             document.querySelector("#conclusion").style.backgroundColor = "#5c331a";
             document.querySelector("#mode").style.backgroundImage = "url('https://raw.githubusercontent.com/Lakshita-web/image-hosting/refs/heads/main/lightmode.png')";
               document.querySelector("#picture2").style.backgroundImage = "url('https://raw.githubusercontent.com/Lakshita-web/image-hosting/refs/heads/main/image.png')";
             document.querySelector("#url").style.backgroundColor = "#5c331a";
             document.querySelector(".lakshita1").style.backgroundColor = "#5c331a";
             document.querySelector(".lakshita").style.backgroundColor ="#5c331a";
             document.querySelector(".lakshita2").style.backgroundColor ="#5c331a";
             document.querySelector("#contactinfo").style.backgroundColor ="#5c331a";
             document.querySelector("#details").style.backgroundColor ="#5c331a";
             document.querySelector("#links").style.backgroundColor ="#5c331a";
             document.querySelector("#links1").style.backgroundColor ="#5c331a";
             document.querySelector("#links2").style.backgroundColor ="#5c331a";
             document.querySelector("#links3").style.backgroundColor ="#5c331a";
             document.querySelector("h5").style.backgroundColor = "#5c331a";
             document.querySelector("h5").style.color = "white";
             document.querySelector("#footer1").style.backgroundColor = "#5c331a";
             document.querySelector("#footer1").style.color = "black";
             document.querySelector("#end1").style.backgroundColor = "#5c331a";
             document.querySelector("#end1").style.color = "black";
             document.querySelector("#contactinfo1").style.color = "black";
             document.querySelector("#conclusion1").style.backgroundColor = "#5c331a";
             document.querySelector(".lakshita1").style.backgroundColor = "#5c331a";
             document.querySelector("#contactinfo1").style.backgroundColor=  "#5c331a";
             document.querySelector("#details1").style.backgroundColor ="#5c331a";
             document.querySelector("form").style.backgroundColor ="#633c24";
             document.querySelector("#contacts").style.backgroundColor ="#865b3f";
             document.querySelector(".subjects").style.backgroundColor ="#865b3f";
             document.querySelector("#msg").style.backgroundColor ="#865b3f"; 
             document.querySelector("#email").style.backgroundColor ="#865b3f";
             document.querySelector("#No").style.backgroundColor ="#865b3f";
             document.querySelector("#E-mail").style.backgroundColor ="#473224";
             document.querySelector("#number").style.backgroundColor ="#473224";
             document.querySelector("#user").style.backgroundColor ="#473224";
             document.querySelector("#message").style.backgroundColor ="#473224";
             document.querySelector("#submit").style.backgroundColor ="black";
             document.querySelector(".web").style.backgroundColor ="#865b3f";
             document.querySelector(".website").style.backgroundColor ="black";
                document.querySelector(".one").style.backgroundColor ="#865b3f";
             document.querySelector(".load").style.backgroundColor ="black";
               document.querySelector(".web").style.boxShadow = "4px 5px 6px rgb(59, 31, 3)";
                document.querySelector(".one").style.boxShadow =  "4px 5px 6px rgb(59, 31, 3)";
                document.querySelector(".two").style.backgroundColor ="#865b3f";
             document.querySelector(".loading").style.backgroundColor ="black";
               document.querySelector(".two").style.boxShadow = "4px 5px 6px rgb(59, 31, 3)";
             
             
             
            } else {
        currentmode="light";
        document.querySelector("section").style.backgroundImage = "url('https://raw.githubusercontent.com/Lakshita-web/image-hosting/refs/heads/main/dark.avif')"; 
        document.querySelector("section").style.backgroundSize = "cover";
        document.querySelector("header").style.backgroundColor = "#180241";   
        document.querySelector("#options").style.backgroundColor = "#180241";   
         document.querySelector(".description").style.color = "white";
         document.querySelector("#beginner").style.paddingLeft = "150px";
         document.querySelector("h1").style.paddingLeft = "7.5rem";
         document.querySelector("h1").style.paddingTop= "2rem";
         document.querySelector("h1").style.paddingRight = "40rem";
         document.querySelector("h1").style.color = "white";
         document.querySelector("#About_Me").style.color = "white";
         document.querySelector("#heading").style.color = "white";
         document.querySelector("#intro").style.color = "white";
         document.querySelector("p").style.color = "white";
         document.querySelector("#My_Works").style.color = "white";
         document.querySelector("#projects").style.color = "white";
         document.querySelector("#projects").style.backgroundColor = "#1e0052";
         document.querySelector("h4").style.color = "white";
         document.querySelector("#footer").style.color = "white";         
         document.querySelector("#end").style.color = "white";
         document.querySelector("#contactinfo").style.color = "white";
         document.querySelector("h4").style.backgroundColor = "#0e0027";
         document.querySelector("#footer").style.backgroundColor = "#0e0027";
         document.querySelector("#end").style.backgroundColor = "#0e0027";
         document.querySelector("#conclusion").style.backgroundColor = "#0e0027";
         document.querySelector("#About_Me").style.backgroundColor = "#1e0052";
         document.querySelector("#intro").style.backgroundColor = "#1e0052";
         document.querySelector(".description").style.backgroundColor = "#1e0052";
         document.querySelector(".description_").style.backgroundColor = "#1e0052";
         document.querySelector(".description_").style.color = "white";
         document.querySelector("#beginner").style.color = "white";
         document.querySelector("#My_Works").style.backgroundColor = "#1e0052";
         document.querySelector("#mode").style.backgroundImage = "url('https://raw.githubusercontent.com/Lakshita-web/image-hosting/refs/heads/main/darkmode.png')";
          document.querySelector("#picture2").style.backgroundImage = "url('https://res.cloudinary.com/dqhcroiw8/image/upload/v1739628739/My%20Portfolio/Work_izqahv.png')";
         document.querySelector("#url").style.backgroundColor = "#0e0027";
         document.querySelector(".lakshita1").style.backgroundColor = "#0e0027";
         document.querySelector(".lakshita2").style.backgroundColor = "#0e0027";
         document.querySelector(".lakshita").style.backgroundColor = "#0e0027";
         document.querySelector("#contactinfo").style.backgroundColor ="#0e0027";
         document.querySelector("#details").style.backgroundColor ="#0e0027";
         document.querySelector("#links").style.backgroundColor ="#0e0027";
         document.querySelector("#links1").style.backgroundColor ="#0e0027";
         document.querySelector("#links3").style.backgroundColor ="#0e0027";
         document.querySelector("#links2").style.backgroundColor ="#0e0027";
         document.querySelector("h5").style.backgroundColor = "#0e0027";
         document.querySelector("h5").style.color = "white";
         document.querySelector("#footer1").style.backgroundColor = "#0e0027";
         document.querySelector("#footer1").style.color = "black";
         document.querySelector("#end1").style.backgroundColor = "#0e0027";
         document.querySelector("#end1").style.color = "black";
         document.querySelector("#contactinfo1").style.color = "black";
         document.querySelector("#conclusion1").style.backgroundColor = "#0e0027";
         document.querySelector(".lakshita1").style.backgroundColor = "#0e0027";
         document.querySelector("#contactinfo1").style.backgroundColor ="#0e0027";
         document.querySelector("#details1").style.backgroundColor ="#0e0027";
         document.querySelector("form").style.backgroundColor ="#180241";
         document.querySelector("#contacts").style.backgroundColor ="#231a50";
         document.querySelector(".subjects").style.backgroundColor ="#231a50";
         document.querySelector("#msg").style.backgroundColor ="#231a50"; 
         document.querySelector("#email").style.backgroundColor ="#231a50";
         document.querySelector("#No").style.backgroundColor ="#231a50";
         document.querySelector("#E-mail").style.backgroundColor ="#191049";
         document.querySelector("#number").style.backgroundColor ="#191049";
         document.querySelector("#user").style.backgroundColor ="#191049";
         document.querySelector("#message").style.backgroundColor ="#191049";
         document.querySelector("#submit").style.backgroundColor ="#c000b0";
         document.querySelector(".web").style.backgroundColor = "#231a50";
          document.querySelector(".website").style.backgroundColor ="#c000b0";
            document.querySelector(".one").style.backgroundColor = "#231a50";
          document.querySelector(".load").style.backgroundColor ="#c000b0";
         document.querySelector(".web").style.boxShadow = "2px 4px 5px rgba(228, 121, 255, 1)";
             document.querySelector(".one").style.boxShadow = "2px 4px 5px rgba(228, 121, 255, 1)";
          document.querySelector(".two").style.backgroundColor = "#231a50";
          document.querySelector(".loading").style.backgroundColor ="#c000b0";
         document.querySelector(".two").style.boxShadow = "2px 4px 5px rgba(228, 121, 255, 1)";
}

    console.log(currentmode);

})



