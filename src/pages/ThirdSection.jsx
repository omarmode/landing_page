import React from 'react';
import './ThirdSection.css';
import IconHero from './icons/IconHero';
import IconHero2 from './icons/IconHero2';
import IconHero3 from './icons/IconHero3';
import IconHero4 from './icons/IconHero4';
import { motion } from 'framer-motion'; // استيراد Framer Motion

function ThirdSection() {
  const cards = [
    { id: 4, title: 'كل المنتجات في مكان واحد', text: 'نوفر لك بطاقات لأشهر الألعاب، البرامج، والاشتراكات الرقمية.', color: '#E9BA00', icon: <IconHero style={{ fill: '#FFFFFF' }} /> },
    { id: 3, title: 'عروض لا تُقاوم', text: 'خصومات مذهلة تضمن لك التوفير مع كل عملية شراء.', color: '#00BF16', icon: <IconHero2 /> },
    { id: 2, title: 'نقاط مكافآت مُجزية', text: 'اجمع النقاط واستبدلها بعروض وجوائز حصرية.', color: '#9022FF', icon: <IconHero3 /> },
    { id: 1, title: 'واجهة بسيطة وفعّالة', text: 'تصميم يُسهل عليك الوصول لما تبحث عنه بأقل جهد.', color: '#0059FF', icon: <IconHero4 /> },
  ];

  return (
    <div className="third-section">
      <h2 className="section-title">لماذا OKpin!? </h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="card"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.5 }} 
            viewport={{ once: true }} 
          >
            <div className="card-header" style={{ backgroundColor: card.color }}>
              <div className="icon-circle" style={{ backgroundColor: card.color }}>
                {card.icon}
              </div>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ThirdSection;
