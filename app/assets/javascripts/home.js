$(document).ready(function(){
  sizeTheVideo();
  $(window).resize(function(){
    sizeTheVideo();
  });
});

function sizeTheVideo(){
  // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
  var aspectRatio = 1.78;

    var video = $('#videoWithJs iframe');
    var html = $('html');
    var videoHeight = video.outerHeight();
    var videoWidth = video.outerWidth();

    var pageHeight = html.outerHeight();
    var pageWidth = html.outerWidth();

    var pageAspectRatio = pageWidth / pageHeight;
    console.log(aspectRatio,pageAspectRatio);

    if (pageAspectRatio > aspectRatio) {
      var newHeight = videoWidth / aspectRatio
      var halfNewHeight = newHeight/2;
      video.css({"width": pageWidth + "px", "height":newHeight+"px","top":"50%", "left": "0", "margin-top":"-"+halfNewHeight+"px", "margin-left": "0"});
    } else {
      var newWidth = videoHeight*aspectRatio;
      var halfNewWidth = newWidth/2;
      //Define the new width and centrally align the iframe
      video.css({"height": pageHeight + "px", "width":newWidth+"px","left":"50%","top": "0","margin-left":"-"+halfNewWidth+"px", "margin-top":"0"});
    }

}
