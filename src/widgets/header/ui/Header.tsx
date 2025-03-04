import { AddTodoForm } from '@/features/add-todo/ui/AddTodoForm';

export function Header() {
  return (
    <header className="border-b border-[#E5E7EB] bg-[#F3F4F6] py-4">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-2xl font-bold text-[#1F2937]">Todo 리스트</h1>
        <AddTodoForm />
      </div>
    </header>
  );
}
