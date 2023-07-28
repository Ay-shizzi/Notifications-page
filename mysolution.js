const active = document.querySelectorAll('.active');
const activeProfile = document.getElementsByClassName('profile');
const notification = document.getElementById('notification_count');
const readAll = document.getElementById('read');

notification.innerHTML = active.length;


active.forEach((message) => {
    message.addEventListener('click', read)
    function read(){
        message.classList.remove('active');
        const unread = document.querySelectorAll('.active');
        notification.innerHTML = unread.length
    }
});

readAll.addEventListener('click', clearAll)
    function clearAll(){
        for(i = 0; i < active.length; i++){
            active[i].classList.remove('active')
        }
        const unread = document.querySelectorAll('.active');
        notification.innerHTML = unread.length
}

