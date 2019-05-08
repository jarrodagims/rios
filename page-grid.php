<?php get_header();
/*
Template Name: Grid Page
 */
?>
<?php get_template_part('template-parts/page/page', 'top-banner');?>
<section id="main">
    <div class="container">
        <div class="row">
            <div class="col">
                <?php get_template_part('template-parts/content/content', 'page');?>
            </div>
        </div>
    </div>
</section>
<?php get_footer();?>