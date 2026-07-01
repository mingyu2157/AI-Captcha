import React from 'react';
import vlurLogo from '../assets/vlur-logo-transparent-hq-2x.png';

export default function Nav({ openPage, isLoggedIn, onLogout }) {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="VLUR 홈">
          <img src={vlurLogo} alt="VLUR" style={{ height: 36, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--disp)', fontWeight: 800, fontSize: 16, letterSpacing: '-.01em', color: 'var(--ink)' }}>
            VLUR <span style={{ color: 'var(--orange)' }}>CAPTCHA</span>
          </span>
        </a>

        <nav className="nav-right" aria-label="주요 메뉴">
          <div className="nav-links">
            <a href="#compare">차별성</a>
            <a href="#metrics">성능</a>
            <a href="#flow">검증 절차</a>
            <a href="#cases">사용 사례</a>
            <a href="#guide" onClick={e => { e.preventDefault(); document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' }); }}>가이드</a>
            <a href="#" onClick={e => { e.preventDefault(); openPage('board'); }}>공지/FAQ</a>
          </div>
          {isLoggedIn ? (
            <>
              <a className="btn btn-ghost" href="#" onClick={e => { e.preventDefault(); openPage('mypage'); }} style={{ textDecoration: 'underline', color: 'var(--ink-soft)' }}>홍길동님</a>
              <a className="btn btn-outline" href="#" onClick={e => { e.preventDefault(); onLogout(); }} style={{ padding: '7px 13px', fontSize: 13.5 }}>로그아웃</a>
            </>
          ) : (
            <>
              <a className="btn btn-ghost" href="#" onClick={e => { e.preventDefault(); openPage('login'); }}>로그인</a>
              <a className="btn btn-primary" href="#" onClick={e => { e.preventDefault(); openPage('signup'); }}>회원가입</a>
            </>
          )}
          <button className="menu-toggle" aria-label="메뉴 열기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#241B15" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
