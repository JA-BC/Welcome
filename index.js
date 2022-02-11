$(window).on('load', () => {
    const loader = $("#loader");
    loader.fadeOut();
    loader.children(":first").delay(800).fadeOut("slow");
});

const onScrollElements = () => {
    const scroll = $(window).scrollTop();
    const scrollDown = $('#scrollDown');
    const scrollTop = $('#scrollTop');

    if (!scroll) { // 0
        scrollDown.fadeIn();
        scrollTop.fadeOut();
        return;
    }

    if (scroll > 150) {
        scrollDown.fadeOut();
        scrollTop.fadeIn();
    }
};

const onScrollTop = () => {
    $('#scrollTop').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
};

const onMenuActive = (links = []) => {
    const position = window.scrollY + 200;

    links.forEach(link => {
        let section = $(link.hash);

        if (!section.length) {
            return;
        }

        section = section.get(0);

        const predicate = (
            position >= section.offsetTop &&
            position <= (section.offsetTop + section.offsetHeight)
        );

        if (predicate) {
            link.classList.add('active');
            return;
        }

        link.classList.remove('active');
    });
};

$(document).ready(() => {
    // Scroll top
    onScrollTop();
    //

    // NavMenu active
    const menuItems = $('.sidebar .nav-link');
    $(window).scroll(() => {
        onScrollElements();
        onMenuActive([...menuItems]);
    });
    //
});