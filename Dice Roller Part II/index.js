function roll()
{ const dieres=document.getElementById("dieresult");
    const die_img=document.getElementById("dieimg");
     const value=Math.floor(Math.random()*6)+1;
    dieres.textContent=value;
     const image=`<img src="die_img/${value}.png" alt="dieimg=${value}">`;
     die_img.innerHTML=image;
}