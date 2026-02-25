$(function () {
	$('.slide-item').slick({
		//一度に何枚表示させるのか
		// slidesToShow: 1.65,
		slidesToScroll: 1,

		//自動再生するか
		autoplay: true,

		//自動再生のスピードは
		autoplaySpeed: 3000,

		centerMode: true,      // 前後スライドを部分表示
		centerPadding: '20vw', // 両端の見切れるスライド幅
	});
});