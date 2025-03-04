'use client';

import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoStatus } from '@/shared/types/todo';

interface TodoStore {
  todos: Todo[];
  activeFilter: TodoStatus;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  setActiveFilter: (filter: TodoStatus) => void;
  filteredTodos: () => Todo[];
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  activeFilter: 'all',

  addTodo: (title: string) => {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(), // Convert Date to string
    };

    set((state) => ({
      todos: [newTodo, ...state.todos],
    }));
  },

  toggleTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  },

  editTodo: (id: string, title: string) => {
    if (!title.trim()) return;

    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: title.trim() } : todo,
      ),
    }));
  },

  deleteTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  setActiveFilter: (filter: TodoStatus) => {
    set({ activeFilter: filter });
  },

  filteredTodos: () => {
    const { todos, activeFilter } = get();

    switch (activeFilter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
}));
