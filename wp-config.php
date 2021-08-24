<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',4-7$Uv5RuJl$m4k`:Y):XsTNL0M/`xF66-pCRd@D#$[C!]|9eH+5>uSPtElSvj0' );
define( 'SECURE_AUTH_KEY',  'M5EcvnZN:l~;S*trT][,@27%bKk/ +j-jTIq=@J$gwN8RJAyq8@cwYcfbEM9H9Ao' );
define( 'LOGGED_IN_KEY',    'ASxv@OD@7fE6g[9UJGua;lONtZA>x,e}02CI!=.#$6*[^sL*S!1S%;LT1M5;xgg3' );
define( 'NONCE_KEY',        'ljQb907vZ#5SD#raRw?tLe[X[PWsb+9mL4~AYZ+D}.Ku,OK$jrg!1Ga(5hR7H}EN' );
define( 'AUTH_SALT',        'Yme2Y:].,p.7q9;A^$4hAE^oR?~c^6;h<k,XiVOUGOF2$o{t[<P.>UPwR~y8U!v9' );
define( 'SECURE_AUTH_SALT', ';.~H);~Tg^rKD+0uzO>|`!iBZ=]FOs<Y<!TN#^5E4oa<A/jroRC,M<G>O)^:~7Bx' );
define( 'LOGGED_IN_SALT',   'ZD<[1 +diWiP)LZ?(2@gW+&K?zLaawa%_,*Pho^J`Q:c49~J~b(?%Kq,DzM}+Yu6' );
define( 'NONCE_SALT',       '[}~<}z`O|^+9mzsHB84`&Z|jS?L5JB?<ZR,p?+kIO?N%--j=v>mG1/_e5D=oaAMS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
