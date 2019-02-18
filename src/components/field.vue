<template lang="pug">
	.field
		label(:class='labelClass' :for='name') {{ placeholder }}
		
		input(ref='input'
		:class='inputClass'
		:id='name'
		:name='name'
		:type='type'
		:pattern='pattern'
		:required='required'
		@input='input'
		@focus='focusin'
		@focusout='focusout')
		
		transition(name='errormsg')
			p(v-show='error') {{ errormsg }}
</template>

<script>
	export default {
		props:    {
			type:        {
				type:     String,
				required: true
			},
			name:        {
				type:     String,
				required: true
			},
			placeholder: {
				type:    String,
				default: ''
			},
			pattern:     {
				type:    String,
				default: ''
			},
			errormsg:    {
				type:    String,
				default: ''
			},
			required:    {
				type:    Boolean,
				default: false
			}
		},
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
				this.error  = false;
			},
			focusout() {
				this.active = false;
				this.error  = !this.check();
			},
			check() {
				return this.$refs.input.checkValidity();
			},
			submit() {
				if (!this.check()) {
					this.error = true;
					return false;
				}
				
				return this.text;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../components/standard.styl'
	
	normal = #b4b4b4
	active = #0061ff
	error = #ff4c22
	label-anim-time = 0.25s
	error-anim-time = 0.4s
	
	.field
		position relative
		padding 20px 0 30px
	
	label, input
		font-size 18px
	
	label
		color normal
		padding 0 7px 10px
		position absolute
		top 24px
		transition label-anim-time ease-in-out
		transition-property top, color, font-size
	
	.label-colored
		color active !important
	
	.label-raised
		top 0 !important
		font-size 15px
	
	input
		padding 4px 7px
		box-sizing border-box
		box-shadow 0 0 0 0.7px normal
		border none
		border-radius 5px
		width 100%
		transition box-shadow error-anim-time ease-in-out
	
	.input-active
		box-shadow 0 0 0 0.8px active !important
	
	.input-error
		//box-shadow 0 0 8px 2px error !important
		box-shadow 0 0 0 1px error, 0 0 10px error !important
	
	p
		color error
		font-size 14px
		padding 7px 7px
		position absolute
	
	.errormsg-enter-active, .errormsg-leave-active
		transition opacity error-anim-time ease-in-out
	
	.errormsg-enter, .errormsg-leave-to
		opacity 0
</style>
