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
import Sparkly from '@sparkly/component.js'

Sparkly.register()
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
| canClick | boolean | Whether the `Sparkly` can be click to hide/show |
|  color   | string  |                 `Sparkle` color                 |
| minSize  | number  |               `Sparkle` min size                |
| maxSize  | number  |               `Sparkle` max size                |
