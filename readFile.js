
const fs = require('fs');

const fileName = 'name.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error(`'${fileName}' ফাইলটি খুঁজে পাওয়া যায়নি।`);
        } else {
            console.error(`ফাইল পড়ার সময় একটি ত্রুটি হয়েছে: ${err.message}`);
        }
        return;
    }
    
    console.log('ফাইলের বিষয়বস্তু:');
    console.log(data);
});



////////////////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs')
const file = 'name.txt'

fs.readFile(file, 'utf-8', (err, data) => {
    if(err){
        if(err.code === 'UNOENT'){
            console.error('Not found')
        }else{
            console.error('Currapted')
        }
        return;
    }else{
        console.log('This is your information::: ', data)
    }
})
