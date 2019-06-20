var toggler = document.getElementById('toggler');
var menu = document.querySelector('.navigation__items');
    toggler.onclick = function (e) {
     e.preventDefault();
     toggler.classList.toggle('menu__toggler--close');
	 menu.classList.toggle('menu--vertical');
} 
