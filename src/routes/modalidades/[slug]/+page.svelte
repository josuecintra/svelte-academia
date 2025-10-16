<script>
    import { page } from '$app/state';
    import { modalidades } from '$lib/stores';

	let modalidade = page.params.slug;

    let data = $modalidades.find(m => m.slug === modalidade);
    
    console.log(data);

</script>

<h1>Slug id = {modalidade}</h1>