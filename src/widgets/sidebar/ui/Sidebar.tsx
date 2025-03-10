'use client'; // ✅ 클라이언트 컴포넌트로 지정

import classNames from 'classnames';
import { useFilterStore } from '@/app-providers/with-store';
import { useTodoQuery } from '@/features/todo/model/queries';
import { TodoStatus } from '@/shared/types/todo';
import { useMemo } from 'react';

interface SidebarItemProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ label, count, isActive, onClick }: SidebarItemProps) {
  return (
    <button
      className={classNames(
        'flex w-full items-center justify-between rounded-md px-4 py-2 text-left transition-colors',
        isActive
          ? 'bg-gray-50 font-medium text-primary'
          : 'text-black hover:bg-gray-50',
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className="rounded-full bg-gray-100 px-2 py-1 text-sm text-gray-500">
        {count}
      </span>
    </button>
  );
}

export function Sidebar() {
  const { activeFilter, setActiveFilter } = useFilterStore();
  const { data: todos = [] } = useTodoQuery(); // ✅ Todo 데이터 가져오기

  // ✅ `useMemo`를 사용하여 필터링 최적화
  const { allCount, activeCount, completedCount } = useMemo(() => {
    const active = todos.filter((todo) => todo.status === 'active').length;
    const completed = todos.filter(
      (todo) => todo.status === 'completed',
    ).length;
    return {
      allCount: todos.length,
      activeCount: active,
      completedCount: completed,
    };
  }, [todos]);

  const filters = [
    { label: '전체', value: 'all', count: allCount },
    { label: '진행 중', value: 'active', count: activeCount },
    { label: '완료', value: 'completed', count: completedCount },
  ];

  return (
    <aside className="w-56 border-r border-gray-200 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-1">
          {filters.map(({ label, value, count }) => (
            <li key={value}>
              <SidebarItem
                label={label}
                count={count}
                isActive={activeFilter === value}
                onClick={() => setActiveFilter(value as TodoStatus)}  // ✅ 명시적 변환
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
