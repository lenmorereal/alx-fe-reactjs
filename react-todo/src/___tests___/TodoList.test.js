import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(input);
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
