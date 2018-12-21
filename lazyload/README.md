# lazyload img

first add `class="lazyload"` and `data-src="target.png"` to the `img` tag

```html
<img class="lazylaod" src="thumbnail.jpg" data-src="original.jpg" alt="thumbnail">
```

then add script, use the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

```js
function lazyLoadImg() {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
      var imageCaptions = [].slice.call(document.querySelectorAll("figcaption"));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazyload");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        imageCaptions.forEach(function(caption) {
          caption.innerText = "Can't load images in this browser..."
        });
      }
    }

window.onload = lazyLoadImg()
```

check the google guide on [lazyload img and video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#what_is_lazy_loading)
