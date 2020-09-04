<?php get_header();?>

<h1><?php the_title(); ?></h1>

<!-- blog image -->
<?php if(has_post_thumbnail()):?>
	<img src="<?php the_post_thumbnail_url('largest');?>" class="img-fluid">
<?php endif;?>

<!-- blog content -->
<?php if (have_posts()) : while(have_posts()) : the_post();?>
	<?php the_content();?>
<?php endwhile; endif;?>


<?php get_footer();?>