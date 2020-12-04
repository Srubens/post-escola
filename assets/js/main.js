(function(){
    'use script'

    let main_header = document.querySelector('[data-js="header-js"]')
    let socialLinks = document.querySelector('[data-js="social-links"]')
    let modal = document.querySelector('[data-js="modal_open"]')

    // MODAL 
    let search_modal = document.querySelector('[data-js="search_modal"]')

    window.onscroll = () => {
        myscroll()
    }

    function myscroll(){
        if(window.pageYOffset > 10){
            main_header.classList.add('fixed-top')
            if (window.pageYOffset > 540){
                socialLinks.classList.add('fixed-top')
            }
            if (window.pageYOffset < 489){
                socialLinks.classList.remove('fixed-top')
            }
            if (window.pageYOffset > 3850){
                socialLinks.classList.remove('fixed-top')
            }
        }else{
            main_header.classList.remove('fixed-top')
        }
    }

    modal.addEventListener("click", modalOpen, false)
    document.querySelector('[data-js="btn_closed_modal"]').addEventListener("click", closeModal, false)

    function modalOpen(){
        search_modal.style.display = "block"
    }

    function closeModal(){
        search_modal.style.display = "none"
    }

    window.onclick = (event) =>{
        if(event.target == modal){
            search_modal.style.display = "none"
        }
    }

    search_modal.style.display = "none"

})()