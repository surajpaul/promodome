<!doctype html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Home | Promodome</title>
  	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
	<!-- Google Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
	<!-- Bootstrap core CSS -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
	<!-- Material Design Bootstrap -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
	<!-- custom -->
	<link rel='stylesheet' href='vendor/wp-content/themes/threesixtyeight/style282d.css' type='text/css' media='all' />
	<script type='text/javascript' src='vendor/wp-includes/js/jquery/jquery4a5f.js'></script>
	<script type='text/javascript' src='vendor/wp-content/plugins/wp-hide-post/public/js/wp-hide-post-public6471.js'></script>
	<script type='text/javascript' src='vendor/wp-content/themes/threesixtyeight/js/vendor/modernizr-3.3.1.min7661.js'></script>
	<style>
		@media only screen and (max-width: 767px) {
			.home__hero-section-1 {
				background-image: url('vendor/wp-content/uploads/2019/04/BG-800x800.jpg');
			}
		}
		#menu-header li a span{
			font-size: 65px;
		}
		.bold{
			font-weight: bold;
		}
		.line {
			margin:0 0 1em;
			position:relative;
			overflow:hidden;
			text-align:left;
			text-transform: uppercase;
		}
		.line:before,.line:after {
			content:" ";
			position:absolute;
			top:73%;
			margin-left:-999em;
			height:2px;
			width:998em;
			border-top:3px solid #fff;
		}
		.line:after {
			left:auto;
			width:999em;
			margin:0 0 0 1em;
		}
		.btn-read{
			border-radius: 0px;
			padding: 10px 25px;
			box-shadow: none;
			color: #000 !important;
			text-transform: capitalize;
			font-size: 30px;
			font-weight: 400;
		}
		.btn-send{
			padding: 5px 30px;
			background-color: #fff;
			color: grey;
		}
		.text-green{
			color: #A0C838;
		}
		.font-12{
			font-size: 12px;
		}
		.font-22{
			font-size: 22px;
		}
		.social-team span i{
			font-size: 14px;
			padding-left: 4px;
		}
		.md-form>label{
			color: #fff;
			font-weight: 400;
		}
		.footer-section{
			background-image: radial-gradient(rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.9)),url('vendor/img/footer.jpg');
			background-repeat: no-repeat;
			background-position: center;
		}
		/*flex image*/
		.img {
			width: 100%;
			height: auto;
		}
		.row {
			display: flex;
			flex-wrap: wrap;
			padding: 0 4px;
		}
		.column {
			flex: 33%;
			max-width: 33%;
			padding: 0 4px;
		}
		.column img {
			margin-top: 8px;
			vertical-align: middle;
		}
		@media (max-width: 800px) {
			.column {
				flex: 50%;
				max-width: 50%;
			}
		}
		@media (max-width: 600px) {
			.column {
				flex: 100%;
				max-width: 100%;
			}
		}
	</style>
</head>
<body class="home page-template-default page page-id-108 page-home">

	<div class="smooth-state-transition-block">
		<div class="smooth-state-spinner"></div>
	</div>

	<div id="site-wrapper">
		<div class="site-wrapper_inner">

			<header id="header" class="clearfix">
				<div class="container-fluid">
					<h3 class="header__logo">
						<!-- <a>
							Promodome<span>Digital, Web, Video, and Brand Strategy</span>
			        		<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2101.8 347.5"><style>.header-logo-path{fill:#fff}</style><g id="Layer_2_1_"><g id="Layer_1-2"><path class="header-logo-path" d="M58.6 44.3H6.5c-3.6 0-6.5-2.9-6.5-6.5V9.9c0-3.6 2.9-6.5 6.5-6.5h148.9c3.6 0 6.5 2.9 6.5 6.4v27.9c0 3.6-2.9 6.5-6.4 6.5h-52.1v191.1c-.1 3.5-2.9 6.4-6.5 6.5H65.1c-3.5-.1-6.4-3-6.5-6.5v-191zM183 9.9c.1-3.5 3-6.4 6.5-6.5h29c3.5.1 6.4 2.9 6.5 6.5v103.6c6.8-5.1 20.1-11.2 36.1-11.2 43.3 0 61 33.4 61 67.8v65.4c-.1 3.5-3 6.4-6.5 6.5h-27.7c-3.6 0-6.5-2.9-6.5-6.5v-65.8c0-18.7-10.6-30.7-26.9-30.7-15.7 0-26.2 10.2-29.6 24.2v72.2c0 3.8-2 6.5-7.1 6.5h-28.3c-3.5-.1-6.4-3-6.5-6.5V9.9zM347.3 112.1c0-3.6 2.9-6.5 6.5-6.5h13c2.8-.1 5.3 1.7 6.1 4.4l4.8 13.3c4.8-6.8 17.4-21.1 38.5-21.1 16 0 30.3 5.1 26.2 13.6L429.8 138c-1.7 3.1-5.1 4.4-7.8 3.1-1-.3-6.1-2.1-9.9-2.1-13.6 0-21.8 9.2-24.2 14v82.4c0 4.8-3.1 6.5-7.8 6.5h-26.2c-3.5-.1-6.4-3-6.5-6.5V112.1zM516.1 102.2c35.1 0 63.7 26.6 63.7 63.4-.1 3.1-.3 6.1-.7 9.2-.4 3.3-3.2 5.8-6.5 5.8h-87.2c1.5 16.9 15.7 29.8 32.7 29.6 9.5-.1 18.8-3.1 26.6-8.5 3.4-2.1 6.5-2.7 8.9 0l14 16c2.4 2.4 3.1 6.1-.3 8.9-11.2 10.6-28.6 18.7-50.8 18.7-40.9 0-69.9-32.4-69.9-71.6 0-38.4 29-71.5 69.5-71.5m23.9 54.5c-1-12.6-11.9-23.2-24.9-23.2-13.4 0-24.7 9.9-26.6 23.2H540zM665.7 102.2c35.1 0 63.7 26.6 63.7 63.4-.1 3.1-.3 6.1-.7 9.2-.4 3.3-3.2 5.8-6.5 5.8H635c1.5 16.9 15.7 29.8 32.7 29.6 9.5-.1 18.8-3.1 26.6-8.5 3.4-2.1 6.5-2.7 8.9 0l14 16c2.4 2.4 3.1 6.1-.3 8.9-11.2 10.6-28.6 18.7-50.8 18.7-40.9 0-69.8-32.4-69.8-71.6-.1-38.4 28.9-71.5 69.4-71.5m23.9 54.5c-1-12.6-11.9-23.2-24.9-23.2-13.4 0-24.7 9.9-26.6 23.2h51.5zM748.2 208.5l12.3-21.1c2.2-3.8 7-5.1 10.8-2.9.3.2.5.3.8.5 1.7 1 29.3 21.1 51.5 21.1 17.7 0 31-11.6 31-26.2 0-17.4-14.7-29.3-43.3-40.9-32-12.9-64.1-33.4-64.1-73.6 0-30.3 22.5-65.4 76.7-65.4 34.8 0 61.3 17.7 68.2 22.8 3.4 2 4.4 7.8 2 11.2l-13 19.4c-2.7 4.1-7.8 6.8-11.9 4.1-2.7-1.7-28.6-18.7-47.4-18.7-19.4 0-30 13-30 23.8 0 16 12.6 26.9 40.2 38.2 33 13.3 71.2 33.1 71.2 77 0 35.1-30.3 67.5-78.4 67.5-42.9 0-68.1-20.1-75-26.6-3.1-3-4.8-4.7-1.6-10.2M923.4 33.7c-.1-12.9 10.2-23.4 23-23.5h.1c13-.4 23.8 9.8 24.2 22.8S961 56.8 948 57.2h-1.4c-12.9-.1-23.2-10.5-23.2-23.4v-.1m3.1 78.4c0-3.6 2.9-6.5 6.5-6.5h28.3c3.6 0 6.5 2.9 6.5 6.5v123.3c-.1 3.5-3 6.4-6.5 6.5H933c-3.5-.1-6.4-3-6.5-6.5V112.1zM994.4 232l44.3-59.6-42.9-56.9c-3.4-4.4-.7-9.9 5.1-9.9h28.3c4.4 0 8.2.3 11.2 4.8l22.1 32h.3l22.5-32c2.7-3.8 5.5-4.8 10.2-4.8h30.7c5.8 0 7.5 5.4 4.1 9.9l-42.9 56.6 43.3 60c3.1 4.4 1.4 9.9-4.1 9.9h-30c-4.4 0-7.2-2-9.5-5.4l-24.2-34.1h-.3l-25.9 36.8c-1.4 1.6-3.4 2.5-5.4 2.7h-32.7c-5.9-.1-7.3-5.5-4.2-10M1165.9 141.4h-11.6c-3.5-.2-6.2-3-6.1-6.5v-22.8c-.2-3.4 2.5-6.3 5.9-6.5H1165.9V67.8c.1-3.5 2.9-6.4 6.5-6.5l27.9-.3c3.5.1 6.2 3 6.1 6.5v38.2h30c3.5-.1 6.4 2.6 6.5 6v23.2c0 3.6-2.9 6.5-6.5 6.5h-30v54.5c0 9.5 5.1 10.9 10.6 10.9 5.8 0 12.9-2.4 16.7-3.8s6.5.3 7.5 3.8l6.8 21.5c1.3 3.2-.2 6.8-3.4 8-.1 0-.2.1-.4.1-1.7 1-23.8 8.9-40.6 8.9-26.2 0-37.8-16.4-37.8-44v-59.9zM1262.1 114.5c-2-4.4.7-8.9 5.8-8.9h30.7c2.5-.1 4.8 1.4 5.8 3.8l34.4 77h.3l34.1-77c1.7-3.4 4.1-3.8 8.2-3.8h27.3c5.4 0 8.2 4.4 5.8 8.9L1310.1 340c-1 2-3.1 4.1-5.8 4.1H1275c-5.1 0-8.2-4.4-5.8-9.2l48.4-102.6-55.5-117.8zM1438.8 9.9c0-3.6 2.9-6.5 6.5-6.5H1584c3.6 0 6.5 2.9 6.5 6.5v27.9c0 3.6-2.9 6.5-6.4 6.5h-100.9v55.9h84.2c3.5.1 6.4 2.9 6.5 6.5V135c0 3.6-2.9 6.5-6.5 6.5h-84.2V201h100.9c3.6 0 6.5 2.9 6.5 6.5v27.9c0 3.6-2.9 6.5-6.5 6.5h-138.7c-3.6 0-6.5-2.9-6.5-6.5V9.9zM1614.9 33.7c-.1-12.9 10.2-23.4 23-23.5h.1c13-.4 23.8 9.8 24.2 22.8.4 13-9.8 23.8-22.8 24.2h-1.4c-12.9-.1-23.2-10.5-23.2-23.4.1 0 .1 0 .1-.1m3.1 78.4c0-3.6 2.9-6.5 6.5-6.5h28.3c3.6 0 6.5 2.9 6.5 6.5v123.3c-.1 3.5-3 6.4-6.5 6.5h-28.3c-3.5-.1-6.4-3-6.5-6.5V112.1zM1705.4 193.5s-10.2-11.6-10.2-32c0-31.7 25.6-59.3 59.3-59.3h62c3.5-.1 6.4 2.6 6.5 6V120c0 2.4-1.4 5.1-3.7 5.8l-19.1 6.1s13.6 10.6 13.6 34.8c0 26.9-22.5 53.5-58.3 53.5-12.9 0-21.8-2.7-27.2-2.7-4.8 0-12.6 4.8-12.6 13 0 7.1 6.1 11.6 13.6 11.6h43.6c31 0 56.2 17.7 56.2 47.7 0 31.4-25.2 57.9-74.6 57.9-50.4 0-69.5-24.9-69.5-46.7 0-20.4 17-30.3 20.4-32.4v-1c-5.8-1.7-25.6-10.9-25.6-35.8 0-26.6 25.6-38.2 25.6-38.2m48.7 120c19.1 0 31.7-8.5 31.7-21.5 0-6.1-4.8-16.7-24.9-16.7-7.4-.1-14.8.4-22.2 1.4-4.1 1.4-14.7 6.1-14.7 16.7.1 11.9 11.7 20.1 30.1 20.1m1.3-125.8c14 0 23.5-10.2 23.5-24.5s-9.5-24.5-23.5-24.5c-13.6 0-23.8 10.2-23.8 24.5s10.2 24.5 23.8 24.5M1845.8 9.9c.1-3.5 2.9-6.4 6.5-6.5h29c3.5.1 6.4 2.9 6.5 6.5v103.6c6.8-5.1 20.1-11.2 36.1-11.2 43.3 0 61 33.4 61 67.8v65.4c-.1 3.5-2.9 6.4-6.5 6.5h-27.6c-3.6 0-6.5-2.9-6.5-6.5v-65.8c0-18.7-10.6-30.7-26.9-30.7-15.7 0-26.2 10.2-29.6 24.2v72.2c0 3.8-2.1 6.5-7.2 6.5h-28.3c-3.5-.1-6.4-3-6.5-6.5V9.9zM2019.2 141.4h-11.6c-3.5-.2-6.2-3-6.1-6.5v-22.8c-.2-3.4 2.5-6.3 5.9-6.5H2019.2V67.8c.1-3.5 2.9-6.4 6.5-6.5l27.9-.3c3.5.1 6.2 3 6.1 6.5v38.2h30c3.5-.1 6.4 2.6 6.5 6v23.2c0 3.6-2.9 6.5-6.5 6.5h-30v54.5c0 9.5 5.1 10.9 10.6 10.9 5.8 0 12.9-2.4 16.7-3.8s6.5.3 7.5 3.8l6.8 21.5c1.3 3.2-.2 6.8-3.4 8-.1 0-.2.1-.4.1-1.7 1-23.9 8.9-40.5 8.9-26.2 0-37.8-16.4-37.8-44v-59.9z"/></g></g></svg>
						</a> -->
					</h3>

					<button class="header__nav-toggle">
						<span class="label">Menu</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="new-home-menu" width="50" height="50" viewBox="0 0 36 36">
							<g id="Desktop---Home" fill="none" fill-rule="evenodd">
								<g id="MenuSVG">
									<path d="M19.7113159,17.5 L25,22.7886841 L22.7886841,25 L17.5,19.7113159 L12.2113159,25 L10,22.7886841 L15.2886841,17.5 L10,12.2113159 L12.2113159,10 L17.5,15.2886841 L22.7886841,10 L25,12.2113159 L19.7113159,17.5 Z" id="menuInnerClose" class="hidden path-fill" />
									<path id="menuInnerDefault" class="path-fill" d="M11 11H24V24H11z" />
									<path id="menuDefault" class="path-stroke" stroke-width="3" d="M6.5 6.5H28.5V28.5H6.5z" />
									<path id="menuHover" class="hidden path-stroke" stroke-width="3" d="M1.5 1.5H33.5V33.5H1.5z" />
								</g>
							</g>
						</svg>
					</button>
				</div>
			</header>

			<div class="header-nav-section">
				<div class="bg-block"></div>
				<div class="content-block">
					<nav class="header-nav" class="clearfix">
						<ul id="menu-header" class="header-nav__parent-menu">
							<li id="menu-item-2178" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2178"><a href="work/index.html"><span data-bg="https://s19216.pcdn.co/wp-content/uploads/2019/06/menu-work-1920x1080.jpg">About</span></a></li>
							<li id="menu-item-2174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2174"><a href="culture/index.html"><span data-bg="https://s19216.pcdn.co/wp-content/uploads/2019/06/menu-culture-1920x1080.jpg">Services</span></a></li>
							<li id="menu-item-2173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2173"><a href="capabilities/index.html"><span data-bg="https://s19216.pcdn.co/wp-content/uploads/2019/06/Menu-Capabilities-1-1920x1080.jpg">Work</span></a></li>
							<li id="menu-item-400" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-400"><a href="blog/index.html"><span data-bg="https://s19216.pcdn.co/wp-content/uploads/2019/06/menu-bloog-1920x1080.jpg">Blog</span></a></li>
							<li id="menu-item-1653" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1653"><a href="contact/index.html"><span data-bg="https://s19216.pcdn.co/wp-content/uploads/2019/06/menu-contact-1920x1080.jpg">Contact</span></a></li>
						</ul>
					</nav>

					<ul class="header-nav__list-contacts">
						<li><a href="#">info@promodomegroup.com</a></li>
						<li><a href="#">shabnam@promodomegroup.com</a></li>
						<li><a href="#">011 4539 6666 <span> | </span> +91 98101 32318</a></li>
					</ul> <!-- .list-contacts -->
				</div>
			</div>

			<section id="site-content" class="js-active">
				<!-- bg video -->
				<section class="home__hero-section home__hero-section-1 clear">
					<div id="video-wrapper">
						<video autoplay="autoplay" playsinline class="bg-video bg-video--fullscreen" loop="loop" muted="true" preload="auto" src="vendor/WebsiteVideo.mp4"></video>
					</div>
				</section>												
				<!-- about us -->
				<section class="clear pt-9 pb-12 home__about-section" data-aos="fade-up" style="height: 100vh;background-image: radial-gradient(#999, #161617);">
					<div class="container pt-5">
						<div data-aos="fade-up" data-aos-duration="3000">
							<h1 class="color-red mb-2 mb-sm-max-1 bold text-white" align="center">ABOUT US</h1>
						</div>
						<div class="text-white" align="center" data-aos="fadeInDown" style="font-size: 34px;line-height: 1.3;">
							We are one of the leading brand communication,<br>promotion and media buying agencies in the indian communication and advertising business. As a full service agency we offer our customers the entire range of communication disciplines in the classical and digital format.<br>We blend creativity & technology to transform<br>and grow our clients’ businesses.
						</div>
					</div>
				</section>
				<!-- Our Services -->
				<section class="py-5" style="background-image: radial-gradient(#9CC438, #9FC739);">
					<div class="container mb-6 mt-6">
						<h2 class="mb-2 pt-5 mb-xs-1 text-white line" data-aos="fadeInLeft">Our Services</h2>
					</div>
					<section class="container">
						<div class="row pb-5">
							<div class="col-md-12 pb-4 text-white" align="left">
								<p style="font-size: 35px;">
									Our expertise lies in integrated marketing communications focusing on every mass media possible. Whether, its TV Ads, Radio ads, Print ads, Media Buying, Events or Digital Marketing; we serve as a one stop solution for your every marketing need.
								</p>
							</div>
							<a class="btn btn-read mt-5 mb-6 ml-3 bg-white">
								Read More
							</a>
						</div>
					</section>
				</section>
			</section>

<!-- parallex -->
<div class="row" style="overflow-x: hidden;">
	<div class="column">
		<img src="vendor/img/Group 412.png" class="img">
		<img src="vendor/img/Group 406.png" class="img">
	</div>
	<div class="column">
		<img src="vendor/img/Group 402.png" class="img">
		<img src="vendor/img/Group 410.png" class="img">
	</div>
	<div class="column">
		<img src="vendor/img/Group 404.png" class="img">
		<img src="vendor/img/Group 408.png" class="img">
	</div>
</div>


			<!-- client speak -->
			<section class="container pt-6">
				<h2 class="text-green" align="left">OUR CLIENTS</h2>
				<div class="pb-5">
					<div class="center">
						<div class="row">
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group157.png" width="80%">
							</div>
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group156.png" class="pt-4 mt-3" width="80%">
							</div>
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group159.png" class="pt-3" width="80%">
							</div>
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group145.png" class="pt-4 mt-3" width="80%">
							</div>
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group389.png" class="pt-4 mt-3" width="80%">
							</div>
							<div class="col-md-2" align="center">
								<img src="vendor/img/Group387.png" class="pt-4 mt-3" width="80%">
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- team -->
			<section class="container my-6">
				<h2 class="text-green" align="center">OUR PASSIONATE LEADERSHIP TEAM</h2>
				<div class="row">
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group448.png" width="100%">
							<div class="text-green pt-2 bold font-22">Sandiip</div>
							<div class="pt-2 text-dark bold font-12">FOUNDER</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group449.png" width="100%">
							<div class="text-green pt-2 bold font-22">Priya</div>
							<div class="pt-2 text-dark bold font-12">FINANCE PLANNING</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group450.png" width="100%">
							<div class="text-green pt-2 bold font-22">Manoj</div>
							<div class="pt-2 text-dark bold font-12">ADVISOR</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>

					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group448.png" width="100%">
							<div class="text-green pt-2 bold font-22">Sandeep</div>
							<div class="pt-2 text-dark bold font-12">ADVISOR</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group449.png" width="100%">
							<div class="text-green pt-2 bold font-22">Varinder</div>
							<div class="pt-2 text-dark bold font-12">STRATEGY + OPERATIONS</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group450.png" width="100%">
							<div class="text-green pt-2 bold font-22">Vikas</div>
							<div class="pt-2 text-dark bold font-12">FINANCE OPREATIONS</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>

					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group448.png" width="100%">
							<div class="text-green pt-2 bold font-22">Manish</div>
							<div class="pt-2 text-dark bold font-12">BUSINESS</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group449.png" width="100%">
							<div class="text-green pt-2 bold font-22">Rohit</div>
							<div class="pt-2 text-dark bold font-12">BUSINESS</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group450.png" width="100%">
							<div class="text-green pt-2 bold font-22">Suhas</div>
							<div class="pt-2 text-dark bold font-12">DIGITAL</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>

					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group448.png" width="100%">
							<div class="text-green pt-2 bold font-22">Sami</div>
							<div class="pt-2 text-dark bold font-12">DESIGN</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group449.png" width="100%">
							<div class="text-green pt-2 bold font-22">Shabnam</div>
							<div class="pt-2 text-dark bold font-12">RELATIONSHIP MANAGEMENT</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-6 pt-3 pb-4" align="center">
						<div class="px-3" align="center">
							<img src="vendor/img/Group450.png" width="100%">
							<div class="text-green pt-2 bold font-22">Vikram</div>
							<div class="pt-2 text-dark bold font-12">BUSINESS</div>
							<div class="px-3 pt-1 social-team">
								<span><i class="fab fa-linkedin-in"></i></span>
								<span><i class="fab fa-facebook-f"></i></span>
								<span><i class="fab fa-instagram"></i></span>
								<span><i class="fab fa-twitter"></i></span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- client speak -->
			<section class="py-6" style="background-image: radial-gradient(#9CC438 30%, #678025 80%);">
				<h2 class="text-white" align="center">CLIENT SPEAK</h2>
				<div class="container pb-5">
					<div class="row px-5">
						<div class="col-md-12 px-5">
							<div class="px-5 py-5" style="border: 5px solid #fff;">
								<div class="text-white bold px-5" style="font-size: 30px">
									This is a dummy text. This is a dummy text. This is a dummy text.<br>This is a dummy text. This is a dummy text.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- our arms -->
			<section class="container my-6">
				<h2 class="text-green" align="center">OUR ARMS</h2>
				<div class="row px-5">
					<div class="col-md-4 pt-3 pb-4" align="center">
						<img src="vendor/img/Monks-Soldiers.svg">
					</div>
					<div class="col-md-4 pt-3 pb-4" align="center">
						<img src="vendor/img/promo.svg">
					</div>
					<div class="col-md-4 pt-3 pb-4" align="center">
						<img src="vendor/img/WEDDINGSTARZ.svg">
					</div>
				</div>
			</section>
			<!-- footer -->
			<footer class="footer-section" data-aos="fade-up">
				<div class="container">
					<div class="row py-5">
						<div class="col-md-6 col-12 mt-6">
							<div class="pb-5"  data-aos="fade-up">
								<div class="text-white bold" data-aos="fade-up" style="font-size: 30px;">LEVEL UP YOUR MARKETING EFFORT.</div>
								<div class="text-white bold" data-aos="fade-up" style="font-size: 30px;">GET THE EDGE. GET THE RESULTS.</div>
							</div>

							<div class="pt-5 pb-3">
								<div class="text-white bold" style="font-size: 25px;">CONTACT US AT</div>
								<div class="text-white pt-2">
									Promodome Communications Pvt. Ltd.<br>
									29/2, Savitri Nagar, Sheikh Sarai, Phase-1, New Delhi-110017
								</div>
							</div>

							<div class="pt-5">
								<div style="font-size: 16px;">
									<img src="vendor/img/msg.svg" width="30px">
									<span class="pl-1"><a href="mailto:info@promodomegroup.com" class="text-white bold">info@promodomegroup.com</a></span>
									<span class="text-white bold"> | </span>
									<span><a href="mailto:shabnam@promodomegroup.com" class="text-white bold">shabnam@promodomegroup.com</a></span>
								</div>
								<div class="pt-4" style="font-size: 16px;">
									<img src="vendor/img/call.svg" width="26px">
									<span class="pl-1"><a href="callto:01145396666" class="text-white bold">011 4539 6666</a></span>
									<span class="text-white bold"> | </span>
									<span><a href="callto:9810132318" class="text-white bold">+91 98101 32318</a></span>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-12 mt-5 pt-4">
					        <form class="text-center">
					            <div class="form-row">
					                <div class="col">
					                    <!-- First name -->
					                    <div class="md-form mx-3">
					                        <input type="text" id="materialRegisterFormFirstName" class="form-control">
					                        <label for="materialRegisterFormFirstName">	NAME</label>
					                    </div>
					                </div>
					                <div class="col">
					                    <!-- Last name -->
					                    <div class="md-form mx-3">
					                        <input type="email" id="materialRegisterFormLastName" class="form-control">
					                        <label for="materialRegisterFormLastName">EMAIL</label>
					                    </div>
					                </div>
					                <div class="col">
					                    <!-- Last name -->
					                    <div class="md-form mx-3">
					                        <input type="text" id="materialRegisterFormLastName" class="form-control">
					                        <label for="materialRegisterFormLastName">SUBJECT</label>
					                    </div>
					                </div>
					            </div>
					            <!-- E-mail -->
					            <div class="md-form mt-6 pt-5 mx-3">
					                <input type="text" id="materialRegisterFormEmail" class="form-control">
					                <label for="materialRegisterFormEmail">MESSAGE</label>
					            </div>

					            <button type="submit" class="btn btn-send mt-4">Send</button>
					        </form>
						</div>
						<div class="col-md-6 col-12 mt-6 pb-5" align="left">
							<a><img src="vendor/img/logo.png" width="200px"></a>
						</div>
						<div class="col-md-6 col-12 pt-4 mt-6 pb-5" align="right">
							<span class="pl-3"><a><img src="vendor/img/lin.svg"></a></span>
							<span class="pl-3"><a><img src="vendor/img/fb.svg"></a></span>
							<span class="pl-3"><a><img src="vendor/img/insta.svg"></a></span>
							<span class="pl-3"><a><img src="vendor/img/twitter.svg"></a></span>
							<span class="pl-3"><a><img src="vendor/img/yb.svg"></a></span>
						</div>
					</div>
				</div>
			</footer>
			<!-- scroll to top -->
			<a href="#site-wrapper" class="scroll-to-top scroll-to"></a>
		</div>
	</div>


	<!-- Bootstrap tooltips -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
	<!-- Bootstrap core JavaScript -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
	<!-- MDB core JavaScript -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>

	<script src="vendor/wp-content/themes/threesixtyeight/js/plugins4ce5.js?ver=4.903" defer="defer" type="text/javascript"></script>
	<script src="vendor/wp-content/themes/threesixtyeight/js/custom63dc.js?ver=4.905" defer="defer" type="text/javascript"></script>
</body>
</html>