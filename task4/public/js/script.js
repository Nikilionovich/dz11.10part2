document.getElementById("searchbyuser").addEventListener("click", () => {
  const contentuser = document.getElementById("idfosearch").value;
  getreqserver(`/api/posts/123?id=${contentuser}`);
});
document.getElementById("outputall").addEventListener("click", () => {
  getreqserver(`/api/posts`);
})
document.getElementById("createnemess").addEventListener("click",()=>{
postreqserv(`/api/posts`);
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
      title: document.querySelector("#titeforcreate").value,
    content: document.querySelector("#tixtforcreate").value,
    author: document.querySelector("#iuthorforcreate").value
    })
  });
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output");
  list.textContent = "";
  console.log(data.arr)
  for (const el of data.arr) {
    render(el);
  }
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#idishnik").textContent = data.id;
  item.querySelector("#iuthor").textContent = data.author;
  item.querySelector("#titule").textContent=data.title;
  item.querySelector("#tixt").textContent = data.content;
  item.querySelector("#tiiimestamp").textContent = data.createdAt;
  list.append(item);
}