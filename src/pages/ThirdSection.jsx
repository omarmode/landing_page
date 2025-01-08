import React from 'react';
import './ThirdSection.css';

function ThirdSection() {
  const cards = [
    { id: 1, title: 'كل المنتجات في مكان واحد', text: 'نوفر لك بطاقات لأشهر الألعاب، البرامج، والاشتراكات الرقمية.', color: '#FFC107', icon: '/icons/icon1.svg' },
    { id: 2, title: 'عروض لا تُقاوم', text: 'خصومات مذهلة تضمن لك التوفير مع كل عملية شراء.', color: '#4CAF50', icon: '/icons/icon2.svg' },
    { id: 3, title: 'نقاط مكافآت مُجزية', text: 'اجمع النقاط واستبدلها بعروض وجوائز حصرية.', color: '#9C27B0', icon: '/icons/icon3.svg' },
    { id: 4, title: 'واجهة بسيطة وفعّالة', text: 'تصميم يُسهل عليك الوصول لما تبحث عنه بأقل جهد.', color: '#2196F3', icon: '/icons/icon4.svg' },
  ];

  return (
    <div className="third-section">
      <h2 className="section-title">لماذا OKpin ؟!</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-header" style={{ backgroundColor: card.color }}>
              <div className="icon-circle" style={{ backgroundColor: card.color }}>
                <img src={card.icon} alt={`icon-${card.id}`} />
              </div>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdSection;
