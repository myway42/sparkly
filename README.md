[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@myway42/sparkly) [![NPM Version](https://img.shields.io/npm/v/%40myway42%2Fsparkly)](https://www.npmjs.com/package/@myway42/sparkly)

# \<sparkly-view>

Easily start.

```html
<sparkly-view>hello world</sparkly-view>
```

[Live Demo](https://myway42.github.io/sparkly/)

## Description

This is a custom element that allows you to add **sparkly** animation to the `text`、`button`、`img` and so on.

## Installation

```bash
npm install @myway42/sparkly
```

then import

```js
import Sparkly from '@myway42/sparkly'

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

|   Name   |  type   | default |                   Description                   |
| :------: | :-----: | :-----: | :---------------------------------------------: |
| canclick | boolean |  false  | Whether the `Sparkly` can be click to hide/show |
|  color   | string  | #FFC700 |                 `Sparkle` color                 |
| minsize  | number  |   10    |               `Sparkle` min size                |
| maxsize  | number  |   20    |               `Sparkle` max size                |
