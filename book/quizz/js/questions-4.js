let questions = [
    {
      numb: 1,
      question: "Какую роль играет SQL в веб-разработке?",
      answer: "Добавление динамического поведения и управление данными в базах данных.",
      options: [
        "Управление структурой базы данных.",
        "Работа с графическим интерфейсом пользователя.",
        "Создание анимаций на веб-страницах.",
        "Добавление динамического поведения и управление данными в базах данных.",
      ]
    },
    {
      numb: 2,
      question: "Что представляет собой SQL?",
      answer: "Язык программирования для работы с реляционными базами данных.",
      options: [
        "Язык программирования для работы с реляционными базами данных.",
        "Формат файлов для хранения изображений.",
        "Программа для создания анимаций.",
        "Язык разметки для веб-страниц.",
      ]
    },
    {
      numb: 3,
      question: "Какие операции можно выполнить с помощью SQL?",
      answer: "Вставка, обновление, удаление и выборка данных.",
      options: [
        "Только отправка электронной почты.",
        "Вставка, обновление, удаление и выборка данных.",
        "Изменение шрифта на веб-странице.",
        "Загрузка файлов на сервер.",
      ]
    },
    {
      numb: 4,
      question: "Какие организации утвердили стандарт SQL?",
      answer: "ISO (International Organization for Standardization) и ANSI (American National Standards Institute).",
      options: [
        "FIA (Federation Internationale de l'Automobile).",
        "ISO (International Organization for Standardization) и ANSI (American National Standards Institute).",
        "NASA (National Aeronautics and Space Administration).",
        "FIFA (Federation Internationale de Football Association).",
      ]
    },
    {
      numb: 5,
      question: "Для чего используется объектная модель документа (DOM) в контексте SQL?",
      answer: "Для манипуляции структурой HTML-документов на веб-странице.",
      options: [
        "Для создания анимаций и эффектов перехода на веб-страницах.",
        "Для манипуляции структурой HTML-документов на веб-странице.",
        "Для отправки запросов на сервер и получения данных.",
        "Для создания баз данных.",
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
  