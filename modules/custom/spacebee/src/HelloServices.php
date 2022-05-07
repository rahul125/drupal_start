<?php
namespace  Drupal\spacebee;

/**
* @file providing the service that return timezone date.
*
*/

class HelloServices {

 public function get_currenttime()
 {
    //\Drupal::service('page_cache_kill_switch')->trigger();
 	$config = \Drupal::getContainer()->get('config.factory')->getEditable('spacebee.adminsettings');

 	$timezone_saved = $config->get('timezone');
 	date_default_timezone_set($timezone_saved);
 	return date('jS M Y - h:i A');
 	
 }
 
}