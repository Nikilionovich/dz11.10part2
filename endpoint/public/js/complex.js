let listofnum = [];
let obj;
document.getElementById("forcomplex4").addEventListener("click", () => {
    listofnum.push(parseInt(forcomplex1.value));
    obj = {
        A: listofnum,
        B: ""
    }
})

document.getElementById("forcomplex5").addEventListener("click", async (reqpath) => {
    reqpath = `/complex-calc`;
    obj.B = "+";
    const res = await fetch(reqpath, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(
            obj,
        )
    });
})
document.getElementById("forcomplex6").addEventListener("click", async (reqpath) => {
    reqpath = `/complex-calc`;
    obj.B = "*";
    const res = await fetch(reqpath, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(
            obj,
        )
    });
})
document.getElementById("deletehis1").addEventListener("click", async () => {
    const res = await fetch("/", {
        method: "DELETE"
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