import { Checkbox } from '@/shared/ui/Checkbox';
import { TodoStatus } from '@/shared/types/todo';
import { useUpdateTodoMutation } from '../model/mutations';

interface ToggleTodoProps {
  id: string;
  status: TodoStatus; // ✅ 'active' | 'completed'
}

export function ToggleTodo({ id, status }: ToggleTodoProps) {
  const { mutate: updateTodo, isPending } = useUpdateTodoMutation();

  const handleToggle = () => {
    const newStatus: TodoStatus = status === 'active' ? 'completed' : 'active';
    updateTodo({ id, todoData: { status: newStatus } });
  };

  return (
    <Checkbox
      checked={status === 'completed'}
      onChange={handleToggle}
      disabled={isPending} // ✅ 로딩 중 비활성화
    />
  );
}
