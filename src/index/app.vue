<template lang="pug">
	#wrapper
		form
			h1 Registration
			
			field(type='text',
			name='login',
			placeholder='Login',
			pattern='[\\w\\d]{6,}',
			required='true',
			errormsg='Enter your login')
			
			field(type='password',
			name='password',
			placeholder='Password',
			pattern='.{6,}',
			required='true',
			errormsg='Enter your password')
			
			field(type='password',
			name='password-confirmation',
			placeholder='Password confirmation',
			pattern='.{6,}',
			required='true',
			errormsg='Confirm your password')
			
			input#submit-button(type='button', value='Next')
</template>

<script>
	import field from '../components/field.vue';
	
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js app'
			}
		},
		components: {
			field: field
		}
	}
</script>

<style lang="stylus">
	@import '../components/standard.styl'
	
	body
		font-family sans-serif
	
	#wrapper
		height 100vh
		display flex
		justify-content center
		align-items center
	
	form
		padding 40px 30px
		border-radius 5px
		box-shadow 1px 2px 5px 2px rgba(0, 0, 0, 0.22)
		display flex
		flex-direction column
		
		h1
			margin-bottom 5px
		
		#submit-button
			nice-button(#08f, #eee, #023)
			margin-top 4px
			align-self flex-end
	
	@media screen and (max-width 368px)
		#wrapper
			display block
		
		form
			padding 10px 15px
			box-shadow none
	
	@media screen and (max-height 430px)
		#wrapper
			display block
		
		form
			padding 10px 15px
			box-shadow none
</style>
