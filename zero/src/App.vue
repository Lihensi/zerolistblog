<template>
<div id="app">
  <!-- <div id="app" v-on:mousedown.left="createLoves($event)" v-on:mouseup="removeSmallHert"> -->
<!-- <background ref="background"></background>	 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import background from '@/components/background'
export default {

  name: "App",
  //  components: {background},
		methods: {
			// createLoves(){
			// 	this.$refs.background.createLoves(event)
			// },
			// removeSmallHert(){
			// 	this.$refs.background.removeSmallHert()
			// }
		}
};
</script>
<style>
/* #app{ */
  	/* position: absolute; */
	/* top: 0;
	left: 0;
	width: 100%;
	height: 100%; */
/* } */

</style>
