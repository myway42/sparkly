# \<sparkly-view>

Easily start.

```html
<sparkly-view>hello world</sparkly-view>
```

## Description

This is a custom element that allows you to add **sparkly** animation to the `text`、`button`、`img` and so on.

## Installation

```bash
npm install @myway42/sparkly
```

then import

```js
import Sparkly from '@myway42/sparkly/component.js'

// same as previously
Sparkly.register()

// registering as a different tag-name:
Sparkly.register('nice-sparkly')
```

Or grab from [unpkg.com CDN](https://unpkg.com/@myway42/sparkly):

```html
<script src="https://unpkg.com/@myway42/sparkly" type="module"></script>
```

## Usage

```html
<sparkly-view>hello world</sparkly-view>
```

## Attributes

|   Name   |  type   |                   Description                   |
| :------: | :-----: | :---------------------------------------------: |
| canclick | boolean | Whether the `Sparkly` can be click to hide/show |
|  color   | string  |                 `Sparkle` color                 |
| minsize  | number  |               `Sparkle` min size                |
| maxsize  | number  |               `Sparkle` max size                |
