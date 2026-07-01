import React from 'react';
import vlurGif from '../assets/output-onlinegiftools.gif';

export default function Footer() {
  return (
    <footer>
      <div className="foot-dark">
        <div className="wrap">
          <div className="foot">
            <div>
              <a className="brand" href="#top">
                <img src={vlurGif} alt="VLUR" style={{ height: 48, width: 'auto' }} />
              </a>
              <p>티켓팅 매크로·스캘퍼를 막는 AI 캡차 SaaS. ImageNet 기반 아스키 타일 드래그-투-타깃.</p>
            </div>
            <div className="foot-links">
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
              <a href="#">GitHub</a>
              <a href="#">문의하기</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
