const list = document.getElementById('list');

list.addEventListener("click", listener);
function listener(event) {

    console.log(event.target.innerText.trim(), event.target.InnerHtml)

}