<?php

namespace Drupal\call_video\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\taxonomy\Entity\Term;
use Symfony\Component\Yaml\Yaml;

final class CallVideoConfigController extends ControllerBase
{
  public function __invoke()
  {
    $config = \Drupal::config('call_video.settings')->getRawData();
    return new JsonResponse($config, 200, ['Content-Type' => 'application/json']);
  }

  public function recording(Request $request) {

    $config = \Drupal::config('call_video.settings');

    $fileName = $request->query->get('fileName');
    if (!$fileName) {
        return new JsonResponse(['error' => 'Missing fileName'], 400);
    }

    $recDir = $config->get('url_video');
    $filePath = $recDir . '/' . $fileName;

    if (!file_exists($recDir)) {
        mkdir($recDir, 0777, true);
    }

    $content = $request->getContent();
    if (!empty($content)) {
        file_put_contents($filePath, $content, FILE_APPEND);
        return new JsonResponse(['status' => 'success', 'file' => $filePath]);
    }

    return new JsonResponse(['error' => 'No data received'], 400);
}
}