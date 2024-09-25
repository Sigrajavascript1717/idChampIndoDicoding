const databaseStudent=[]

function programstudent(a,b,c) {
    const newStudent = {
        name: a,
        age: b,
        major: c
    };
    databaseStudent.push(newStudent)
    
}
programstudent("ega",24,"informatika")

console.log(databaseStudent)


const products = [
    { name: "Laptop", price: 15000000, stock: 10 },
    { name: "Smartphone", price: 8000000, stock: 15 },
    { name: "Headphones", price: 500000, stock: 25 },
    { name: "Keyboard", price: 300000, stock: 30 },
];


function addProduct(nama,price,stock) {
    const listProduct={
        name:nama,
        price:price,
        stock:stock,
    }
    products.push(listProduct)
}
addProduct("iphone 16 pro",177777777,99)
console.log(products)