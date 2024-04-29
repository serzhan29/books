let questions = [
    {
      numb: 1,
      question: "Какую основную роль JavaScript играет в веб-разработке?",
      answer: "Добавление динамического поведения и интерактивности на веб-сайты.",
      options: [
        "Добавление динамического поведения и интерактивности на веб-сайты.",
        "Создание и хранение баз данных.",
        "Управление сетевыми запросами на сервере.",
        "Оптимизация работы сети.",
      ]
    },
    {
      numb: 2,
      question: "Что представляет собой объектная модель документа (DOM) в JavaScript?",
      answer: "Представление HTML-документа в виде древовидной структуры, доступной для манипуляций из JavaScript.",
      options: [
        "Платформу для создания веб-приложений.",
        "Представление HTML-документа в виде древовидной структуры, доступной для манипуляций из JavaScript.",
        "Специальный вид переменной для хранения данных.",
        "Способ защиты от несанкционированного доступа к данным.",
      ]
    },
    {
      numb: 3,
      question: "Какой из перечисленных типов данных отсутствует в JavaScript?",
      answer: "Дата (Date).",
      options: [
        "Число (Number).",
        "Строка (String).",
        "Булево значение (Boolean).",
        "Дата (Date).",
      ]
    },
    {
      numb: 4,
      question: "Что такое асинхронное программирование в JavaScript?",
      answer: "Подход к написанию кода, который позволяет выполнять операции в фоновом режиме, не блокируя основной поток выполнения.",
      options: [
        "Программирование, которое выполняется только во время загрузки страницы.",
        "Подход к написанию кода, который позволяет выполнять операции в фоновом режиме, не блокируя основной поток выполнения.",
        "Способ передачи данных между различными компонентами приложения.",
        "Программирование на стороне сервера.",
      ]
    },
    {
      numb: 5,
      question: "Для чего используются медиа-запросы в контексте JavaScript?",
      answer: "Для изменения стилей и поведения в зависимости от характеристик устройства, таких как ширина экрана и ориентация.",
      options: [
        "Для управления медиа-элементами на веб-странице.",
        "Для изменения стилей и поведения в зависимости от характеристик устройства, таких как ширина экрана и ориентация.",
        "Для создания анимаций и эффектов перехода.",
        "Для отправки запросов на сервер и получения данных.",
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
  