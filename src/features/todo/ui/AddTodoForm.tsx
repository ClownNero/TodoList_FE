'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useCreateTodoMutation } from '../model/mutations';

export function AddTodoForm() {
  const [title, setTitle] = useState('');
  const createTodoMutation = useCreateTodoMutation(); // mutation 훅 사용

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      // Zustand store 대신 mutation을 사용하여 Todo 생성
      createTodoMutation.mutate({
        title: title.trim(),
        status: 'active', // 기본값으로 completed는 false 설정
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="새로운 할 일 추가하기..."
        className="flex-grow"
        required
        disabled={createTodoMutation.isPending} // 요청 중일 때 입력 비활성화
      />
      <Button
        type="submit"
        className="flex-shrink-0"
        disabled={createTodoMutation.isPending} // 요청 중일 때 버튼 비활성화
      >
        {createTodoMutation.isPending ? '추가 중...' : '추가하기'}
      </Button>
    </form>
  );
}
