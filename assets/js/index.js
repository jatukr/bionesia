function navMobile() {
    let navs = document.querySelector('header > nav');
    let mobiles = document.querySelector('.icon');
    mobiles.addEventListener('click', function (e) {
        console.log(navs);
        if (navs.className === 'navbar') {
            navs.className += ' mobile';
        } else {
            navs.className = 'navbar';
        }
    });
}

asideProfil = () => {
    let contents = document.querySelector('.content');
    let asideClick = document.querySelector('.tombol-aside');
    let asideElement = document.createElement('aside');
    asideClick.addEventListener('mouseover', () => {
        asideElement.innerHTML = '<div class="profil"> \
                                        <div class="profil-img"> \
                                            <img src="assets/img/edited.jpg" alt=""> \
                                        </div> \
                                        <div class="data-diri"> \
                                            <p>Jatu Kusuma Rahardian</p> \
                                        </div> \
                                    </div>'
        let checkAside = document.querySelector('aside');
        if (checkAside == null) {
            contents.appendChild(asideElement);
        }
    });

    asideElement.addEventListener('mouseout', () => {
        asideElement.remove();
    })
}



asideProfil();
navMobile();
