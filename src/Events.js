import { title } from 'process';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', function () {
        this.remove();
    });
    document.querySelector('body').appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    for (let str of arr) {
        let li = document.createElement('li');
        li.textContent = str;
        li.addEventListener('mouseover', function () {
            this.setAttribute('title', this.textContent);
        });
        ul.appendChild(li);
    }
    return document.querySelector('body').appendChild(ul);
}
/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    var flag = false;
    a.textContent = 'tensor';
    a.setAttribute('href', 'https://tensor.ru/');
    a.addEventListener('click', function (e) {
        if (flag) {
            flag = false;
        } else {
            e.preventDefault();
            this.textContent += ' ' + this.getAttribute('href');
            flag = true;
        }
    });
    return document.querySelector('body').appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    li.addEventListener('click', function () {
        this.textContent += '!';
    });
    ul.appendChild(li);
    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', function () {
        let li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', function () {
            this.textContent += '!';
        });
        ul.appendChild(li);
    });

    document.querySelector('body').appendChild(ul);
    document.querySelector('body').appendChild(button);
}
