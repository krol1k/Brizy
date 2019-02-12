<?php
/**
 * Compatibility with Fast Velocity Minify plugin: https://wordpress.org/plugins/wordpress-mu-domain-mapping/
 */
class Brizy_Compatibilities_WordpressMuDmainMapping {

	public function __construct() {
		add_action( 'template_redirect', array( $this, 'remove_redirect_to_mapped_domain' ), 9 );
	}

	public function remove_redirect_to_mapped_domain() {

		if (  ! isset( $_GET['brizy-edit'] ) && ! isset( $_GET['brizy-edit-iframe'] ) ) {
			return;
		}

		remove_action( 'template_redirect', 'redirect_to_mapped_domain' );
	}
}