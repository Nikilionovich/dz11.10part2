document.getElementById("senderqtoserv").addEventListener("click", () => {
  postreqservforcalc("/calc");
})
document.getElementById("deletehis1").addEventListener("click", async()=>{
const res=await fetch("/",{
  method:"DELETE"
})
if (res.ok) {
  alert("алл гуд")
}
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
      A: parseInt(firstnum.value),
      B: parseInt(secondnum.value),
      OP: typeofdo.value
    })
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
  render(data);
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#otvet").textContent = data;
  list.append(item);
}