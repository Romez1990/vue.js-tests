<template lang="pug">
	#wrapper
		form
			h1 Registration
			
			field(ref='login'
			type='text'
			name='login'
			placeholder='Login'
			pattern='[\\w\\d]{6,}'
			errormsg='Enter your login'
			required)
			
			field(ref='email'
			type='email'
			name='email'
			placeholder='Email'
			pattern='[\\w\\d]+@[\\w\\d]+\\.[\\w\\d]+'
			errormsg='Enter your email'
			required)
			
			field(ref='password'
			type='password'
			name='password'
			placeholder='Password'
			pattern='.{6,}'
			errormsg='Enter your password'
			required)
			
			field(ref='password-confirmation'
			type='password'
			name='password-confirmation'
			placeholder='Password confirmation'
			pattern='.{6,}'
			errormsg='Confirm your password'
			required)
			
			input#submit-button(type='button' value='Next' @click='submit')
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
		},
		methods:    {
			submit() {
				let data = {};
				for (const key in this.$refs) {
					data[key] = this.$refs[key].submit();
				}
				console.log(data);
			}
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
	
	@media screen and (max-width 375px), screen and (max-height 487px)
		#wrapper
			display block
		
		form
			padding 10px 15px
			box-shadow none
</style>
