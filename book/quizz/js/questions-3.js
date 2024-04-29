let questions = [
    {
      numb: 1,
      question: "Вопрос-1",
      answer: "Знаю",
      options: [
        "Не знаю",
        "Не знаю",
        "Не знаю",
        "Знаю",
      ]
    },
    {
      numb: 2,
      question: "Вопрос-2",
      answer: "Знаю",
      options: [
        "Знаю",
        "Не знаю",
        "Не знаю",
        "Не знаю",
      ]
    },
    {
      numb: 3,
      question: "Вопрос-3",
      answer: "Знаю",
      options: [
        "Не знаю",
        "Не знаю",
        "Не знаю",
        "Знаю",
      ]
    },
    {
      numb: 4,
      question: "Вопрос-4",
      answer: "Знаю",
      options: [
        "Не знаю",
        "Не знаю",
        "Знаю",
        "Не знаю",
      ]
    },
    {
      numb: 5,
      question: "Вопрос - 5",
      answer: "Знаю",
      options: [
        "Знаю",
        "Не знаю",
        "Не знаю",
        "Не знаю",
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
  