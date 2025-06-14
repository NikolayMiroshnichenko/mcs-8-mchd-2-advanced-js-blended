/*
    Перепиши код з JS у TS
*/

// function getUserNames(users) {
//   return users.map(user => user.name);
// }

// const users = [
//   { id: 1, name: 'Ivan', age: 25 },
//   { id: 2, name: 'Olha', age: 30 },
//   { id: 3, name: 'Petro', age: 22 }
// ];

// console.log(getUserNames(users)); // ['Ivan', 'Olha', 'Petro']

// ==================================

// function formatPrice(price, currency) {
//     return `${price.toFixed(2)} ${currency || 'USD'}`;
// }

// formatPrice(100);
// formatPrice(50.5, 'EUR');

// ==================================

// function logMessage(message) {
//   if (message.type === 'success') {
//     console.log('✅ ' + message.text);
//   } else if (message.type === 'error') {
//     console.error('❌ ' + message.text);
//   } else if (message.type === 'warning') {
//     console.warn('⚠️ ' + message.text);
//   } else {
//     console.log(message.text);
//   }
// }

// logMessage({ type: 'success', text: 'Операція пройшла успішно' });
// logMessage({ type: 'error', text: 'Щось пішло не так' });
// logMessage({ type: 'info', text: 'Просто інформація' });

// ==================================

// function handleOrderStatus(status) {
//   if (status === 'pending') {
//     console.log('Замовлення очікує обробки');
//   } else if (status === 'shipped') {
//     console.log('Замовлення відправлено');
//   } else if (status === 'delivered') {
//     console.log('Замовлення доставлено');
//   } else {
//     console.log('Невідомий статус');
//   }
// }

// handleOrderStatus('shipped');
// handleOrderStatus('canceled');

// ==================================

// function printPoint(point) {
//   const x = point[0];
//   const y = point[1];
//   console.log(`X: ${x}, Y: ${y}`);
// }

// printPoint([10, 20]);