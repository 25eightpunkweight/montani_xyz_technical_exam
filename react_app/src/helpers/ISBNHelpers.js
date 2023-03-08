export const isValidISBN13 = (isbn13Digit) => {
    // if (!isbn13Digit.startsWith('978-')){ //get outta here already
    //     return false;
    // }

    let total = 0;
    isbn13Digit.split('-').join('').split('').forEach((num, idx)=>{
        total = total + (num * (1+(idx%2)+(idx%2)));
    });

    return total % 10 == 0
}

export const isValidISBN10 = (isbn10Digit) => {
    let total = 0;

    isbn10Digit.split('-').join('').split('').forEach((num, idx)=>{
        total = total + (num * (10 - idx));
    });

    return total % 11 == 0;
}

export const convert = (isbn) => {
    let total = 0;
    if(isValidISBN10(isbn)){ //input is a valid ISBN-10 and we want to convert it to ISBN-13
        isbn = ('978-' + isbn.slice(0, -2)) //prepend 978- then remove the last digit

        let isbnArray = isbn.split('-').join('').split('');
        
        isbnArray.forEach((num, idx)=>{
            total = total + (num * (1+(idx%2)+(idx%2))); 
        })
        
        let lastDigit = 10 - (total % 10);
        return [isbn, lastDigit].join('-');
    } else if (isValidISBN13(isbn)){ //input is a valid ISBN-10 and we want to convert it to ISBN-13
        isbn = isbn.slice(3, (isbn.length-2)); //remove 978- then remove the last digit

        let isbnArray = isbn.split('-').join('').split('');

        isbnArray.forEach((num, idx)=>{
            total = total + (num * (10 - idx));
        });

        let lastDigit = 11 - (total % 11);
        if (lastDigit == '10'){
            return [isbn, 'X'].join('-')
        } else {
            return [isbn, lastDigit].join('-')
        }
    } else {
        return 'input is not a valid ISBN'
    }
}