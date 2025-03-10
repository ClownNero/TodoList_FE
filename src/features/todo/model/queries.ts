// Todo 데이터를 가져오는 React-Query 훅
import { useQuery } from '@tanstack/react-query';
import { Todo } from '@/shared/types/todo';
import { todoApi } from '../api/todo-api';
import { QUERY_KEYS } from '@/shared/lib/query-keys';

export const useTodoQuery = () => {
  return useQuery<Todo[]>({
    queryKey: QUERY_KEYS.todos.all,
    queryFn: todoApi.getTodos,
    staleTime: 1000 * 3, // 1분 동안 캐시된 데이터 사용 (서버 요청 최소화)
  });
};
