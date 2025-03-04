'use client'; // ✅ 클라이언트 컴포넌트로 지정

import { useTodoStore } from '@/app-providers/with-store';
import { TodoItem } from '@/entities/todo/ui/TodoItem';

export function TodoList() {
  const { filteredTodos, activeFilter } = useTodoStore();
  const todos = filteredTodos();

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-medium">
        {activeFilter === 'all' && '전체 할 일'}
        {activeFilter === 'active' && '진행 중인 할 일'}
        {activeFilter === 'completed' && '완료된 할 일'}
      </h2>

      {todos.length === 0 ? (
        <div className="p-8 text-center text-[#6B7280]">
          {activeFilter === 'all' &&
            '할 일이 없습니다. 새로운 할 일을 추가해보세요!'}
          {activeFilter === 'active' && '진행 중인 할 일이 없습니다.'}
          {activeFilter === 'completed' && '완료된 할 일이 없습니다.'}
        </div>
      ) : (
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
