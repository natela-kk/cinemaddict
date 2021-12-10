import AbctractView from './abstract-view.js';

const ACTIVE_CLASS = 'main-navigation__item--active';

const createMenuTemplate = () => (
  `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">0</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">0</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">0</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>
</section>`
);

const titlesList = {
  all: 'There are no movies in our database',
  watchlist: 'There are no movies to watch now',
  history: 'There are no watched movies now',
  favorites: 'There are no favorite movies now',
};

export default class MenuView extends AbctractView{

  get template() {
    return createMenuTemplate();
  }

  setActiveFilter(elementToChange) {
    const changeElement = elementToChange instanceof AbctractView ? elementToChange.element : elementToChange;

    this.element.querySelector(`.${ACTIVE_CLASS}`).classList.remove(ACTIVE_CLASS);
    const locationHash = window.location.hash.split('#')[1];
    if (locationHash) {
      changeElement.textContent = titlesList[locationHash];
      this.element.querySelector(`a[href="#${locationHash}"`).classList.add(ACTIVE_CLASS);
    }
  }

  setEmptyMessage(elementToChange) {
    const changeElement = elementToChange instanceof AbctractView ? elementToChange.element : elementToChange;

    const filterList = this.element.querySelector('.main-navigation__items');
    let currentFilter = filterList.querySelector(`.${ACTIVE_CLASS}`);
    filterList.addEventListener('click', (evt) => {
      currentFilter.classList.remove(ACTIVE_CLASS);
      currentFilter = evt.target.closest('a');
      currentFilter.classList.add(ACTIVE_CLASS);
      this.changeEmtyTitle(currentFilter, changeElement);
    });
  }

  changeEmtyTitle(filter, elementToChange) {
    elementToChange.textContent = titlesList[filter.href.split('#')[1]];
  }

}
