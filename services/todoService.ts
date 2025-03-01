const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/todos';

export const getTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTodo = async (todo: {
  title: string;
  description: string;
}) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return res.json();
};
