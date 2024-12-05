<h1>Video Call Module</h1>

<h2>Introduction</h2>
<p>
  This module integrates video call functionalities into Drupal, leveraging the MiroTalk SFU server. 
  It allows users to manage video call rooms, share screens, and record sessions seamlessly. 
  The interface is customized to fit Drupal while utilizing the core features of MiroTalk SFU.
</p>

<h2>Features</h2>
<ul>
  <li>One-on-one and group video calls.</li>
  <li>Screen sharing support.</li>
  <li>Room management: create, join, and leave meetings.</li>
  <li>Integration with MiroTalk SFU for backend processing.</li>
</ul>

<h2>System Requirements</h2>
<ul>
  <li><strong>Drupal:</strong> Version 9.x or higher.</li>
  <li><strong>MiroTalk SFU Server:</strong> Fully configured and running.</li>
  <li><strong>Browser:</strong> A modern browser with WebRTC support (e.g., Chrome, Firefox).</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone this repository into the <code>modules/custom</code> directory of your Drupal installation:</li>
  <pre>
    git clone &lt;repository-url&gt; modules/custom/video_call
  </pre>
  <li>Navigate to <strong>Extend</strong> in the Drupal admin panel.</li>
  <li>Find <strong>Video Call</strong> in the module list and enable it.</li>
</ol>

<h2>Configuration</h2>
<p>
  Access the configuration page via <strong>Configuration &gt; Video Call Settings</strong>. Fill in the following fields:
</p>
<pre>
  <strong>url_server:</strong> The server URL for MiroTalk SFU (e.g., <code>https://your-server.com</code>)  
  <strong>port_server:</strong> The port used by the server (e.g., <code>3000</code>)  
  <strong>api_keysecret:</strong> The secret key for secure API communication  
  <strong>recording_endpoint:</strong> The API endpoint for screen recording (e.g., <code>https://your-server.com/record</code>)  
  <strong>url_video:</strong> Path for storing recorded video files (e.g., <code>/path/to/videos</code>)  
  <strong>rediect_url:</strong> URL to redirect users after exiting a video room (e.g., <code>https://your-website.com/thank-you</code>)  
</pre>

<h2>Usage</h2>
<p>
  Once configured, users can:
</p>
<ul>
  <li>Create or join video call rooms directly from the Drupal interface.</li>
  <li>Utilize video calling and screen sharing powered by the MiroTalk SFU server.</li>
  <li>Record and save video sessions using the configured endpoints.</li>
</ul>

<h2>Example Workflow</h2>
<ol>
  <li>User logs into the Drupal site.</li>
  <li>Access the video call interface via a dedicated menu link.</li>
  <li>Create a new room or join an existing room using a room ID.</li>
  <li>After the session, the user is redirected to the specified URL (<code>rediect_url</code>).</li>
</ol>

<h2>Troubleshooting</h2>
<ul>
  <li>Ensure the MiroTalk SFU server is running and reachable via the provided <code>url_server</code> and <code>port_server</code>.</li>
  <li>Check browser compatibility for WebRTC features.</li>
  <li>Verify API key and endpoint configurations.</li>
</ul>