import React, { useState } from 'react';
import { MenuState } from '../Contexts/MenuContext';
import { SingleMenu } from '../Components/SingleMenu';

export const Menu = () => {
  const [filters, setFilters] = useState({
    inputValue: null,
    checkBoxes: [],
    sort: null,
  });

  const { menuData } = MenuState();

  const { inputValue, checkBoxes, sort } = filters;

  const handleInput = (e) => {
    setFilters((prev) => ({ ...prev, inputValue: e.target.value }));
  };

  const handleCheckBoxChange = (e) => {
    const { value } = e.target;
    const updatedChecboxes = checkBoxes.includes(value)
      ? checkBoxes.filter((item) => item !== value)
      : [...checkBoxes, value];

    setFilters((prev) => ({ ...prev, checkBoxes: updatedChecboxes }));
  };

  const handleSortByPrice = (sortBy) => {
    setFilters((prev) => ({ ...prev, sort: sortBy }));
  };

  // Conditions

  const filteredDataBySearch = inputValue
    ? menuData.filter(({ name }) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : menuData;

  const filteredDataByCheckboxes =
    checkBoxes.length > 0
      ? filteredDataBySearch.filter((item) =>
          checkBoxes.some((elem) => item[elem])
        )
      : filteredDataBySearch;

  //elem "isVeg" -> item.isVeg ? true : false | True
  //elem "isSpicy" -> item.isSpicy ? true : false | false

  // If 2 checkboxes are checked

  // for 1st object
  // 1. true 2. false -> true (some) | one condition should be true

  // for 1st object
  // 1. true 2. false -> false (every) | all conditions should be true

  const filteredDataBySort = sort
    ? filteredDataByCheckboxes.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      )
    : filteredDataByCheckboxes;

  return (
    <>
      <div>
        <h2>Filters: </h2>
        <div>
          <label>
            <input type="text" onChange={handleInput} value={inputValue} />
          </label>

          <label>
            <input
              type="checkbox"
              onChange={handleCheckBoxChange}
              value="is_vegetarian"
              checked={checkBoxes.includes('is_vegetarian')}
            />
            Veg
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleCheckBoxChange}
              value="is_spicy"
              checked={checkBoxes.includes('is_spicy')}
            />
            Spicy
          </label>

          <label>
            <input
              type="radio"
              onChange={() => handleSortByPrice('lowToHigh')}
              name={'sorts'}
            />
            Sort (price) Low To High
          </label>
          <label>
            <input
              type="radio"
              onChange={() => handleSortByPrice('highToLow')}
              name={'sorts'}
            />
            Sort (price) High To Low
          </label>
        </div>
      </div>

      <ul>
        {filteredDataBySort?.map((menu) => (
          <SingleMenu menu={menu} key={menu.id} addBtn />
        ))}
      </ul>
    </>
  );
};
