<?php get_header();?>

<h1><?php single_cat_title(); ?></h1>

<?php if (have_posts()) : while(have_posts()) : the_post();?>

	<!-- blog image -->
	<?php if(has_post_thumbnail()):?>
		<img src="<?php the_post_thumbnail_url('smallest');?>" class="img-fluid">
	<?php endif;?>

	<!-- blog content -->
	<h3><?php the_title(); ?></h3>
	<?php the_excerpt();?>
	<a href="<?php the_permalink();?>" class="btn btn-success">Read more</a>

<?php endwhile; endif;?>


<?php get_footer();?>