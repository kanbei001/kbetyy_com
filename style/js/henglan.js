var paths = document.URL;
document.writeln("<div class=\'TB-focus\'>");
document.writeln("<div class=\'bd\'>");
document.writeln("<ul>");
document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");
document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");
if (paths.indexOf("/axz/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");
} else if (paths.indexOf("/cdz/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/dx/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_dx.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/ddz/") > 0 || paths.indexOf("/xxkn/") > 0 || paths.indexOf("/zylbjz/") > 0) {
    document.writeln("<li><a href=\'/yyjj/zljs/2176.html\' rel=\'nofollow\'><img src=\'/images/bannerv685_118.gif\' height=\'118\' width=\'685\' alt=\'多动症注意力不集中\'></a></li>");
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_ddz.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/fych/") > 0) {


} else if (paths.indexOf("/fpz/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_fpz.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/xzs/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_xzs.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/zldx/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_zldx.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/ynz/") > 0) {

} else if (paths.indexOf("/yyza/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_yyza.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/zylbjz/") > 0) {

} else if (paths.indexOf("/zbz/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/images/pcart_zbz.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/nxth/") > 0) {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");

} else if (paths.indexOf("/sjj/") > 0) {

} else if (paths.indexOf("/nfm/") > 0) {

} else if (paths.indexOf("/fyx/") > 0) {

} else {
    document.writeln("<li><a href=\'javascript:openZoosUrl()\' rel=\'nofollow\'><img src=\'/style/images/artl_kaixue.jpg\' height=\'118\' width=\'685\'></a></li>");
}
document.writeln("</ul>");
document.writeln("</div>");
document.writeln("<div class=\'hd\'><ul></ul></div></div>");
jQuery(".TB-focus").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "top",
    autoPlay: false,
    autoPage: true,
    delayTime: 200
});