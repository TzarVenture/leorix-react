import React, { useState } from 'react';
import { X, HelpCircle, AlertCircle, FileText, CheckCircle2, Send, ArrowRight, Package, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStore } from '../../context/StoreContext';

const COMPLAINT_TYPES = [
  'Defect / Quality Issue',
  'Sizing Discrepancy',
  'Delivery & Shipping Delay',
  'Payment & Billing Problem',
  'Packaging / Missing Item'
];

const REQUEST_TYPES = [
  'Request FDDI Test Certificate PDF',
  'Personalized Size & Fit Consultation',
  'Drop 01 Launch & Stock Inquiry',
  'Pre-Order Reservation Status',
  'Bulk / Corporate Inquiry'
];

const HelpSupportModal = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { addToast } = useStore();
  const [activeTab, setActiveTab] = useState('complaint'); // 'complaint' | 'request' | 'faq'

  // Complaint Form
  const [complaintType, setComplaintType] = useState(COMPLAINT_TYPES[0]);
  const [selectedOrder, setSelectedOrder] = useState(user?.orders?.[0]?.id || 'ORD-89201');
  const [complaintDetails, setComplaintDetails] = useState('');
  const [complaintEmail, setComplaintEmail] = useState(user?.email || '');

  // Request Form
  const [requestType, setRequestType] = useState(REQUEST_TYPES[0]);
  const [requestDetails, setRequestDetails] = useState('');
  const [requestEmail, setRequestEmail] = useState(user?.email || '');
  const [requestName, setRequestName] = useState(user ? `${user.firstName} ${user.lastName}` : '');

  // Ticket Result
  const [submittedTicket, setSubmittedTicket] = useState(null);

  if (!isOpen) return null;

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (!complaintDetails.trim()) {
      addToast('Please provide details about your issue.', 'info');
      return;
    }

    const ticketId = `LRX-TICKET-${Math.floor(1000 + Math.random() * 9000)}`;
    const ticket = {
      id: ticketId,
      type: 'Complaint',
      category: complaintType,
      orderId: selectedOrder,
      email: complaintEmail || user?.email || 'customer@leorix.com',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Open — Assigned to Support',
    };

    // Save ticket locally (Shopify Customer Support simulation)
    const existing = JSON.parse(localStorage.getItem('leorix_tickets') || '[]');
    localStorage.setItem('leorix_tickets', JSON.stringify([ticket, ...existing]));

    setSubmittedTicket(ticket);
    addToast(`Support ticket ${ticketId} created successfully!`, 'success');
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!requestDetails.trim()) {
      addToast('Please describe your inquiry.', 'info');
      return;
    }

    const ticketId = `LRX-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const ticket = {
      id: ticketId,
      type: 'Request',
      category: requestType,
      name: requestName || user?.firstName || 'Customer',
      email: requestEmail || user?.email || 'customer@leorix.com',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'In Review by Engineering Lab',
    };

    const existing = JSON.parse(localStorage.getItem('leorix_tickets') || '[]');
    localStorage.setItem('leorix_tickets', JSON.stringify([ticket, ...existing]));

    setSubmittedTicket(ticket);
    addToast(`Inquiry ${ticketId} dispatched to team!`, 'success');
  };

  const handleClose = () => {
    setSubmittedTicket(null);
    setComplaintDetails('');
    setRequestDetails('');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-ink/60 backdrop-blur-xs z-50 transition-opacity"
        onClick={handleClose}
      />

      {/* Shopify Support Popover Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 select-none">
        <div className="bg-white w-full max-w-lg rounded-3xl border border-stone-300 p-5 sm:p-7 shadow-2xl relative text-brand-ink overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-brand-green hover:text-brand-cream transition-colors"
            aria-label="Close Help Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!submittedTicket ? (
            <>
              {/* Header */}
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-black text-xl tracking-tight text-brand-green uppercase">
                    LEORIX
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-brand-green bg-brand-cream px-2.5 py-0.5 rounded-full border border-brand-tan/30">
                    CUSTOMER CARE DESK
                  </span>
                </div>
                <h3 className="font-serif-display text-lg font-medium text-brand-ink mt-1">
                  How can our team assist you today?
                </h3>
              </div>

              {/* Tab Selector */}
              <div className="flex bg-stone-100 p-1 rounded-2xl mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('complaint')}
                  className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'complaint'
                      ? 'bg-white text-brand-green shadow-xs'
                      : 'text-stone-500 hover:text-brand-ink'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>File Complaint</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('request')}
                  className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'request'
                      ? 'bg-white text-brand-green shadow-xs'
                      : 'text-stone-500 hover:text-brand-ink'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

              {/* ── 1. FILE A COMPLAINT ── */}
              {activeTab === 'complaint' && (
                <form onSubmit={handleComplaintSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Type of Complaint / Issue
                    </label>
                    <select
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value)}
                      className="w-full text-xs font-sans font-medium px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink"
                    >
                      {COMPLAINT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Order Selector (Shopify Order Reference) */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Shopify Order / Waitlist Reference ID
                    </label>
                    <div className="relative">
                      <Package className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={selectedOrder}
                        onChange={(e) => setSelectedOrder(e.target.value)}
                        placeholder="e.g. ORD-89201 or #1001"
                        className="w-full text-xs font-sans font-medium pl-10 pr-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={complaintEmail}
                      onChange={(e) => setComplaintEmail(e.target.value)}
                      placeholder="aarav.sharma@leorix.com"
                      required
                      className="w-full text-xs font-sans font-medium px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                    />
                  </div>

                  {/* Complaint Details */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Detailed Description of Issue
                    </label>
                    <textarea
                      value={complaintDetails}
                      onChange={(e) => setComplaintDetails(e.target.value)}
                      placeholder="Please describe the defect, sizing problem, or delivery concern in detail..."
                      rows={3}
                      className="w-full text-xs font-sans font-medium p-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all resize-none text-brand-ink placeholder:text-stone-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Formal Complaint Ticket</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {/* ── 2. SUBMIT A REQUEST / INQUIRY ── */}
              {activeTab === 'request' && (
                <form onSubmit={handleRequestSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Inquiry Category
                    </label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full text-xs font-sans font-medium px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink"
                    >
                      {REQUEST_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={requestName}
                        onChange={(e) => setRequestName(e.target.value)}
                        placeholder="Aarav Sharma"
                        required
                        className="w-full text-xs font-sans font-medium px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={requestEmail}
                        onChange={(e) => setRequestEmail(e.target.value)}
                        placeholder="aarav.sharma@leorix.com"
                        required
                        className="w-full text-xs font-sans font-medium px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                      Message / Request Details
                    </label>
                    <textarea
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder="Specify your inquiry or request for FDDI reports / sizing guidance..."
                      rows={3}
                      className="w-full text-xs font-sans font-medium p-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:outline-none transition-all resize-none text-brand-ink placeholder:text-stone-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Dispatch Support Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </>
          ) : (
            /* ── Shopify Support Ticket Confirmation Result ── */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-brand-stone uppercase tracking-widest">
                  TICKET CREATED
                </span>
                <h4 className="font-mono text-2xl font-black text-brand-green">
                  {submittedTicket.id}
                </h4>
              </div>

              <div className="bg-brand-cream p-4 rounded-2xl border border-brand-tan/30 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-brand-stone font-mono">Category:</span>
                  <span className="font-bold text-brand-ink">{submittedTicket.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-stone font-mono">Contact Email:</span>
                  <span className="font-bold text-brand-ink">{submittedTicket.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-stone font-mono">Status:</span>
                  <span className="font-bold text-emerald-700">{submittedTicket.status}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-brand-stone max-w-xs mx-auto">
                Our support team & biomechanics lab monitor tickets 24/7. An email update has been dispatched to {submittedTicket.email}.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="py-3 px-8 rounded-full bg-brand-green text-brand-cream font-mono font-bold text-xs uppercase tracking-widest hover:bg-brand-tan hover:text-brand-green transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default HelpSupportModal;
