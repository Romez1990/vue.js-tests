<template>
	<div class="field">
		<label :for="name" :class="labelClass">{{ placeholder }}</label>
		<input :type="type" :name="name" :id="name" :class="inputClass" @input="input" @focus="focusin" @focusout="focusout">
		<transition name="errormsg">
			<p v-show="error">{{ errormsg || ' ' }}</p>
		</transition>
	</div>
</template>

<style lang="stylus" scoped>
	@import '../components/standard.styl'
	
	.field {
		position: relative;
		padding-top: 20px;
	}
	
	label, input {
		font-size: 18px;
	}
	
	normal = #b4b4b4
	active = #0061ff
	error = #ff4c22
	
	label {
		color: normal;
		padding: 0 7px 10px;
		position: absolute;
		top: 24px;
		transition: 0.25s ease-in-out;
		transition-property: top, color, font-size;
	}
	
	.label-colored {
		color: active !important;
	}
	
	.label-raised {
		top: 0 !important;
		font-size: 15px;
	}
	
	input {
		padding: 4px 7px;
		box-sizing: border-box;
		box-shadow: 0 0 0 0.7px normal;
		border: none;
		border-radius: 5px;
		width: 100%;
	}
	
	.input-active {
		box-shadow: 0 0 0 0.8px active !important;
	}
	
	.input-error {
		box-shadow: 0 0 0 1px error, 0 0 10px error !important;
		//box-shadow: 0 0 8px 2px error !important;
	}
	
	p {
		color: error;
		font-size: 14px;
		padding: 7px 7px;
		display: block !important;
		opacity: 0;
	}
	
	.errormsg-enter-active,
	.errormsg-leave-active {
		transition: opacity 0.625s;
	}
	
	.errormsg-leave,
	.errormsg-enter-to {
		opacity: 1;
	}
</style>

<script>
	export default {
		props:    ['type', 'name', 'placeholder', 'errormsg'],
		data() {
			return {
				text:   '',
				active: false,
				error:  false
			}
		},
		computed: {
			labelClass() {
				return {
					'label-colored': this.active,
					'label-raised':  this.active || this.text
				};
			},
			inputClass() {
				return {
					'input-error':  this.error,
					'input-active': this.active
				};
			}
		},
		methods:  {
			input(e) {
				this.text = e.target.value;
			},
			focusin() {
				this.active = true;
				this.offError();
			},
			focusout() {
				this.active = false;
				if (!this.check())
					this.onError();
			},
			onError() {
				this.error = true;
			},
			offError() {
				this.error = false;
			},
			check() {
				return this.text;
			}
		}
	}
</script>
