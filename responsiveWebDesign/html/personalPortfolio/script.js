document.querySelector('.cross').style.display = "none";

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.hamg').style.display = 'inline';
        console.log("yes")
    }
    else{
        document.querySelector('.hamg').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
        },400)
        
        console.log("no")
    }
})