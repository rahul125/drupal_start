<?php
namespace  Drupal\spacebee;

/**
* @file providing the service that generate random number between 1000 to 9999.
*
*/

class HelloServices {

 public function get_currenttime()
 {
 	$config = \Drupal::getContainer()->get('config.factory')->getEditable('spacebee.adminsettings');

 	$timezone_saved = $config->get('timezone');
 	date_default_timezone_set($timezone_saved);
 	return date('jS M Y - h:i A');
 	
 }
 
}