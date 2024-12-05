/**
 * @file
 * Call video behaviors.
 */
(function ($, Drupal) {

  'use strict';
  
  Drupal.behaviors.callVideoCallVideo = {
    attach(context) {
      once('body', '#new-room', context).forEach(function () {
        $('#room-value').on('input', function () {
          $(this).val().trim().length > 0 ? $('#join-meeting').addClass('btn-outline-info').removeClass('btn-outline-secondary disabled') : $('#join-meeting').hasClass('btn-outline-info') && $('#join-meeting').removeClass('btn-outline-info').addClass('btn-outline-secondary disabled');
        });

        $('#new-meeting').on('click', function () {
          $.ajax({
            url: `${drupalSettings['video_call']['url_server']}/api/v1/api-meeting`,
            method: 'POST',
            headers: {
              authorization: drupalSettings['video_call']['api_keysecret'],
              'Content-Type': 'application/json',
            },
            success: function (data) {
              window.location.href = `/meeting-room/${data.meeting}`
            },
            error: function (xhr, status, error) {
              showToast('Không thể kết nối với máy chủ')
            }
          });
        })

        $('#join-meeting').on('click', function () {
          if ($('#room-value').val().trim().length === 0) return null;
          const codeRoom = $('#room-value').val().trim();
          $.ajax({
            url: `${drupalSettings['video_call']['url_server']}/api/v1/api-join`,
            method: 'POST',
            headers: {
              authorization: drupalSettings['video_call']['api_keysecret'],
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              room: codeRoom,
            }),
            success: function (data) {
              window.location.href = `/meeting-room/${data.join}`
            }, 
            error: function(xhr, status, error) {
              showToast('Không tìm thấy phòng họp')
          }
          });
        })

        function showToast(message) {
          const $toast = $('#toast');
          $toast.removeClass('hidden').addClass('show');
          $('#toast-message').text(message);
        
          setTimeout(() => {
            $toast.removeClass('show').addClass('hidden');
          }, 3000);
        }
      })
    }
  };

}(jQuery, Drupal));
