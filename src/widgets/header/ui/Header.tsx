import { AddTodoForm } from '@/features/todo/ui/AddTodoForm';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Todo 리스트</h1>
        <AddTodoForm />
      </div>
    </header>
  );
}
