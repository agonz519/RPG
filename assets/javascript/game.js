// VARIABLES

var yourCharacter = $('#yourChar');
var yourEnemies = $('#availableEnemies');
var defenders = $('#defender');
var characters;
var sourceSwap = function () {
	var $this = $(this);
	var newSource = $this.data('alt-src');
	$this.data('alt-src', $this.attr('src'));
	$this.attr('src', newSource);
};
var x = document.getElementById("myAudio");
var hp;
var enemyHp;
var knight = {
	hp: 125,
	atkPower: 6,
	cAtkPower: 6
}
var lizard = {
	hp: 150,
	atkPower: 12,
	cAtkPower: 12
}
var paladin = {
	hp: 100,
	atkPower: 8,
	cAtkPower: 8
}
var mage = {
	hp: 75,
	atkPower: 10,
	cAtkPower: 10
}


// FUNCTIONS

function playAudio() {
	x.play();
}

function pauseAudio() {
	x.pause();
}

$(function () {
	$('img.char-image0').hover(sourceSwap, sourceSwap);
	$('img.char-image1').hover(sourceSwap, sourceSwap);
	$('img.char-image2').hover(sourceSwap, sourceSwap);
	$('img.char-image3').hover(sourceSwap, sourceSwap);
});





// BODY
$(document).ready(function() {

	$('#test').hide();


	for (var i = 0; i < 4; i++) {
		characters = $('<img>');
		characters.addClass('char-image' + i);
		characters.attr('src', 'assets/images/char' + i + '.gif');
		characters.attr('charValue', i);
		characters.attr('data-alt-src', 'assets/images/char' + i + '_hover.gif');
		yourCharacter.append(characters);
	}

	yourCharacter.on('click', 'img.char-image0', function () {
		$('img.char-image1').appendTo(yourEnemies);
		$('img.char-image2').appendTo(yourEnemies);
		$('img.char-image3').appendTo(yourEnemies);
	}).on('click', 'img.char-image1', function () {
		$('img.char-image0').appendTo(yourEnemies);
		$('img.char-image2').appendTo(yourEnemies);
		$('img.char-image3').appendTo(yourEnemies);
	}).on('click', 'img.char-image2', function () {
		$('img.char-image0').appendTo(yourEnemies);
		$('img.char-image1').appendTo(yourEnemies);
		$('img.char-image3').appendTo(yourEnemies);
	}).on('click', 'img.char-image3', function () {
		$('img.char-image0').appendTo(yourEnemies);
		$('img.char-image1').appendTo(yourEnemies);
		$('img.char-image2').appendTo(yourEnemies);
	});

	yourEnemies.on('click', 'img.char-image0', function () {
		$('img.char-image0').appendTo(defenders);
	}).on('click', 'img.char-image1', function () {
		$('img.char-image1').appendTo(defenders);
	}).on('click', 'img.char-image2', function () {
		$('img.char-image2').appendTo(defenders);
	}).on('click', 'img.char-image3', function () {
		$('img.char-image3').appendTo(defenders);
	});

	$('#fight').on('click', function () {
		$(function () {
			$('#stuff').fadeOut(2000, function () {
				if ($("#yourChar").find(".char-image0").length > 0) {
					$('img.char-image0').appendTo($('#v2'));
					$('#face').append('<br><img id="paladin" src="assets/images/paladin.png">');
					$('img.char-image0').attr('src', $('img.char-image0').data('alt-src'));
					hp = paladin.hp;
					$('#health').html(hp);
				}
				else if ($("#yourChar").find(".char-image1").length > 0) {
					$('img.char-image1').appendTo($('#v2'));
					$('#face').append('<br><img id="lizard" src="assets/images/lizard.png">');
					$('img.char-image1').attr('src', $('img.char-image1').data('alt-src'));
					hp = lizard.hp;
					$('#health').html(hp);
				}
				else if ($("#yourChar").find(".char-image2").length > 0) {
					$('img.char-image2').appendTo($('#v2'));
					$('#face').append('<br><img id="knight" src="assets/images/knight.png">');
					$('img.char-image2').attr('src', 'assets/images/char2_hover_flip.gif');
					$('img.char-image2').attr('data-alt-src', 'assets/images/char2_flip.gif');
					hp = knight.hp;
					$('#health').html(hp);
				}
				else if ($("#yourChar").find(".char-image3").length > 0) {
					$('img.char-image3').appendTo($('#v2'));
					$('#face').append('<br><img id="mage" src="assets/images/mage.png">');
					$('img.char-image3').attr('src', 'assets/images/char3_hover_flip.gif');
					$('img.char-image3').attr('data-alt-src', 'assets/images/char3_flip.gif');
					hp = mage.hp;
					$('#health').html(hp);
				}

				if ($("#defender").find(".char-image0").length > 0) {
					$('img.char-image0').appendTo($('#v2'));
					$('#face2').append('<br><img id="paladin" src="assets/images/paladin.png">');
					$('img.char-image0').attr('src', 'assets/images/char0_hover_flip.gif');
					$('img.char-image0').attr('data-alt-src', 'assets/images/char0_flip.gif');
					enemyHp = paladin.hp;
					$('#health2').html(enemyHp);
				}
				else if ($("#defender").find(".char-image1").length > 0) {
					$('img.char-image1').appendTo($('#v2'));
					$('#face2').append('<br><img id="lizard" src="assets/images/lizard.png">');
					$('img.char-image1').attr('src', 'assets/images/char1_hover_flip.gif');
					$('img.char-image1').attr('data-alt-src', 'assets/images/char1_flip.gif');
					enemyHp = lizard.hp;
					$('#health2').html(enemyHp);
				}
				else if ($("#defender").find(".char-image2").length > 0) {
					$('img.char-image2').appendTo($('#v2'));
					$('#face2').append('<br><img id="knight" src="assets/images/knight.png">');
					$('img.char-image2').attr('src', $('img.char-image2').data('alt-src'));

					enemyHp = knight.hp;
					$('#health2').html(enemyHp);
				}
				else if ($("#defender").find(".char-image3").length > 0) {
					$('img.char-image3').appendTo($('#v2'));
					$('#face2').append('<br><img id="mage" src="assets/images/mage.png">');
					$('img.char-image3').attr('src', $('img.char-image3').data('alt-src'));

					enemyHp = mage.hp;
					$('#health2').html(enemyHp);
				}

				$('#test').fadeIn(2000);
			})
		});
	});

	$('#attack').on('click', function () {
		hp = hp - 10;
		enemyHp = enemyHp - 10;
		$('#health').html(hp);
		$('#health2').html(enemyHp);
	})


})