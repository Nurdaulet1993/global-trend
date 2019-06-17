document.querySelectorAll('.for-whom__btn').forEach( item => {
    item.addEventListener('click', function() {
        let block = getComputedStyle(this.parentNode.parentNode.querySelector('.for-whom__wrap'));
        console.log(block.height);
        this.parentNode.parentNode.querySelector('.for-whom__collapse').classList.toggle('show');

        this.parentNode.parentNode.querySelector('.for-whom__collapse').className.includes('show') 
                                ? this.parentNode.parentNode.querySelector('.for-whom__collapse').style.height = block.height
                                : this.parentNode.parentNode.querySelector('.for-whom__collapse').style.height = '0px';
        
    })
})