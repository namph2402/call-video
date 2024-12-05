<?php

declare(strict_types=1);

namespace Drupal\call_video\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure Call video settings for this site.
 */
final class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'call_video_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return ['call_video.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    
    $config = $this->config('call_video.settings');
   
    $config->get();

    // Input for API URL
    $form['url_server'] = [
      '#type' => 'textfield',
      '#title' => $this->t('URL CONNECT SERVER'),
      '#description' => $this->t('Enter the path to connect to the server'),
      '#default_value' => $config->get('url_server') ?? '',
      '#required' => TRUE,
    ];

    $form['port_server'] = [
      '#type' => 'textfield',
      '#title' => $this->t('PORT CONNECT SERVER'),
      '#description' => $this->t('Enter the port to connect to the server'),
      '#default_value' => $config->get('port_server') ?? '',
      '#required' => TRUE,
    ];

    $form['api_keysecret'] = [
      '#type' => 'textfield',
      '#title' => $this->t('KEY SECRET'),
      '#description' => $this->t('Enter the server connection  keysecret'),
      '#default_value' => $config->get('api_keysecret') ?? '',
      '#required' => TRUE,
    ];

    $form['recording_endpoint'] = [
      '#type' => 'textfield',
      '#title' => $this->t('URL RECORDING'),
      '#description' => $this->t('Enter the path to connect recording'),
      '#default_value' => $config->get('recording_endpoint') ?? '',
      '#required' => TRUE,
    ];

    $form['rediect_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('REDIECT URL'),
      '#description' => $this->t('Enter the server connection  keysecret'),
      '#default_value' => $config->get('rediect_url') ?? '',
      '#required' => TRUE,
    ];

    $form['url_video'] = [
      '#type' => 'textfield',
      '#title' => $this->t('URL SAVE VIDEO'),
      '#description' => $this->t('Enter the path to save the video'),
      '#default_value' => $config->get('url_video') ?? '',
      '#required' => TRUE,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $this->config('call_video.settings')
    ->set('url_server', $form_state->getValue('url_server'))
    ->set('port_server', $form_state->getValue('port_server'))
    ->set('api_keysecret', $form_state->getValue('api_keysecret'))
    ->set('recording_endpoint', $form_state->getValue('recording_endpoint'))
    ->set('rediect_url', $form_state->getValue('rediect_url'))
    ->set('url_video', $form_state->getValue('url_video'))
    ->save();
    parent::submitForm($form, $form_state);
  }

}
