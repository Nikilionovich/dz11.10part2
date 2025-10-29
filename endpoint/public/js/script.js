document.getElementById("searchbyuser").addEventListener("click", () => {
  const contentuser = userfosearch.value;
  getreqserver(`/api/messages/username?username=${contentuser}`);
});
document.getElementById("outputall").addEventListener("click", () => {
  getreqserver(`/api/messages`);
})
document.getElementById("createnemess").addEventListener("click",()=>{
postreqserv(`/api/messages`);
})
const getreqserver = async (reqpath) => {
  const res = await fetch(reqpath);
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqserv = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      text: tixtforcreate.value,
      author: iuthorforcreate.value
    })
  });
  const data = await res.json();
  await crenderSortedAr(data);
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output");
  list.textContent = "";
  for (const el of data.arr) {
    console.log(el);
    render(el);
  }
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#idishnik").textContent = data.id;
  item.querySelector("#iuthor").textContent = data.author;
  item.querySelector("#tixt").textContent = data.text;
  item.querySelector("#tiiimestamp").textContent = data.timestamp;
  list.append(item);
}