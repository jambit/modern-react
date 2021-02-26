import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export class TodoItem {
    public readonly id: number;
    public readonly label: string;
    public checked = false;

    public constructor(id: number, label: string) {
        this.id = id;
        this.label = label;
        makeAutoObservable(this);
    }

    public toggleChecked = () => {
        this.checked = !this.checked;
    };
}

export class TodoListState {
    private nextId = 1;
    public items: TodoItem[] = [];

    public constructor() {
        makeAutoObservable(this);
    }

    public add(label: string) {
        this.items.push(new TodoItem(this.nextId++, label));
    }

    public remove = ({ id }: TodoItem) => {
        this.items = this.items.filter((item) => item.id !== id);
    };
}

export const TodoContext = createContext<TodoListState>(null);
