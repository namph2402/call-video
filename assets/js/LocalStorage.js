"use strict";class LocalStorage{constructor(){this.MEDIA_TYPE={audio:"audio",video:"video",audioVideo:"audioVideo",speaker:"speaker"},this.INIT_CONFIG={audio:!0,video:!0,audioVideo:!0},this.SFU_SETTINGS={share_on_join:!0,show_chat_on_msg:!0,transcript_show_on_msg:!0,speech_in_msg:!1,moderator_video_start_privacy:!1,moderator_audio_start_muted:!1,moderator_video_start_hidden:!1,moderator_audio_cant_unmute:!1,moderator_video_cant_unhide:!1,moderator_screen_cant_share:!1,moderator_chat_cant_privately:!1,moderator_chat_cant_chatgpt:!1,moderator_media_cant_sharing:!1,moderator_disconnect_all_on_leave:!1,mic_auto_gain_control:!1,mic_echo_cancellations:!0,mic_noise_suppression:!0,mic_sample_rate:0,mic_sample_size:0,mic_channel_count:0,mic_latency:50,mic_volume:100,video_fps:0,screen_fps:3,broadcasting:!1,lobby:!1,pitch_bar:!0,sounds:!0,host_only_recording:!1,rec_prioritize_h264:!1,rec_server:!1,video_obj_fit:2,video_controls:0,theme:0,theme_color:"#000000",theme_custom:!1,buttons_bar:0,pin_grid:0},this.DEVICES_COUNT={audio:0,speaker:0,video:0},this.LOCAL_STORAGE_DEVICES={audio:{count:0,index:0,select:null},speaker:{count:0,index:0,select:null},video:{count:0,index:0,select:null}}}setItemLocalStorage(e,t){localStorage.setItem(e,t)}setObjectLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(e){this.SFU_SETTINGS=e,this.setObjectLocalStorage("SFU_SETTINGS",this.SFU_SETTINGS)}setInitConfig(e,t){switch(e){case this.MEDIA_TYPE.audio:this.INIT_CONFIG.audio=t;break;case this.MEDIA_TYPE.video:this.INIT_CONFIG.video=t;break;case this.MEDIA_TYPE.audioVideo:this.INIT_CONFIG.audioVideo=t}this.setObjectLocalStorage("INIT_CONFIG",this.INIT_CONFIG)}setLocalStorageDevices(e,t,o){switch(e){case this.MEDIA_TYPE.audio:this.LOCAL_STORAGE_DEVICES.audio.count=this.DEVICES_COUNT.audio,this.LOCAL_STORAGE_DEVICES.audio.index=t,this.LOCAL_STORAGE_DEVICES.audio.select=o;break;case this.MEDIA_TYPE.video:this.LOCAL_STORAGE_DEVICES.video.count=this.DEVICES_COUNT.video,this.LOCAL_STORAGE_DEVICES.video.index=t,this.LOCAL_STORAGE_DEVICES.video.select=o;break;case this.MEDIA_TYPE.speaker:this.LOCAL_STORAGE_DEVICES.speaker.count=this.DEVICES_COUNT.speaker,this.LOCAL_STORAGE_DEVICES.speaker.index=t,this.LOCAL_STORAGE_DEVICES.speaker.select=o}this.setObjectLocalStorage("LOCAL_STORAGE_DEVICES",this.LOCAL_STORAGE_DEVICES)}getLocalStorageSettings(){return this.getObjectLocalStorage("SFU_SETTINGS")}getLocalStorageInitConfig(){return this.getObjectLocalStorage("INIT_CONFIG")}getLocalStorageDevices(){return this.getObjectLocalStorage("LOCAL_STORAGE_DEVICES")}getItemLocalStorage(e){localStorage.getItem(e)}getObjectLocalStorage(e){return JSON.parse(localStorage.getItem(e))}}