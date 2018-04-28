# APM-tab

first import `amp-selector` on the amp page

```html
<script async custom-element="amp-selector" src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"></script>
```

then add css like this

```css
<style amp-custom>
    amp-selector [option][selected]{
        outline: none;
    }
    .ampTabContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .tabButton[selected] {
        background: #fbfbfb;
        border-top:2px solid #cd2324;
    }

    .tabButton {
        list-style: none;
        flex-grow: 1;
        text-align: center;
        cursor: pointer;
    }

    .tabContent {
        display: none;
        width: 100%;
        padding: 10px;
        order: 1;
        background: #fbfbfb;
    }

    .tabButton[selected]+.tabContent {
        display: block;
    }
    /* optional */
    amp-selector {
        padding: 1rem;
        margin: 1rem;
    }
</style>
```

and add `amp-selector` like this

```html
<amp-selector role="tablist" layout="container" class="ampTabContainer">
    <div role="tab" class="tabButton" selected option="a">Tab one</div>
    <div role="tabpanel" class="tabContent">Tab one content... </div>
    <div role="tab" class="tabButton" option="b">Tab two</div>
    <div role="tabpanel" class="tabContent">Tab two content... </div>
    <div role="tab" class="tabButton" option="c">Tab three</div>
    <div role="tabpanel" class="tabContent">Tab three content... </div>
</amp-selector>
```

## official example

Check [here](https://ampbyexample.com/advanced/tab_panels_with_amp-selector/#amp-component-as-the-panel) to see official example

