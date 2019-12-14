<template>
  <div class="survey">
	<h1>This is survey page</h1>
	<MyFirstForm/>	
  </div>
</template>
<script>
	// @ is an alias to /src
	import MyFirstForm from '@/components/forms/MyFirstForm.vue'	

	export default {
		name: 'Survey',		
		components: {
			MyFirstForm    
		}		
	}
</script>
