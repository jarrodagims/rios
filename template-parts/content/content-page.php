<?php

	if(have_posts()) {
		while(have_posts()) {
			the_post();
			
			$permalink = get_permalink();

			$sherpa_automatic_h1 = get_option('sherpa_automatic_h1');

			if($sherpa_automatic_h1 == 'y')
			{
    			if(current_user_can('edit_pages')) {
    				$edit_url = get_edit_post_link();
    				$edit_link = " <small><a href=\"$edit_url\" class=\"post-edit-link\">" . __('Edit Page','sherpa') . "</a></small>";
    			} else {
    				$edit_link = NULL;
    			}
   				$title = "<span>" . get_the_title() . $edit_link . "</span>\n";
			}
			else
			{
    			$title = NULL;
			}

            echo "<article>\n";
            echo "<div class=\"sidebar-content\">";
            get_sidebar();
            echo "<div class=\"content page-content\">";
            if(get_field('custom_h1')) :
                echo  get_field('custom_h1', $pageid)  ;
            endif;
            the_content();
            ?>
<div class="banner banner-bottom">
    <span class="banner-title">IMMIGRATION & PERSONAL INJURY ATTORNEYS AT LAW</span>
    <?php if (has_post_thumbnail( $post->ID ) ):
                echo the_post_thumbnail(array(1060,209));
            else:
                ?>
    <img src="<?= IMGURL ?>internal-banner.jpg" alt="<?php echo get_bloginfo( 'name' ); ?>" />
    <?php
            endif; ?>
</div>
<?php
            if (get_field('page_bottom', $pageid)) { ?>
<section class="page-bottom">
    <div class="row">
        <div class="col-xs-12">
            <?php echo get_field('page_bottom', $pageid); ?>
        </div>
    </div>
</section>
<?php  }
            ?>
<div class="content">
    <?php
            if (get_field('page_two', $pageid)) { ?>
    <?php echo get_field('page_two', $pageid); ?>
    <?php  }
            echo "</div>";
            echo "</div>";
            echo "</div>";
            echo "</article>\n";
		}
		
    }