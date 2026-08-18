import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { AuthProvider } from './context/AuthContext';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CartDrawer from './components/common/CartDrawer';
import Toast from './components/common/Toast';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import FeedbackWidget from './components/common/FeedbackWidget';
import AuthModal from './components/common/AuthModal';
import PioneerAccountDrawer from './components/common/PioneerAccountDrawer';
import HelpSupportModal from './components/common/HelpSupportModal';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SizeFitPage from './pages/SizeFitPage';
import VaultPage from './pages/VaultPage';
import { FAQPage, ShippingReturnsPage, LegalPage } from './pages/UtilityPages';

function App() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  return (
    <StoreProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-brand-cream text-brand-ink selection:bg-brand-tan selection:text-brand-green">
            {/* Announcement Bar */}
            <AnnouncementBar />

            {/* Sticky Header Navigation */}
            <Navbar onOpenHelp={() => setIsHelpModalOpen(true)} />

            {/* Cart Slide-Over Drawer */}
            <CartDrawer />

            {/* Toast Notification Banner */}
            <Toast />

            {/* Pioneer Auth Modal */}
            <AuthModal />

            {/* Pioneer Account Drawer */}
            <PioneerAccountDrawer />

            {/* Shopify Customer Care Desk Modal */}
            <HelpSupportModal
              isOpen={isHelpModalOpen}
              onClose={() => setIsHelpModalOpen(false)}
            />

            {/* Main Content Viewport */}
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop/:gender" element={<ShopPage />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/size-fit" element={<SizeFitPage />} />
                <Route path="/vault" element={<VaultPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
                <Route path="/privacy-policy" element={<LegalPage />} />
                <Route path="/terms-of-service" element={<LegalPage />} />
                {/* Fallback route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>

            {/* Brand Footer */}
            <Footer onOpenHelp={() => setIsHelpModalOpen(true)} />

            {/* Floating Scroll To Top Button */}
            <ScrollToTopButton />

            {/* Screen-Edge Pinned Feedback Widget */}
            <FeedbackWidget />
          </div>
        </Router>
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
