
// const item_price = document.querySelector('.item_price')

// const garbage_coll = document.querySelectorAll('.garbage_coll')
// const garbage_summa = document.querySelectorAll('.garbage_summa')
// const garbageAllColl = document.querySelectorAll('.garbage-all-coll')

const counter = document.querySelector('.cartIcon-span')
const counter2 = document.querySelector('.cartIcon-span2')
const btns = document.querySelectorAll('.cart-box')
let gorbage = document.querySelector('.gorbage')
const menuSvg = document.querySelector('.cartIcon')
const item_title = document.querySelector('.item_title')
const garbage_name = document.querySelector('.garbage_name')




// счетчик товаров
let count = 0;
let count2 = 0;

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		count = count + 1;
		count2 = count2 + 1;
		// console.log(count)
		counter.innerHTML = count
		counter2.innerHTML = count2
	})
})

btns.forEach((btn) => {
	btn.addEventListener('click', () => {

		// let ww = item_title.innerHTML
		// garbage_name.innerHTML = "Вы выбрали " + ww
		// // console.log(garbage_name.innerHTML + ww)
		// // console.log(ww)
	})
})




let tovar_coll = {
	'lacoste': 0,
	'Adidas': 0,
	'Stone-Island': 0
}



//появление корзины
menuSvg.addEventListener('click', function () {
	if (gorbage.style.display === 'none') {
		gorbage.style.display = 'block'
	} else {
		gorbage.style.display = 'none'
	}
});


//счетчик товаров
// let count = 0;
// let count2 = 0;
// btns.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		count=count+1;
// 		count2=count2+1;
// 	counter.innerHTML = count
// 	counter2.innerHTML = count2	
// 	})
// })



//получаем id товара
document.onclick = event => {
	// console.log(event.target.classList)
	if (event.target.classList.contains('cart-link') || event.target.classList.contains('cart-link-text') || event.target.classList.contains('cart-link-icon')) {
		let eee = event.target.dataset.id
		let ww = item_title.innerHTML
		garbage_name.innerHTML = "Вы выбрали " + eee
		console.log(eee)
		// plusfunct(event.target.dataset.id)
	}
}


document.onclick = event => {
	console.log(event.target.classList)
	if (event.target.classList.contains('cart-link') || event.target.classList.contains('cart-link-text') || event.target.classList.contains('cart-link-icon')) {
		console.log(event.target.dataset.price)
		plusfunct(event.target.dataset.id)
	}
}



function renderCart() {
	console.log(tovar_coll)
}


const plusfunct = id => {
	tovar_coll[id]++;
	renderCart();
}




renderCart()
