import { RenderPosition } from '../view/render-data';
import AbctractView from '../view/abstract-view';

export const renderElement = (container, element, place) => {
  const parent = container instanceof AbctractView ? container.element : container;
  const child = element instanceof AbctractView ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;
    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};