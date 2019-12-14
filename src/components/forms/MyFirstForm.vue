<template>
	<laraform :form="storedSchema"></laraform>
</template>
<script>
	// import Laraform from 'laraform' // <- Community package
	import Laraform from '@laraform/laraform' // <- Preimum package

	export default {
		mixins: [Laraform],
		name: 'MyFirstForm',
		data: () => ({
			storedSchema: {
				schema: {
					hello_world: {
						type: 'text',
						label: 'Hello',
						default: 'World',
					},
				},	
				buttons: [
					{
						label: 'Submit',
						class: 'btn-primary',
						disabled() {
							// this.form$ is the root Laraform component
							return this.form$.disabled
						}
					},
					{
						label: 'Reset',
						class: 'btn-light',
						prevent: true,
						onClick() {
							this.form$.reset()
						} 
					}
				]
			}	
		}),
		created() {
			console.log('created');
			// laraform event fails
			this.on('submit', () => {
				alert('Submission process started')
			})
		},
		methods: {
			submit() {
				// implement custom solution
				console.log('custom submit logic')
			}
		}
	}
</script>


