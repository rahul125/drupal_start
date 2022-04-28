<?php

namespace Drupal\spacebee\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "hello_block",
 *   admin_label = @Translation("Hello block"),
 *   category = @Translation("Hello World"),
 * )
 */
class ExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

$config = \Drupal::getContainer()->get('config.factory')->getEditable('spacebee.adminsettings');
$service = \Drupal::service('spacebee.test');    

    return [
    '#theme' => 'custom_block',
    '#current_time' => $service->get_currenttime(),
    '#country' => $config->get('country'),
    '#city' => $config->get('city'),
    ];
  }

}
