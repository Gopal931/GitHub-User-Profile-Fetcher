

let username=document.querySelector(".inputfield");
function changerepro(link){
    fetch(link).then(res=>res.json()).then(data=>{
        console.log(data);
         data.forEach(repoo=>{
            let p=document.createElement("p");
           p.innerText=repoo.name;
        document.querySelector(".reprosPara").appendChild(p);
        })
    })
}
document.querySelector(".btn").addEventListener("click",()=>{
    let url=`https://api.github.com/users/${username.value}`;
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        // console.log(data.avatar_url);
        document.querySelector(".mainContainer").style.display="block";
        document.querySelector(".image img").setAttribute("src",`${data.avatar_url}`);
        document.querySelector(".content .flwrs span").innerText=data.followers;
        document.querySelector(".content .flwing span").innerText=data.following;
        document.querySelector(".content .repo span").innerText=data.public_repos;
        document.querySelector(".mainContainer h1").innerText=`${data.name} (@${data.login})`;
        ;
         changerepro(data.repos_url);
         
    });
});
