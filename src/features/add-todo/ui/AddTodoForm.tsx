'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useTodoStore } from '@/app-providers/with-store';

export function AddTodoForm() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
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
      />
      <Button type="submit" className="flex-shrink-0">
        추가하기
      </Button>
    </form>
  );
}
