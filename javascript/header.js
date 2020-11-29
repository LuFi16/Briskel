document.write('\
<!--only for desktop and up-->\
    <div class="c-menu-desktop c-menu">\
        <a href="index.html"><img src="img/Briskel-logo.svg" alt="Briskel logo" title="Briskel Bricks" class="c-header_logo"></a>\
        <nav class="c-menu-desktop-nav">\
            <ul>\
                <li><a href="index.html">Dom&#367;</a><span class="c-menu_line"></span></li>\
                <li><a href="bricks.html">Bricks</a><span class="c-menu_line"></span></li>\
                <li><a href="how_it_works.html">Princip</a><span class="c-menu_line"></span></li>\
                <li><a href="kontakt.html">Kontakt</a><span class="c-menu_line"></span></li>\
            </ul>\
            <div class="c-menu_flag" onclick="NeniKDispoziciJazyk()"><a href="#"><img src="img/vlajka-UK.svg" alt="english" class="c-menu_flag-img"></a></div>\
        </nav>\
    </div>\
\
    <!--only for tablet and low-->\
    <div class="c-menu-mobile c-menu">\
        <div class="c-menu-hamburger">\
            <a href="index.html"><img src="img/Briskel-logo.svg" alt="Briskel logo" title="Briskel Bricks" class="c-header_logo"></a>\
            <a class="c-menu-hamburger-icon" onclick="HamburgerMenu()"><i class="fa fa-bars"></i></a>\
        </div>\
\
        <nav id="c-mobile-nav">\
            <ul>\
                <li><a href="index.html">Dom&#367;</a></li>\
                <li><a href="bricks.html">Bricks</a></li>\
                <li><a href="how_it_works.html">Princip</a></li>\
                <li><a href="kontakt.html">Kontakt</a></li>\
                <li><a href="#" onclick="NeniKDispoziciJazyk()"><img src="img/vlajka-UK.svg" alt="english" class="c-menu_flag-img">English</a></li>\
            </ul>\
        </nav>\
    </div>\
 ');