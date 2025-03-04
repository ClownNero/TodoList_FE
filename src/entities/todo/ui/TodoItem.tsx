import classNames from 'classnames';
import { ToggleTodo } from '@/features/toggle-todo/ui/ToggleTodo';
import { EditTodoButton } from '@/features/edit-todo/ui/EditTodoButton';
import { DeleteTodoButton } from '@/features/delete-todo/ui/DeleteTodoButton';
import { Todo } from '@/shared/types/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { id, title, completed } = todo;

  return (
    <div
      className={classNames('flex items-center gap-3 rounded-md border p-3', {
        'bg-white': !completed,
        'bg-[#F3F4F6] bg-opacity-50': completed,
      })}
    >
      <ToggleTodo id={id} completed={completed} />
      <span
        className={classNames('flex-grow', {
          'text-[#1F2937]': !completed,
          'text-[#6B7280] line-through': completed,
        })}
      >
        {title}
      </span>
      <div className="flex items-center gap-1">
        <EditTodoButton id={id} title={title} completed={completed} />
        <DeleteTodoButton id={id} />
      </div>
    </div>
  );
}
