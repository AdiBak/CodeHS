/**
 * CodeHS CDN images block canvas use on other origins (CORS).
 * Serve copies from /assets/img and rewrite URLs before games load.
 */
(function () {
  const LOCAL = {
    "https://static.codehs.com/img/library/objects/helicopter.png":
      "assets/img/helicopter.png",
    "https://static.codehs.com/img/library/objects/icicle.png": "assets/img/icicle.png",
    "https://codehs.com/static/img/library/objects/helicopter.png":
      "assets/img/helicopter.png",
    "https://codehs.com/static/img/library/objects/icicle.png": "assets/img/icicle.png",
    "https://codehs.com/uploads/e1cacf96bb79cf2f59e0c138505954fd":
      "assets/img/lockdown-player.png",
  };

  function localUrl(url) {
    if (!url || typeof url !== "string") return url;
    if (LOCAL[url]) return LOCAL[url];
    const objectMatch = url.match(
      /(?:static\.)?codehs\.com\/(?:static\/)?img\/library\/objects\/([^?]+)/
    );
    if (objectMatch) {
      const canonical =
        "https://static.codehs.com/img/library/objects/" + objectMatch[1];
      if (LOCAL[canonical]) return LOCAL[canonical];
    }
    return url;
  }

  if (window.ImageLibrary && window.ImageLibrary.Objects) {
    for (const key of Object.keys(window.ImageLibrary.Objects)) {
      const value = window.ImageLibrary.Objects[key];
      if (typeof value === "string") {
        window.ImageLibrary.Objects[key] = localUrl(value);
      }
    }
  }

  const BaseWebImage = window.WebImage;
  if (typeof BaseWebImage === "function") {
    function WebImage(filename) {
      return new BaseWebImage(localUrl(filename));
    }
    WebImage.prototype = BaseWebImage.prototype;
    window.WebImage = WebImage;
  }
})();
