import React from 'react';
import './MobileApp.css';
import MobileHeader from './components/MobileHeader';
import MobileExpenseForm from './components/MobileExpenseForm';
import MobileExpenseList from './components/MobileExpenseList';

function MobileApp() {
  return (
    <div className="MobileApp">
      <MobileHeader />
      <MobileExpenseForm />
      <MobileExpenseList />
    </div>
  );
}

export default MobileApp;
