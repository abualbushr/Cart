let names = ['Habib', 'Abualbushr', 'Ahmed', 'Hind'];
let ages = [25, 54, 23, 32]; 
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
// container.style.backgroundColor = '#8ee4f0';

function elements(names, ages){
    let card = document.createElement('div');
    let title = document.createElement('h1');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // contates
    let head = document.createTextNode(names);
    let ageCont = document.createTextNode(ages);
    img.src = '1.jpg';
    title.appendChild(head);
    age.append(ageCont);
    
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);

    card.style.width = '200px';
    img.style.width = '100%';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    card.style.backgroundColor = '#8ee4f0';
}

for (let i = 0; i < 16; i++){
    elements(names[i], ages[i]);
}
document.write('Your Title'.link('http://www.example.com'));
