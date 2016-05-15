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

## Basic Usage ##

```html
<vue-count-button v-on:counter-updated="onChange"></vue-count-button>
```

```JavaScript
new Vue({
    el: 'body',
    components: {
        'vue-count-button': VueCountButton
    },
    methods: {
        onChange: function(e){
            console.log(e); //e is current counter value
        }
    }
});
```

## Props ##

| Name        | Type           | Required  | Description | Example  |
| :------------- |:-------------| :-----:| :-----| :-----|
| init | number | No | The initial value of the counter. `0` by default | 5 |
| txt | string | No | The `text` displayed in center of the counter. `OK` by default | 'Push' |
| width | number | No | The `width` of the counter. `50` by default | 70 |
| bgColor | string | No | The ``background-color of the counter. `#464646` by default | `green` |


## Events ##

| Name        | Type           | Required  | Description |
| :------------- |:-------------| :-----:| :-----|
| counter-updated | in -> out | No | Get notified while counter is updated. |
| counter-reset | out -> in | No | Notify the `counter` to be reset. |


## Examples ##

### Event - counter-updated ###

```html
<vue-count-button v-on:counter-updated="onChange"></vue-count-button>
```

```javascript
new Vue({
    ...
    components: {
        'vue-count-button': VueCountButton
    },
    methods: {
        onChange: function(e){
            console.log(e); //e is current counter value
        }
    }
});
```

### Event - counter-reset ###

```html
<vue-count-button v-ref:count></vue-count-button>
```

```javascript
new Vue({
    ...
    components: {
        'vue-count-button': VueCountButton
    },
    created: function() {
        setTimeout(() => {
            //the counter will be reset from 20
            this.$refs.count.$emit('counter-reset', 20);
        }, 1000);
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
