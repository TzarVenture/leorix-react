import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const MOCK_PIONEER_USER = {
  id: 'lrx-cust-0482',
  firstName: 'Aarav',
  lastName: 'Sharma',
  email: 'aarav.sharma@leorix.com',
  shoeSize: 'UK 9',
  genderPreference: 'Men',
  pioneerNumber: '0482',
  tier: 'Phase A Pioneer Member',
  joinedDate: 'August 2026',
  orders: [
    {
      id: 'ORD-89201',
      date: 'Aug 14, 2026',
      status: 'Waitlist Priority Reserved',
      item: 'Article X — Alabaster White (UK 9)',
      total: '₹5,999'
    }
  ]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('leorix_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAccountDrawerOpen, setIsAccountDrawerOpen] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('leorix_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('leorix_user');
    }
  }, [user]);

  const login = (email, password) => {
    // Cleanly parse name from email if provided
    let parsedFirstName = 'Aarav';
    let parsedLastName = 'Sharma';

    if (email && email.includes('@')) {
      const handle = email.split('@')[0];
      const parts = handle.split(/[\._-]/);
      if (parts.length > 1) {
        parsedFirstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        parsedLastName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      } else {
        parsedFirstName = handle.charAt(0).toUpperCase() + handle.slice(1);
      }
    }

    const newUser = {
      ...MOCK_PIONEER_USER,
      email: email || 'aarav.sharma@leorix.com',
      firstName: parsedFirstName,
      lastName: parsedLastName
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
    return true;
  };

  const signup = (userData) => {
    const newUser = {
      id: `lrx-cust-${Math.floor(1000 + Math.random() * 9000)}`,
      firstName: userData.firstName || 'Pioneer',
      lastName: userData.lastName || 'Member',
      email: userData.email,
      shoeSize: userData.shoeSize || 'UK 9',
      genderPreference: userData.genderPreference || 'Men',
      pioneerNumber: `${Math.floor(100 + Math.random() * 900)}`,
      tier: 'Phase A Pioneer Member',
      joinedDate: 'August 2026',
      orders: []
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAccountDrawerOpen(false);
  };

  const updateProfile = (updatedData) => {
    setUser((prev) => (prev ? { ...prev, ...updatedData } : null));
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const openAccountDrawer = () => setIsAccountDrawerOpen(true);
  const closeAccountDrawer = () => setIsAccountDrawerOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
        updateProfile,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        isAccountDrawerOpen,
        openAccountDrawer,
        closeAccountDrawer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
