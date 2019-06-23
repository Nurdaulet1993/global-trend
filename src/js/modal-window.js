document.querySelectorAll('.modal-group__input').forEach(item => {
    item.addEventListener('focus', function() {
        this.parentNode.classList.add('active');
    })

    item.onblur = function() {
        this.parentNode.classList.remove('active');
    }

    item.onpaste = function() {
        this.value.style.fontSize="14px";
        this.value.style.height="14px";
        this.value.style.color="red";
    }
})

document.querySelectorAll('.modal').forEach(item => {
    item.onclick = function() {
        document.querySelector(this.getAttribute('href')).classList.add('show');

        document.querySelector('.modal-window').onclick = function(e) {
            if (e.target == document.querySelector('.modal-window')) {
                document.querySelector('.modal-window').classList.remove('show');
            }
        }
    }
})