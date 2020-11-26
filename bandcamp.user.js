// ==UserScript==
// @name           Grab Bandcamp Songs
// @namespace      https://yahe.sh/
// @include        http://*.bandcamp.com/*
// @include        https://*.bandcamp.com/*
// @grant          none
// ==/UserScript==

// grab Bandcamp data
var scriptTags = document.getElementsByTagName("script");
for (var index = 0; index < scriptTags.length; index++) {
  var temp = scriptTags[index].getAttribute("data-tralbum");
  if ((null != temp) && ("" != temp)) {
    albumData = JSON.parse(temp);

    // log the MP3 file paths to the console
    if (undefined != albumData.trackinfo) {
      for (var index = 0; index < albumData.trackinfo.length; index++) {
        console.log("%c"+albumData.trackinfo[index]["file"]["mp3-128"],
                    "background: #2BAE66FF; color: #FCF6F5FF; font-weight: bold;");
      }
    }
  }
}
