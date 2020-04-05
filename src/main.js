
//  генерация разметки

/**
   * сколько карточек отрисовывать
   */
const TASK_COUNT = 3;

import {createSiteMenuTemplate} from './components/menu.js';

import {createFilterTemplate} from './components/filter.js';

import {createBoardTemplate} from '../src/components/board.js';

import {createTaskTemplate, createTaskEditTemplate} from './components/task.js';

import {createLoadMoreButtonTemplate} from './components/button.js';

/**
   * функция рендеринга изображений
   * @param {*} container  - куда будет всталвяться
   * @param {*} template шаблон разметки
   * @param {*} place позицию добавляемого элемента ('beforebegin','beforeend','afterbegin','afterend')
   */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
  /**
   * .main
   */
const siteMainElement = document.querySelector(`.main`);
/**
   * `.main__control` в siteMainElement
   */
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

if (siteHeaderElement) {
  render(siteHeaderElement, createSiteMenuTemplate());
}
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);
// ищем здесь так как реньше они еще не отрисованны
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate(), `afterbegin`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

