let numbers_list = {
    en: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ],
    fa :[
        '۰',
        '۱',
        '۲',
        '۳',
        '۴',
        '۵',
        '۶',
        '۷',
        '۸',
        '۹',
    ],
    arabic :[
        '٠',
        '١',
        '٢',
        '٣',
        '٤',
        '٥',
        '٦',
        '٧',
        '٨',
        '٩',
    ]
}

let excludeJson = (data, exclude_field) => (Object.keys(data)
    .filter(key => exclude_field != key)
    .map(item_name => data[item_name]
    ))

let number = (text, destination) => {
    let result_text
    if (!text || !Object.keys(numbers_list).includes(destination))
        return text
    else{
        result_text = text
        let ideal_numbers = numbers_list[destination]
        excludeJson(numebrs_list, destination).map(numbers => {
            numbers.map((num, index) => {
                result_text = result_text.replace(new RegExp(num, 'g'), ideal_numbers[index])
            })
        })
    }
    return result_text
}