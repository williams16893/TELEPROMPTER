!function(){function q(b){var c=[],a=[],e=function(f){for(var d={},h=0;h<x.length;h++){var g=x[h];if(g.Tag===f){d=g;break}var k=(y=g.Tag,r=v=l=void 0,l=-1!==(r=y).indexOf("webcam-test.html")?r.replace("webcam-test.html",""):r.replace("webcam-test.html",""),-1!==(v=l.indexOf("?"))?l.replace(l.substring(v),""):l);if(f&&(-1!==f.indexOf(k)||-1!==g.Tag.indexOf(f))){d=g;break}}var y,l,v,r;return d}(b);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(a=e.Vendor.split(":")),!e.Tag&&F&&(a=c=function(f){var d=[],h=function(g){var k=document.createElement("a");
k.href=g;g=k.hostname.split(".");return-1!==g.indexOf("www")||2<g.length?g.slice(1).join("."):k.hostname}(f);w.some(function(g){return g===h})&&(d=["C0004"]);return d}(b)),{categoryIds:c,vsCatIds:a}}function z(b){return!b||!b.length||(b&&window.OptanonActiveGroups?b.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(b,c){void 0===c&&(c=null);var a=window,e=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=e&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===
t||"All"===t&&e&&!a?z(b):("Vendors"===t||"All"===t&&e&&a)&&z(c)}function n(b){b=b.getAttribute("class")||"";return-1!==b.indexOf("optanon-category")||-1!==b.indexOf("ot-vscat")}function p(b){return b.hasAttribute("data-ot-ignore")}function A(b,c,a){void 0===a&&(a=null);var e=b.join("-"),f=a&&a.join("-"),d=c.getAttribute("class")||"",h="",g=!1;b&&b.length&&-1===d.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),g=!0);a&&a.length&&-1===d.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),g=!0);g&&c.setAttribute("class",h+" "+d)}function B(b,c,a){void 0===a&&(a=null);var e;b=b.join("-");a=a&&a.join("-");return-1===c.indexOf("optanon-category-"+b)&&(e=("optanon-category-"+b).trim()),-1===c.indexOf("ot-vscat-"+a)&&(e+=" "+("ot-vscat-"+a).trim()),e+" "+c}function C(b){var c=q(b.src||"");if(c.categoryIds.length||c.vsCatIds.length){A(c.categoryIds,b,c.vsCatIds);m(c.categoryIds,c.vsCatIds)||(b.type="text/plain");var a=function(e){"text/plain"===b.getAttribute("type")&&e.preventDefault();
b.removeEventListener("beforescriptexecute",a)};b.addEventListener("beforescriptexecute",a)}}function D(b){var c=b.src||"",a=q(c);(a.categoryIds.length||a.vsCatIds.length)&&(A(a.categoryIds,b,a.vsCatIds),m(a.categoryIds,a.vsCatIds)||(b.removeAttribute("src"),b.setAttribute("data-src",c)))}var x=JSON.parse('[{"Tag":"https://d.adroll.com/cm/b/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../www.googletagmanager.com/gtm.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/xV_5wm0Zlpk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/EQo_kTbuhZg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/chMAXBFctuU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/dAN-_TQMPEA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/V_O6XGyAwL4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Cuiey8ucn4s","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/2BzoQ31IPhk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://image2.pubmatic.com/AdServer/Pug","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/10842605124/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/p7HKvqRI_Bo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ib.adnxs.com/bounce","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/HZUoDj6cy68","CategoryId":["C0004"],"Vendor":null},{"Tag":"../convert/_next/static/chunks/pages/_app-4b1abd614f79273f.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.cbd9768ba80ba0be5b17.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/NHWktEPPIo0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/TGZnpeNS0_g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/10DDHNjXgR4","CategoryId":["C0004"],"Vendor":null},{"Tag":"../static/js/main.a7d751c9.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/vAw8d7fDJ7k","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/KWXjv95Bdww","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/SugbO9jD8sc","CategoryId":["C0004"],"Vendor":null},{"Tag":"../live/studio/static/js/main.f6ff3d4f.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"../view/_next/static/chunks/main-39fbfd214b69832d.html","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/S-1Zhg8X2z0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/JXDUShh4l94","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/z9xf9z11gH0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/r/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/uvDJmTbB7gY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dsum-sec.casalemedia.com/rum","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/oFUuFTnCdPI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/AHlWwjnal0g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/LwLh6ax0zTE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Qmi-Xwq-MEc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/XvPTvPnAhlo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/gKiiTrgLlbU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/BrY6a-lsLp8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Vr4-sWodx-g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/mctxounE1KI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/b0gCcLf-Uw0","CategoryId":["C0004"],"Vendor":null},{"Tag":"../view/_next/static/chunks/framework-8b7974553b1447ee.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/yoD8RMq2OkU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/KmptU7vEkNU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/consent/check/G42K25HGXVANTMCRJERVK6","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/iPlEngNLfo4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/gCwB8XbRD-U","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/9cxGhcpGpfE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/lGcT3qbGzow","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bqVGzYz20so","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.tiktok.com/embed/v2/6902585003843079429","CategoryId":["C0005"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/xjUxRGZGE84","CategoryId":["C0004"],"Vendor":null},{"Tag":"../view/_next/static/chunks/pages/_app-01d047c05aedf6ab.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/xWpsfDvK3nA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/CbF725-zUKE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/jzGpC4VRanQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/0_D05wO0rkY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.quantserve.com/pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ok2l83sATJ8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/GltlJO56S1g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/CCbQ-DVQUyo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PlAvd5c3934","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/KHNwu5ZOLyI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FODGdcz47tQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7rmYTRP5e_Y","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Ad_TEk94B9Q","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1LXOlekFqQ4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/x/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"../_next/static/chunks/pages/_app-7d05d1e2cc63c08f.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/yOIDjPCaOCk","CategoryId":["C0004"],"Vendor":null},{"Tag":"../static/js/main.b174a4bb.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/TeeSNOCH0yM","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ib.adnxs.com/setuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/tRrCoNQ7nTU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/rQDO0qFeszI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/LwhuZYl6Qkg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/su5xAZHF114","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/k_EyGWyDp0w","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"../../s.adroll.com/j/G42K25HGXVANTMCRJERVK6/roundtrip.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/cSTjAhy8kiI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/vDQ7jrKeLF8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/V-6m0jW0X9E","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PbtaYJAQ5ZI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/p_GXx99AFzQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/uuVQdgi2ulE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/n2OzIgGOIq0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/o/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.tiktok.com/embed/v2/6972318907218627845","CategoryId":["C0005"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4qecXSq0q8c","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.f8ad4d13a21d1f1b3509.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/UyekyhRaAWY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/W8LMm2cWqaE","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.f0cd1ed70b545da08b60.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/5RjB4-t9evs","CategoryId":["C0004"],"Vendor":null},{"Tag":"../convert/_next/static/chunks/pages/_app-2324361db15fa5a7.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/pubmatic/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/rCY7vTmeMig","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/vA3Mzgf0z2U","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FbCvTD5A0wU","CategoryId":["C0004"],"Vendor":null},{"Tag":"../view/_next/static/chunks/main-cc095101a997b0de.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"../static/js/main.a6c87f41.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/V7MEp1uDBkA","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.5dca1694a4338dade13b.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bNhF4JKGk7A","CategoryId":["C0004"],"Vendor":null},{"Tag":"../view/_next/static/chunks/pages/_app-9ccdf2d4181f76a6.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/8h1zpJ-wKi0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4jwUXV4QaTw","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../platform-api.sharethis.com/js/sharethis.js#property\x3d613adfb840d29100191b26c8\x26product\x3dsticky-share-buttons","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PxarYPTICVc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/E3szm_D5iEU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1ImfrRhsYFc","CategoryId":["C0004"],"Vendor":null},{"Tag":"../static/js/main.22affe69.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.c0fbafddb88ec618089e.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/0MF_XItovhU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bag33d2_uhc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7dMX5P2pL9E","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/DHLgy5K-bOc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/0Jn5TWEkmu4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/55xMhd_3ymc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/n3fNBbGJUhY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/hauHbPmTH5g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/GkeymZqR4jw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/a4UrR6wwato","CategoryId":["C0004"],"Vendor":null},{"Tag":"../_next/static/chunks/pages/_app-9c4f65dfdb5760ca.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/watch","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/EiYm20F9WXU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://x.bidswitch.net/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ySaN2oxQhCo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/319lOrYTGcI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/g/in","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FFJVUJhs_xg","CategoryId":["C0004"],"Vendor":null},{"Tag":"../convert/_next/static/chunks/pages/_app-94291fea2acdb11d.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/njb6sQkesL8","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.27f4146f3a6f6c6f833f.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/cvb49-Csq1o","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/5qnL20RveCQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/m7A2qSxFf7s","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/hLTDAHsrtyo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4iKUVTpv6mc","CategoryId":["C0004"],"Vendor":null},{"Tag":"../live/studio/static/js/main.a29945e5.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/g/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/qgW5Qx81geo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cm.g.doubleclick.net/pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/JEVW7PKTt0k","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/120YHSw6GLY","CategoryId":["C0004"],"Vendor":null},{"Tag":"../view/_next/static/chunks/pages/_app-de4d486dfd8f3b2c.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4MOlfTONGoI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/index/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../www.googleoptimize.com/optimize.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/22h7ZvIhdU0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/watch ","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../cdn.amplitude.com/libs/amplitude-8.16.1-min.gz.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/QKHc9T-Y3BM","CategoryId":["C0004"],"Vendor":null},{"Tag":"../convert/_next/static/chunks/pages/_app-4d22bf97e8436353.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FcoZMus6IIg","CategoryId":["C0004"],"Vendor":null},{"Tag":"../_next/static/chunks/pages/_app-593e5c5a3d6e3f1d.html","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/scp2PTNCbOs","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/mfQ6kIEyujw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/mCBKshmaloI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/8wZARTDbNmc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d.adroll.com/cm/n/out","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ZzNw_Udt5pc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/zH5WDTSr7_U","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/biw_b571Bs8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/WxSSk3ShAfo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ZUuovYE8jn4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/37B5Zm3pC-A","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://x.bidswitch.net/ul_cb/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/NUAdMEowgFU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/aoyRd8KjZnE","CategoryId":["C0004"],"Vendor":null},{"Tag":"../send-video/_next/static/chunks/main-6218145cf9391c82.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/10947738042/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FZTpVjcpPGA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/cblM96IRCfI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/pLqHuhQxW1M","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FF2cCg-Nvqg","CategoryId":["C0004"],"Vendor":null},{"Tag":"../../script.hotjar.com/modules.5f1bea8bafa4c24ab7fc.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/xwKGZS3EE7Q","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/V8-hPKAW7JA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PWmhl6rzVpM","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bI3e0GRqSj8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/OJHmmzYCb7w","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/8__7iHpn1oQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://mssdk-va.tiktok.com/mssdk/web_common","CategoryId":["C0005"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/mHlW4dIGlig","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/qlYBBuYZBDs","CategoryId":["C0004"],"Vendor":null}]'),
F=JSON.parse("true"),t=JSON.parse('"Categories"'),w=[""];w=w.filter(function(b){if("null"!==b&&b.trim().length)return b});var u=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1===e.nodeType&&(-1===u.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?C:D)(e))});var a=c.target;c.attributeName&&(n(a)&&p(a)||("script"===a.nodeName.toLowerCase()?C(a):-1!==
u.indexOf(c.target.nodeName.toLowerCase())&&D(a)))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var E=document.createElement;document.createElement=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if("script"!==b[0].toLowerCase()&&-1===u.indexOf(b[0].toLowerCase()))return E.bind(document).apply(void 0,b);var a=E.bind(document).apply(void 0,b),e=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||
""},set:function(f){var d="";"string"==typeof f?d=f:f instanceof Object&&(d=f.toString());d=q(d);!d.categoryIds.length&&!d.vsCatIds.length||"script"!==b[0].toLowerCase()||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?!d.categoryIds.length||-1===u.indexOf(b[0].toLowerCase())||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?e("src",f):(a.removeAttribute("src"),e("data-src",f),f=a.getAttribute("class"),f||(f=B(d.categoryIds,f||"",d.vsCatIds),e("class",f))):(e("type","text/plain"),e("src",f));return!0}},type:{get:function(){return a.getAttribute("type")||
""},set:function(f){return d=f,g=e,k=q((h=a).src||""),g("type",!k.categoryIds.length&&!k.vsCatIds.length||n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?d:"text/plain"),!0;var d,h,g,k}},class:{set:function(f){return d=f,g=e,!(k=q((h=a).src)).categoryIds.length&&!k.vsCatIds.length||n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?g("class",d):g("class",B(k.categoryIds,d,k.vsCatIds)),!0;var d,h,g,k}}}),a.setAttribute=function(f,d,h){"type"!==f&&"src"!==f||h?e(f,d):a[f]=d},a}}();