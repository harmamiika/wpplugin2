<?php

/**
 * Plugin Name: Are you paying attentong quiz
 * Description: Give your readers a multiple choice question. 
 * Version 1.0
 * Author: Miika
 * Author URI: 
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 class AreYouPayingAttention {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'test.js', array('wp-blocks', 'wp-element'));
    }
    // huom piste argumenttilistassa
 }

 $areYouPayingAttention = new AreYouPayingAttention();

