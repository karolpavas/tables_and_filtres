<template>
	<div class="container">
		<table class="table">
	<thead class="head">
		<tr>
			<th v-for="(column, index) in columns" :key="index" :title="column">{{ column }}</th>
		</tr>
		<tr>
		<th>
			<select class="selector"
			@change="updateList()"
			name="categorias"
			id="categorias"
			v-model="selectedCategory">
			<option v-for="(categoria, index) in categorias" :key="index" v-bind:value="categoria">{{ categoria }}</option>
		</select>
		</th>
		<th>
			<select  class="selector"
			@change="updateListCant()"
			name="cantidades"
			id="cantidades"
			v-model="selectedCategory">
				<option v-for="(cantidad, index) in cantidades" :key="index" v-bind:value="cantidad">{{ cantidad }}</option>
			</select>
		</th>
		<th>
			<select class="selector"
			@change="updateListPrecios()"
			name="precios"
			id="precios"
			v-model="selectedCategory">
				<option v-for="(precio, index) in precios" :key="index" v-bind:value="precio">{{ precio }}</option>
			</select>
		</th>
		<th>
			<select class="selector"
			@change="updateListProductos()"
			name="productos"
			id="productos"
			v-model="selectedCategory">
				<option v-for="(producto, index) in productos" :key="index" v-bind:value="producto">{{ producto }}</option>
			</select>
		</th>
		</tr>
	</thead>
	<tbody class="body">
		<tr
        v-for="(item, i) in listItems"
        :key="i">
        <td>{{ item.categoria }}</td>
        <td>{{ item.cantidad }}</td>
		<td>{{ item.precio }}</td>
        <td>{{ item.producto }}</td>
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
			categorias: ['Seleccionar Todo','lácteos','carnes', 'enlatados', 'verduras'],
			cantidades: [2,25,52,100,10,145,289,758,2789,36,85],
			precios: [3500,4500,35200,18000,32800,35200,9900,12360,8900,5600,12500,8450,3200],
			productos: ['Leche colanta','Alpinito x15ml','Quesillo x1000gr','Quesillo x500gr','Yogurt griego','Libra carne res','Libra carne cerdo'],

	listItems: this.rows,
    selectedCategory: "Seleccionar Todo",
		}
	},
	mounted(){
	},
	props: {
		columns: Array,
		rows: Array,
	},
	methods: {
		updateList() {
			if(this.selectedCategory === 'Seleccionar Todo'){
				this.listItems = this.rows
			}else {
			const result = this.rows.filter(item => item.categoria === this.selectedCategory);
			this.listItems = result
			}
    },
	updateListCant() {
			const result = this.rows.filter(item => item.cantidad === this.selectedCategory);
			this.listItems = result
    },
	updateListPrecios() {
			const result = this.rows.filter(item => item.precio === this.selectedCategory);
			this.listItems = result
    },
	updateListProductos() {
			const result = this.rows.filter(item => item.producto === this.selectedCategory);
			this.listItems = result
    },
	}
	}
</script>
<style lang="css">
.table {
	margin-left: 390px;
	border-collapse: collapse;
  text-align: center;
  border: 1px solid rgb(100, 120, 20);
}
table,th,td {
    border: 1px solid rgb(100, 120, 20);
}
th,td {
    padding: 10px;
}
.selector {
	border: 2px solid rgb(100, 120, 20);
	background: rgb(235, 253, 162);
	text-align: center;
	font-size: 90%;
}
</style>
