let questions = [
  {
    numb: 1,
    question: "Что такое HTML?",
    answer: "HTML это то, что используется для создания веб-страниц.",
    options: [
      "HTML это то, что используется для создания веб-страниц.",
      "HTML это сокращение от Хитрый Многофункциональный Язык.",
      "HTML это аббревиатура от Хорошо Текстуализированный Метафайл.",
      "HTML это имя известного программиста.",
      
    ]
  },
  {
    numb: 2,
    question: "Какие основные компоненты включает в себя язык разметки HTML?",
    answer: "Теги, атрибуты и текстовое содержимое.",
    options: [
      "Основные операции математики.",
      "Теги, атрибуты и текстовое содержимое.",
      "Пользовательские функции и классы.",
      "Только изображения и видеофайлы.",
    ]
  },
  {
    numb: 3,
    question: "Для чего используется тег <div> в HTML?",
    answer: "Для создания блочных элементов, которые позволяют группировать и стилизовать содержимое веб-страницы.",
    options: [
      "Для создания ссылок.",
      "Для стилизации текста.",
      "Для создания блочных элементов, которые позволяют группировать и стилизовать содержимое веб-страницы.",
      "Для вставки изображений.",
    ]
  },
  {
    numb: 4,
    question: "Каким образом HTML взаимодействует с CSS и JavaScript?",
    answer: "HTML используется для структурирования содержимого, CSS - для оформления внешнего вида, а JavaScript - для добавления динамического поведения на веб-страницы.",
    options: [
      "HTML, CSS и JavaScript - это три разных языка программирования, каждый из которых выполняет свои уникальные функции.",
      "HTML используется для структурирования содержимого, CSS - для оформления внешнего вида, а JavaScript - для добавления динамического поведения на веб-страницы.",
      "HTML используется для создания баз данных, а CSS и JavaScript - для работы с веб-серверами.",
      "HTML, CSS и JavaScript - это три взаимозаменяемых технологии для создания веб-страниц.",
    ]
  },
  {
    numb: 5,
    question: "Что означает аббревиатура HTML?",
    answer: "Hyper Text Markup Language.",
    options: [
      "Hyper Transfer Markup Language.",
      "Hyper Text Markup Language.",
      "High Tech Markup Language.",
      "Home Transfer Markup Language.",
    ]
  }
];

function optionSelected(answer){
  clearInterval(counter); // остановить счетчик
  clearInterval(counterLine); // остановить счетчик линии
  let userAns = answer.textContent.trim(); // получить выбранный пользователем вариант ответа
  let correcAns = questions[que_count].answer; // получить правильный ответ из массива
  const allOptions = option_list.children.length; // получить количество всех вариантов ответа
  
  if(userAns === correcAns){ // если выбранный пользователем ответ равен правильному ответу из массива
      userScore += 1; // увеличить счет на 1
      answer.classList.add("correct"); // добавить зеленый цвет к выбранному правильному ответу
      answer.insertAdjacentHTML("beforeend", tickIconTag); // добавить значок галочки к выбранному правильному ответу
      console.log("Правильный ответ");
      console.log("Ваши правильные ответы = " + userScore);
  } else {
      answer.classList.add("incorrect"); // добавить красный цвет к выбранному неправильному ответу
      answer.insertAdjacentHTML("beforeend", crossIconTag); // добавить значок крестика к выбранному неправильному ответу
      console.log("Неправильный ответ");

      // Выделить правильный ответ
      for(let i = 0; i < allOptions; i++){
          if(option_list.children[i].textContent.trim() === correcAns){
              option_list.children[i].classList.add("correct");
              option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          }
      }
  }
  
  // Запретить выбор всех вариантов ответа после выбора пользователем одного из них
  for(let i = 0; i < allOptions; i++){
      option_list.children[i].classList.add("disabled");
  }
  
  // Показать кнопку "Далее"
  next_btn.classList.add("show");
}
