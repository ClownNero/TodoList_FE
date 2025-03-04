import { Checkbox } from '@/shared/ui/Checkbox';
import { useTodoStore } from '@/app-providers/with-store';

interface ToggleTodoProps {
  id: string;
  completed: boolean;
}

export function ToggleTodo({ id, completed }: ToggleTodoProps) {
  const { toggleTodo } = useTodoStore();

  return <Checkbox checked={completed} onChange={() => toggleTodo(id)} />;
}
