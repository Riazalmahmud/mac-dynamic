






// click memory section and send value in parice using click handler

// 



document.getElementById('memory-basic-8GB').addEventListener('click', function () {

    const memory8GBMemory = document.getElementById('storage-cost');
    const memory8GBMemoryText = memory8GBMemory.innerText;
    const memory8GBMemoryNewPrice = parseInt(memory8GBMemoryText);
    const memory8GBMemoryTotal = memory8GBMemoryNewPrice + 0;
    memory8GBMemory.innerText = memory8GBMemoryTotal;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseFloat(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + memory8GBMemoryTotal;
    totalPrice.innerText = totalProductPrice;

    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + memory8GBMemoryTotal;
    productTotalPrice.innerText = totalProductRate;


})






document.getElementById('memory-Standard-16GB').addEventListener('click', function () {


    const memoryGBMemory = document.getElementById('memory-cost');
    const memory16GBMemoryText = memoryGBMemory.innerText;
    const memory16GBMemoryNewPrice = parseInt(memory16GBMemoryText);
    const memory16GBMemoryTotal = memory16GBMemoryNewPrice + 180;
    memoryGBMemory.innerText = memory16GBMemoryTotal;


    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + memory16GBMemoryTotal;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);



    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + memory16GBMemoryTotal;
    productTotalPrice.innerText = totalProductRate;

})

// click storage section and send value in parice using click handler


document.getElementById('storage-basic-256GB').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    const storageText = storageCost.innerText;
    const storageNewPrice = parseInt(storageText);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + storageNewPrice;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);


    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + storageNewPrice;
    productTotalPrice.innerText = totalProductRate;
})
document.getElementById('storage-Standerd-512GB').addEventListener('click', function () {


    const storage512GBCost = document.getElementById('storage-cost');
    const storage512GBText = storage512GBCost.innerText;
    const storage512GBNewPrice = parseInt(storage512GBText) + 100;
    storage512GBCost.innerText = storage512GBNewPrice;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + storage512GBNewPrice;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);


    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + storage512GBNewPrice;
    productTotalPrice.innerText = totalProductRate;
})
document.getElementById('storage-premium-1TB').addEventListener('click', function () {


    const storage1TBCost = document.getElementById('storage-cost');
    const storage1TBText = storage1TBCost.innerText;
    const storage1TBNewPrice = parseInt(storage1TBText) + 180;
    storage1TBCost.innerText = storage1TBNewPrice;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + storage1TBNewPrice;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);
    console.log('get storage-premium-1TB')



    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + storage1TBNewPrice;
    productTotalPrice.innerText = totalProductRate;
})

// click Choose your delivary option section and send value in parice using click handler

document.getElementById('free-delivary').addEventListener('click', function () {

    const delivaryCost = document.getElementById('delivery-cost');
    const delivaryCostText = delivaryCost.innerText;
    const newDelivery = parseInt(delivaryCostText);
    delivaryCost.innerText = newDelivery;




    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + newDelivery;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);



    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + newDelivery;
    productTotalPrice.innerText = totalProductRate;
})
document.getElementById('paid-delivery').addEventListener('click', function () {

    const paidDelivaryCost = document.getElementById('delivery-cost');
    const paidDelivaryCostText = paidDelivaryCost.innerText;
    const paidNewDelivery = parseInt(paidDelivaryCostText) + 20;
    paidDelivaryCost.innerText = paidNewDelivery;
    console.log('delivary cost 20', paidNewDelivery);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const priviousMemoryPrice = parseInt(totalPriceText);
    const totalProductPrice = priviousMemoryPrice + paidNewDelivery;
    totalPrice.innerText = totalProductPrice;
    console.log(totalProductPrice);



    const productTotalPrice = document.getElementById('product-total-price')
    const productTotalPriceText = productTotalPrice.innerText;
    const updateNewPrice = parseInt(productTotalPriceText);
    const totalProductRate = updateNewPrice + paidNewDelivery;
    productTotalPrice.innerText = totalProductRate;
})