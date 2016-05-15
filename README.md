vue-count-button
=======================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A simple vue component that count the clicking times


Try online demo here: [demonstration](http://leftstick.github.io/vue-count-button/)


## Installation

**via npm**

```shell
npm install vue-count-button --save
```

## Import

**ES2015**

```javascript
import VueCountButton from 'vue-count-button';
```

**CommonJS**

```javascript
var VueCountButton = require('vue-count-button');
```

**script**

```html
<script type="text/javascript" src="vue/dist/vue.min.js"></script>
<script type="text/javascript" src="vue-count-button/dist/vue-count-button.js"></script>
<script type="text/javascript">
    var VueCountButton = window['vue-count-button'];
</script>
```

## Usage ##

```html
<vue-count-button v-on:counter-updated="onChange"></vue-count-button>
```

```JavaScript
new Vue({
    el: 'body',
    components: {
        'vue-count-button': VueCountButton
    }
});
```


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/vue-count-button/master/LICENSE)


[npm-url]: https://npmjs.org/package/vue-count-button
[npm-image]: https://img.shields.io/npm/v/vue-count-button.svg
[david-url]: https://david-dm.org/leftstick/vue-count-button.png
[dt-url]:https://img.shields.io/npm/dt/vue-count-button.svg
[license-url]:https://img.shields.io/npm/l/vue-count-button.svg
