import React from "react";
import { FilterValuesType } from "./App";


type FilterButtonsProps = {
  changeFilter: (value:FilterValuesType) => void
}

const FilterButtons:React.FC<FilterButtonsProps> = ({changeFilter}) => {

const handlerFilters= (value:FilterValuesType) => (e:React.MouseEvent) => { 

  changeFilter(value);
}

  return (
    <div>
      <button onClick={handlerFilters('all')}>All</button>
      <button onClick={handlerFilters('active')}>Active</button>
      <button onClick={handlerFilters('completed')}>Completed</button>
    </div>
  );
};

export default FilterButtons;
