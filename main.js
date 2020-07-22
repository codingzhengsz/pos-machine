function printReceipt(barcodes) {
    let cartItems = countCartItem(barcodes);
    let cartItemDetails = getItemDetails(cartItems);
    let cartItemDetailsWithTotalPrice = calculateTotalPriceOfEachItem(cartItemDetails);
    let totalPrice = calculateTotalPrice(cartItemDetailsWithTotalPrice);
    let receipt = generateReceipt(cartItemDetailsWithTotalPrice, totalPrice);
    printReceipt(receipt);
}

function countCartItem(barcodes) {
    let barcodeMap = new Map();
    for (let barcode of barcodes) {
        if (barcodeMap.has(barcode)) {
            barcodeMap.set(barcode, barcodeMap.get(barcode) + 1)
        } else {
            barcodeMap.set(barcode, 1)
        }
    }
    let result = [...barcodeMap];
    let cartItems = [];
    for (let item of result) {
        let obj = {};
        obj['barcode'] = item[0];
        obj['quantity'] = item[1];
        cartItems.push(obj);
    }
    return cartItems;
}

function getItemDetails(cartItems) {
    let data = getItemDetailsInfos();
    for (let i = 0; i < data.length; i++) {
        for (let j = 0 ;j <  cartItems.length; j++) {
            if (data[i].barcode === cartItems[j].barcode) {
                cartItems[j]['itemName'] = data[i].name;
                cartItems[j]['price'] = data[i].price;
            }
        }
    }
    return cartItems;
}

function getItemDetailsInfos() {
    return require('./data')
}

function calculateTotalPriceOfEachItem(cartItemDetails) {
    for (let detail of cartItemDetails) {
        detail['totalPrice'] = detail['quantity'] * detail['price']
    }
    return cartItemDetails;
}

function calculateTotalPrice(cartItemDetailsWithTotalPrice) {
    let totalPrice = 0;
    for (let item of cartItemDetailsWithTotalPrice) {
        totalPrice += item['totalPrice']
    }
    return totalPrice
}

function generateReceipt(cartItemDetailsWithTotalPrice, totalPrice) {
    let result = '\n***<store earning no money>Receipt ***\n';
    for (let item of cartItemDetailsWithTotalPrice) {
        result += generateReceiptItem(item);
    }
    result += '----------------------\n'
    result += 'Total: ' + totalPrice + ' (yuan)\n'
    result += '**********************'
    return result;
}

function generateReceiptItem(cartItem) {
    return `Name: ${cartItem.itemName}, Quantity: ${cartItem.quantity}, Unit price: ${cartItem.price} (yuan), Subtotal: ${cartItem.totalPrice} (yuan)\n`
}

function printReceipt(receipt) {
    console.log(receipt)
}

printReceipt([
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
])


module.exports = {
    printReceipt
};