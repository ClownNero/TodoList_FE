import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { TodoList } from '@/widgets/todo-list/ui/TodoList';

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-2xl">
            <TodoList />
          </div>
        </main>
      </div>
    </div>
  );
}
