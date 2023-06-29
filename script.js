window.addEventListener("load",function(e){
    console.log("DOM LOADED")
    const hamburger=document.querySelector("#hamburger")
    const bar1=hamburger.querySelector(".bar:first-child")
    const bar2=hamburger.querySelector(".bar:nth-child(2)")
    const bar3=hamburger.querySelector(".bar:last-child")

    const liens_mobile=document.querySelectorAll("div#navigation_mobile nav a")

    hamburger.addEventListener("click",function(e){
        e.currentTarget.classList.toggle("adidas")
        if(e.currentTarget.classList.contains("adidas")){
            timeout= setTimeout(function(){bar2.style.display="block";clearTimeout(timeout)},1000) 
            bar1.style.transform="rotate(0deg) "
            bar3.style.transform="translateY(0px) rotate(0deg)"
            
        }else{
            bar2.style.display="none"
            bar1.style.transform="rotate(45deg) "
            bar3.style.transform="translateY(-8px) rotate(-45deg)"
        }
        

        document.querySelector("div#navigation_mobile").classList.toggle("ouvert")
        if(document.querySelector("div#navigation_mobile").classList.contains("ouvert")){
            document.querySelector("div#navigation_mobile").style.left="0vw"
        }else{
            document.querySelector("div#navigation_mobile").style.left="-100vw"
        }
        
    })

    liens_mobile.forEach(function(lien_mobile){
        lien_mobile.addEventListener("click",function(e){
            document.querySelector("#hamburger").click()
        })
    })
})