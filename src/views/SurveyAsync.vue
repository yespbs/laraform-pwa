<template>
  <div class="survey">
	<h1>This is async survey page</h1>
	<MyAsyncForm/>
  </div>
</template>
<script>

	import Vue from 'vue'
	// import Laraform from 'laraform' // <- Community package
	import Laraform from '@laraform/laraform' // <- Preimum package

	Vue.component('MyAsyncForm', function (resolve) {
		setTimeout(function () {
			// Pass the component definition to the resolve callback
			resolve({
				mixins: [Laraform],
				data: function () {
					return {
						endpoint: '/survey',
						schema: {
							firstname: {
								type: 'text',
								label: 'First name',
								placeholder: 'eg. John',
								rules: 'required'
							},
							lastname: {
								type: 'text',
								label: 'Last name',
								placeholder: 'eg. Doe',
							},
							email: {
								type: 'text',
								inputType: 'email',
								label: 'Email address',
								placeholder: 'eg. john@doe.com',
								rules: 'required'
							},
						},
						buttons: [
							{
								label: 'Submit',
								class: 'btn-primary'
							}
						]
					}
				},
				created() {
					console.log('created');

					// laraform event fails
					this.on('submit', () => {
						alert('Submission process started')
					});

					this.on('response', (res) => {
						if( res.status == 'success' ){
							alert(res.message)
						}
					});
				},
				methods: {
					submit() {
						// implement custom solution
						console.log('custom submit logic')
					}
				}	
				//template: '<div>I am async!</div>'
			})
		}, 1000);
	});

	export default {
		name: 'SurveyAsync',
	}
</script>
