import { CreateTodoDTO, Todo, UpdateTodoDTO } from '@/shared/types/todo';
import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/todos`;

export const todoApi = {
  getTodos: async () => {
    const { data } = await axios.get<Todo[]>(BASE_URL);
    return data;
  },

  createTodo: async (todoData: CreateTodoDTO) => {
    const { data } = await axios.post<Todo>(BASE_URL, todoData);
    return data;
  },

  updateTodo: async (id: string, todoData: UpdateTodoDTO) => {
    const { data } = await axios.patch<Todo>(`${BASE_URL}/${id}`, todoData);
    return data;
  },

  deleteTodo: async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  },
};
