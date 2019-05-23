<?php get_header();

/*
Template Name: Home
 */?>

<section id="home-module-1" class="home-module-1 waypoint">
    <?php echo get_template_part('template-parts/navbar'); ?>
    <div class="jumbo-container">

        <?php echo get_template_part('template-parts/top-header'); ?>

        <div class="jumbotron">
            <div class="jumbo-content">
                <div>

                    <div>

                        <a class="navbar-brand d-lg-block d-none" href='<?php echo get_site_url(); ?>'><img
                                src="<?=IMGURL;?>logo.svg" alt="<?php echo get_bloginfo(
    'description'
); ?>" /></a>

                        <?php if( $h1 = get_field('custom_h1') ) : ?>

                        <?php echo $h1 ?>

                        <?php endif; ?>
                    </div>

                </div>
            </div>

        </div>
        <div class="secondary-nav-title">
            <div class="ribbon">Free Consultations On Personal Injury & Family Cases</div>
        </div>
        <div class="secondary-nav">
            <?php echo responsive_bs_menu('primary', 'left', SITENAME); ?>
        </div>
    </div>

</section>

<section id="home-module-2" class="home-module-2 ">
    <div class="container">
        <div class="row">
            <div class="col col-lg-7">
                <div class="side-text">
                    <span>#getprinted</span>

                    <picture>
                        <source srcset="<?=IMGURL?>printed-banners.jpg" media="(min-width: 992px)">
                        <img src="<?=IMGURL?>banner-window.jpg" />
                    </picture>

                </div>
            </div>
            <div class="col">
                <div>
                    <h2 class="h4 expander collapsed" data-toggle="collapse" data-target="#collapse"
                        aria-expanded="false" aria-controls="collapse"><span>Printing Services</span></h2>
                    <div class="extra-padding">
                        <?php if( $section_1_expander = get_field('section_1_expander') ) : ?>
                        <?php echo $section_1_expander ?>
                        <?php endif; ?>

                        <?php if( $section_1_title = get_field('section_1_title') ) : ?>

                        <?php echo $section_1_title ?>


                        <?php endif; ?>

                        <?php if( $section_1_text = get_field('section_1_text') ) : ?>

                        <?php echo $section_1_text ?>

                        <?php endif; ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="ribbon">
    <div class="container">
        <div class="row">
            <div class="col">
                <ul class="list-inline">
                    <li>
                        <a href="<?=SITEURL?>/printing-services/">Printing Services</a>
                    </li>
                    <li><a href="<?=SITEURL?>/printing-services/graphic-design/">Design Services</a>
                    </li>
                    <li><a href="<?=SITEURL?>/marketing-services/">Mailing Services</a>
                    </li>
                    <li><a href="<?=SITEURL?>/marketing-services/">Mailing Lists</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="home-module-3" class="home-module-3">

    <div class="bg-grid">
        <div class="container grid-container">

            <div class="row">

                <div class="col">
                    <div class="grid-img">

                        <picture>
                            <source srcset="<?=IMGURL?>grid-retina.png 2x" />
                            <img src="<?=IMGURL?>grid-sm.png" alt="Sidebar" usemap="#image-map" class="d-xl-none" />
                        </picture>

                        <map name="image-map">
                            <area target="" alt="Digital" title="Digital" href="<?=SITEURL?>/printing-services/"
                                coords="0,228,361,116" shape="rect">
                            <area target="" alt="Wide Format" title="Wide Format"
                                href="<?=SITEURL?>/printing-services/wide-format-printing/" coords="1,230,360,458"
                                shape="rect">
                            <area target="" alt="Offset" title="Offset" href="<?=SITEURL?>/printing-services/"
                                coords="0,459,361,574" shape="rect">
                            <area target="" alt="Promotional Items" title="Promotional Items"
                                href="<?=SITEURL?>/printing-services/promo-items/" coords="0,574,361,801" shape="rect">
                            <area target="" alt="Hello" title="Contact Us" href="<?=SITEURL?>/contact-us/"
                                coords="2,0,361,114" shape="rect">
                        </map>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container d-none d-xl-block">
        <div class="row shadow">
            <div class="col">
                <img src="<?=IMGURL?>bg-hi.jpg" alt="Hi">
            </div>
            <div class="col bg-gradient">
                <h2>
                    <a href="<?=SITEURL?>/promo-items/">Promotional Items</a>
                </h2>
            </div>
        </div>
    </div>
</section>

<section id="home-module-4" class="home-module-4">
    <div class="container bg-gray">
        <div class="row">
            <div class="col side-text align-bottom">
                <div class="extra-padding">
                    <h2>Our Services</h2>
                    <p>As a well-equipped press and digital printer, Universal Graphics has an extensive list of
                        services to cover all marketing and printing material needs for any business to promote, grow,
                        and represent their brand. Whether you need offset printing, a banner printed for your event,
                        flyers, booklets, envelopes or postcards. There is no better way to attract customers than
                        well-designed and quality printed material.</p>

                    <span>#printed</span>
                </div>

            </div>
            <div class="col bg-neon">

            </div>
        </div>
    </div>
    <div class="big-buttons">
        <div class="container">
            <div class="row">
                <div class="col">
                    <a href="<?=SITEURL?>/submit-files/">SUBMIT YOUR FILES</a>
                </div>
            </div>
        </div>
    </div>
    <div class="container bg-green">
        <div class="row">
            <div class="col">
                <h2>Featured Products</h2>
                <a href="<?=SITEURL?>/printing-services/">
                    <button class="btn btn-primary">
                        VIEW FEATURED PRODUCTS
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div class="container bg-printer">

        <div class="row">
            <div class="col">
                <ul class="columns">
                    <li>Business Cards</li>
                    <li>Door Hangers</li>
                    <li>Edge Cards</li>
                    <li>Envelopes</li>
                    <li>Event Tickets</li>
                    <li>Fabric Banners</li>
                    <li>Flags</li>
                    <li>Flyers and Brochures</li>
                    <li>Indoor Banners</li>
                    <li>Letterhead</li>
                    <li>Mounted Canvas</li>
                    <li>Mugs</li>
                    <li>NCR Forms</li>
                    <li>Painted Edge Cards</li>
                    <li>Postcards</li>
                    <li>Roll Labels</li>
                    <li>Stickers</li>
                    <li>T-Shirt</li>
                    <li>Tote Bags</li>
                    <li>View All Products</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="home-module-5" class="home-module-5 home-module-2">
    <div class="container">
        <div class="row">
            <div class="col col-lg-7">

                <picture>
                    <source srcset="<?=IMGURL?>dont-advertise-entice.jpg" media="(min-width: 992px)">
                    <img src="<?=IMGURL?>entice-banner.jpg" alt="Interior" />
                </picture>
            </div>
            <div class="col">
                <div class="extra-padding">

                    <h2>Our Promise
                    </h2>

                    <p>
                        Universal Graphics has spent the last few decades immersing itself in the business of commercial
                        printing and graphic design services. Throughout our long journey, we have learned the ins and
                        outs of the industry, but we have always understood that what truly sets us apart is our
                        commitment to the customer and the quality of our products.
                    </p>

                    <p>
                        We value personal relationships with our customers and helping their business flourish. Our
                        expertise lies in commercial printniversal Graphics serves customers all over the city and also
                        in the surrounding areas of New Mexico such as Las Cruces and Alamogordo.ing and representing
                        businesses through professional and quality designs and products.

                    </p>

                </div>
            </div>

        </div>
    </div>
</section>

<section id="home-module-6" class="home-module-6">
    <div class="container">
        <div class="row">
            <div class="col side-text align-bottom">
                <div class="extra-padding">
                    <h2>About Our Location
                    </h2>

                    <p>Universal Graphics is conveniently located on the Eastside of El Paso near Vista del Sol and
                        Lomaland. Find us at the heart of East El Paso where the growing industries and private sector
                        make it a vibrant and thriving area. </p>

                    <span>#ElPaso</span>
                </div>

            </div>
            <div class="col">

            </div>
        </div>
    </div>
</section>


<?php get_footer();?>