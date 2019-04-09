
export const disableScroll = (preventDefault: (event: any) => any, overflow = false) => {
    if (overflow) {
        document.body.style.overflow = 'hidden';
    }
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
        window.addEventListener('mousewheel', preventDefault, { passive: false });
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('keydown', preventDefault, { passive: false });
    } else {
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
    }
};

export const enableScroll = (preventDefault: (event: any) => any, overflow = false) => {
    if (overflow) {
        document.body.style.removeProperty('overflow');
    }
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventDefault);
        window.removeEventListener('mousewheel', preventDefault);
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
    } else {
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
    }
};
