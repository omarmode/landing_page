import React from 'react';
import './SecondSection.css'; // ملف CSS خاص بالمكون

function SecondSection() {
  return (
    <div className="second-section">
      {/* القسم الأيسر للصور */}
      <div className="images-section">
        <div className="images-grid">
          {/* استبدل هذه الصور بالصور المطلوبة */}
          {[...Array(9)].map((_, index) => (
            <img
              key={index}
              src={`https://via.placeholder.com/150?text=Image+${index + 1}`} // صورة وهمية
              alt={`image-${index + 1}`}
              className="grid-image"
            />
          ))}
        </div>
      </div>

      {/* القسم الأيمن للنصوص */}
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
