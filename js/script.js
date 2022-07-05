// alert('hello gulp');;
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

function fontsStyle(params) {

let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');

	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
		
			if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
				if (c_fontname != fontname) {
					fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
				}
				c_fontname = fontname;
			}
			}
		})
	}
}
		
function cb() {}

// Burger Menu

// (function(){
// 	const Burgerbtn = document.querySelector('.menu-btn');
// 	const Burgernav = document.querySelector('.wrapper__navMenu');

// 	Burgerbtn.addEventListener('click', () => {
// 		Burgerbtn.classList.toggle('menu-btn_active');
// 	});
// 	Burgernav.addEventListener('click', () => {
// 		Burgernav.classList.toggle('wrapper__navMenu_active');
// 	});
// }());

const Burgerbtn = document.querySelector('.menu-btn');
const Burgernav = document.querySelector('.navMenu');

Burgerbtn.addEventListener('click', function() {
	Burgerbtn.classList.toggle('menu-btn_active');

	// Burgernav.classList.remove('navMenu');
	
	// Burgernav.classList.remove('navMenu_active');
	Burgernav.classList.toggle('navMenu');
	Burgernav.classList.add('navMenu_active');
	
	// document.querySelector('.navMenu').classList.add('active');

	// Версия JQuery
	// $('a.menu-state').on("click", function() {
	// 	$('a.menu-state').removeClass("active");
	// 	$(this).addClass("active");
	// });
});

// document.getElementById("MyElement").classList.add('MyClass');
// document.getElementById("MyElement").classList.remove('MyClass');
// if ( document.getElementById("MyElement").classList.contains('MyClass') )
// document.getElementById("MyElement").classList.toggle('MyClass');

// let btn = document.querySelector('.menu-btn');
// let nav = document.querySelector('.menu-nav');

// btn.addEventListener('click', function() {
// 	btn.classList.toggle('menu-btn_active');
//    nav.classList.toggle('menu-nav_active');
// });