# Slide up animation

when using `transition` on `display:none`, the transition effect won't work, so fix this like this:

```css

.element {
    display: inline-block;
    visibility: hidden;
    transform: translate3d(0,0,0);
    transition: transform 1s ease-out;
} 

.element:hover {
    visibility: visible;
    transform: translate3d(0, 20%, 0);
}

```

will slide up the element

