function reverseText() {
    let text = prompt(`Введите текс, а мы его переверенем!`);

    text = text.split(" ");
    
    let res = [];
    
    for (let i = 0; i < text.length; i++){
        res.push (text[i].split("").reverse().join(""));  
    }  
    
    return alert(`Вот что у нас получилось: ${res.join(" ")}`);
};
