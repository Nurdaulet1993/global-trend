document.querySelectorAll('.call-to-action form').forEach(item => {
    item.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const phone = this.querySelector('input[name="phone"]').value;
        
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