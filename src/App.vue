<template>

<header>

	<nav>
    	<router-link to="/" :class="{ 'nav-active': currentRoutePath === '/' }">Accueil</router-link>
  	</nav>

</header>

	<router-view />

</template>


<script lang="ts">

import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({

	name: 'AppHeader',
	setup() {
		const route = useRoute();
		const currentRoutePath = computed(() => route.path);

		return {
			currentRoutePath,
		};
	},
});

</script>


<style lang="scss">

@import "src/styles/app.scss";

</style>
