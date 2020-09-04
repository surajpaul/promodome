<?php
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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'promodome' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9)8RXJGNW$vl$_UYXqICMC/6rDQ`ecrOxHv@uP?{JL`dj0Yp9;;>O6de Z[[!D-!' );
define( 'SECURE_AUTH_KEY',  'tcxdnDCWD@r<yAj?jjTY0}X3-IBiy[qSlG@*{;1iSagz8d)rD[7]/kuN#,hT*E.@' );
define( 'LOGGED_IN_KEY',    ' cbE9_/g$RV]; @c>cgT]Dd7hLNylY{&Fe+U<x{j`:TCz$01q!dtQ@)4zvi uL%N' );
define( 'NONCE_KEY',        'EL?GQ%k&C3@K69`CREK|nzL^;$evB*JXjGh<SlHk!PX]W<!_C>F?Z{zJ^j!Lk>2H' );
define( 'AUTH_SALT',        'hmCJ5{~$c:cX+I.[1I@#f|EK3a;T!#?lvp6)A8<6!0utGlZ?m2E9!9atsS}O`:>T' );
define( 'SECURE_AUTH_SALT', 'LLpP|~Kg^B?w)K(/iI:oe N?TyD2(N`|~zkK85upWKA5IPp>Bx9Er&N1Fab*Ux9)' );
define( 'LOGGED_IN_SALT',   '`1KFgfCs}DKYqe!! 3|3`{e?DEC$l=[UT@l_#PA5$)~r@tU4mD`a?zJ1o{;N&1q|' );
define( 'NONCE_SALT',       'xq%F@wN9wG]DY5b uM}O%G.dnb+BD#;YWJ:5<GPv2L|*/|$fpYUlPlyR2F:>u.80' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
