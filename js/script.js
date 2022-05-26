$(document).ready(function () {
    // 주메뉴 모션 적용
    let nav = $('.nav');
    let header_main = $('.header-main');
    let logo = $('.logo');
    nav.mouseenter(function () {
        $(this).addClass('nav-active');
    });
    header_main.mouseleave(function () {
        nav.removeClass('nav-active');
    });
    logo.mouseenter(function () {
        nav.removeClass('nav-active');
    });

    // 스크롤 기능
    let header = $('.header')
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
            header.addClass('fix-active');
        } else {
            header.removeClass('fix-active');
        }
    })

    // 모바일 메뉴
    let m_bt = $('.m-bt');
    let m_bt_close = $('.m-bt-close');
    let m_menu_bg = $('.m-menu-bg');
    let m_menu_wrap = $('.m-menu-wrap');

    m_bt.click(function () {
        m_menu_wrap.addClass('m-menu-wrap-active');
        m_menu_bg.addClass('m-menu-bg-active');
    });

    m_bt_close.click(function () {
        m_menu_wrap.removeClass('m-menu-wrap-active');
        m_menu_bg.removeClass('m-menu-bg-active');
    });

    m_menu_bg.click(function (e) {
        m_menu_wrap.removeClass('m-menu-wrap-active');
        m_menu_bg.removeClass('m-menu-bg-active');
        // e.stopPropagation();

    });

    // 화면 리사이징 처리
    $(window).resize(function () {
        let w = $(window).width();
        if (w > 700) {
            m_menu_wrap.removeClass('m-menu-wrap-active');
            m_menu_bg.removeClass('m-menu-bg-active');
        }
    });
});

window.onload = function () {
    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 2000
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },
    });

    let sw_story = new Swiper('.sw-story', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw-story-prev',
            nextEl: '.sw-story-next'
        }
    });

    let sw_good = new Swiper('.sw-good', {
        loop: true,
        speed: 1000,
        navigation: {
            prevEl: '.sw-good-prev',
            nextEl: '.sw-good-next'
        },
        pagination: {
            el: '.sw-good-pg',
            clickable: true
        }
    });

    // 상단 이동
    $('.gotop').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 500);
    })
}