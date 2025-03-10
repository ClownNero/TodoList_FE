import { FormEvent, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useUpdateTodoMutation } from '../model/mutations';

interface EditTodoModalProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function EditTodoModal({
  id,
  title: initialTitle,
  isOpen,
  onClose,
}: EditTodoModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const { mutate: updateTodo, isPending } = useUpdateTodoMutation(); // ✅ React Query 뮤테이션 훅

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      updateTodo({ id, todoData: { title } }, { onSuccess: onClose }); // ✅ 성공 시 모달 닫기
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-lg font-medium">할 일 수정</h2>
        <form onSubmit={handleSubmit}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
            fullWidth
            autoFocus
            className="mb-4"
            disabled={isPending}
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">{isPending ? '저장 중...' : '저장'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
