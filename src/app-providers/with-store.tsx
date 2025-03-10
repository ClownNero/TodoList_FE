'use client';

import { TodoStatus } from '@/shared/types/todo';
import { create } from 'zustand';

interface FilterStore {
  activeFilter: TodoStatus;
  setActiveFilter: (filter: TodoStatus) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  activeFilter: 'all', // ✅ 기본값 'all'
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}));
