# CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)
[Course by Academind](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/?couponCode=KEEPLEARNING)

https://academind.com/community

<aside>
⌛

CSS 1: 1996 → CSS 2: 1998 → **CSS 3: currently in development** → split in modules, working on them separately (there won’t be CSS 4)

</aside>

https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

https://caniuse.com/

## 2️⃣ Basics of CSS

### **Anatomy of the code line**

<aside>
➡️

**Rule** (Code line) = **Selector** + **Declaration** (Property + Value)

```css
h1 {color: red; }
```

</aside>

- **Selector**: h1, div, .blog-post, #main-title, [disabled], * (see below)
- **Properties**: background-color, width, margin, etc.
- **Values**: 30px, 50%, red etc. (might be also functions — like transform, or url).

### Ways of adding CSS

- **Inline styling** — adding style right in the same line where the element is created
- **Style tag** — adding css in head within `<style></style>` tag
- Using **extra stylesheet**: `<link rel="stylesheet" href="***.css">` . This is much better, because this way it’s clearly separated from html, which is easy to control; plus browser can cash those files separately and doesn’t need to redownload the file every time which is faster.

### Selectors

- **Elements**. Set equal style for same elements.
    
    ```html
    <h1>**Our header**</h1>
    <p>The Blog Post</p>
    <div>More Info</div>
    ```
    
    ```css
    h1 {
    	color: red;
    }
    ```
    
- **Classes**. Set equal style for elements within the same class.
    
    ```css
    <h1 class="blog-post">**Our header**</h1>
    <p class="blog-post">**The blog post**</p>
    <div class="blog-post">**More info**</div>
    ```
    
    ```css
    .blog-post {
    	color: red;
    }
    ```
    
- **Universal.** Selects ALL elements on the page. Rarely use this one!
    
    ```html
    <h1>**Our header**</h1>
    <p class="blog-post">**The blog post**</p>
    ```
    
    ```css
    * {
    	color: red;
    	}
    ```
    
- **IDs.** Set style to one specific element.
    
    ```html
    <h1 id="main-title">**Our header**</h1>
    ```
    
    ```css
    #main-title {
    	color: red;
    }
    ```
    
- **Attributes.** Set equal styles to all elements with attribute(s). This can be even used if element has an attribute like id=””, so one can use [id] selector (which is not the best practice, however)
    
    ```html
    <button disabled>Button</button>
    ```
    
    ```css
    [disabled] {
    	color: red;
    }
    ```
    

Typically, *** selector** is not super efficiently rendered by browser. So to stylethe whole site text, is better to use `<body>`.

### **Combinators**

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators

Allows to combine multiple selectors not to repeat or create too many of them, in a dependent way. **It’s not inheritance!** Just setting the style for specifically selected element.

<aside>
➡️

Combinators usually perform slightly worse (slower, than directly selecting certain elements like ID).

</aside>

- `div + p {}` **— adjacent sibling**. Elements share the **same parent.** 2nd element **comes immediately after** the 1st element (so in this case, each `<p>` which follows directly `<h2>`)
    
    ```html
    <div>
    	<h2>Not applied</h2>
    	<p>**CSS applied**</p>
    	<h2>Not applied</h2>
    	<h3>Not applied</h3>
    	<p>Not applied</p>
    	<h2>Not applied</h2>
    	<p>**CSS applied**</p>
    </div>
    ```
    
- `h2 ~ p {}` **— general sibling**. Elements share the **same parent.** 2nd element **comes after** the 1st element, no matter immediately or not.
    
    ```html
    <div>
    	<h2>Not applied</h2>
    	<p>**CSS applied**</p>
    	<h2>Not applied</h2>
    	<h3>Not applied</h3>
    	<p>**CSS applied**</p>
    </div>
    ```
    
- `div > p {}` **— child**. Elements share the **same parent**. Second element is **directly nested** into the first element (in this case, all `<p>` that are children of `<div>`).
    
    ```html
    <div>
    	<div>Not applied</div>
    	<p>**CSS applied**</p>
    	<div>Not applied</div>
    	<article>
    		<p>Not applied</p>
    	</article>
    	<p>**CSS applied**</p>
    </div>
    ```
    
- `div p {}` **— descendant**. Second element is a descendant of the first element, no matter if they are direct children or not.
    
    ```html
    <div>
    	<h2>Not applied</h2>
    	<p>**CSS applied**</p>
    	<h2>Not applied</h2>
    	<h3>Not applied</h3>
    	<p>Not applied</p>
    	<h2>Not applied</h2>
    	<p>**CSS applied**</p>
    </div>
    ```
    

<aside>
➡️

Interesting example of using combinators. E.g. we have a list `<ol>` with many items `<li>` inside. In order to select ALL items BUT the first one, we can use `li + li` combinator (because all items but first one stay after anothe `li` item).

</aside>

### Cascading styles & specificity

1. **Specificity** (is used to resolve conflicts if multiple properties are applied to the same element)
    - Inline styles (better not use)
    - `ID`
    - `<class>`, `<pseudo-class>` and `[attribute]`
    - `<tag>` and `::pseudo-element`
    - `*`  (universal selector, used rarely)
2. **Order**. The latest style applied is more important, provided the rules have **the** **same specificity.**
    
    The easiest way is to imagine DOM model as it shows in Dev tools in the browser, reading it from top to bottom — that’s why they are “cascading” styles. The actually applied styles are on top. 
    

<aside>
➡️

Within the same specificity level, the latest assigned style wins. 

</aside>

### Inheritance and default props

The `inherit` property in CSS is used to explicitly inherit the value of a property from the parent element. By default, some properties **automatically inherit** (like `color` and `font`), while others **do not** (like `margin`, `padding`, `border`).

**When to Use `inherit`?**

- When you want child elements to **match** a parent’s style explicitly.
- When a property **does not inherit by default** (e.g., `border`, `padding`, `margin`).
- To **override a default style** in a CSS framework.

| Property | Description |
| --- | --- |
| **`inherit`** | Takes the value from the parent element. |
| **`initial`** | Resets to the CSS default (not the parent’s value). |
| **`unset`** | Acts like `inherit` for inherited properties and `initial` for non-inherited ones. |

## 3️⃣ Diving deeper

### Box model

<aside>
➡️

Box = Element (content) + Padding + Border + Margin

</aside>

**Margin collapsing** happens when **two vertical margins meet**, and instead of adding together, the larger margin is used:

1. If we have **two** `<div>` **elements**, each with a `margin-bottom: 20px` and `margin-top: 30px`, we might think they will add up to 50px spacing. But instead of 20px + 30px = 50px, CSS only keeps the larger margin (30px). Final space between them: 30px (not 50px).
2. If a **child element has margins, and the parent has no padding or border**, the child’s margin escapes (applies to the parent instead). E.g. if parent has `margin: 50px;` and child `margin-top: 30px;` — final space above parent: 50px (not 50px + 30px).
3. If some **(zero) element has no content, no padding, no border and no height** — then top and bottom margin will be merged into a single margin. The bigger one wins.

**Important points:**

- This **does NOT** happen with **horizontal margins.**
- **Can be prevented** using padding or border (e.g. `padding: 1px;`), or `overflow: hidden;`.
- **It was done to prevent double spacing**. Without margin collapsing, the space between paragraphs with the same styles might be doubled. Also without collapsing, margins would stack unpredictably in different elements — you would have to manually adjust margins for every case.
- *Tag `body` has some margins by default (one usually overrides it).

<aside>

To center element inside another element we can use `margin: auto;` or `margin: 0 auto;` / `margin: auto 0;`

</aside>

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing

### Shorthand properties

Combine values of nultiple properties in a single property, e.g: 

- `border: 2px dashed orange;`
- `margin: 0 2px 4px 0;` or `margin: 0 5px;`

Typically you set a general value as a shorthand, and later override one part of it if needed (e.g. we set a 1px grey border for all, and later for one element override one border to be blue and thick, for example).

In browser you can see in dev tools from which properties the value is combined (even if you haven’t set explicitely all of them):

![CleanShot 2025-03-23 at 10.21.42@2x.png](attachment:47a7e9d5-ac86-45f7-a25f-d7caa52bf5c8:CleanShot_2025-03-23_at_10.21.422x.png)

### Height & Width

**Width**

- **Block** elements (unlike inline) usually have **width 100%** by default (body included).
- **Width** is counted **for the inner content size by default (**`box-sizing: content-box;`), which doesn’t include border, margin and padding. So if it’s set to 100%, and we add all those parameters to that, and the block can get out of the screen.
    
    ![CleanShot 2025-03-23 at 10.36.28@2x.png](attachment:02f3f805-14b1-42eb-b184-cec1a45c1a20:CleanShot_2025-03-23_at_10.36.282x.png)
    
- We can change it to `box-sizing: border-box;` (then all the parameters are counted as **content + border + padding**, but **without margin**). So that it’s a real “box”.  It’s used really **commonly**. But you can’t inherit it by just adding to the body because all children that are blocks in body, will be overriden to content-box automatically, and you’ll have to **apply it to every child**.
    - So this is that rare case when we use universal selector (*) to reset it everywhere.: 
    `* { box-sizing: boder-box;}`

**Height**

- For **height**: if we set it to 100%, it occupies only **as much as its parent container allows** it to be; but the parent containes usually **takes as much as its children need** it to be → sort of an infinite loop.
- That’s why if you want to have an effect, the parent container should also change the height of **all higher level parents** including html tag:
`html, body, main /* parent1, parent2 ... */  {height: 100%;}`

### Display property & vertical alignment

Element behaviour: `inline`, `block`, `inline-block`, none. It’s how they are positioned in a flow of elements. 

| Display Type | Width & Height | Padding & Margin | Starts New Line |
| --- | --- | --- | --- |
| **`inline`** | ❌ Ignored (fits content) | ❌ Limited (only left/right) | ❌ No |
| **`inline-block`** | ✅ Respects width/height | ✅ Yes (all sides) | ❌ No |
| **`block`** | ✅ Takes full width | ✅ Yes (all sides) | ✅ Yes |
- When element is set to `none`, it’s taken out of the flow entirely — not visible anywhere but in DOM when you inspect the page. It’s used in combination with JS, when you have e.g. modal window that appears after clicking a btn.
- If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use `visibility: hidden;`
- **HTML: Block-level vs Inline Elements**
    - **Block-level elements** are rendered as a block and hence take up all the available horizontal space.
        - E.g.: `<div>` , `<section>` , `<article>` , `<nav>` , `<h1>` , `<h2>`, `<p>` etc.
    - **Inline elements** on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).
        - They also use the box-model, but `margin-top`  and `margin-bottom`  have no effect; `padding-top`  and `padding-bottom`  work differently — they don't push the adjacent content away but they will do so with the element border. Plus, setting a `width`  or `height`  are set to auto to take as much space as required by the content.
            
            https://hacks.mozilla.org/2015/03/understanding-inline-box-model/
            
        - E.g.: `<a>` , `<span>` , `<img>`

<aside>
➡️

**A bug to be aware of**: if 2 elements are set to be inline-block, the white space between them right inside html counts to the width in css. 

![CleanShot 2025-03-24 at 09.17.30@2x.png](attachment:015b4040-bae9-4202-b74a-c473981bc104:CleanShot_2025-03-24_at_09.17.302x.png)

In such case we could either remove that white space, so that it doesn’t count:

![CleanShot 2025-03-24 at 09.19.10@2x.png](attachment:65a677c7-5c49-410d-8a05-9b62c7097d70:CleanShot_2025-03-24_at_09.19.102x.png)

Or we could calculate the width, distracting some white space out of it, like `width: calc(100% - 10px);` for example. Or simply set it to 99%.

</aside>

The `vertical-align` property controls how **inline** or **inline-block** elements are aligned **vertically** **relative to their container** or surrounding text.

### Pseudo classes & pseudo elements

**Pseudo classes**

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

`:class`

Define the style for a **specific state** of the element. 

Interesting example is the last sibling in a list of equal siblings: `div:last-of-type {}`. We can also combine 2 pseudo classes like this: `div:last-of-type:hover {}`

**Pseudo elements**

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

`::element`

Define the style for **specific part** of the element.

## 4️⃣ More on selectors and CSS features

### More on classes & IDs

- **Multiple classes** on one element `<div class=”class1 class2”></div>`
    - If both classes target the **same property**, the one that **appears later in the CSS file** is applied (because of the **cascade rule**).
    - If one class is **more specific** than the other, then it wins. E.g. `div.box` is more specific than `.box`;
- Combined selectors can include **elements and classes together**, e.g. `a.class1 {}`. This will select only anchor tags that have class1.
    - If we set it with a space between though, like `a .class1 {}`, it would target elements that are children (direct or indirect) of anchor tag and have class1 applied.
    - The same can be done to ID: `a#name1` (target all anchor tags that have this ID; although it’s not the common way to do it)
- **When use what?** **Classes** are used usually only to apply certain styling: they are reusable, but typically are not widely used in conjunction with JS; **IDs** are used **once per page**: and they often have not only styling purpose (e.g. link to this exact element on the page — e.g. `www.url/home#name` will direct user to the element with `id = “name”`.)
    
    https://stackoverflow.com/questions/12889362/what-is-the-difference-between-id-and-class-in-css-and-when-should-i-use-them
    

### !important annotation

`color: red !important;` Typically it’s not smth that’s often used, because it breaks the rules of CSS. If you get important annotation twice, the 2nd one wins (cascading rule).

https://css-tricks.com/when-using-important-is-the-right-choice/

### Pseudo class ::not()

Allows to exclude a certain selector, e.g. `:not(p)` will select any element that’s not a paragraph. 

- The ability to exclude more than 1 selector is still an experimental feature, not supported by all browsers.
- We could also combine this class with other selectors, like `a:not(.class1) {}`

https://developer.mozilla.org/en-US/docs/Web/CSS/:not

This class is slightly worse in terms of complexity of reading and understanding the CSS, which also reflects on performance — so this should be used with caution.

## 6️⃣ Positioning elements

### Position values

- Document flow — a normal order of the document elements; By default all elements have `position: static;`
- Other options change the position of the element relative to **its initial position** or relative to the **viewport/html/body**;
    - `position: relative;`
        - acts like static, until `top` / `bottom` / `right` / `left` assigned — otherwise, nothing happens;
        - element appears on top of other static elements, covering them;
    - `position: absolute;`
        - completely removes the document **out of the flow**;
        - if none of the parents of the element have `position` applied, then the parent is `html`; if one of them has, **the closest parent** that has this property, is a starting point to count
            - Oftentimes, parent is assigned `position:relative;` for such purpose;
        - after applying  `top` / `bottom` / `right` / `left` — moves respectively to a parent;
        - the element starts behaving like `inline-block` — no matter what initial element was (inline or block)
    - `position: fixed;`
        - completely removes the document **out of the flow**; similar to absolute in this sense, but **doesn’t move** with the page when scrolling;
        - position depends on the **viewport**, not parents;
        - the element starts behaving like `inline-block` — no matter what initial element was (inline or block)
    - `position: sticky;` https://www.youtube.com/watch?v=NzjU1GmKosQ
        - in an essence is a hybrid of **relative and fixed**; but the difference is that the element **is not removed out of the flow,** but still sticks to the top of the viewport;
        - after applying  `top` / `bottom` / `right` / `left` — **fixed behaviour** works from the beginning of the **parent element** and to the end of it;

https://www.youtube.com/watch?v=jx5jmI0UlXU

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning

https://developer.mozilla.org/en-US/docs/Web/CSS/position

| **Position** | **Behavior** | **Moves relative to** | **Removes from normal flow?** |
| --- | --- | --- | --- |
| `static` | Default position (no special behavior). | **—** (default flow of the document) | ❌ No |
| `relative` | Moves relative to its **original position**. | **Itself** (original position remains reserved) | ❌ No |
| `absolute` | Moves relative to the **nearest positioned ancestor** (if none, relative to `<html>`). | **First non-static ancestor** | ✅ Yes |
| `fixed` | Stays fixed relative to the **viewport** (doesn’t move when scrolling). | **Viewport** | ✅ Yes |
| `sticky` | Acts like `relative` but becomes `fixed` when scrolling reaches a threshold. | **Its nearest scrollable ancestor** | ❌ No (until it sticks) |

### Z-index and stacking

- Is equal to `0` by default, but **doesn’t have any impact** for elements which **don’t have position property** applied specifically (`static` by default);
- If **2 elements** have position applied, the one that comes later in hrml, is placed **above.**
- z-index is applied first to **parent elements**, and even if the children elements of this parent have larger index than the parent above them, it’ll not apply.

https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context

### Overflow

- `hidden` property hides children of the parent;
- However, if we apply it for the `body` element, it won’t work — we’ll need to also add it to the `html` element (or add `overflow: auto;` to html element explicitely);
    - The `<html>` element (not `<body>`) is the root of the document and usually dictates the scrolling behavior.
    - Many browsers apply `overflow: auto` to `<html>` by default, making `<body>` inherit its behavior.

## 7️⃣ Background images & images

### Background properties

https://developer.mozilla.org/en-US/docs/Web/CSS/background

- **Properties used**
    - `background-image`
    - `background-size`
        - `background-size: 100px;` height is adjusted according to aspect ratio
        - `100px 200px;` image will be distorted
        - `50%` just takes 50% of width, height is adjusted
        - `auto 100%` width will adjusted, but height always occupies all the space
        - `cover`  keeps aspect ratio of the image; and automatically makes image cover the whole container you need
        - `contain` makes sure that the entire image is shown, whatever container allows
    - `background-position`
        - `px` — left edge of the image positioned relatively to the left top corner of the container, by x and y
        - `center` / `left top` / `left bottom` etc.
        - `%` — like `cover` property, but % define how the image will be cropped; e.g. if we say `10% 20%`, then 10% of the *space that might be cropped* by x axis, will be at the left, and 20% that can be cropped by y axis — on the top.
        - `left 10% top 20%`
    - `background-repeat`: can be set only to one axis (x or y)
    - `background-origin`, `background-clip` whether the background extend beneath a border (border-box; context-box) — with or without border and padding; 2 properties define that behaviour for x and y axes;
        
        
        | Property | What it Controls | Common Values | Purpose |
        | --- | --- | --- | --- |
        | `background-origin` | **Where** the background image **starts** | `border-box`, `padding-box`, `content-box` | Affects **positioning** of the background image |
        | `background-clip` | **How far** the background is **visible** | `border-box`, `padding-box`, `content-box`, `text` | Affects **clipping (cropping)** of the background |
        |  |  |  |  |
        
        They work **together** to control the **placement** and **visibility** of background images.
        
    - `background-attachment` how does scrolling behave
    - `background-color` doesn’t override image, even if stays after it;
- **Shorthand:** `background: url(”…”) left 10% bottom 20%/cover no-repeat border-box content-box;` — position/size, repeat, origin, clip (if only one prop — applies to both origin and clip)
    
    <aside>
    
    Shorthand **overrides other properties**! Even if you set background only for URL, it overrides position and everything else;
    
    </aside>
    

### Styling images

- `img` doesn’t inherit the size of the container by default; if you put img into `div` and set height to div — image will be still the size it originally is; to change that you have to apply the size **directly to the image itself**;
- When you want to set a **width/height** of the image to % value, make sure that container is displayed as **inline-block**;
- **Image as an html tag** is not a really powerful way to style — there are much less possibilities offered; therefore, often it’s recommended to use div with background images instead; however, it’s **less accessible,** so it’s aleays good to weigh all benefits;
- If you get an image with the surrounding container, and image is `inline` element — it might show an **odd white space** (additional padding) at the bottom; if you add vertical-align (any value) to the continer, or turn img to a `display:block;` it’ll be gone — **it’s a bug;**

### Gradients

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients

- **Linear**: `background-image: linear-gradient(to left bottom, red 70%, blue, yellow, green);`
    - direction: `to top right`, or just `30deg`
    - **multiple** colors (as many as you want); also `hex` code, `rgba()` s etc.
    - `linear-gradient(red, transparent);` — to define transparency;
- **Radial**: `background-image: radial-gradient(circle 20px at top left, yellow 50%, red, blue);`
    - position may be also like `circle at 20% 50%` (from the left and from the top);
    - `circle 20px` is a radius of the circle (doesn’t work for ellipse, which is a default property)
    - `ellipse 20px 50px` is a width/height of the ellipse; ellipse also is set by default if we don’t specify anything else;
    - `ellipse farthest-side`  / closet-side / closest-corner / farthest-corner— the farthest side is touching the edge of the container;

### Stacking backgrounds

`background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url("images/freedom.jpg") left 10% top 20%/cover no-repeat border-box, green;`

- Multiple backgrounds result in showing the one on the top **(specfied first)**;
- Only one **background-color** can be used;
- All BGs should be separated with comma;

### Filters

https://developer.mozilla.org/en-US/docs/Web/CSS/filter

- `filter: blur(10px);`
- there’s a number of predefined functions

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS

## 8️⃣ Dimensions, sizes and units

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units

### Units

Can be applied to font-size, padding, border, margin, width, height, top, bottom, left and right properties (for position).

- *Absolute units* usually ignore user settings (e.g. if they increased font in the browser): `px`, `cm` and `mm` (not used)
- *Viewport units*: height `vh`, width `vw`, `vmin`, `vmax`.
- *Font-relative* units: `em`, `rem` (root `em`)
- `%`

### Units in % and containing block

**Position property affects how % apply:**

- The **containing block** determines where an element will be positioned from when using properties like `top`, `left`, `right`, and `bottom`.
- The **box model** (padding + content) of the containing block is used for positioning.
- For `absolute`, it matters that the parent has `position` other than `static` to serve as a containing block.
- `sticky` is a bit of a hybrid and depends on scroll context.

| **Position** | **Containing Block** | **Notes** | **What counts as full size of the container?** |
| --- | --- | --- | --- |
| `static` | Closest **block-level** ancestor (usually the parent) | No special positioning. Uses normal document flow. | Ancestor **content** |
| `relative` | Same as `static` – closest **block-level** ancestor | Element stays in the flow, but can be nudged using `top`, `left`, etc. | Ancestor **content** |
| `absolute` | Closest ancestor that has `position: relative`, `absolute`, or `fixed` (not static) | If no such ancestor is found, it falls back to the initial containing block (usually `<html>` or **viewport**). | Ancestor **content + padding** |
| `fixed` | The **viewport** (browser window) | Ignores parent hierarchy. Fixed to the screen, regardless of scroll. | Viewport |
| `sticky` | Nearest **scrollable** ancestor (or viewport) | Acts like `relative` until a threshold is crossed, then sticks like `fixed`. | Ancestor **content** / Viewport |

<aside>

**100% height issue**

When position `static` or `relative` is applied to the element, and the element has an ancestor `body` (which is block and has some width and height), we can see the width of the element is inherited, but **height is still 0**. To fix that we have to add: `html, body { height: 100%; }` — because these elements **don't have an explicit height**, then its height is just based on content — and by default, it's not considered 100% of the viewport.

</aside>

### `rem` and `em`

https://developer.mozilla.org/en-US/docs/Web/CSS/font-size

- `html { font-size: 100%; }` can override default browser font-size
- When a font-size applied in px, it overrides browser settings (and font won’t be responsive)
- By default, browser applies sizes in `em` — which is based on **base font size** (typically 10px); those default browser sizes depend on the elements — paragraph, h1 or h2, or smth else.
- The problem with `em` is that those values are **inherited from parent containers** — this means that element with 1.5em inside another elements with 1.5em will use this value as a basic for calculations, and we get 1.5*1.5=2.25 instead.
- On the other hand, `rem` is **always based on root** font size (browser default).

### `vw` , `vh` , `vmin`, `vmax` and scrollbars

- Makes it easier to create modal views
- **100vh = 100% of the viewport**; it’s just 1% always refers to the viewport
- `vmin` — takes a value of the **smaller viewport side** (e.g. if it’s horizontally oriented — that will be height); `vmax` — respectively, vice versa.

[**Hiding Scrollbars on Windows machines**](https://www.notion.so/Hiding-Scrollbars-on-Windows-machines-1d28de0f0ea5804692d0c49efcc8c9e3?pvs=21)

### **General recommendations to use units**

Of course, those are just general notes — there might be different edge cases.

- `font-size` (root element)— `%` or nothing
- `font-size` — `rem` (`em` for children only)
- `padding` / `margin` — `rem`
- `width` / `height` — `%`, `vw`, `vh`
- `top` / `bottom` / `left` / `right` — `%`
- `border`, `shadow`, other effects — `px`

## 9️⃣ Javascript in CSS

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

```jsx
var backdrop = document.querySelector('.backdrop');
console.log(backdrop);
console.dir(backdrop); /* shows all children and props in DOM */
```

- `querySelector` selects only one element; if I want all objects that have this identifier to be selected, we use `querySelectorAll`
- manipulating classes: `className` or  `modal.classList.add('');` or `remove`

<aside>

Alternative syntax to use to access properties in css: `element.style.backgroundImage` is the same as `element.style[’background-image’]` 

</aside>

## 🔟 Responsive website

- Absolute lengths on W3.org: https://www.w3.org/TR/css-values-3/#absolute-lengths
- More about device sizes: https://bjango.com/articles/min-device-pixel-ratio/
- Media queries theory: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
- Applying media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

### Hardware pixels VS software pixels. Viewport

- In inspector tools in browser, at the very left top level there is a selector for display site in a web/mobile device frame — there’s also an option to show/hide device frame
- Modern devices have a **high pixel density**, therefore we have to decrease pixel measurements of the site to display it correctly → so there is a need to apply **pixel ratio** for the mobile version to be displayed correctly; this is done by `viewport`
- For that we add a line into index.html file: `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=2.0, minimum-scale=1.0">` — that makes browser render a view not based on browser physical pixels, but calculated based on a phone we simulate, closer to reality.
    - `initial-scale` is a zooming option (by chaging that we can make site look much closer; the only thing is that there’s a chrome bug, and it’s not working right away, one needs to switch between desktop/mobile view one more time to see changes)
    - `user-scalable` — allows (or not) users to zoom in/out (is yes by default); same for maximum-scale or minimum-scale (sets a limit for users to zoom in/out)
    - typically all is needed is: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

<aside>

The difference between `viewport` and `media queries` is that the latter allows to change the design depending on the size of the screen; while viewport deals specifically with pixel density problem; with it also the changes are up to a browser, with media queries we define the scope of changes manually.

</aside>

### Media queries

- Basic structure of media query (media query is basically **like IF condition**)
    
    ```css
    @media (min-width: 40rem) {
      #product-overview h1 {
        font-size: 1.6rem;
      }
    }
    ```
    
- Typically you start with mobile (**mobile-first**). Which means that we start writing from minimal width, and then add rules for wider screens.
    - **How it works in code**
        
        ```css
        css
        CopyEdit
        /* Basic style for mobile (small screens) */
        button {
          font-size: 14px;
        }
        
        /* For wider screens (tablet, desktop) */
        @media (min-width: 768px) {
          button {
            font-size: 18px;
          }
        }
        ```
        
        ✅ First, the button is **small** on phones.
        
        ✅ Then, when screen width is **768px or more**, the button becomes **bigger**.
        
- You can write **many media queries** in your CSS. They all work together, but **the order matters**. **More specific** or **later-written** rules **override** earlier ones (because of CSS cascading)
    
    <aside>
    
    Smaller queries should come first, then bigger ones — from smallest to largest.
    
    </aside>
    
    - **How it works in code**
        
        ```css
        css
        CopyEdit
        @media (min-width: 600px) {
          button {
            color: blue;
          }
        }
        
        @media (min-width: 400px) {
          button {
            color: red;
          }
        }
        
        ```
        
        If the screen is **500px** wide:
        
        - Only the **400px** rule applies (red button).
        - The **600px** rule is skipped (because 500px is smaller than 600px).
- Typically all media queries are added at the end of the code
- Addressing **multiple criteria**:
    
    ```css
    @media (min-width: 40rem) and (min-height: 60rem) {
      #product-overview {
        height: 40vh;
        background-position: 50% 25%;
      }
    ```
    
    - When is that needed? For example, we want to adjust a width of the image when we use a **vertical oriented narrow screen**; which means, if the height it too small (horizontal orientation), image height should still be visible, and stay 40vh, and only if the height grows bigger, we want to change it;
    - Another way to do it is: `@media (min-width: 40rem) and (orientation: portrait)` instead; but we should keep in mind that this doesn’t work good all the time for desktop browsers.
    - If we want to change **AND** rule to **OR**, then we use comma instead of and: `@media (min-width: 40rem), (orientation: portrait)`

### Right breaking points

https://www.mydevice.io/

https://gs.statcounter.com/screen-resolution-stats

## 1️⃣1️⃣ Forms

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms

https://stackoverflow.com/questions/1895476/how-do-i-style-a-select-dropdown-with-only-css

- Sometimes to style input, one **wraps them into divs** together with labels, or one can target labels and inputs individually.
- By default, labels and inputs are **inline** (so typically you want turn them into blocks)
- **Advanced attribute selectors**
    
    
    | Selector | Meaning | Example | Matches |
    | --- | --- | --- | --- |
    | `[attr]` | Has attribute | `input[disabled]` | `<input disabled>` |
    | `[attr="value"]` | Exact match | `a[target="_blank"]` | `<a target="_blank">` |
    | `[attr~="value"]` | Has word in list | `div[class~="active"]` | `<div class="btn active">` |
    | `[attr^="value"]` | Starts with value | `img[src^="https://"]` | `<img src="https://...">` |
    | `[attr$="value"]` | Ends with value | `a[href$=".pdf"]` | `<a href="file.pdf">` |
    | `[attr*="value"]` | Contains value | `input[name*="user"]` | `<input name="user-name">` |
    | `[attr | ="value"]` | Exact or starts with value + dash | `div[lang |
    - `.signup-form input[id*="terms"] + label` — e.g. this will target all labels that follow directly specific inputs which ID contains word “terms”
    - `.signup-form input:not([type="checkbox"])` — targets all the inputs inside this class, which are not checkboxes
- **Fonts** for inputs and buttons should be set specifically by `inherit` — otherwise, browser set another default font
- For the **focus** state there’s `outline` property used — it’s not counting in box size, and goes out of the box; in forms you work a lot with pseudo-classes like `:checked`, `:focused` etc.
- **Disable state** for the buttons:
    
    
    | `.button[disabled]` | `button:disabled` |
    | --- | --- |
    | Any element with `class="button"` and `disabled` attribute | Only real `<button>` elements |
    | Good for **custom components** | Good for **real buttons** |
    | Checks **attribute** manually | Checks **browser form state** |
- **Checkbox** (box with tick itself) — is a special element in a browser; sometimes to override styles one should use `-webkit-appearance: none; -moz-appearance: none; appearance: none;`
- To style **invalid states** for forms you can use `class=”invalid”`; and then apply in conditionally via JS or after server validation; html and css also have an automatic approach to this with `:invalid` pseudo selector: `.signup-form :invalid {}` targets all invalid inputs in the class; there’a also a `:valid` pseudo selector

## 1️⃣2️⃣ Text and fonts

### **Font family**

- Serif / Sans / Monospace / Cursive / Fantasy — **generic** families
- **Font family** — a specific font, e.g. Times, Georgia.
- There are also **standard font settings in a browser** to display different fonts —e.g. in Chrome it is in `chrome://settings/fonts` (standart font → san-serif → serif → mono)
- **Custom fonts** that are specifically included into a project (like web fonts from the 3rd party like Google fonts, or fonts retrieved from the server where we saved them)

**Defaults:**

- If nothing is applied at all, then browser will apply default font-family (the way it’s set up on the user’s side);
- `font-family: sans-serif;` — the browser will select a font, default for the generic font-family setting;
- `font-family: “Montserrat”, "Zapfino", sans-serif;` — the browser will apply Montserrat, if not found out, then Zapfino, then the default family to sans-serif (e.g. Verdana in Chrome).

https://www.cssfontstack.com/

### Importing custom fonts

- One can import fonts into **each html file**, like this:
    
    ```css
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tagesschrift&display=swap" rel="stylesheet">
    ```
    
- Or alternatively, one can add it right into a **shared css** file (better approach in general):
    
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tagesschrift&display=swap');
    ```
    

### Font styling properties

| Property | Meaning | Example |
| --- | --- | --- |
| `font-family` | Font face/design | `font-family: "Roboto", sans-serif;` |
| `font-size` | Size of the font | `font-size: 16px;` |
| `font-weight` | Thickness (boldness) | `font-weight: 700;` |
| `font-style` | Italic or normal | `font-style: italic;` |
| `font-variant` | Small caps or normal | `font-variant: small-caps;` |
| `line-height` | Height between lines | `line-height: 1.5;` |
| `letter-spacing` | Space between letters | `letter-spacing: 0.05em;` |
| `white-space` | Changes the way white spaces are displayed in text | `white-space: pre;` |
| `word-spacing` | Space between words | `word-spacing: 0.2em;` |
| `text-align` | Horizontal text alignment | `text-align: center;` |
| `text-decoration` | Underline, overline, line-through | `text-decoration: underline;` |
| `text-transform` | Change letters to uppercase, lowercase | `text-transform: uppercase;` |
| `color` | Text color | `color: #333;` |

### Font face

That can be used to import your own font into the website; `@font-face` in css registers a new font with your custom name and all properties:

```css
/* Regular */
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* Bold */
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

/* Italic */
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont-Italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
}
```

For that to work, we’ll need to import all the font files responsible for each font weight and style and specify for each of them properties they have. 

### Font formats

- TTF/OTF are more common and supported
    
    https://caniuse.com/ttf
    
- WOFF format is more compressed and better browser import, but the browser support is more limited
    
    https://caniuse.com/?search=woff
    

### Text-decoration and text-shadow

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

### Font shorthand

https://developer.mozilla.org/en-US/docs/Web/CSS/font

The order of the values is important! Some of them are **optional** (but font size and family are required).

```css
font: italic small-caps 700 1.2rem/2 "Montserrat", sans-serif;
```

- 1.2rem /2 ( after slash there is a line-height)
- `font: menu;` this value refers to the same font that is applied to different parts of the operating system, e.g. how menus look by default (might be also `status-bar` e.g.)

### Performance and font-display

`font-display` controls **how the font loads and displays** when it’s not immediately available (e.g., on slow networks).

| `auto` | Browser decides (default behavior) |
| --- | --- |
| `block` | Wait briefly for font → show it when ready (text invisible for a short time) |
| `swap` | Show fallback font immediately → **swap** to custom font when ready |
| `fallback` | Show fallback font immediately → **swap only if ready quickly** |
| `optional` | Like fallback, but browser may **skip font download** entirely if it's slow or low priority |

![image.png](attachment:79ebd433-5b26-4f09-8d90-4c9923a4f790:image.png)

## 1️⃣3️⃣ Flexbox

https://developer.mozilla.org/en-US/docs/Glossary/Flex

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

https://caniuse.com/?search=flexbox

[css-flexbox.pdf](attachment:cbdc198c-d820-42f4-b6e1-fd42e83784c1:css-flexbox.pdf)

### Flex container

- `display: flex;` or `inline-flex` turn an element into flex container that has flex-items inside; after that we can apply different properties for both parent and child
    
    
    | Property | Layout | Starts new line? | Common use |
    | --- | --- | --- | --- |
    | `flex` | Block-level | ✅ Yes | Layout rows, sidebars |
    | `inline-flex` | Inline-level | ❌ No | Buttons, badges, icons inside text |
- By default flex-container has `flex-direction: row;` and `flex-wrap: nowrap;` declarations being automatically applied
- **Flex Container Properties**
    
    (You set these on the **parent element** — the flex container)
    
    | Property | What it does |
    | --- | --- |
    | `display: flex` | Turns the element into a flex container |
    | `flex-direction` | Direction of items (`row` ← default, `column`, etc.) |
    | `flex-wrap` | Allows items to wrap onto multiple lines |
    | `justify-content` | Horizontal alignment (main axis) |
    | `align-items` | Vertical alignment (cross axis) |
    | `align-content` | Space between **rows** in wrapped content;  |
    | `gap` | Adds spacing between items (no need for margins) |
    
    ![CleanShot 2025-05-01 at 09.16.33@2x.png](attachment:56e6785d-791c-4c6f-aff9-d0a8e2bc6a77:CleanShot_2025-05-01_at_09.16.332x.png)
    
    ![CleanShot 2025-05-01 at 09.27.39@2x.png](attachment:db6171a0-6a37-4aae-b476-c2f463f9b0b5:CleanShot_2025-05-01_at_09.27.392x.png)
    
- `flex-flow: row wrap;` (shorthand)

### Flex items

You set these on the **child elements** inside a flex container. And the properties are applied to each item individually:

| Property | What it does |
| --- | --- |
| `flex-grow` | How much it **expands** to fill space (0 by default); defines how the excessive space inside the container is distributed between the items |
| `flex-shrink` | How much it **shrinks** when space is tight (1 by default); same principle as for flex-grow |
| `flex-basis` | Initial size before growing/shrinking; defines **size** of the item by the **main axis**; by default is set to **auto;** can be defined also in **%;** 
But if we have a flex container AND `flex-direction` is set to row, flex-basis will override `width` property (same with height, but with column value);  |
| `flex` | Shorthand for `flex-grow`, `flex-shrink`, `flex-basis`. 
E.g. `flex: 0 1 auto;` (all **default** settings) |
| `align-self` | Overrides `align-items` **for this item only** |
| `order` | Controls visual **order** of the item (0 by default) |

### Flexbox and the Z-Index

Adding the `z-index`  to an element only has an effect, if the `position`  property with a value different from `static`  was applied to this element. One exception from this behaviour is flexbox: Applying the `z-index`  to flex-items (so the elements inside of the flex-container) will change the order of these items even if no `position`  property was applied.

## 1️⃣4️⃣ CSS grid

[css-grid.pdf](attachment:f6e357ed-95fa-4891-866e-028a58d23b5a:css-grid.pdf)

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

https://css-tricks.com/snippets/css/complete-guide-grid/

### Overview

CSS Grid is a **two-dimensional layout system** that allows you to place items into rows and columns. (Chrome has quite good developer tools to support grid development — highlights grid elements and borders).

![image.png](attachment:e0e195d8-b01a-404a-aa08-8ba8e213f2d9:image.png)

<aside>

**Grid and document flow**

- Elements with `position: absolute` or `position: fixed` **are removed from the normal document flow**, including both **Flexbox** and **Grid layouts**.
- They do **not participate in the layout or sizing** decisions of the CSS Grid or Flex container they may be visually inside of.

Think of it like this: they’re "on top" of the layout, not "inside" it structurally.

</aside>

**But be careful**:

- Even though they're out of the flow, **if a positioned element is nested inside a grid container**, it may still use that container as a **positioning context** if the container is `position: relative` or any non-`static` value.
- Also, **CSS Grid allows positioning absolutely positioned children relative to grid areas**, using properties like `grid-area`, which is a unique feature.

### Grid container properties

These are applied to the **grid parent element** (the container):

| Property | Description |
| --- | --- |
| `display: grid` | Turns the element into a grid container. |
| `grid-template-columns` | Defines the number and size of columns (e.g., `1fr 2fr` or `repeat(3, 1fr)` — shorthand for `1fr 1fr 1fr` ; |
| `grid-template-rows` | Defines the number and size of rows (e.g., `100px auto 1fr`). |
| `gap` or `grid-gap` | Sets space between rows and columns (e.g., `10px`, or `10px 20px`). |
| `justify-items` | Aligns items **horizontally** in their cells (`start`, `end`, `center`, `stretch`). |
| `align-items` | Aligns items **vertically** in their cells. |
| `justify-content` | Aligns the **whole grid horizontally** when there's extra space. |
| `align-content` | Aligns the **whole grid vertically** when there's extra space. |
| `grid-template-areas` | Defines named areas to place items into using `grid-area`. |
| `grid-auto-flow` | Controls automatic item placement (`row` or `column`). |
| `grid-auto-columns` / `grid-auto-rows` | Defines size for implicit columns or rows created on the fly. |

<aside>

You can also set your entire page to be grid, by adding `body {display:grid;}`. This is quite common practice.

</aside>

- `fr` = **fraction of remaining space** (e.g., `2fr` gets twice as much as `1fr`)
- Use `minmax()` for responsive sizing: e.g., `minmax(150px, 1fr)`; it means that column or row it’s applied to, will stretch between those 2 values;
- `auto` is a value that allows grid to take the space that content inside has (depends on whether it’s set to rows or columns);
- By default, all items behave like `stretch` — which means, they take all the space available inside the cell; if you start changing properties like `justify-items` or `align-items`, they start being positioned on one of the sides or in the middle, and take only the space needed for the content.

### Grid item properties

These are applied to the **children of the grid** (grid items):

| Property | Description |
| --- | --- |
| `grid-column-start` / `grid-column-end` | Specify which columns an item starts/ends in. |
| `grid-row-start` / `grid-row-end` | Specify rows an item starts/ends in. |
| `grid-column` | Shorthand to define start and end column through slash (`grid-column: 1 / 3`). |
| `grid-row` | Shorthand for start and end row. |
| `grid-area` | — Can refer to named area like `grid-area: header;` 
— Or be used as shorthand for all four start/end properties; `grid-row-start / grid-column-start / grid-row-end / grid-column-end` |
| `justify-self` | Horizontal alignment **per item** inside its cell. |
| `align-self` | Vertical alignment **per item** inside its cell. |
| `place-self` | Shorthand for `align-self` + `justify-self`. |
- We can say that we want **certain cell to occupy certain number of columns / rows**
    
    ```css
    /*way 1*/
    grid-column-start: 2;
    grid-column-end: 4;
    
    /*way 2*/
    grid-column-start: 2;
    grid-column-end: span 2; /*ends after occupying 2 cells*/
    ```
    
    - If there’s **no space to occupy** anymore, increasing span 2 to span 10 won’t change anything; default value for each cell `span 1`
    - you can also define **negative span number** (e.g. `grid-column-end: span -1;` will mean 1 column from the right)
    - We can even reach an **overlap between two cells** if we **explicitely define** that they should start and end on the same rows and the same columns  — automatically grid property tries to avoid this; but if it happens, the element (cell) that is written last according to DOM, will be on top;
- `grid-template-columns: fit-content(200px);`
    - The column will **shrink to fit the content**, **but never grow wider than `200px`**.
    - If the content is narrower than 200px, the column shrinks to fit it.
    - If the content is wider than 200px, the column becomes **200px max** and **content overflows or wraps**.
    - Essentially, it’s the same as `minmax(auto, max-width);`
    - **Example:**
        
        ```css
        .grid {
        display: grid;
        grid-template-columns: 100px fit-content(300px) 1fr;
        }
        ```
        
        **This creates**: a fixed 100px column + column that grows to fit content, up to 300px max + flexible column that takes the remaining space
        

### Naming grid lines and areas, templates

- What can be named: **grid lines / grid areas** (separately with `grid-template-areas`, but that's a different feature)
    - You can assign **multiple names** to one cell
- **Naming grid lines**: you name grid lines inside square brackets `[]` when defining columns or rows:
    
    ```css
    css
    CopyEdit
    grid-template-columns: [start] 1fr [middle] 1fr [end];
    ```
    
    This defines:
    
    - A column from `start` to `middle` (1fr wide)
    - Another from `middle` to `end` (1fr wide)
- **With `repeat()`**: you can name grid lines inside `repeat()` too:
    
    ```css
    css
    CopyEdit
    grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
    ```
    
    This creates: 3 columns, each with named lines: `col-start` and `col-end` 
    
- **How to use named lines**: later, you can position items like this:
    
    ```css
    css
    CopyEdit
    .item {
      grid-column: col-start 2 / col-end 3;
    }
    ```
    
    This means: start at the 2nd occurrence of a line named `col-start` / end at the 3rd occurrence of a line named `col-end`. This is useful when you have repeating names — it counts **how many times** the name appeared so far.
    
- **Template for the grid**
    
    ```css
    grid-template-areas: “header header header header"
    											"side side main main"
    											"footer footer footer footer”;
    ```
    
    - If you don’t want to give a name to certain cell, you put `.` instead
    - After defining such a structure of the grid inside the grid container, you can later **assign for each element** a property like `grid-area: main;` and it will behave the way it’s specified in the template; it will even override DOM order;

### Gaps

- `grid-row-gap`, `grid-column-gap`
- `grid-gap: 10px 30px;` (rows, columns)
- `grid-gap: 10px;` (is taken for both rows and columns)

### Autoflow

**Explicit grid** — the grid structure you define yourself using `grid-template-columns` or `grid-template-rows`. Implicit grid — tracks rows or columns that the **browser automatically creates** because:

- You placed more items than the grid can hold
- You explicitly positioned an item outside the defined grid

These tracks are controlled with: `grid-auto-rows` or `grid-auto-columns`.

| Property | Controls... | Default |
| --- | --- | --- |
| `grid-auto-flow` | Placement direction | `row` |
| `grid-auto-rows` | Height of implicit rows | `auto` |
| `grid-auto-columns` | Width of implicit columns | `auto` |
- **`grid-auto-flow`**
    
    Controls **how the browser places items** in the grid **when you don't explicitly place them**.
    
    - `row` (default) → Fills rows **left to right**, then moves to the next row.
    - `column` → Fills columns **top to bottom**, then moves to the next column.
    - `dense` (can be added to either) → Tries to fill holes in the grid if items fit.
    
    ```css
    css
    CopyEdit
    .container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-auto-flow: column;
    }
    ```
    
    This will place items **top to bottom in columns**, not left to right.
    
- **`grid-auto-rows` & `grid-auto-columns`**
    
    Define the **size** of **implicitly created tracks** (rows or columns) when you **don’t define all rows/columns**, but items force the grid to create more.
    
    - `grid-auto-rows` example:
        
        ```css
        css
        CopyEdit
        .container {
          display: grid;
          grid-template-columns: 100px 100px;
          grid-auto-rows: 80px;
        }
        ```
        
        If items overflow and **need new rows**, those new rows will each be **80px high**.
        
    - `grid-auto-columns` example:
        
        ```css
        css
        CopyEdit
        .container {
          display: grid;
          grid-template-rows: 100px 100px;
          grid-auto-columns: 60px;
          grid-auto-flow: column;
        }
        ```
        
        This will fill items **in columns**, and any new columns will be **60px wide**.
        
- **`auto-fill` vs `auto-fit`.**
    
    Both are used in: `grid-template-columns: repeat(auto-fill/auto-fit, minmax(150px, 1fr));` **(only in columns!)**
    
    | Keyword | What it does | Result |  |
    | --- | --- | --- | --- |
    | **`auto-fill`** | Creates as many columns as fit, **keeps empty slots** | Layout stays the same, even if items are missing. |  |
    | **`auto-fit`** | Creates as many columns as fit, **collapses empty ones** | Items **stretch** to fill all space. |  |

<aside>

The difference between **grid and flexbox** typically boils down to the fact that 1st is 2-dimensional, and the 2nd — 1-dimentional.

</aside>

## 1️⃣5️⃣ Transforms

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms

https://3dtransforms.desandro.com/

| **Function** | **Description** |
| --- | --- |
| `translateX(x)` | Moves the element left/right. |
| `translateY(y)` | Moves the element up/down. |
| `translate(x, y)` | Moves an element along the X and Y axes. |
| `translateZ(z)` | Moves in 3D space (needs `transform-style: preserve-3d`). |
| `translate3d(x, y, z)` | Moves in all three dimensions. |
| `scaleX(x)` | Scales only the width. |
| `scaleY(y)` | Scales only the height. |
| `scale(x, y)` | Scales the element by `x` horizontally and `y` vertically. |
| `scaleZ(z)` | Scales in 3D (rarely used alone). |
| `scale3d(x, y, z)` | Scales in all three dimensions. |
| `rotate(angle)` | Rotates around the Z-axis (2D). |
| `rotateX(angle)` | Rotates around the X-axis (3D flip forward/back). |
| `rotateY(angle)` | Rotates around the Y-axis (3D flip side-to-side). |
| `rotateZ(angle)` | Same as `rotate`, explicitly Z-axis. |
| `rotate3d(x, y, z, angle)` | Rotates around a vector in 3D space. |
| `skew(x, y)` | Skews the element in X and Y directions. |
| `skewX(angle)` | Skews only horizontally. |
| `skewY(angle)` | Skews only vertically. |
| `perspective(n)` | Applies a 3D perspective (used with 3D transforms).  |
| `matrix(a, b, c, d, e, f)` | A combination of 2D transforms (rarely used directly). |
| `matrix3d(...)` | Advanced 3D transform matrix (16 values, rarely written manually). |
| `none` | Resets any transformation. |
- You can **combine** multiple transforms like so: `transform: translateX(50px) scale(1.2) rotate(30deg);`
- `translate` property is to move elements by axes; if the element is rotated, those **axes rotate together with it;**
- You can **“cancel” the transformation** for the image inside container: if container has skew(20deg) applied, we can use skew(-20deg) to get image straight again.
- The `transform-style` property in CSS controls whether an element's **children are rendered in 3D space** or are **flattened into the 2D plane** of the parent. Can be `flat` or `preserve-3d`;
    - If you apply 3D transforms to elements **inside** a container with `transform-style: flat`, and then transform the **container itself**, the inner elements will appear as if they are flattened onto the container’s plane — their 3D positioning won’t be preserved.
- `transform: perspective;` — adds 3D **depth** to child elements by setting distance from the viewer; you can apply pixels (which mean the distance between viewer and the object);
    - there’s also a `prospective: 1000px;` property — but that should be applied to the **parent object**; in this case all children of it will have the same prospective.
- `transform-origin: top left;` (or 50% 50%) allows to set the point relative to whch the transformation will be done; same for `perspective-origin`
- `backface-visibility` hides or shows the back of an element when rotated (`visible` or `hidden`); i.e. completely hides the back of the element.
- `will-change` hints the browser to optimize performance for transforms (e.g., `will-change: transform;`).

## 1️⃣6️⃣ Transitions & animations

https://easings.net/

**Transition** — is a change from 1 state to another. We can also add **animation** to transition.

[css-16-animations-summary.pdf](attachment:f71a4a7f-83a9-493c-9fa1-a45a6ce6292f:css-16-animations-summary.pdf)

### Transition

https://developer.mozilla.org/en-US/docs/Web/CSS/transition

`transition: all;` or `transition: opacity 0.5s, transform 500ms;` This code interpolates the change of selected value (e.g. opacity or transformation of the object).

| **Property** | **Purpose** | **How It Works** | **Key Syntax** |
| --- | --- | --- | --- |
| `transform` | Visually modifies the element (rotate, scale, move, skew) | Instantly applies a visual effect without animation | `transform: scale(1.2)` |
| `transition` | Animates changes between states smoothly | Applies animation *between* two style states (e.g., default → hover) | `transition: transform 0.3s ease` |
| `animation` | Creates complex, multi-step animations | Uses `@keyframes` to define steps; supports loops, direction, delays, etc. | `animation: slide 2s infinite` |
- `transition: opacity 200ms 1s ease-out;`
    
    Can be translated to: "Animate any changes in the `opacity`  property (for the element to which the `transition`  property is applied) over a duration of **200ms**. **Start fast and end slow**, also make sure to **wait 1s before you start**".
    
    `transition-delay: 1s;` also can delay a transition
    
- Easing function might be even created right in a **Chrome developer tools**
- To make elements "invisible" (like using `display: none;`), but still have them animating through opacity, you should use `visibility: hidden;` combined with `opacity: 0;`.
    
    Unlike `display: none`, `visibility: hidden` keeps the element in the document flow (i.e., it still takes up space) and allows for opacity transitions.
    
    Here’s an example:
    
    ```css
    css
    CopyEdit
    .element {
      opacity: 0; /* Initially hidden */
      visibility: hidden; /* Keeps the element in the flow, but invisible */
      transition: opacity 1s ease, visibility 0s 1s; /* Allows opacity transition */
    }
    
    .element.show {
      opacity: 1; /* Makes it visible */
      visibility: visible; /* Ensures the element is part of the flow */
      transition: opacity 1s ease, visibility 0s; /* Timing for visibility change */
    }
    
    ```
    
    **Explanation:**
    
    - The element starts off with `opacity: 0` and `visibility: hidden`.
    - When you add the `.show` class, the element fades in (`opacity: 1`) and becomes part of the flow (`visibility: visible`).
    - The `transition` property animates the opacity, and `visibility` will change after the opacity transition ends, so it can be used for smooth opacity-based animations.
    
    This setup allows you to animate an element’s opacity and visibility while keeping it part of the document flow for the animation.
    

### Animation

https://developer.mozilla.org/en-US/docs/Web/CSS/animation

- Any element that later receives this `wiggle` animation, will use it by animation: `wiggle 200ms 3s 8;` :
    
    ```css
    @keyframes wiggle {
    	from {
    		transform: rotateZ(0);
    	}
    	to {
    		transform: rotateZ(10deg);
    	}
    }
    ```
    
    ```css
    @keyframes wiggle {
    	0% {
    		transform: rotateZ(0);
    	}
    	50% {
    		transform: rotateZ(-10deg);
    	}
    	100% {
    		transform: rotateZ(10deg);
    	}
    }
    ```
    
- `animation: wiggle 200ms 1s ease-out 8 alternate forwards running;`
    
    Can be translated to: "Play the wiggle keyframe set (animation) over a duration of **200ms**. Between two keyframes **start fast and end slow**, also make sure to **wait 1s before you start.** Play **8 animations** and **alternate** after each animation. Once you're done, **keep the final value** applied to the element. Oh, and you should be **playing the animation** - **not pausing**."
    
- There are a lot of additional properties like `animation-delay`, `animation-direction`, `animation-iteration-count` etc.

### Listen to animation events in JS

```jsx
var ctaButton = document.querySelector(”.main__nav-btn-cta”);
ctaButton.addEventListener('animationstart', fucntion() {
	console.log('Animation started');
});
```

There are also `animationend` and `animationiteration` events.

In **animation event** in the developer tools in the browser there’s detailed information about each event — transformations, timing etc.

## 1️⃣7️⃣ Future-Proof CSS code

[css-17-future-css.pdf](attachment:52b46ed0-8ec2-4b93-92f9-76d92145c101:css-17-future-css.pdf)

https://www.w3.org/TR/#tr_Cascading_Style_Sheets__CSS__Working_Group

- **Variables**
    
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
    
    When using a variable, you can add a **fallback color** in case the variable won’t be defined for some reasor (e.g. external package); but it won’t work for the browsers that don’t support variables anyway;
    
    ```css
    :root {
      --dark-green: #0e4f1f;
      --highlight-color: #ff1b68;
    }
    
    a {
    	color: var(--highlight-color, #0e4f1f);
    }
    ```
    
- **Prefixes** are used when browsers just start to support some feature early; in case the final version is different from what they have added with prefix, the old code won’t be broken with the new syntax. All browsers have different prefixes. In order to add all the right prefixes — you can do it with automatic tool.
    
    https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
    
    https://shouldiprefix.com/
    
    ```css
    div {
    	display: -webkit-flex; /*if browser understands only this*/
    	display: -ms-flexbox;
    	display: flex; /*if browser understands typical flex*/
    }
    ```
    
- **@supports** query checks if a certain property is supported by browser, and only executes code if browser supports it. You can also use more complex queries with conditions.
    
    https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports
    
    ```css
    @supports (display: grid) {
    	contaner {
    		display: grid;
    	}
    }
    
    contaner {
    	display: inline;
    }
    ```
    
- **Polyfills** are JS packages that enable certain CSS features in browsers which wouldn’t support is otherwise. They apply a feature with other CSS tricks by using Java Script, which however influences performance.
    
    https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
    
- **Reset-libraries** (e.g. [normalize.css](https://necolas.github.io/normalize.css/)) help to keep all the default styles across browsers to make them all consistent. You will need to import them first in your code. But then users have to also download all that initial code (performance).
- **Vanilla CSS** is when you write the whole code on your own; there are also many **packages** with ready-to-use styling (classes) like *Bootstrap* or *Tilewind*; again it gives a lot of advantages, but you need to rely on package and users have to download them first, also you have not a lot of control. **Utility frameworks** only offer some classes, while **component frameworks** offer whole components.
    
    https://academind.com/tutorials/bootstrap-4-tutorial
    

### **Naming**

<aside>

CSS is case-insensitive. Which means that `snakeCase` won’t be understood in case it matches `snakecase`.

</aside>

- **Kebab style**
    
    E.g., `background-color`, `font-size` is used in CSS because:
    
    - **Consistency with CSS Syntax** – CSS properties are written in **kebab-case** by default (e.g., `font-size`, `margin-left`). Keeping class names in kebab case makes everything look uniform.
    - **Better Readability** – `main-header-title` is easier to read than `mainHeaderTitle` (camelCase) or `Main_Header_Title` (snake_case).
    - **Compatibility with HTML** – HTML class names are **case-insensitive**, so using camelCase (`mainHeaderTitle`) can lead to unexpected behavior in some environments.
    - **Avoids Issues in Selectors** – Some CSS preprocessors (like Sass) and tools may not handle camelCase properly, while kebab-case works reliably everywhere.
- **BEM naming for CSS classes**
    
    https://getbem.com/introduction/
    
    **BEM** stands for **Block, Element, Modifier**. It is a naming convention for CSS classes that makes styles **structured, reusable, and easy to maintain**. 
    
    1. **Block (**`.block`) – A reusable standalone component (e.g., a button, a navbar).
    2. **Element** (`.block__element`) – A part of a block that has no meaning on its own (e.g., a button’s icon).
    3. **Modifier** (`.block--modifier` or `.block__element--modifier`) – A variation of a block or element (e.g., a large button).
    
    **Why use BEM?**
    
    - **Avoids conflicts** – Each component has its own unique class names. Without BEM, you might have generic class names like `.title`, `.container`, or `.button`, which can easily **collide** with other styles in a large project.
    - **Scalable** – Works well for large projects. Instead of deeply nested styles, BEM **keeps selectors flat** and modular. Changing one part of a component **won’t break other styles**.
    - **Readable** – Other developers can quickly understand your CSS.
    - **Easier maintenance** – Clear structure makes future changes simpler.
    - **Works Well with JavaScript & React.** BEM class names are easy to **select in JavaScript** (e.g., for event listeners). In **React**, BEM works great with components and styling frameworks like CSS Modules or SCSS.
    
    ```html
    <button class="button button--primary">
      <span class="button__icon">🎨</span>
      <span class="button__text">Click me</span>
    </button>
    ```
    
    ```html
    <nav class="main-nav">
    	<ul class="main-nav__items">
    		<li class="main-nav__item"></li>
    	</ul>
    </nav>
    ```
    

## 1️⃣8️⃣ Saas

https://sass-lang.com/guide/

https://sass-lang.com/install/

- **Sass** and **SCSS** are both syntaxes of Sass (Syntactically Awesome Stylesheets):
    
    
    | Syntax | Description | File Extension |
    | --- | --- | --- |
    | **Sass** | Indented syntax, no curly braces `{}` or semicolons `;`. Cleaner but less like CSS. | `.sass` |
    | **SCSS** | CSS-like syntax with curly braces `{}` and semicolons `;`. Easier transition from CSS. | `.scss` |
    
    SCSS is more popular because it's **closer to standard CSS**.
    
- This language is not understood by the browser by default. You let some tool **compile your code into CSS.**
    - To do that, after writing your code in e.g. `file.scss`, you need to open a terminal (better in VS code, right in the folder where you’re working) and write the following:
        
        ```bash
        $ sass file.scss main.css
        ```
        
        This will create (or replace) file `main.css` using your `file.scss` as a source.
        
    - However, if you want to watch the changes automatically:
        
        ```bash
        $ sass --watch file.scss:file.css
        ```
        
        This will change file `main.css` using your `file.scss` as a source on the go, in real time.
        

### **SASS Features**

- **Nested rules** (nest properties like flex or font (that start with the same font-) into one curly brackets: `font {size: 30px; weight: 400;}`
- **Variables**: `$main-color: #234567;` and then use everywhere `$main-color`. You can also store **a list of values** in a variable, e.g. `1px solid red` — basically anything that is used at the right side of the property (value) in CSS. You can also create **maps**:
    
    ```scss
    $colors: (main: #456738, secondary: #fa1234);
    div {
    	color: $solid map-get($colors, main);
    }
    ```
    
    You can also use **variable inside a variable.**
    
- **Helper functions:** e.g. map-get to extract variables from the mapping (above); https://sass-lang.com/documentation/modules/; there are functions like lighten the color for example.
- **Calculations**. `padding: $size-default * 3 0;` It supports basic operations
- **Media-queries** might be also nested inside the element, instead of collecting all queries at the end of the file.
- **Inheritance**. When inside one class you inherit properties from the other classes (then we’ll have the same set of the rules of the class you inherit):
    
    ```scss
    .class1 {
    }
    
    .class2 {
    	@extend .class1;
    }
    ```
    
- **Mixin.** It’s a way to **reuse groups of CSS styles** throughout your project. Instead of repeating code, you define it once in a mixin and use it wherever you need.
    
    ```scss
    // Define a mixin with the name "button-styles"
    @mixin button-styles($color, $padding: 10px) {
      background-color: $color;
      padding: $padding;
      border-radius: 5px;
      color: white;
    }
    .button-primary {
      @include button-styles(blue, 15px);
    }
    ```
    
    - `@content` is a special directive in Sass that allows you to **pass a block of styles** into a mixin. It’s useful when you want to **inject custom styles** inside a predefined structure.
        - The code in scss:
            
            ```scss
            // Mixin definition with @content
            @mixin card {
              border: 1px solid #ccc;
              padding: 15px;
              border-radius: 5px;
              // Here, @content will inject custom styles
              @content;
            }
            
            // Using the mixin
            .card-primary {
              @include card {
                background-color: blue;
                color: white;
              }
            }
            
            .card-secondary {
              @include card {
                background-color: green;
                color: black;
              }
            }
            ```
            
        - Results in:
            
            ```scss
            .card-primary {
              border: 1px solid #ccc;
              padding: 15px;
              border-radius: 5px;
              background-color: blue;
              color: white;
            }
            
            .card-secondary {
              border: 1px solid #ccc;
              padding: 15px;
              border-radius: 5px;
              background-color: green;
              color: black;
            }
            ```
            
- **Ampersand operator**. instead of writing all the time `.class:hover, .class:active {}` separately from the main styles for that class, we can nest inside this class definition `&:hover, &:active {}`

### **Partials to optimize files import**

Partials in SCSS allow you to **break your CSS into smaller, reusable pieces**. Instead of having one big stylesheet, you can organize your styles logically (e.g., `_buttons.scss`, `_header.scss`). This makes it easier to manage, maintain, and update.

- The underscore tells Sass not to generate a separate CSS file for it.
- Import the partial in your main **SCSS file:**
    
    ```scss
    scss
    CopyEdit
    // main.scss
    @import 'buttons';
    @import 'header';
    ```
    
- No need to include the underscore or the `.scss` extension—just the filename.

**Result: a**ll styles from `_buttons.scss` and `_header.scss` are merged into your final **compiled CSS file**, even though there are **no imports in it at all**, all the import happens on scss side.