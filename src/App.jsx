import React from 'react';
import Container from './components/layout/Container';
import NameGenerator from './components/features/NameGenerator';
import './index.css';

/**
 * 1. Component Architecture - App Shell
 * Simplified Frontend
 */
const App = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '3rem 0' }}>
      <main>
        <Container>
          <header style={{ marginBottom: '3rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '2rem' }}>
            <h1 className="title-main">GeniusNames</h1>
            {/* <p className="subtitle">
            
            </p> */}
          </header>

          {/* Main Feature Component: NameGenerator */}
          <NameGenerator />

          <footer style={{ marginTop: '5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}></footer>
        </Container>
      </main>
    </div>
  );
};

export default App;
