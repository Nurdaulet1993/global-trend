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

document.querySelectorAll('.modal-window form').forEach(item => {
    item.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const phone = this.querySelector('input[name="phone"]').value;
        const text = this.querySelector('textarea[name="desc"]').value;
        
        if(name.length == 0 || email.length == 0 || phone.length == 0) {
            const warning = document.createElement('div');
            warning.className = "warning";
            warning.innerText = "Вы не заполнили все поля!";
            this.appendChild(warning);
            setTimeout(function() {
                document.querySelector('.warning').remove();
            }, 2000);
        }else {
            this.setAttribute('action', './mail.php');
            this.setAttribute('method', 'POST');
            this.submit();
        }
    })
})