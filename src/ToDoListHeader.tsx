import React from 'react';

type propsHeader = {
  title: string
}

const ToDoListHeader = ({title}:propsHeader) => {
  return  <h3>{title}</h3>
};

export default ToDoListHeader;