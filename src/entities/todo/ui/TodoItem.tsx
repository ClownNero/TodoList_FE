import classNames from 'classnames';
import { ToggleTodo } from '@/features/todo/ui/ToggleTodo';
import { EditTodoButton } from '@/features/todo/ui/EditTodoButton';
import { DeleteTodoButton } from '@/features/todo/ui/DeleteTodoButton';
import { Todo } from '@/shared/types/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { id, title, status } = todo;
  const isCompleted = status === 'completed'; // ✅ 상태 변경 적용

  return (
    <div
      className={classNames('flex items-center gap-3 rounded-md border p-3', {
        'bg-white': !isCompleted,
        'bg-gray-100 bg-opacity-50': isCompleted,
      })}
    >
      <ToggleTodo id={id} status={status} /> {/* ✅ 상태 전달 */}
      <span
        className={classNames('flex-grow', {
          'text-gray-800': !isCompleted,
          'text-gray-500 line-through': isCompleted,
        })}
      >
        {title}
      </span>
      <div className="flex items-center gap-1">
        <EditTodoButton id={id} title={title} completed={isCompleted} />
        <DeleteTodoButton id={id} />
      </div>
    </div>
  );
}
