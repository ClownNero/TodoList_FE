'use client'; // ✅ 클라이언트 컴포넌트로 지정

import { useFilterStore } from '@/app-providers/with-store';
import { TodoItem } from '@/entities/todo/ui/TodoItem';
import { useTodoQuery } from '@/features/todo/model/queries';

export function TodoList() {
  const { activeFilter } = useFilterStore(); // ✅ Zustand에서 필터 상태 가져오기
  console.log(activeFilter);
  const { data: todos = [], isLoading, isError } = useTodoQuery();

  // ✅ 클라이언트에서 필터링 적용
  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === 'active') return todo.status === 'active';
    if (activeFilter === 'completed') return todo.status === 'completed';
    return true;
  });

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-medium">
        {activeFilter === 'all' && '전체 할 일'}
        {activeFilter === 'active' && '진행 중인 할 일'}
        {activeFilter === 'completed' && '완료된 할 일'}
      </h2>

      {/* ✅ 데이터 로딩 상태 */}
      {isLoading && <p>로딩 중...</p>}
      {isError && <p>오류 발생</p>}

      {filteredTodos.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          {activeFilter === 'all' &&
            '할 일이 없습니다. 새로운 할 일을 추가해보세요!'}
          {activeFilter === 'active' && '진행 중인 할 일이 없습니다.'}
          {activeFilter === 'completed' && '완료된 할 일이 없습니다.'}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
