import React from 'react';
import { motion } from 'framer-motion';
import './SecondSection.css';

const images = [
  '/Rectangle.png',
  '/Rectangle2.png',
  '/Rectangle3.png',
];

function SecondSection() {
  return (
    <div className="second-section">
      {/* الصف الثابت (الآن هو الصف الأول) */}
      <div className="static-column">
        <img
          src={images[0]}
          alt="large-image"
          className="large-image"
        />
        <div className="small-images-row">
          <img
            src={images[1]}
            alt="small-image-1"
            className="small-image"
          />
          <img
            src={images[2]}
            alt="small-image-2"
            className="small-image"
          />
        </div>
      </div>

      {/* الصف المتحرك الأول */}
      <div className="marquee-container">
        <motion.div
          className="marquee"
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image-${index + 1}`}
              className="grid-image"
            />
          ))}
        </motion.div>
      </div>

      {/* الصف المتحرك الثاني */}
      <div className="marquee-container">
        <motion.div
          className="marquee"
          animate={{ y: ['-50%', '0%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {images.concat(images).map((src, index) => (
            <img
              key={index + 100}
              src={src}
              alt={`image-${index + 1}-row2`}
              className="grid-image"
            />
          ))}
        </motion.div>
      </div>

      {/* قسم النصوص */}
      <div className="text-section">
        <h2>مرحباً بك في OKpin!</h2>
        <p>
          مرحباً بك في OKpin، وجهتك المفضلة للتسوق الرقمي! يهدف تطبيق OKpin إلى
          تبسيط عملية شراء المنتجات الرقمية، من بطاقات الألعاب إلى البرامج
          والاشتراكات، بأسعار تنافسية وخصومات مميزة، لتقدم لك كل ما تحتاجه في
          مكان واحد، مع تجربة مستخدم سلسة ومكافآت تجعل كل عملية شراء أكثر
          متعة.
        </p>
        <p>
          مهمتنا مساعدتك في الوصول إلى المنتجات الرقمية التي تحتاجها بأفضل قيمة
          ممكنة مع ضمان تجربة آمنة ومريحة لجميع مستخدمينا.
        </p>
        <p>
          رؤيتنا أن نكون الخيار الأول للتسوق الرقمي على مستوى العالم مع تقديم
          قيمة استثنائية وتجربة مستخدم مميزة.
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
