<template lang="pug">
	#wrapper
		form
			h1 Registration
			
			#fields(v-for='field in fields')
				field(:ref='field.name'
				:type='field.type'
				:name='field.name'
				:placeholder='field.placeholder'
				:pattern='field.pattern'
				:errormsg='field.errormsg'
				:required='field.required')
			
			input#submit-button(type='button' value='Next' @click='submit')
</template>

<script>
	import field from '../components/field.vue'
	
	export default {
		data() {
			return {
				fields: [
					{
						name:        'login',
						type:        'text',
						placeholder: 'Login',
						pattern:     '[\\w\\d]{6,}',
						errormsg:    'Enter your login',
						required:    true
					},
					{
						name:        'email',
						type:        'email',
						placeholder: 'Email',
						pattern:     '[\\w\\d]+@[\\w\\d]+\\.[\\w\\d]+',
						errormsg:    'Enter your email',
						required:    true
					},
					{
						name:        'password',
						type:        'password',
						placeholder: 'Password',
						pattern:     '.{6,}',
						errormsg:    'Enter your password',
						required:    true
					},
					{
						name:        'password-confirmation',
						type:        'password',
						placeholder: 'Password confirmation',
						pattern:     '.{6,}',
						errormsg:    'Confirm your password',
						required:    true
					}
				]
			}
		},
		components: { field },
		methods:    {
			submit() {
				let data = {};
				for (const key in this.$refs) {
					data[key] = this.$refs[key][0].submit();
				}
				
				if (data['password'] !== data['password-confirmation']) {
					this.$refs['password-confirmation'][0].error    = true;
					this.$refs['password-confirmation'][0].errormsg = 'Password does not match';
					data['password-confirmation']                   = false;
				} else {
					data['password-confirmation'] = true;
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
		width 350px
		padding 40px 30px
		box-sizing border-box
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
	
	@media screen and (max-width 370px), screen and (max-height 495px)
		#wrapper
			display block
		
		form
			width 100%
			padding 10px 15px
			box-shadow none
</style>
