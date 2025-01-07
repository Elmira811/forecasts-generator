const button = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast h1');
const percent = document.querySelector('.current-forecast p');
const forecastItem = document.querySelector('#forecast-item');
const container = document.querySelector('.forecasts');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function makeMyPrediction(prediction, probability) {
  if(!prediction || !probability) {
    return;
  }

  const myPrediction = forecastItem.content.cloneNode(true);

  myPrediction.querySelector('.forecast-item h3').textContent = prediction;
  myPrediction.querySelector('.forecast-item p').textContent = probability;

  container.prepend(myPrediction);
}

button.addEventListener('click', function() {
  let predictionNumber = getRandomInt(1, 5);
  let predictionText = "";

  switch(predictionNumber) {
    case 1:
      predictionText = "Сегодня произойдет приятное знакомство";
      break;
    case 2:
      predictionText = "В этом месяце тебя ждет дальняя дорога";
      break;
    case 3:
      predictionText = "Найдешь то, что потеряла";
      break;
    case 4:
      predictionText = "Тебя ждет приятный сюрприз от близких";
      break;
    case 5:
      predictionText = "Скоро исполнится заветное желание";
      break;
  }

  makeMyPrediction(currentForecast.textContent, percent.textContent);
  
  currentForecast.textContent = predictionText;

  percent.textContent = `Вероятность: ${getRandomInt(0, 100)}%`;
})



/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
