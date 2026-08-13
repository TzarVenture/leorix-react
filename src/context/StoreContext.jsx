import React, { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Mode switcher: 'phaseA' (Pre-launch waitlist) or 'phaseB' (Live commerce)
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('leorix_mode') || 'phaseA';
  });

  // Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Waitlist state
  const [waitlistEmails, setWaitlistEmails] = useState(() => {
    const saved = localStorage.getItem('leorix_waitlist');
    return saved ? JSON.parse(saved) : ['sample.pioneer@leorix.in'];
  });
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false);

  // Gender filter for shop page
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    localStorage.setItem('leorix_mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('leorix_waitlist', JSON.stringify(waitlistEmails));
  }, [waitlistEmails]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const toggleMode = () => {
    const nextMode = mode === 'phaseA' ? 'phaseB' : 'phaseA';
    setMode(nextMode);
    showToast(`Switched site to ${nextMode === 'phaseA' ? 'Phase A: Pre-Launch Waitlist Mode' : 'Phase B: Live Commerce Store Mode'}`);
  };

  const addToCart = (product, size = 'UK 8', quantity = 1) => {
    if (mode === 'phaseA') {
      showToast('Phase A active: Pre-launch mode. Join the waitlist for early drop access!');
      return;
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.size === size);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, size, quantity }];
    });

    setIsCartOpen(true);
    showToast(`Added ${product.name} (${size}) to bag.`);
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, delta) => {
    setCart((prev) => {
      return prev.map(item => {
        if (item.id === id && item.size === size) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const cartTotal = cart.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 5999;
    return sum + numericPrice * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const joinWaitlist = (email) => {
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return false;
    }
    if (waitlistEmails.includes(email)) {
      showToast('You are already on the priority list.');
      setHasJoinedWaitlist(true);
      return true;
    }
    setWaitlistEmails(prev => [...prev, email]);
    setHasJoinedWaitlist(true);
    showToast('Success! You are registered for the first drop and validation updates.');
    return true;
  };

  return (
    <StoreContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        waitlistEmails,
        joinWaitlist,
        hasJoinedWaitlist,
        selectedGender,
        setSelectedGender,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
