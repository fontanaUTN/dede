"use strict"

// Seleccion de mesa
const tableContainer = document.getElementById('table-selected');

const tableSelected = (id, name) => {
    const tableId = id;
    const tableName = name;

    if(contentController(tableId, 'table')){
        let tableContent = `
            <p class="client__name">${tableName}</p>
            <input class="client__input" type="hidden" name="tableId" value="${tableId}">
            <input class="client__input" type="hidden" name="drinkId" value="">
            <input class="client__input" type="hidden" name="foodId" value="">
            <input class="client__input" type="hidden" name="drinkName" value="">
            <input class="client__input" type="hidden" name="foodName" value="">
            <input class="client__input" type="hidden" name="drinkPrice" value="">
            <input class="client__input" type="hidden" name="foodPrice" value="">
            <input class="client__input" type="hidden" name="drinkQty" value="">
            <input class="client__input" type="hidden" name="foodQty" value="">
            <a class="client__delete" onclick="contentDelete(${tableId}, 'table')">borrar</a>
        `;

        let span = document.createElement('span');
        span.classList.add('table__content');
        span.id = `table-${tableId}`;

        span.innerHTML = tableContent;
        tableContainer.append(span);
    }
}
// Seleccion de bebida
const drinkContainer = document.getElementById('drink-selected');

const drinkSelected = (drink) => {
    const {id, name, price } = drink;

    if(contentController(id, 'drink')){
        let drinkContent = `
            <p class="client__name">${name}</p>
            <input class="client__input" type="hidden" name="drinkId" value="${id}">
            <input class="client__input" type="hidden" name="drinkName" value="${name}">
            <input class="client__input" type="hidden" name="drinkPrice" value="${price}">
            <input class="client__qty" type="number" name="drinkQty" id="drink-qty" min="0" value="1" data-id="${id}" data-price="${price}">
            <a class="client__delete" onclick="contentDelete(${id},'drink')">borrar</a>
            <p class="client__price" id="price-${id}">${price}</p>
        `;

        let span = document.createElement('span');
        span.classList.add('drink__content');
        span.id = `drink-${id}`;

        span.innerHTML = drinkContent;
        drinkContainer.append(span);

        setProduct();
        priceTotal();
    }
}
// Seleccion de comida
const foodContainer = document.getElementById('food-selected');

const foodSelected = (food) => {
    const {id, name, price } = food;

    if(contentController(id, 'food')){
        let foodContent = `
            <p class="client__name">${name}</p>
            <input class="client__input" type="hidden" name="foodId" value="${id}">
            <input class="client__input" type="hidden" name="foodName" value="${name}">
            <input class="client__input" type="hidden" name="foodPrice" value="${price}">
            <input class="client__qty" type="number" name="foodQty" id="drink-qty" min="0" value="1" data-id="${id}" data-price="${price}">
            <a class="client__delete" onclick="contentDelete(${id},'food')">borrar</a>
            <p class="client__price" id="price-${id}">${price}</p>
        `;

        let span = document.createElement('span');
        span.classList.add('food__content');
        span.id = `food-${id}`;

        span.innerHTML = foodContent;
        foodContainer.append(span);

        setProduct();
        priceTotal();
    }
}
// Ver si el contenido ya estaba seleccinado
const contentController = (id, place) => {
    const content = document.querySelectorAll(`.${place}__content`);
    let ok = true;

    if(content.length == 0){
        ok = true;
    }
    else {
        content.forEach((data) => {
            if(data.id == `${place}-${id}`){
                ok = false;
            }
        })
    }

    return ok;
}
// Eliminar content
const contentDelete = (id, place) => {
    const content = document.querySelectorAll(`.${place}__content`);
    const container = document.getElementById(`${place}-selected`);

    container.innerHTML = '';

    content.forEach((data) => {
        if(data.id != `${place}-${id}`){
            container.append(data);
        }
    })

    priceTotal();
    setProduct();
}

// Actualizar precio al modificar cantidad
const setProduct = () => {
    const productQty = document.querySelectorAll('.client__qty');

    productQty.forEach((product) => {
        product.addEventListener('change', () => {
            const priceContent = document.getElementById(`price-${product.dataset.id}`);
            const price = Number(product.dataset.price) * Number(product.value);

            priceContent.innerHTML = price;

            priceTotal();
        })
    })
}

// Actualizar precio total
const priceTotal = () => {
    let priceUnit = document.querySelectorAll('.client__price');

    let total = 0
    priceUnit.forEach((price) => {
        total += Number(price.textContent);
    })

    document.querySelector('.client__total').innerHTML = `Total: ${total}`;
}

// Controlar envio de datos
const dataMessage = document.querySelector('.send__content');
const containerMessage = document.querySelector('.send');

const clickSendData = () => {
    dataMessage.innerHTML = '';

    const containerTable = document.getElementById('table-selected');
    const containerDrink = document.getElementById('drink-selected');
    const containerFood = document.getElementById('food-selected');

    const tableContent = containerTable.innerHTML;
    const drinkContent = containerDrink.innerHTML;
    const foodContent = containerFood.innerHTML;

    if(tableContent == '' || drinkContent == '' && foodContent == ''){
        // Agregar cartel de no poder enviar datos
    }
    else {
        const tableNumber = containerTable.querySelector('.client__name').textContent;
        const arrDrink = containerDrink.querySelectorAll('.client__name');
        const arrDrinkQty = containerDrink.querySelectorAll('.client__qty');
        const arrFood = containerFood.querySelectorAll('.client__name');
        const arrFoodQty = containerFood.querySelectorAll('.client__qty');
        
        let pTable = document.createElement('p');
        pTable.classList.add('send__text');
        pTable.textContent = tableNumber

        dataMessage.append(pTable)

        for(let i = 0; i < arrDrink.length; i++) {
            let pDrink = document.createElement('p');
            pDrink.classList.add('send__query');
            pDrink.textContent = `x${arrDrinkQty[i].value} ${arrDrink[i].textContent}`;
    
            dataMessage.append(pDrink)
        }

        for(let i = 0; i < arrFood.length; i++) {
            let pFood = document.createElement('p');
            pFood.classList.add('send__query');
            pFood.textContent = `x${arrFoodQty[i].value} ${arrFood[i].textContent}`;
    
            dataMessage.append(pFood)
        }

        containerMessage.style.display = 'flex';
    }
}

const cancelSendData = () => {
    containerMessage.style.display = 'none';
}

const confimerSendData = () => {
    document.querySelector('.main__form').submit();
}