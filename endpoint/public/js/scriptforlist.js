let listofnum=[];
document.getElementById("forlist4").addEventListener("click",()=>{
const obj={
     A:forlist1.value,
      B:forlist2.value,
      OP:forlist3.value
}
listofnum.push(obj);
})
forlist5.addEventListener("click",()=>{
postreqservforlist("/list-calc")
})
const getreqserver = async (reqpath) => {
  const res = await fetch(reqpath);
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqservforlist = async (reqpath) => {
  
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(
     listofnum
    )
  });
  if (res.ok) {
    const data = await res.json();
    await crenderSortedAr(data);
  }
  else if (res.status == 501) {
    alert("Операция не поддерживается");
  }
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output");
  list.textContent = "";
for (const key of data.sum) {
   render(key);
}
    
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#otnig").textContent = data;
  list.append(item);
}