document.querySelectorAll('.form-group__input').forEach(item => {
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