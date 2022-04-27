const btn = document.getElementById('btn');
const container= document.getElementById('container');

btn.addEventListener("click",()=>{
    createNotification()
})
function createNotification(){
    const notif=document.createElement('div');
    notif.classList.add("toast");
    notif.innerText="This challenge is a must";
    container.append(notif);
    setTimeout(()=>{
        container.remove()
    },3000)
}