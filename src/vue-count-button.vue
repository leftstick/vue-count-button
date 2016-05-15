<template>
    <div>
        <button class="round-button" v-bind:style="btnStyle" v-on:click.prevent.stop="counting" v-on:mouseenter="entering" v-on:mouseleave="leaving">
            {{ txt }}
            <span v-for="hint in hints" class="hint" v-bind:class="hint.cls">
                {{ hint.txt }}
            </span>
        </button>
    </div>
</template>

<script>

export default {

    data: function() {
        return {
            value: this.init,
            hints: [],
            onReset: (e) => {
                this.value = e;
            }
        };
    },

    props: {
        init: {
            type: Number,
            twoWay: false,
            default: 0
        },
        txt: {
            type: String,
            default: 'OK'
        },
        width: {
            type: Number,
            default: 50
        },
        bgColor: {
            type: String,
            default: '#464646'
        }
    },

    computed: {
        btnStyle: function() {
            return {
                width: this.width + 'px',
                height: this.width + 'px',
                'line-height': (this.width - 12) + 'px',
                'background-color': this.bgColor
            };
        }
    },

    created: function() {
        this.$on('reset', this.onReset);
    },

    beforeDestroy: function() {
        this.$off('reset', this.onReset);
    },

    methods: {
        counting(e) {
            var hint = {txt: '+1', cls: ''};
            this.hints.push(hint);
            setTimeout(() => {
                hint.cls = 'move';
                setTimeout(() => {
                    this.hints.$remove(hint);
                }, 401);
            }, 10);
            this.value++;
            this.$emit('counter-updated', this.value);
        },

        entering: function(e) {
            e.target.style['line-height'] = (this.width - 8) + 'px';
        },

        leaving: function(e) {
            e.target.style['line-height'] = (this.width - 12) + 'px';
        }
    }
}
</script>

<style scoped>
.round-button {
    position: relative;
    outline: 0;
    cursor: pointer;
    display: block;
    border: 6px solid #f5f5f5;
    border-radius: 50%;
    color: #f5f5f5;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 0 3px gray;
    font-size: 12px;
    font-weight: bold;
    transition: all 0.1s ease 0s;
}

.round-button:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #BDBDBD;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease 0s;
}

.round-button:active:after {
    opacity: 1;
    transition: 0s;
}

.round-button:hover {
    border: 4px solid #f5f5f5;
}

.hint {
    position: absolute;
    right: -25px;
    top: 0;
    color: #000;
    opacity: 1;
    transition: all 0.4s ease 0s;
}

.hint.move {
    opacity: 0;
    top: -100%;
}
</style>
