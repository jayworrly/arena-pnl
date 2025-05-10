import React from "react";
import PNLCard from "./PNLCard";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#000' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #E75C0B 90%, #ff7f32 100%)',
          border: '12px solid #fff',
          borderRadius: 36,
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          padding: 0,
          width: 700,
          maxWidth: '95vw',
          minHeight: 350,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'box-shadow 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.28)'}
        onMouseOut={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)'}
      >
        <PNLCard
          ticker=""
          highlightNumber=""
          pnl=""
          invested=""
          position=""
          username=""
          linkText="arena.trade"
          linkUrl=""
        />
      </div>
    </div>
  );
}

export default App; 