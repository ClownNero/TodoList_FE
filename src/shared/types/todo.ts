export interface Todo {
  id: string;
  title: string;
  status: TodoStatus; // ✅ 'active' | 'completed' (일관성 유지)
  createdAt: string;
}

export type TodoStatus = 'all' | 'active' | 'completed';

export interface CreateTodoDTO {
  title: string;
  status?: TodoStatus; // ✅ 'active' 기본값 사용
}

export interface UpdateTodoDTO {
  title?: string;
  status?: TodoStatus;
}
 