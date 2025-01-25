import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';
import Whatsappicon from './icons/Whatsappicon';
import Telegram from './icons/Telegram';
import Logo from './icons/Logo';

const PrivacyPolicy = ({ theme }) => {
  const containerBackgroundColor = theme === 'dark' ? '#00040F' : '#FFFFFF';
  const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(./pppp.png)', // مسار الصورة الخلفية
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      {/* الحاوية الرئيسية للمحتوى */}
      <Box
        sx={{
          width: '70%',
          height: '90vh', // ارتفاع الحاوية
          backgroundColor: containerBackgroundColor,
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          marginTop: '50px', // لإنزال الحاوية إلى الأسفل
        }}
      >
        {/* الشعار */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right', // وضع الشعار على اليمين
            mb: 3,
          }}
        >
          <Logo style={{ width: '120px', height: '120px' }} /> {/* حجم كبير للشعار */}
        </Box>

        {/* العنوان */}
        <Typography
          variant="h3"
          sx={{
            color: '#FF2A66', // لون العنوان
            fontWeight: 'bold',
            textAlign: 'right', // وضع العنوان على اليمين
            mb: 3,
          }}
        >
          سياسات الخصوصية
        </Typography>

        {/* النص القابل للتمرير */}
        <Box
          sx={{
            overflowY: 'auto',
            padding: '10px',
            color: textColor,
            fontSize: '16px',
            lineHeight: '1.8',
            textAlign: 'right', // محاذاة النص إلى اليمين
            scrollbarWidth: 'none', // إخفاء الـ scrollbar (لمتصفح Firefox)
            '&::-webkit-scrollbar': {
              display: 'none', // إخفاء الـ scrollbar (لمتصفحات Webkit مثل Chrome وSafari)
            },
          }}
        >
          <Typography>
            مرحبًا بك في OKpin! خصوصيتك تهمنا، ونحن ملتزمون بحماية معلوماتك الشخصية. توضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها أثناء استخدامك للتطبيق.
            <br />
            <br />
            <strong>1. المعلومات التي نقوم بجمعها:</strong>
            <br />
            المعلومات الشخصية: البريد الإلكتروني، الاسم، ورقم الهاتف عند التسجيل.
            <br />
            تفاصيل الدفع لإتمام المعاملات (تُعالج بشكل آمن).
            <br />
            بيانات الاستخدام: تفاعلاتك مع التطبيق مثل سجل الشراء ونشاط المكافآت.
            <br />
            معلومات الجهاز: عنوان IP، نظام التشغيل، وتحليلات استخدام التطبيق.
            <br />
            <br />
            <strong>2. كيفية استخدام بياناتك:</strong>
            <br />
            لإتمام عمليات الشراء وتسليم المنتجات أو الخدمات.
            <br />
            توفير خصومات مخصصة وإدارة نقاط المكافأة.
            <br />
            لتحسين تجربتك من خلال تحليل أنماط الاستخدام.
            <br />
            لإرسال إشعارات حول التحديثات، العروض، أو الدعم الفني.
            <br />
            <br />
            <strong>3. أمان البيانات:</strong>
            <br />
            جميع المعاملات مشفرة باستخدام بروتوكولات آمنة.
            <br />
            لا نقوم بتخزين معلومات الدفع الحساسة؛ يتم معالجتها من خلال بوابات دفع خارجية آمنة.
            <br />
            وصول بياناتك مقتصر على الأشخاص المصرح لهم فقط.
            <br />
            <br />
            <strong>4. مشاركة بياناتك:</strong>
            <br />
            لن نقوم ببيع أو تأجير بياناتك الشخصية لأي جهة خارجية. ومع ذلك، قد يتم مشاركة بياناتك مع:
            <br />
            مقدمي الخدمات: لمعالجة المدفوعات أو تحليلات التطبيق.
            <br />
            الجهات القانونية: إذا تطلب الأمر ذلك لحماية المنصة أو المستخدمين.
            <br />
            <br />
            <strong>5. حقوقك:</strong>
            <br />
            الوصول إلى بياناتك الشخصية أو تصحيحها من خلال إعدادات حسابك.
            <br />
            طلب حذف بياناتك (وفق الالتزامات القانونية).
            <br />
            إلغاء الاشتراك من الرسائل الترويجية في أي وقت.
            <br />
            <br />
            <strong>6. تحديثات السياسة:</strong>
            <br />
            قد يتم تحديث هذه السياسة بشكل دوري. سيتم إخطارك بالتغييرات الكبيرة من خلال التطبيق أو البريد الإلكتروني.
            <br />
            <br />
            للاستيضاح:
            <br />
            تواصل معنا عبر وسائل التواصل الاجتماعي أدناه.
          </Typography>

          {/* أيقونات وسائل التواصل الاجتماعي */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end', // محاذاة الأيقونات لليمين
              gap: '20px', // مسافة بين الأيقونات
              mt: 3,
            }}
          >
            <IconButton href="#" sx={{ color: '#FF2A66' }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: '#FF2A66' }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: '#FF2A66' }}>
              <Whatsappicon />
            </IconButton>
            <IconButton href="#" sx={{ color: '#FF2A66' }}>
              <Telegram />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
