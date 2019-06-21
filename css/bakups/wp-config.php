<?php
define('WP_CACHE', true); // Added by WP Rocket
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'scott_2017');

/** MySQL database username */
define('DB_USER', 'scott_2017');

/** MySQL database password */
define('DB_PASSWORD', 'k&3w@uSd+-8rGV$F');

/** MySQL hostname */
define('DB_HOST', 'mysql.agimswebdesign.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'B(0|iaMz/dflY&NLAhvu^xT|r=x2!NI~_O9y*@ll`TyHXv sih/x9|b.Ky/= Q{_');
define('SECURE_AUTH_KEY',  'v|Y_(Q&E@mNpRO<h(Q6Q6m7n5llqH}(mw3%Bzo_pEMLp9]zu=YRCqh9o]|407!_O');
define('LOGGED_IN_KEY',    'by+?Sg5t!I5~t;ZO!(R+{=EgX#YbstZ]~j1M>^IIg+%FyuW+U{,,d%M/z&liSST]');
define('NONCE_KEY',        'O&Bn$M=2?d[T|21[Nd2cRODG<%[ =S 4UoCMMU1PC/uoL^2D.em;fQiCjD|wq@Vj');
define('AUTH_SALT',        '[``@pjYcFgV~]%,oC9fg*oxb[~^tK7_EW`IS@=J.K8B(Lu`qSh`RJEE!%p 0KW,9');
define('SECURE_AUTH_SALT', '.thk[V&HsY<|hw]:6hl06s4)p~)mh)9)<CTUG&_PJ|]7:(lYPqwSg^k_WSJ%2}&,');
define('LOGGED_IN_SALT',   ')eOA{=&^+(+| HcvQDsz@2i2$<Ut(YQ$0$|<BWvbL #eR)22L=t&|qO0vQk]rod_');
define('NONCE_SALT',       'BD^12Ep^A/bYf4(dP&L$Th9T#=@X-x4M.!*yX9b0Kwa^L6KX)sBhV@UJCtWl!yI_');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'scott_2017_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', FALSE);
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');