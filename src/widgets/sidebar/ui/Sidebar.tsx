'use client'; // ✅ 클라이언트 컴포넌트로 지정

import classNames from 'classnames';
import { useTodoStore } from '@/app-providers/with-store';
import { TodoStatus } from '@/shared/types/todo';

interface SidebarItemProps {
  label: string;
  value: TodoStatus;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({
  label,
  value,
  count,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      className={classNames(
        'flex w-full items-center justify-between rounded-md px-4 py-2 text-left transition-colors',
        {
          'bg-[#EFF6FF] font-medium text-[#2563EB]': isActive,
          'text-[#1F2937] hover:bg-[#F9FAFB]': !isActive,
        },
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className="rounded-full bg-[#F3F4F6] px-2 py-1 text-sm text-[#6B7280]">
        {count}
      </span>
    </button>
  );
}

export function Sidebar() {
  const { todos, activeFilter, setActiveFilter } = useTodoStore();

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const filters: Array<{ label: string; value: TodoStatus }> = [
    { label: '전체', value: 'all' },
    { label: '진행 중', value: 'active' },
    { label: '완료', value: 'completed' },
  ];

  return (
    <aside className="w-56 border-r border-[#E5E7EB] bg-[#F3F4F6] p-4">
      <nav>
        <ul className="space-y-1">
          {filters.map((filter) => (
            <li key={filter.value}>
              <SidebarItem
                label={filter.label}
                value={filter.value}
                count={
                  filter.value === 'all'
                    ? todos.length
                    : filter.value === 'active'
                      ? activeTodos.length
                      : completedTodos.length
                }
                isActive={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
