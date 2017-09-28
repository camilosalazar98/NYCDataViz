<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1504.81">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// This example requires the Visualization library. Include the libraries=visualization</p>
<p class="p1">// parameter when you first load the API. For example:</p>
<p class="p1">// &lt;script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&amp;libraries=visualization"&gt;</p>
<p class="p2"><br></p>
<p class="p1">var map, heatmap;</p>
<p class="p2"><br></p>
<p class="p1">function initMap() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>map = new google.maps.Map(document.getElementById('map'), {</p>
<p class="p1"><span class="Apple-converted-space">    </span>zoom: 13,</p>
<p class="p1"><span class="Apple-converted-space">    </span>center: {lat: 40.7127, lng: -74.0134},</p>
<p class="p1"><span class="Apple-converted-space">    </span>mapTypeId: 'satellite'</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>heatmap = new google.maps.visualization.HeatmapLayer({</p>
<p class="p1"><span class="Apple-converted-space">    </span>data: getPoints(),</p>
<p class="p1"><span class="Apple-converted-space">    </span>map: map</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function toggleHeatmap() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>heatmap.setMap(heatmap.getMap() ? null : map);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function changeGradient() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var gradient = [</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 255, 255, 0)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 255, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 191, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 127, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 63, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 0, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 0, 223, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 0, 191, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 0, 159, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(0, 0, 127, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(63, 0, 91, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(127, 0, 63, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(191, 0, 31, 1)',</p>
<p class="p1"><span class="Apple-converted-space">    </span>'rgba(255, 0, 0, 1)'</p>
<p class="p1"><span class="Apple-converted-space">  </span>]</p>
<p class="p1"><span class="Apple-converted-space">  </span>heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function changeRadius() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>heatmap.set('radius', heatmap.get('radius') ? null : 20);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function changeOpacity() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// Heatmap data: 500 Points</p>
<p class="p1">function getPoints() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>return [</p>
<p class="p2"><span class="Apple-converted-space">   </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>new google.maps.LatLng(40.7127, -74.0134)</p>
<p class="p1"><span class="Apple-converted-space">  </span>];</p>
<p class="p1">}</p>
</body>
</html>
