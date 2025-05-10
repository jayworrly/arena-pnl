import React from "react";
import logo from './logo.png';
import tickerLogo from './Ticker-Logo.png';
import avalancheLogo from './Avalanche_logo.png';

const PNLCard = ({
  ticker,
  amount,
  pnl,
  invested,
  position,
  username,
  linkText,
  linkUrl,
  highlightNumber,
}) => {
  return (
    <div
      style={{
        background: "#E75C0B",
        color: "#000",
        borderRadius: 24,
        padding: 44,
        fontFamily: 'Inter, Arial, sans-serif',
        position: "relative",
        boxSizing: "border-box",
        maxWidth: 650,
        minWidth: 320,
        minHeight: 260,
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        gap: 32,
      }}
      aria-label="Arena PNL Card"
    >
      {/* Left Side: Logo and Ticker */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: 32, gap: 18 }}>
        {/* Top Row: Logo and Arena */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
          <img src={logo} alt="Arena logo" style={{ width: 48, height: 48, marginRight: 12 }} />
          <div style={{ color: '#FFF', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 700, letterSpacing: 1 }}>Arena</div>
        </div>
        {/* Ticker above amount */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 'clamp(1.5rem, 2.5vw, 2.75rem)', fontWeight: 700, marginBottom: 8 }}>
          <img src={tickerLogo} alt="Ticker logo" style={{ width: 40, height: 40, marginRight: 10, objectFit: 'contain' }} />
          <span style={{ color: '#111', letterSpacing: 1 }}>{ticker}</span>
        </div>
        {/* Amount Bar with Avalanche Logo on left and number on right */}
        <div style={{
          background: '#B6D7A8',
          borderRadius: 12,
          padding: '18px 28px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: 18,
          boxSizing: 'border-box',
          justifyContent: 'space-between',
        }}>
          <img src={avalancheLogo} alt="Avalanche logo" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: '#111', textAlign: 'right' }}>{highlightNumber}</span>
        </div>
      </div>
      {/* Right Side: Details */}
      <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
        {/* PNL, Invested, Position */}
        <div style={{ width: '100%', marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, marginBottom: 10 }}>
            <span>PNL</span>
            <span style={{ fontWeight: 700 }}>{pnl}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, marginBottom: 10 }}>
            <span>Invested</span>
            <span style={{ display: 'flex', alignItems: 'center', fontWeight: 700 }}>
              <img src={avalancheLogo} alt="Avalanche logo" style={{ width: 22, height: 22, marginRight: 8, objectFit: 'contain' }} />
              {invested}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22 }}>
            <span>Position</span>
            <span style={{ display: 'flex', alignItems: 'center', fontWeight: 700 }}>
              <img src={avalancheLogo} alt="Avalanche logo" style={{ width: 22, height: 22, marginRight: 8, objectFit: 'contain' }} />
              {position}
            </span>
          </div>
        </div>
        {/* Username and link */}
        <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>{username}</div>
        <div style={{ fontSize: 18, color: "#222", opacity: 0.8 }}>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#222", textDecoration: "none" }} aria-label="{linkText}">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PNLCard; 