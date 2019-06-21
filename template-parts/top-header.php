<div class="top-header">
    <div class="container-fluid">
        <div class="v-align row">
            <div class="col navbar-button text-center">
                <ul class="list-inline social-media lg">
                    <li><a href="https://www.facebook.com/RiosandParadaLaw/"
                            class="facebook-button social-media-button lg square lighten external" target="_blank"><i
                                class="fab fa-facebook-f fa-fw fa-lg"><span>Facebook</span></i></a></li>
                    <li><a href="https://twitter.com/riosparadalaw"
                            class="twitter-button social-media-button lg square lighten external" target="_blank"><i
                                class="fab fa-twitter fa-fw fa-lg"><span>Twitter</span></i></a></li>

                    <li><a href="#espanol">ESPAÑOL</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">

                    <li><a
                            href="tel:<?php if (!empty(get_option('sherpa_telephone_number'))) : echo get_option('sherpa_telephone_number'); endif; ?>">TEL:
                            <?php printPhone();?></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>