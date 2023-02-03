<template>
	<div class="data-table">
		<table id="table" class="display table-bordered table-hover table" cellspacing="0" widht="100%">
	<thead>
		<tr>
		<th>
			<select name="categorias" id="categorias">
				<option v-for="(categoria, index) in categorias" :key="index" v-bind:value="categoria">{{ categoria }}</option>
			</select>
		</th>
		<th>
			<select name="categorias" id="categorias">
				<option v-for="(cantidad, index) in cantidades" :key="index" v-bind:value="cantidad">{{ cantidad }}</option>
			</select>
		</th>
		<th>
			<select name="categorias" id="categorias">
				<option v-for="(precio, index) in precios" :key="index" v-bind:value="precio">{{ precio }}</option>
			</select>
		</th>
		<th>
			<select name="categorias" id="categorias">
				<option v-for="(producto, index) in productos" :key="index" v-bind:value="producto">{{ producto }}</option>
			</select>
		</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="(row, index) in rows" :key="index">
        <td v-for="(data, index) in row" :key="index">{{ data }}</td>
      </tr>
	</tbody>
	</table>
	</div>
</template>

<script>
	export default {
	name: 'TableComponent',
	data (){
		return {
			categorias: ['lácteos','carnes', 'enlatados', 'verduras'],
			cantidades: [2,25,52,100,10,145,289,758,2789,36,85],
			precios: [3500,4500,35200,18000,32800,35200,9900,12360,8900,5600,12500,8450,3200],
			productos: ['Leche colanta','Alpinito x15ml','Quesillo x1000gr','Quesillo x500gr','Yogurt griego','Libra carne res','Libra carne cerdo'],
			search: ''
		}
	},
	props: {
		columns: Array,
		rows: Array,
	},

	components: {
	},

	computed: {
		filteredItems (){
			return this.rows.filter(row => {
				return row.producto.toLowerCase().indexOf(this.search.toLowerCase()) > -1
			})
		}
	},

	methods: {
	}
	}
</script>

<style scoped>
</style>