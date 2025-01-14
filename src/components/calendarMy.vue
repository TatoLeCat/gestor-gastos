<template>

<div class="datepicker">
	<div class="datepicker-top">
		<div class="month-selector">
			<button class="arrow" @click="previusMonth()"><i class="pi pi-chevron-left"></i></button>
			<span class="month-name">{{ curMonth }} {{ year }}</span>
			<button class="arrow" @click="nextMonth()"><i class="pi pi-chevron-right"></i></button>
		</div>
	</div>
	<div class="datepicker-calendar">
		<!-- HAY QUE AGREGAR ESTILOS PARA NO ROMPER TANTO EL CALENDARIO	-->
		<span class="day" v-for="day in days" :key="day"> {{ day }}</span>
		<div v-for="lastdays in lastMonthday" :key="lastdays">
			<button class="date faded" disabled>{{ lastdays }}</button>
			<!-- span>algo ira aqui</span-->
		</div>
		<div v-for="currentdays in currentMonthDay" :key="currentdays">
			<button class="date" v-if="currentdays != currentday">{{ currentdays }}</button>
			<button class="date today current-day" v-else>{{ currentdays }}</button>
			<!-- span>algo ira aqui</span-->
		</div>
		<div v-for="nextdays in nextMonthday" :key="nextdays">
			<button class="date faded" disabled>{{ nextdays }}</button>
			<!-- span>algo ira aqui</span -->
		</div>
	</div>
</div>
</template>

<script setup>
let days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
let currentday = date.getDate();


let curMonth = months[month];
let dayone = new Date(year, month, 1).getDay();
let lastdate = new Date(year, month + 1, 0).getDate();
let dayend = new Date(year, month, lastdate).getDay();
let monthlastdate = new Date(year, month, 0).getDate();
let lastMonthday =[];
let nextMonthday = 0;
let currentMonthDay = [];


	for (let i = dayone; i > 1; i--) {
		lastMonthday.push(monthlastdate - i + 1);
	}
	for (let i = dayend; i < 7; i++) {
		nextMonthday += 1;
	}
	for (let i = 1; i <= lastdate; i++) {
		currentMonthDay.push(i);
	}


function previusMonth() {
	month -= 1;
	if (month < 0) {
		month = 11;
		year -= 1;
		curMonth = months[month];
	}
	date = new Date(year, month, new Date().getDate());
	year = date.getFullYear();
	month = date.getMonth();
	
}



function nextMonth() {
	month += 1;
	if (month > 11) {
		month = 0;
		year += 1;
	}
	curMonth = months[month];
	date = new Date(year, month, new Date().getDate());
	year = date.getFullYear();
	month = date.getMonth();
	
}
</script>