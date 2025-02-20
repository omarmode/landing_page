import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function StyledPage() {
  const theme = useTheme();

  const CardOne = [
    { imgSrc: '../../public/Property 1=4.png', text: "بطاقات الألعاب" },
    { imgSrc: '../../public/Group.png', text: "بطاقات الألعاب" },
    { imgSrc: '../../public/Mask group.png', text: "بطاقات الألعاب" },
    { imgSrc: '../../public/Property 1=1.png', text: "بطاقات الألعاب" },
    { imgSrc: '../../public/Property 1=2.png', text: "بطاقات الألعاب" },
    { imgSrc: '../../public/Property 1=3.png', text: "بطاقات الألعاب" }
  ];

  const CardTwo = [
    { imgSrc: '../../public/safe.png', text: "دفع مشفر: ", subtext: " طرق دفع آمنة تحمي بياناتك." },
    { imgSrc: '../../public/privacy.png', text: "خصوصيتك محمية:", subtext: ".جميع معلوماتك الشخصية تظل سرية " },
    { imgSrc: '../../public/Clip path group.png', text: "دعم مخصص: ", subtext: " فريقنا هنا لمساعدتك على مدار الساعة." }
  ];

  const bottomCard = {
    imgSrc: '../../public/see more.png',
    text: "عروض أخرى عديدة"
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row-reverse' },
        gap: { xs: '20px', sm: '30px', md: '40px' },
        minHeight: '100vh',
        padding: { xs: '10px', sm: '20px', md: '30px' },
        backgroundColor: theme => theme.palette.mode === 'dark' ? '#050A17' : '#FFFFFF',
        transition: 'background-color 0.3s ease',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
          <Card
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '48%', md: '630px' },
          minWidth: { xs: '300px', sm: 'auto' },
          height: { xs: 'auto', sm: '600px', md: '660px' },
          borderRadius: { xs: '20px', sm: '30px', md: '40px' },
          padding: { xs: '15px', sm: '20px' },
          display: 'flex',
          flexDirection: 'column',
          boxShadow: theme.palette.mode === 'dark' ? 
            '0px 4px 4px rgba(0, 0, 0, 0.25)' : 
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(0, 191, 22, 0.1) 0%, rgba(0, 0, 0, 1) 50%)'
            : 'linear-gradient(135deg, rgba(0, 191, 22, 0.1) 0%, rgba(255, 255, 255, 1) 50%)'
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Tajawal", sans-serif',
            fontSize: { xs: '18px', sm: '24px', md: '32px' },
            fontWeight: 500,
            textAlign: 'right',
            marginRight: { xs: '10px', sm: '20px' },
            marginTop: { xs: '10px', sm: '20px' },
            color: 'inherit',
            direction: 'rtl'
          }}
        >
          منتجات تناسب احتياجاتك!
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: { xs: '10px', sm: '15px', md: '20px' },
            margin: { xs: '20px 0', sm: '30px 0', md: '40px 0' },
            padding: { xs: '0 5px', sm: '0 10px' }
          }}
        >
          {CardOne.map((card, index) => (
            <Card
              key={index}
              sx={{
              
                width: '100%',
                aspectRatio: '1/1',
                minWidth: { xs: '80px', sm: '100px', md: '150px' },
                borderRadius: { xs: '15px', sm: '20px' },
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme => 
                  theme.palette.mode === 'dark' ? '#090F21' : '#EAEAEA',
                transition: 'background-color 0.3s ease'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: { xs: '5px', sm: '8px', md: '10px' },
                  padding: '5px'
                }}
              >
                <Box
                  component="img"
                  src={card.imgSrc}
                  alt="game icon"
                  sx={{
                    width: { xs: '40px', sm: '50px', md: '60px' },
                    height: { xs: '40px', sm: '50px', md: '60px' },
                    objectFit: 'contain'
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Tajawal", sans-serif',
                    fontSize: { xs: '10px', sm: '12px', md: '14px' },
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: 'auto',
            padding: { xs: '0 5px', sm: '0 10px' }
          }}
        >
          <Card
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: '440px', md: '480px' },
              height: { xs: '100px', sm: '116px', md: '126px' },
              borderRadius: { xs: '15px', sm: '20px' },
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: theme =>
                theme.palette.mode === 'dark' ? '#090F21' : '#EAEAEA',
              padding: { xs: '10px', sm: '15px', md: '20px' },
              transition: 'background-color 0.3s ease'
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '10px', sm: '15px', md: '20px' }
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '8px', sm: '13px', md: '14px' },
                    fontWeight: '500',
                    fontFamily: '"Tajawal", sans-serif',
                    textAlign: 'center'
                  }}
                >
                  {bottomCard.text}
                </Typography>
              </Box>
              <Box
                component="img"
                src={bottomCard.imgSrc}
                alt="Game"
                sx={{
                  width: { xs: '40px', sm: '50px', md: '60px' },
                  height: { xs: '40px', sm: '50px', md: '60px' },
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Card>
        </Box>
      </Card>

      <Card
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '48%', md: '630px' },
          minWidth: { xs: '300px', sm: 'auto' },
          height: { xs: 'auto', sm: '600px', md: '660px' },
          borderRadius: { xs: '20px', sm: '30px', md: '40px' },
          padding: { xs: '15px', sm: '20px' },
          display: 'flex',
          flexDirection: 'column',
          boxShadow: theme.palette.mode === 'dark' ? 
            '0px 4px 4px rgba(0, 0, 0, 0.25)' : 
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(-135deg, rgba(233, 186, 0, 0.2)0%, rgba(0, 0, 0, 1) 60%)'
            : 'linear-gradient(-135deg, rgba(233, 186, 0, 0.2) 0%, rgba(255, 255, 255, 1) 50%)'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Tajawal", sans-serif',
            fontSize: { xs: '18px', sm: '24px', md: '32px' },
            fontWeight: 500,
            textAlign: 'right',
            marginRight: { xs: '10px', sm: '20px' },
            marginTop: { xs: '10px', sm: '40px' },
            marginBottom: { xs: '10px', sm: '0' },
            color: 'inherit',
            direction: 'rtl'
          }}
        >
          الأمان أولويتنا
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: { xs: '10px', sm: '15px', md: '10px' },
            padding: { xs: '0 5px', sm: '0 10px' }
          }}
        >
          {CardTwo.map((card, index) => (
            <Card
              key={index}
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '440px', md: '480px' },
                height: { xs: '100px', sm: '116px', md: '126px' },
                borderRadius: { xs: '15px', sm: '20px' },
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: theme =>
                  theme.palette.mode === 'dark' ? '#090F21' : '#EAEAEA',
                padding: { xs: '10px', sm: '15px', md: '10px' },
                transition: 'background-color 0.3s ease'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: '10px', sm: '15px', md: '0px' }
                }}
              >
                <Box
                  component="img"
                  src={card.imgSrc}
                  alt="Game"
                  sx={{
                    width: { xs: '40px', sm: '50px', md: '60px' },
                    height: { xs: '40px', sm: '50px', md: '60px' },
                    objectFit: 'contain'
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    gap: { xs: '4px', sm: '6px', md: '8px' },
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', sm: '15px', md: '20px' },
                      fontWeight: '500',
                      fontFamily: '"Tajawal", sans-serif',
                      color: "#FF2A66",
                      direction: 'rtl'
                    }}
                  >
                    {card.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', sm: '13px', md: '20px' },
                      fontWeight: 500,
                      fontFamily: '"Tajawal", sans-serif',
                      opacity: 0.8,
                      direction: 'rtl'
                    }}
                  >
                    {card.subtext}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default StyledPage;