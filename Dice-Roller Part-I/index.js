function roll()
{
    const no=document.getElementById("num").value;
    const dieres=document.getElementById("dieresult");
    const die_img=document.getElementById("dieimg");
    const values=[];
    const images=[];
for(let i=0;i<no;i++)
{
     const value=Math.floor(Math.random()*6)+1;
     values.push(value);
images.push(`<img src="die_img/${value}.png" alt="die img${value}">`);
}
dieres.textContent=`dice:${values.join(', ')}`;
die_img.innerHTML=images.join('');
}