// Write your code here!
/*
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}

element.append(ul);
*/

/*
const bodyBody = document.getElementsByTagName("body")[0];
const mainMain = bodyBody.getElementsById("main");
bodyBody.removeChild(mainMain);
*/

// const body = document.getElementsByTagName("body")[0];
const main = document.querySelector("main")
main.remove();



const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Adrian is the champion"
