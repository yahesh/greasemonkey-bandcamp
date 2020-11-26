// ==UserScript==
// @name           Grab Bandcamp Songs
// @namespace      https://yahe.sh/
// @include        http://*.bandcamp.com/*
// @include        https://*.bandcamp.com/*
// @grant          none
// ==/UserScript==

// grab Bandcamp data
var scriptTags = document.getElementsByTagName("script");
for (var indexA = 0; indexA < scriptTags.length; indexA++) {
  var temp = scriptTags[indexA].getAttribute("data-tralbum");
  if ((null != temp) && ("" != temp)) {
    albumData = JSON.parse(temp);

    // log the MP3 file paths to the console
    if (undefined != albumData.trackinfo) {
      for (var indexB = 0; indexB < albumData.trackinfo.length; indexB++) {
        console.log("%c"+albumData.trackinfo[indexB]["file"]["mp3-128"],
                    "background: #2BAE66FF; color: #FCF6F5FF; font-weight: bold;");
      }
    }
  }
}
