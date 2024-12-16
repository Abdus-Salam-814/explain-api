const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};

// JavaScript Object Notation (JSON)
console.log(user);
const strigified = JSON.stringify(user);

console.log(strigified);

const shop ={
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    product: ['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 4500,
    isOpen: true,
    isNew: false
};

console.log(shop)

const shopString = JSON.stringify(shop);

console.log(shopString);

const shopObject = JSON.parse(shopString);

console.log(shopObject);

