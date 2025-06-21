/*
    Перепиши код з JS у TS
*/

// type User = {
//     id: number,
//     name: string,
//     age: number
// }

// function getUserNames(users: User[]): string[] {
//     return users.map(user => user.name);
// }

// const users = [
//     { id: 1, name: 'Ivan', age: 25 },
//     { id: 2, name: 'Olha', age: 30 },
//     { id: 3, name: 'Petro', age: 22 }
// ];

// console.log(getUserNames(users)); // ['Ivan', 'Olha', 'Petro']

// ==================================

// function formatPrice(price: number, currency: string = 'USD'): string {
//     return `${price.toFixed(2)} ${currency}`;
// }

// console.log(formatPrice(100));
// console.log(formatPrice(50.5, 'EUR'));

// ==================================

// type MessageType = 'success' | 'error' | 'info' | 'warning';

// type Message = {
//     text: string,
//     type: MessageType
// }

// function logMessage(message: Message): void {
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

// type Status = 'canceled' | 'shipped' | 'pending' | 'delivered' | string;

// function handleOrderStatus(status: Status): void {
//     if (status === 'pending') {
//         console.log('Замовлення очікує обробки');
//     } else if (status === 'shipped') {
//         console.log('Замовлення відправлено');
//     } else if (status === 'delivered') {
//         console.log('Замовлення доставлено');
//     } else if (status === 'canceled') {
//         console.log('Замовлення відмінено');
//     } else {
//         console.log('Невідомий статус');
//     }
// }

// handleOrderStatus('shipped');
// handleOrderStatus('canceled');
// handleOrderStatus('done');


// ==================================

// type Points = [number, number];

// function printPoint(point: Points): void {
//     const x = point[0];
//     const y = point[1];
//     console.log(`X: ${x}, Y: ${y}`);
// }

// printPoint([10, 20]);