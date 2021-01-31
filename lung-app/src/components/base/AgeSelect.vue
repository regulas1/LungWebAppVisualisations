<!-- *************************************************************************
	TEMPLATE
	************************************************************************ -->  
<template>
    <div class="control number">
        <button class="decrement-button" :disabled="decrementDisabled" @click="decrement">−</button>
        <button class="increment-button" :disabled="incrementDisabled" @click="increment">+</button>
        <p>Age is: {{currentValue}}</p>
        <input
            type="number"
            :disabled="inputDisabled"
            :min="min"
            v-model.number="currentValue"
            @blur="currentValue"
            @keydown.enter="currentValue"
            @keydown.up.prevent="increment"
            @keydown.down.prevent="decrement"
        />
        
    </div>
</template>

<!-- *************************************************************************
	   SCRIPT
	  ************************************************************************ --> 

<script>
export default {
    name: "BaseAgeSelect",
    props: {
        disabled: Boolean,
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            required: true
        },
    },

    data: function() {
        return {
            currentValue: this.currentValue,
            decrementDisabled: false,
            incrementDisabled: false,
            inputDisabled: false,

        }
    },

    watch: {
        value(val) {
            this.currentValue = val
        }
    },

    methods: {
        increment() {
            if (this.disabled || this.incrementDisabled) {
                return
            }

            let newVal = this.currentValue + 1
            this.decrementDisabled = false

            this._updateValue(newVal)
        },
        decrement() {
            if (this.disabled || this.decrementDisabled) {
                return
            }

            let newVal = this.currentValue + -1
            this.incrementDisabled = false

            this._updateValue(newVal)
        },
        _updateValue(newVal) {
            const oldVal = this.currentValue

            if (oldVal === newVal || typeof this.value !== 'number') {
                return
            }
            if (newVal <= this.min) {
                newVal = this.min
                this.decrementDisabled = true
            }
            this.currentValue = newVal
            //this.$emit('input', this.currentValue)
        }
    },

    mounted() {
        if (this.value == this.min) {
            this.decrementDisabled = true
        }
    }
}
</script>

<!-- *************************************************************************
	   STYLE
	  ************************************************************************ --> 
<style scoped>
.control.number {
  display: inline-flex;
  position: relative;
  max-width: 200px;
}
.control.number input {
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 3px;
  font-size: 15px;
  height: 40px;
  padding-left: 8px;
  padding-right: 100px;
  text-align: left;
  width: 100%;
  -moz-appearance: textfield;
}
.control.number input::-webkit-inner-spin-button, .control.number input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.control.number input:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #0288d1;
}
.control.number button {
  background-color: #fff;
  border: 0px solid #e9ecef;
  border-left-width: 1px;
  border-radius: 0;
  color: #343d46;
  cursor: pointer;
  flex: 0 1;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  top: 2px;
  text-align: center;
  width: 40px;
  height: 37px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 5;
  transition-duration: 0.4s;
}
.control.number button:active, .control.number button:hover {
  border-color: #0288d1;
  color: #0288d1;
}
.control.number button:focus {
  outline: none;
}
.control.number button:hover ~ .input {
  border: 1px solid #0288d1;
}
.control.number button:disabled, .control.number button.is-disabled {
  border-color: #e9ecef;
  color: #adb5bd;
  opacity: 1;
}
.control.number .increment-button {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  right: 4px;
}
.control.number .decrement-button {
  right: 48px;
}
</style>