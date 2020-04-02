export const windConvert = (deg) => {
	switch (Boolean(deg)) {
		case (+deg > 20 && +deg < 70): return 'Северо-Восток';
		case (+deg > 70 && +deg < 110): return 'Восток';
		case (+deg > 110 && +deg < 160): return 'Юго-Восток';
		case (+deg > 160 && +deg < 200): return 'Юг';
		case (+deg > 200 && +deg < 250): return 'Юго-Запад';
		case (+deg > 250 && +deg < 290): return 'Запад';
		case (+deg > 290 && +deg < 340): return 'Северо-Запад';
		case (+deg > 340 && +deg < 20): return 'Север';
		default: return 'Неизвестно';
	}
}

export const pressureConvert = (val) => (val * 0.00750063755419211 * 100).toFixed(2)

export const tempConvert = (temp) => Math.round(Number(temp) - 273.15)

export const getDateObjFromDt = (dt) => {
	const date = new Date(dt * 1000)
	const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
	const shortDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
	const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
	return {
		date: date.getDate(),
		day: days[date.getDay()],
		shortday: shortDays[date.getDay()],
		month: months[date.getMonth()]
	}
}

export const getTimeObjFromDt = (dt) => {
	const date = new Date(dt * 1000)
	return {
		hour: (String(date.getHours())).length > 1 ? date.getHours() : '0' + date.getHours(),
		min: date.getMinutes().length > 1 ? date.getMinutes() : '0' + date.getMinutes(),
	}
}