import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../../app/page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

class LocalStorageMock implements Storage {
  private store: { [key: string]: string } = {};

  get length(): number {
    return Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }
}
const localStorageMock = new LocalStorageMock();
global.localStorage = localStorageMock as any;

describe('HomePage', () => {
  it('should redirect to /contacts on successful login', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(<HomePage />);
    fireEvent.change(screen.getByPlaceholderText('Usuário'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'admin123' } });
    fireEvent.click(screen.getByText('Entrar'));
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/contacts');
    });
  });
  it('should show an error message on invalid credentials', async () => {
    render(<HomePage />);
    fireEvent.change(screen.getByPlaceholderText('Usuário'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByText('Entrar'));
    await waitFor(() => {
      expect(screen.getByText('Credenciais inválidas.')).toBeInTheDocument();
    });
  });
});
