<?php

namespace Drupal\call_video\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Entity\User;

class CallVideoController extends ControllerBase
{

  public function __invoke(): array
  {

    $config = \Drupal::config('call_video.settings')->getRawData();

    return [
      "#theme" => "call_video",
      "#logo" => "",
      "#attached" => [
        "library" => [
          "call_video/call_video",
        ],
        "drupalSettings" => [
          'video_call' => $config
        ],
      ],
    ];
  }
  public function meeting()
  {
    $config = \Drupal::config('call_video.settings')->getRawData();
    return [
      "#theme" => "meeting_room",
      "#attached" => [
        "library" => [
          "call_video/meeting_room",
        ],
        "drupalSettings" => [
          'video_call' => $config
        ],
      ],
    ];
  }
}
