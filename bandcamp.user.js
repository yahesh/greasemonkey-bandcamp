// ==UserScript==
// @name           Grab Bandcamp Songs
// @namespace      https://yahe.sh/
// @include        http://*.bandcamp.com/*
// @include        https://*.bandcamp.com/*
// @grant          none
// ==/UserScript==

// grab Bandcamp data
var albumData = TralbumData;
var embedData = EmbedData;

// grab album name - optional
var albumName = "";
if ((embedData != undefined) &&
    (embedData.album_title != undefined) &&
    (embedData.artist != undefined)) {
  albumName = embedData.artist + ": " + embedData.album_title;
}

// generate download output
if ((albumData != undefined) &&
    (albumData.trackinfo != undefined) &&
    (albumData.trackinfo.length > 0)) {
  var newText = "";

  newText += "<html>";
  newText += "<head>";
  newText += "<title>" + albumName + "</title>";
  newText += "</head>";
  newText += "<body>";
  newText += "<h1>" + albumName + "</h1>";

  var item = null;
  for (var index = 0; index < albumData.trackinfo.length; index++) {
    item = albumData.trackinfo[index];

    newText += "<a href='https://" + item["file"]["mp3-128"] + "'>" + item["title"] + "</a> (" + item["duration"] + " seconds)<br/>";
  }

  newText += "</body>";
  newText += "</html>";

  var newWindow = window.open("data:text/html;charset=UTF-8," + newText);
}

