import { observer } from 'mobx-react-lite';
import React from 'react';
import { TodoItem } from '../../../mobx/TodoListState';
import './style.scss';

interface TodoListEntryProps {
    item: TodoItem;
    removeItem: (item: TodoItem) => void;
}

export const TodoListEntry = observer(
    ({ item, removeItem }: TodoListEntryProps) => {
        return (
            <li className={`todo-list-entry${item.checked ? ' checked' : ''}`}>
                <span className='icon' onClick={item.toggleChecked}>
                    {item.checked ? '☑' : '☐'}
                </span>{' '}
                <span className='label' onClick={item.toggleChecked}>
                    {item.label}
                </span>
                <button className='remove' onClick={() => removeItem(item)}>
                    x
                </button>
            </li>
        );
    }
);
