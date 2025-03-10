// Todo 데이터를 변경하는 뮤테이션 훅
// React Query의 useMutation을 사용하여 CRUD 작업을 수행하는 커스텀 훅들

import { CreateTodoDTO, UpdateTodoDTO } from '@/shared/types/todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from '../api/todo-api';
import { QUERY_KEYS } from '@/shared/lib/query-keys';

// ✅ 새로운 Todo를 생성하는 뮤테이션 훅
export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient(); // React Query의 클라이언트 인스턴스를 가져옴

  return useMutation({
    mutationFn: (newTodo: CreateTodoDTO) => todoApi.createTodo(newTodo), // API 호출을 통해 새로운 Todo 생성
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todos.all }); // ✅ 성공 시, todos 관련 캐시 무효화 (자동 새로고침)
    },
    onError: (error) => {
      console.error('Todo mutation error:', error); // ✅ 에러 발생 시 콘솔에 로그 출력
    },
  });
};

// ✅ 기존 Todo를 업데이트하는 뮤테이션 훅
export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient(); // React Query의 클라이언트 인스턴스를 가져옴

  return useMutation({
    mutationFn: ({ id, todoData }: { id: string; todoData: UpdateTodoDTO }) =>
      todoApi.updateTodo(id, todoData), // API 호출을 통해 특정 Todo 업데이트
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todos.all }); // ✅ 성공 시, todos 관련 캐시 무효화 (자동 새로고침)
    },
    onError: (error) => {
      console.error('Todo mutation error:', error); // ✅ 에러 발생 시 콘솔에 로그 출력
    },
  });
};

// ✅ 기존 Todo를 삭제하는 뮤테이션 훅
export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient(); // React Query의 클라이언트 인스턴스를 가져옴

  return useMutation({
    mutationFn: (id: string) => todoApi.deleteTodo(id), // API 호출을 통해 특정 Todo 삭제
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todos.all }); // ✅ 성공 시, todos 관련 캐시 무효화 (자동 새로고침)
    },
    onError: (error) => {
      console.error('Todo mutation error:', error); // ✅ 에러 발생 시 콘솔에 로그 출력
    },
  });
};
