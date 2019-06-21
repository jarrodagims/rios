<?php get_header();

/*
Template Name: Home
 */?>

<section data-target="#button1" id="home-module-1" class="home-module-1 waypoint">
    <div class=" nav-sidebar">
        <div class="brand-header d-lg-none">
            <a class="navbar-brand" href='<?php echo get_site_url(); ?>'><img src="<?=IMGURL;?>logo.svg" alt="<?php echo get_bloginfo(
            'description'
        ); ?>" /></a>
        </div>
    </div>

    <?php echo get_template_part('template-parts/navbar'); ?>
    <div class="jumbo-container">

        <?php echo get_template_part('template-parts/top-header'); ?>

        <div class="jumbotron">
            <div class="jumbo-content">
                <div>

                    <div>

                        <a class="navbar-brand" href='<?php echo get_site_url(); ?>'><img src="<?=IMGURL;?>logo.svg"
                                alt="<?php echo get_bloginfo(
    'description'
); ?>" /></a>

                        <div class="h1"><?php if( $h1 = get_field('custom_h1') ) : ?>

                            <?php echo $h1 ?>

                            <?php endif; ?></div>
                    </div>

                </div>
            </div>

        </div>
        <div class="secondary-container">
            <div class="secondary-nav-title">
                <div class="ribbon">Free Consultations<br class="d-lg-none"> On Personal Injury & Family Cases</div>
            </div>
            <div class="secondary-nav">
                <?php echo responsive_bs_menu('primary', 'left', SITENAME); ?>
            </div>

            <div class="d-lg-none tertiary-nav">
                <ul>
                    <li><a href="<?=SITEURL?>/personal-injury/">Personal Injury</a>
                    <li><a href="<?=SITEURL?>/immigration/">Immigration</a></li>
                    <li><a href="<?=SITEURL?>/family-law/">Family Law</a></li>
                </ul>
            </div>
        </div>
    </div>

</section>

<div class="sidebar-container">
    <div class="nav-sidebar"></div>
    <div class="content">


        <section id="home-module-2" class="home-module-2 ">
            <div class="container">
                <div class="row">

                    <div class="col">
                        <div>
                            <h2 class="h4 expander collapsed" data-toggle="collapse" data-target="#collapse"
                                aria-expanded="false" aria-controls="collapse"><span>El Paso’s best immigration
                                    litigation law firm
                                </span></h2>
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

        <section id="home-module-3" class="home-module-3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="text-center">The Law Offices of<br>
                            Rios & Parada, PLLC</h2>
                    </div>
                </div>
            </div>

            <div class="container three-col  waypoint" data-target="#button2">
                <div>
                    <div class="row">
                        <div class="col">
                            <div class="h2">Experienced Attorneys Who Fight For You<br class="d-block d-lg-none">
                                | Overview of Our Services</div>
                        </div>
                    </div>
                    <div class="three-columns">
                        <div>
                            <div class="m-row">
                                <div class="img-container">
                                    <img src="<?=IMGURL?>knees.jpg" alt="">
                                </div>

                                <div class="column-top">
                                    <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne" href="#" class="d-xl-none d-block">
                                        <p>Personal Injury</p>
                                    </a>

                                    <p class="d-xl-block d-none">Personal Injury</p>
                                </div>
                            </div>
                            <div id="collapseOne" class="collapse">
                                <div class="extra-padding">
                                    <p><strong><em>Personal injury is a broad category of legal cases that pertain to
                                                injury
                                                to the body resulting from negligence, car crashes, or other types of
                                                accidents.</em></strong></p>

                                    <p>These type of cases involve victims who suffered an injury as a result of someone
                                        else’s negligent behavior, business practices, or unsafe facility. A personal
                                        injury
                                        can have a significant impact on people’s lives, cost thousands in medical
                                        expenses,
                                        and alter a person’s ability to work. These are difficult cases that affect
                                        people’s
                                        quality of life, financial standing, and beyond.
                                    </p>
                                </div>

                                <div class="align-bottom">
                                    <div class="bottom">
                                        <p>Some of the most common include:</p>
                                    </div>

                                    <div class="bottom-end extra-padding">
                                        <ul>
                                            <li>Car accidents</li>
                                            <li>Motorcycle accidents</li>
                                            <li>Dog bites</li>
                                            <li>Slip & fall accidents</li>
                                            <li>Wrongful death</li>
                                            <li>Trucking accidents</li>
                                            <li>Pedestrian accidents</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="immigration-lawyer">

                            <div class="m-row">
                                <div class="img-container">
                                    <img src="<?=IMGURL?>passport.jpg" alt="">
                                </div>

                                <div class="column-top">
                                    <a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo" href="#" class="d-xl-none d-block">
                                        <p>Immigration</p>
                                    </a>
                                    <p class="d-xl-block d-none">Immigration</p>
                                </div>
                            </div>

                            <div id="collapseTwo" class="collapse">
                                <div class="extra-padding">
                                    <p>
                                        <strong><em>The United States of America is the land of opportunity, innovation,
                                                and
                                                greatness.</em></strong>
                                    </p>

                                    <p>
                                        It is a land that welcomes people of all backgrounds and religions, and it is
                                        why
                                        thousands of people are fighting to call the U.S. their home.
                                    </p>

                                    <p>
                                        Immigration law is important to us, especially as a homegrown city of
                                        immigrants.
                                        The immigration system is overwhelming and downright impossible to tackle on
                                        your
                                        own. That’s why we take our role in your life seriously. We work to help you
                                        resolve
                                        your case, whether you have been detained or are looking to change your legal
                                        status.
                                    </p>
                                </div>
                                <div class="align-bottom">
                                    <div class="bottom">
                                        <p>Below are some of the services we offer:</p>
                                    </div>

                                    <div class="bottom-end  extra-padding">
                                        <ul>
                                            <li>Deportation defense</li>
                                            <li>Motions for bonds & bond processing</li>
                                            <li>Adjustment of status (green cards or visas)</li>
                                            <li>DACA renewals</li>
                                            <li>Citizenship applications</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="family-lawyer">

                            <div class="m-row">
                                <div class="img-container">
                                    <img src="<?=IMGURL?>happy-people.jpg" alt="">
                                </div>

                                <div class="column-top">
                                    <a data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree" href="#" class="d-block d-xl-none">
                                        <p>Family Law</p>
                                    </a>
                                    <p class="d-xl-block d-none">Family Law</p>
                                </div>
                            </div>
                            <div id="collapseThree" class="collapse">
                                <div class="extra-padding">
                                    <p>
                                        <strong><em>Family life is everything. But we know that the dynamic of a family
                                                is
                                                often complicated, resulting in difficult moments.</em></strong>
                                    </p>

                                    <p>
                                        When matters become serious, legal assistance is necessary. Our law firm is here
                                        to
                                        help you settle disputes that are otherwise painful, complicated, and wrought
                                        with
                                        legal implications. We are committed to ensuring our clients have adequate and
                                        expert legal counsel when it comes to dealing with family issues.
                                    </p>
                                </div>

                                <div class="align-bottom">
                                    <div class="bottom">
                                        <p>Some of the family law cases we work include:</p>
                                    </div>

                                    <div class="bottom-end extra-padding">
                                        <ul>
                                            <li>Divorce</li>
                                            <li>Child custody</li>
                                            <li>Child support</li>
                                            <li>Modifications</li>
                                            <li>Enforcement</li>
                                            <li>Protective orders</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="contact-ribbon">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <p>We can help. <a href="<?=SITEURL?>/contact-us/">Contact us today</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ribbon">
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>
                </div>
            </div>
        </section>

        <section id="home-module-4" class="home-module-4 waypoint" data-target="#button3">
            <div class="container">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="extra-padding">
                                    <picture>
                                        <source srcset="<?=IMGURL?>justice.jpg" media="(min-width: 992px)">
                                        <img src="<?=IMGURL?>lawyer-sm.jpg" />
                                    </picture>
                                </div>
                            </div>
                            <div class="col">
                                <div class="extra-padding">
                                    <h2>A Law Firm That Fights For Justice</h2>

                                    <p>
                                        The Rios & Parada Law Firm is made up of local attorneys who are closely
                                        familiar with the city and the great state of Texas. Our three attorneys
                                        attended law school at the prestigious Thurgood Marshall School of Law in
                                        Houston, Texas.
                                    </p>

                                    <p>
                                        Gabriel Seañez and Ricardo Rios are both from El Paso and grew up in the Sun
                                        City. Tony Parada was raised in Huntsville, Texas and focused intensely on
                                        immigration law. Mr. Parada’s expertise in this area of law led him to El Paso
                                        where he became the immigration specialist of the firm.
                                    </p>

                                    <p>
                                        Together, our team of attorneys forms the region’s most experienced and
                                        knowledgeable team of legal help in personal injury, immigration, and family
                                        law.
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="home-module-5" class="home-module-5">
            <div class="shadow">
                <div class="container">
                    <div class="row">

                        <div class="col">
                            <img src="<?=IMGURL?>attorneys.svg" width="144" alt="">

                            <h2>Attorneys Who Listen and<br>
                                Fight For You </h2>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="extra-padding">

                            <p class="blurb">
                                <strong>
                                    <em>Our commitment is to the law and to the individual. Every case is different and
                                        every case is worth fighting.</em>
                                </strong>
                            </p>

                            <div class="text-center">
                                <p>
                                    There is a lot at stake, whether it is your personal health, your freedom, or your
                                    family’s future. These matters affect your life. For these<br
                                        class="d-none d-xl-block"> reasons, we uphold the
                                    Free Consultations for Family Law and Personal Injury Cases.resenting
                                    their individual case.
                                </p>
                                <p>Every case begins by telling you the truth about your situation. We then explain the
                                    next
                                    steps and how we will<br class="d-none d-xl-block"> represent you. As our client, we
                                    keep open communication to
                                    ensure
                                    you are always aware of the standing and status of your pending<br
                                        class="d-none d-xl-block"> case or
                                    developments.
                                    Simply put, we fight honestly!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="ribbon">
            <h2>Schedule a consultation</h2>
        </div>


        <section id="home-module-6" class="home-module-6 waypoint" data-target="#button4">

            <div class="container">
                <div class="row">

                    <div class="col">
                        <div class="extra-padding">
                            <h2>Who We Serve</h2>
                        </div>
                    </div>
                    <div class="col">
                        <div class="extra-padding">
                            <p>We serve the El Paso community. This includes private citizens or individuals who have
                                been
                                injured,
                                as well as families, and numerous vulnerable immigrants fighting for a better way of
                                life in the
                                United States.
                            </p>
                        </div>

                        <div class="bottom">
                            <div class="extra-padding">
                                <p>
                                    Our office is located in downtown<br class="d-lg-block d-none" />
                                    El Paso at <strong><em>1505 E. Missouri Avenue.</em></strong></p>

                                <a href="<?=SITEURL?>/contact-us/">
                                    <button class="btn btn-outline">
                                        GET DIRECTIONS
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section id="home-module-7" class="home-module-7 waypoint" data-target="#button5">
            <div class="container">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <picture>
                                    <source srcset="<?=IMGURL?>gavel.jpg" media="(min-width: 992px)">
                                    <img src="<?=IMGURL?>how-can-we-help.jpg" />
                                </picture>
                            </div>
                            <div class="col">
                                <h2>
                                    How Can We Help You?
                                </h2>

                                <p>
                                    The Law Offices of Rios & Parada, PLLC focuses on several types of cases including
                                    personal
                                    injury, family law, and immigration. Below is an overview of what we do and what we
                                    offer.
                                </p>

                                <h2>Value Proposition</h2>
                                <p>We stand firm in upholding high standards of excellence when it
                                    comes to serving our clients. As attorneys, we spend a lot of time studying law and
                                    understanding our judicial system so we can fight for you in the most effective way
                                    possible. At The Law Offices of Rios & Parada, PLLC, we operate under values of
                                    commitment,
                                    honesty, and professionalism. We are not interested in taking your money and tossing
                                    your
                                    case to the forgotten ‘to do’ pile. We will get your case in motion so that you can
                                    achieve
                                    a favorable outcome, allowing you to continue living a normal life.</p>

                                <p>
                                    Our law firm is committed to serving each one of our clients with respect, honesty,
                                    and
                                    integrity.
                                </p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>




        <?php get_footer();?>