export const QUERY_KEYS = {
  todos: {
    all: ['todos'],
    byId: (id: string) => ['todos', id],

    // 필요에 따라 더 세분화된 키 추가 가능
    completed: ['todos', 'completed'],
    inProgress: ['todos', 'in-progress'],
  },

  // 다른 엔티티의 쿼리 키도 여기에 추가 가능
  // users: { ... },
  // posts: { ... }
} as const; // 타입 추론을 위해 const 단언
