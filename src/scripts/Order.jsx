const openSelect = () => {
  const selectWrapper = document.querySelector(".order__select-wrapper")
  selectWrapper.classList.add("order__select-wrapper_active")

};

const closeSelect = () => {
  const selectWrapper = document.querySelector(".order__select-wrapper")
  selectWrapper.classList.remove("order__select-wrapper_active")
  
};

export const Order = (totalPriceValue) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() + 1 <10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const deliveryDate = `${day}.${month}`;

  return (
    <div class="order">
      <div class="order__wrapper">
        <h2 class="order__title">Оформить заказ</h2>

        <form id="order" class="order__form">
          <fieldset class="order__fieldset">
              <legend class="order__legend">Данные заказчика</legend>

              <div class="order__input-group">
                <input class="order__input" type="text" name="name-buyer" placeholder="Имя"/>
                <input class="order__input" type="text" name="phone-buyer" placeholder="Телефон"/>
              </div>
          </fieldset>

          <fieldset class="order__fieldset">
            <legend class="order__legend">Данные получателя</legend>

            <div class="order__input-group">
              <input class="order__input" type="text" name="name-recip" placeholder="Имя"/>
              <input class="order__input" type="text" name="phone-recip" placeholder="Телефон"/>
            </div>
        </fieldset>

        <fieldset class="order__fieldset">
          <legend class="order__legend">Адрес</legend>

          <div class="order__input-group">
            <input class="order__input" type="text" placeholder="Улица" name="street"/>
            <input class="order__input order__input_min" type="text" placeholder="Дом" name="house"/>
            <input class="order__input order__input_min" type="text" placeholder="Квартира" name="apartment"/>
          </div>
      </fieldset>

          <fieldset class="order__fieldset">
            <div class="order__payment">
              <label class="order__label-radio">Оплата онлайн
                <input class="order__radio" 
                type="radio" 
                name="payment-online" 
                value="true" 
                checked/>
              </label>
            </div>

            <div class="order__delivery">
              <label for="delivery">Доставка {deliveryDate}</label>
              <input type="hidden" name="delivery-date" value={deliveryDate}/>
              
              <div class="order__select-wrapper">
                <select name="delivery-time" id="delivery" class="order__select"
                onFocus={openSelect}
                onBlur={closeSelect}
                >
                  <option value="9-12">с 9:00 до 12:00</option>
                  <option value="12-15">с 12:00 до 15:00</option>
                  <option value="15-18">с 15:00 до 18:00</option>
                  <option value="18-21">с 18:00 до 21:00</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
        <div class="order__footer">
          <p class="order__total">{totalPriceValue}&nbsp;₽</p>
          <button class="order__button" type="submit" form="order">Заказать</button>
        </div>
      </div>
      <button class="order__close" type="button">&times;</button>
    </div>
);
};