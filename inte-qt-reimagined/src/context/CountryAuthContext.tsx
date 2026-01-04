// context/CountryAuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface CountryAuthContextType {
  user: CountryUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: CountryUser) => void;
}

const CountryAuthContext = createContext<CountryAuthContextType | undefined>(undefined);

export const useCountryAuth = () => {
  const context = useContext(CountryAuthContext);
  if (!context) {
    throw new Error('useCountryAuth must be used within CountryAuthProvider');
  }
  return context;
};

interface CountryAuthProviderProps {
  children: ReactNode;
}

export const CountryAuthProvider = ({ children }: CountryAuthProviderProps) => {
  const [user, setUser] = useState<CountryUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing auth data
    const storedToken = localStorage.getItem('countryToken');
    const storedUser = localStorage.getItem('countryUser');

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('countryToken');
        localStorage.removeItem('countryUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const API_BASE = import.meta.env.DEV 
      ? "http://localhost:5000" 
      : "https://inteqt.onrender.com";

    const response = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    localStorage.setItem('countryToken', data.token);
    localStorage.setItem('countryUser', JSON.stringify(data.user));
    
    setToken(data.token);
    setUser(data.user);
    
    if (data.user.role === 'admin') {
      navigate('/country/admin-dashboard');
    } else {
      navigate('/country/dashboard');
    }
  };

  const logout = () => {
    localStorage.removeItem('countryToken');
    localStorage.removeItem('countryUser');
    setToken(null);
    setUser(null);
    navigate('/country/login');
  };

  const updateUser = (userData: CountryUser) => {
    setUser(userData);
    localStorage.setItem('countryUser', JSON.stringify(userData));
  };

  return (
    <CountryAuthContext.Provider value={{ user, token, loading, login, logout, updateUser }}>
      {children}
    </CountryAuthContext.Provider>
  );
};