<?php

namespace Drupal\spacebee\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\spacebee\HelloServices;
use Symfony\Component\DependencyInjection\ContainerInterface;


/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "hello_block",
 *   admin_label = @Translation("Hello block"),
 *   category = @Translation("Hello World"),
 * )
 */
class ExampleBlock extends BlockBase implements ContainerFactoryPluginInterface {

   // store service
  protected $ss = NULL;
  

  /*
   * static create function provided by the ContainerFactoryPluginInterface.
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('spacebee.test')
    );
  }

    /*
   * BlockBase plugin constructor that's expecting the HelloServices object provided by create().
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, HelloServices $ss) {
    // instantiate the BlockBase parent first
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    
    // then save the hello service passed to this constructor via dependency injection
    $this->ss = $ss;
  } 

  /**
   * {@inheritdoc}
   */
  public function build() {

    $config = \Drupal::getContainer()->get('config.factory')->getEditable('spacebee.adminsettings');
    //$service = \Drupal::service('spacebee.test');    

    return [
    '#theme' => 'custom_block',
    '#current_time' => $this->ss->get_currenttime(),
    '#country' => $config->get('country'),
    '#city' => $config->get('city'),
    ];
  }

  


  

}
