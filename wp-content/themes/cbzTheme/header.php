<!DOCTYPE html>
<html>
<head>
	<title>Promodome</title>
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
	<!-- Google Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
	<?php wp_head();?>
</head>
<body <?php body_class();?>>



<header class="container">
	<?php wp_nav_menu (
		array(
			'theme_location' => 'top-menu',
			'menu_class' => 'navigation',
		)
	);?>
</header>