const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        Product.fetchAll(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), err => {
                if (err) {
                    console.error('Error writing file:', err);
                }
            });
        });
    }

    static fetchAll(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                callback([]);
            } else {
                callback(JSON.parse(fileContent));
            }
        });
    }
};
