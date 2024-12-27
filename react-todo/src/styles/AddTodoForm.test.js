import { render, screen, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  it('renders the form', () => {
    render(<AddTodoForm addTodo={() => {}} />);
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
  });

  it('calls addTodo on form submission', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);
    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
  });
});
