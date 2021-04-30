let List = ['model car', 'bananas', 'plate', 'outlet', 'conditioner', 'plastic fork', 'zipper', 'piano', 'packing peanuts', 'street lights'];

ul = document.createElement('ul');

document.querySelector('.list').appendChild(ul);

List.forEach(item => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += item;
});

function addToList() {
    let li = document.createElement('li');
    ul.appendChild(li);
    
    var item = document.querySelector('.input').value;

    li.innerHTML += item;

    document.querySelector('.input').value = '';
}
