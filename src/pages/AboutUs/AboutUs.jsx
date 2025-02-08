import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Facebook from '../../pages/icons/Facebook';
import Twitter from '../../pages/icons/Twitter';
import Whatsappicon from '../../pages/icons/Whatsappicon';
import Telegram from '../../pages/icons/Telegram';
import Logo from '../../pages/icons/Logo';

const AboutUs = ({ theme }) => {
  const containerBackgroundColor = theme === 'dark' ? '#00040F' : '#FFFFFF';
  const textColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(./background.png)', // استبدل بصورة الخلفية المناسبة
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
      {/* الحاوية الرئيسية */}
      <Box
        sx={{
          width: '70%',
          height: '90vh',
          backgroundColor: containerBackgroundColor,
          borderRadius: '15px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          marginTop: '50px',
        }}
      >
        {/* الشعار */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            mb: 3,
          }}
        >
          <Logo style={{ width: '120px', height: '120px' }} />
        </Box>

        {/* العنوان */}
        <Typography
          variant="h3"
          sx={{
            color: '#FF2A66',
            fontWeight: 'bold',
            textAlign: 'right',
            mb: 3,
          }}
        >
          من نحن
        </Typography>

        {/* النص القابل للتمرير */}
        <Box
          sx={{
            overflowY: 'auto',
            padding: '10px',
            color: textColor,
            fontSize: '16px',
            lineHeight: '1.8',
            textAlign: 'right',
            scrollbarWidth: 'none', // إخفاء الـ scrollbar في Firefox
            '&::-webkit-scrollbar': {
              display: 'none', // إخفاء الـ scrollbar في Chrome و Safari
            },
          }}
        >
          <Typography>
            مرحبًا بك في <strong>OKpin</strong>، وجهتك المفضلة للتسوق الرقمي! 
            <br />
            يهدف تطبيق OKpin إلى تبسيط عملية شراء المنتجات الرقمية، من بطاقات الألعاب إلى البرامج والاشتراكات، بأسعار تنافسية وخصومات مميزة. 
            نقدم لك كل ما تحتاجه في مكان واحد، مع تجربة مستخدم سلسة ومكافآت تجعل كل عملية شراء أكثر متعة.
            <br />
            <br />
            <strong>ماذا يقدم OKpin؟</strong>
            <br />
            ✅ تشكيلة متنوعة: بطاقات للألعاب، البرامج، والمنتجات الرقمية الأخرى.
            <br />
            ✅ خصومات حصرية: وفر أموالك مع أفضل العروض.
            <br />
            ✅ نظام مكافآت: اكسب نقاط مع كل عملية شراء واستبدلها بجوائز مذهلة.
            <br />
            <br />
            <strong>مهمتنا</strong>
            <br />
            مساعدتك في الوصول إلى المنتجات الرقمية التي تحتاجها بسهولة وبأفضل قيمة ممكنة، مع ضمان تجربة آمنة ومريحة لجميع مستخدمينا.
            <br />
            <br />
            <strong>رؤيتنا</strong>
            <br />
            أن نكون الخيار الأول للتسوق الرقمي على مستوى العالم، مع التركيز على تقديم قيمة استثنائية وتجربة مستخدم مميزة.
            <br />
            <br />
            <strong>تواصل معنا</strong>
            <br />
            إذا كان لديك أي استفسار أو تحتاج إلى دعم. نحن هنا لخدمتك دائمًا!
          </Typography>

          {/* أيقونات وسائل التواصل الاجتماعي */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '20px',
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

export default AboutUs;
