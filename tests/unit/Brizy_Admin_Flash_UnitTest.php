<?php


use PHPUnit\Framework\TestCase;


class Brizy_Admin_Flash_UnitTest extends TestCase {


	public function test_add() {

		$instance = Brizy_Admin_Flash::instance();

		$instance->add( 'message', Brizy_Admin_Flash::INFO );

		$this->_test_notice( $instance, 'message', Brizy_Admin_Flash::INFO );

	}

	public function test_custom_notice_add() {
		$instance = Brizy_Admin_Flash::instance();

		$instance->add_error( 'error' );
		$this->_test_notice( $instance, 'error', Brizy_Admin_Flash::ERROR );

		$instance->add_warning( 'warning' );
		$this->_test_notice( $instance, 'warning', Brizy_Admin_Flash::WARNING );

		$instance->add_info( 'info' );
		$this->_test_notice( $instance, 'info', Brizy_Admin_Flash::INFO );

		$instance->add_success( 'success' );
		$this->_test_notice( $instance, 'success', Brizy_Admin_Flash::SUCCESS );
	}

	private function _test_notice( $instance, $message, $type ) {
		$mhash = md5( $message );

		$this->assertTrue( $instance->has( $mhash ), 'It should have a hash for notice: [' . $message . ']' );

		$notice = $instance->get( md5( $message ) );

		$this->assertNotNull( $notice, 'It should return a notice for: ['.$message.']' );

		$this->assertArrayHasKey( 'type', $notice, 'It should have a value with key "type"' );
		$this->assertArrayHasKey( 'message', $notice, 'It should have a value with key "message"' );

		$this->assertEquals( $type, $notice['type'], 'It should return the correct type' );
		$this->assertEquals( $message, $notice['message'], 'It should return the correct message' );
	}

}