"use strict"

const main = document.querySelector('.main');

// DELETE
const sectionDelete = document.querySelector('.delete');
const textContentDelete = document.querySelector('.delete__text');
const confirmerDelete = document.querySelector('.delete__confirmer');

const clientSelectedDelete = (id, order, table) => {
    textContentDelete.innerHTML = `Seguro deseas eliminar la orden de <b>${order}</b> de la mesa <b> ${table}</b>?`;
    sectionDelete.style.display = 'block';
    confirmerDelete.href = `/waitres/order/delete/id=${id}`;

    main.style.filter = 'blur(10px)';
}

const deleteCancel = () => {
    sectionDelete.style.display = 'none';
    main.style.filter = 'none';
}

// DETAILS
const sectionDetails = document.querySelector('.details');
const textContentDetails = document.querySelector('.details__content');

const orderSelectedDetails = (object) => {
    const idOrder = object[0];
    const idTable = object[1];
    const order = object[2];
    const date = object[3];
    const waitres = object[4];
    const cost = object[5];
    const details = object[6];

    textContentDetails.innerHTML = '';

    const elementP = document.createElement('p');
    elementP.classList.add('details__text');
    elementP.innerHTML = `<b>ORDEN Nº ${idOrder}</b>`;
    textContentDetails.append(elementP);

    const elementDate = document.createElement('p');
    elementDate.classList.add('details__text');
    elementDate.innerHTML = date;
    textContentDetails.append(elementDate);

    const elementWaitres = document.createElement('p');
    elementWaitres.classList.add('details__text');
    elementWaitres.innerHTML = `<b>MOZO:</b> ${waitres}`;
    textContentDetails.append(elementWaitres);

    const elementTable = document.createElement('p');
    elementTable.classList.add('details__text');
    elementTable.innerHTML = `Mesa ${idTable}`;
    textContentDetails.append(elementTable);

    const elementOrder = document.createElement('p');
    elementOrder.classList.add('details__text');
    elementOrder.innerHTML = order;
    textContentDetails.append(elementOrder);

    const elementCost = document.createElement('p');
    elementCost.classList.add('details__text');
    elementCost.innerHTML = `$ ${cost}`;
    textContentDetails.append(elementCost);

    const elementDetails = document.createElement('p');
    elementDetails.classList.add('details__text');
    elementDetails.innerHTML = `<b>detalles:</b> ${details}`;
    textContentDetails.append(elementDetails);

    sectionDetails.style.display = 'block';

    main.style.filter = 'blur(10px)';
}

const detailsCancel = () => {
    sectionDetails.style.display = 'none';
    main.style.filter = 'none';
}