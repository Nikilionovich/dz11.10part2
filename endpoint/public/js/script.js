document.getElementById("senderqtoserv").addEventListener("click",()=>{
  postreqservforcalc("/calc");
})
document.getElementById("forlist4").addEventListener("click",()=>{
  postreqservforlist("/list-calc");
})
const getreqserver = async (reqpath) => {
  const res = await fetch(reqpath);
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqservforcalc = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      A:parseINT(firstnum.value),
      B:parseINT(secondnum.value),
      OP:typeofdo.value
    })
  });
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqservforlist = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      A:forlist1.value,
      B:forlist2.value,
      OP:forlist3.value
    })
  });
  const data = await res.json();
  await crenderSortedAr(data);
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output");
  list.textContent = "";
    render(data);
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#otvet").textContent = data;
  list.append(item);
}