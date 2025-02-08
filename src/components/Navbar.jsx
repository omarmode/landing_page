// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Navbar({ darkMode, setDarkMode }) {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'Ar' : 'En'));
  };
    
  return (
    <AppBar
    sx={{
      background: darkMode ? '#00040F' : '#FFF', 
      boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.12)', // الظلال حسب التصميم
      width: '100%', 
      margin: '0',
      color: darkMode ? '#ffffff' : '#000000',
      direction: 'rtl',
      padding: '0 16px',
      zIndex: 1300,
      borderRadius: '0', // إزالة الحواف الدائرية ليصبح مطابقًا للتصميم
    }}
  >
  
  
  
  
      <Toolbar>
        
        <Box sx={{ marginLeft: '50px' }} >
          <div style={{ cursor: 'pointer', display: 'inline-block' }}>
          <svg width="72" height="26" viewBox="0 0 72 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 633337 2" clip-path="url(#clip0_4383_3743)">
<path id="Vector" d="M45.9682 0.353523C46.1288 0.400739 46.2884 0.449856 46.448 0.500332C46.0903 0.933707 45.6975 1.32867 45.3002 1.72513C45.225 1.80041 45.1498 1.87571 45.0746 1.95103C44.8688 2.15711 44.6628 2.36299 44.4567 2.56883C44.2342 2.79118 44.0119 3.01373 43.7896 3.23625C43.3543 3.67184 42.9188 4.10724 42.4833 4.54258C42.1292 4.89647 41.7752 5.25043 41.4213 5.60444C41.3709 5.65486 41.3205 5.70527 41.2686 5.75721C41.1662 5.85963 41.0638 5.96205 40.9614 6.06447C40.0015 7.02459 39.0413 7.98451 38.0811 8.94435C37.2576 9.76753 36.4343 10.5909 35.6111 11.4144C34.6548 12.3711 33.6983 13.3277 32.7417 14.2841C32.6397 14.3861 32.5376 14.4882 32.4355 14.5902C32.3853 14.6404 32.3351 14.6906 32.2834 14.7423C31.9299 15.0957 31.5766 15.4492 31.2232 15.8027C30.7924 16.2337 30.3615 16.6645 29.9305 17.0952C29.7106 17.3149 29.4908 17.5346 29.2712 17.7545C29.07 17.9559 28.8685 18.1572 28.667 18.3584C28.5943 18.431 28.5217 18.5037 28.4491 18.5764C28.0976 18.9286 27.7444 19.2754 27.3654 19.5982C27.2001 19.7408 27.0476 19.8946 26.8947 20.0502C26.8629 20.0824 26.8312 20.1145 26.7985 20.1477C26.7306 20.2165 26.6628 20.2854 26.595 20.3544C26.4868 20.4645 26.3782 20.5743 26.2695 20.684C25.9609 20.9955 25.6524 21.3072 25.3451 21.62C23.6816 23.3126 23.6816 23.3126 22.8141 23.861C22.7597 23.8961 22.7053 23.9311 22.6493 23.9673C22.5224 24.0458 22.3948 24.1191 22.2634 24.1897C22.2181 24.2144 22.1729 24.2392 22.1263 24.2646C21.2558 24.7324 20.3529 25.0474 19.3988 25.2954C19.3514 25.3079 19.3039 25.3203 19.255 25.3331C17.829 25.6863 16.0377 25.6519 14.6174 25.2954C14.5701 25.2837 14.5228 25.272 14.4741 25.2599C12.3919 24.7313 10.699 23.6607 9.203 22.1329C9.08867 22.0207 8.97046 21.9176 8.84818 21.8142C8.49571 21.5074 8.1682 21.1763 7.83926 20.8448C7.72446 20.7292 7.60944 20.6137 7.49437 20.4983C7.20881 20.2118 6.92362 19.925 6.63842 19.6382C6.39661 19.395 6.15466 19.152 5.91252 18.9091C5.80009 18.7963 5.68787 18.6832 5.57566 18.5701C5.16226 18.1535 5.16226 18.1535 4.72633 17.7608C4.26405 17.3652 3.84426 16.9213 3.41518 16.4906C3.31643 16.3917 3.21767 16.2929 3.1189 16.194C2.86047 15.9353 2.60226 15.6765 2.34409 15.4175C2.08 15.1527 1.81571 14.8881 1.55144 14.6235C1.03406 14.1054 0.5169 13.5871 -0.00012207 13.0686C0.0965176 12.8493 0.212363 12.7026 0.381598 12.5337C0.43179 12.4833 0.481985 12.4329 0.533698 12.381C0.588055 12.3271 0.64241 12.2732 0.698414 12.2177C0.754537 12.1617 0.810663 12.1056 0.868487 12.0478C0.987414 11.9291 1.10651 11.8105 1.22576 11.6921C1.40693 11.5122 1.58755 11.3317 1.7681 11.1511C1.88395 11.0356 1.99984 10.9201 2.11576 10.8047C2.16929 10.7512 2.22282 10.6978 2.27797 10.6427C3.05977 9.86751 3.05977 9.86751 3.48348 9.58503C3.53606 9.6377 3.53607 9.6377 3.5897 9.69144C4.44417 10.5474 5.29883 11.4032 6.15369 12.2588C6.5671 12.6725 6.98044 13.0864 7.39364 13.5003C7.75394 13.8613 8.11438 14.2222 8.47495 14.5829C8.66571 14.7738 8.85641 14.9647 9.04697 15.1557C9.22668 15.3359 9.40654 15.5159 9.58653 15.6958C9.68334 15.7926 9.77997 15.8896 9.87659 15.9866C10.1785 16.2881 10.4835 16.5806 10.8087 16.857C11.0336 17.0537 11.2401 17.2691 11.4489 17.4826C11.5464 17.5813 11.6439 17.68 11.7414 17.7787C11.8923 17.9316 12.0429 18.0847 12.1932 18.2382C12.8887 18.9475 13.56 19.6124 14.4637 20.0529C14.5094 20.0755 14.5552 20.098 14.6023 20.1213C15.2471 20.427 15.9517 20.6198 16.6665 20.6506C16.7178 20.6533 16.769 20.6561 16.8218 20.6589C18.4044 20.7024 19.7962 20.1052 20.9698 19.0796C21.228 18.8275 21.4738 18.5648 21.7191 18.3003C21.7914 18.2231 21.8638 18.1459 21.9362 18.0688C22.0924 17.9023 22.2484 17.7356 22.4041 17.5687C22.8383 17.1036 23.2745 16.6404 23.7107 16.1772C23.7569 16.1281 23.8032 16.079 23.8508 16.0284C24.5831 15.2505 25.3205 14.4777 26.0617 13.7083C26.1122 13.656 26.1626 13.6036 26.2145 13.5497C26.7361 13.0083 27.2583 12.4676 27.7811 11.9274C28.0494 11.6502 28.3175 11.3728 28.5854 11.0953C28.6388 11.0401 28.6921 10.9849 28.7471 10.928C29.4979 10.1499 30.24 9.36439 30.976 8.57234C32.2428 7.20908 33.5246 5.86202 34.8376 4.54293C34.888 4.49221 34.9384 4.44149 34.9903 4.38923C38.2944 1.07012 41.07 -1.02466 45.9682 0.353523Z" fill="white"/>
<path id="Vector_2" d="M19.4667 0.704534C19.5203 0.718105 19.5738 0.731676 19.629 0.745658C21.3968 1.20534 23.1409 2.04066 24.4071 3.38873C24.5197 3.50335 24.6366 3.60613 24.7593 3.7098C25.1392 4.04004 25.4913 4.39821 25.8461 4.75487C25.9199 4.82875 25.9936 4.90261 26.0674 4.97647C26.2601 5.16938 26.4525 5.36249 26.6449 5.55565C26.8411 5.75249 27.0374 5.94914 27.2337 6.1458C27.5782 6.49096 27.9226 6.83628 28.2668 7.18173C28.3843 7.29964 28.5019 7.41746 28.6197 7.53514C28.5684 7.58607 28.5171 7.63701 28.4643 7.68949C28.2717 7.88078 28.0794 8.0723 27.8872 8.26389C27.8044 8.34635 27.7215 8.42876 27.6386 8.5111C27.0401 9.10522 27.0401 9.10522 26.4761 9.73173C26.2592 9.97875 26.023 10.2072 25.7893 10.4381C25.7393 10.4878 25.6893 10.5375 25.6379 10.5886C25.5163 10.7094 25.3946 10.83 25.2727 10.9504C25.0782 10.8621 24.9387 10.7697 24.789 10.6178C24.7498 10.5783 24.7106 10.5388 24.6701 10.4982C24.6284 10.4556 24.5867 10.4129 24.5438 10.369C24.4781 10.3028 24.4781 10.3028 24.411 10.2352C24.271 10.094 24.1315 9.95232 23.992 9.81058C23.8534 9.67011 23.7147 9.52975 23.5759 9.38959C23.4896 9.3025 23.4035 9.21523 23.3176 9.12774C23.065 8.87231 22.8028 8.63339 22.531 8.39862C22.3582 8.2462 22.198 8.08354 22.0381 7.91776C21.9723 7.85049 21.9065 7.78325 21.8407 7.71604C21.7405 7.61328 21.6405 7.51033 21.541 7.4068C20.4391 6.26209 19.0447 5.41943 17.4175 5.34934C17.3663 5.34661 17.315 5.34388 17.2622 5.34107C15.6436 5.29655 14.1799 5.92989 13.0078 7.01936C12.7225 7.29327 12.4444 7.57449 12.166 7.85532C12.0766 7.94492 11.9872 8.0345 11.8978 8.12404C11.6646 8.35775 11.4319 8.59187 11.1992 8.82608C10.9608 9.06583 10.7221 9.30518 10.4834 9.54456C10.0166 10.0128 9.55026 10.4815 9.08419 10.9504C8.83427 10.8453 8.67552 10.6949 8.48525 10.5036C8.4539 10.4723 8.42254 10.4409 8.39024 10.4087C8.28717 10.3055 8.18459 10.2019 8.08202 10.0982C8.01046 10.0264 7.93887 9.95462 7.86725 9.88286C7.6792 9.69429 7.49156 9.5053 7.304 9.31623C7.11239 9.12323 6.9204 8.93061 6.72844 8.73796C6.3521 8.36017 5.97621 7.98194 5.60059 7.60344C5.86513 7.28763 6.13892 6.98618 6.42945 6.69418C6.46917 6.65402 6.50889 6.61385 6.54981 6.57246C6.67995 6.44098 6.81036 6.30977 6.94082 6.17862C6.98589 6.13327 7.03096 6.08793 7.07739 6.04121C7.3162 5.80098 7.55523 5.56097 7.79443 5.32113C8.03887 5.07593 8.28251 4.82995 8.52596 4.58378C8.71556 4.39238 8.90578 4.2016 9.09616 4.01098C9.18611 3.92071 9.27583 3.8302 9.36529 3.73945C10.1227 2.97184 10.9286 2.28789 11.8847 1.77609C11.9361 1.7482 11.9874 1.72032 12.0403 1.69159C12.8783 1.24529 13.7662 0.93589 14.6853 0.704534C14.7294 0.693154 14.7736 0.681773 14.819 0.670048C16.2441 0.32082 18.048 0.335094 19.4667 0.704534Z" fill="white"/>
<path id="Vector_3" d="M58.3295 3.28867C59.4309 4.3888 59.8208 5.70747 59.8377 7.23903C59.8234 8.69977 59.2966 9.98248 58.2651 11.0196C58.2298 11.0573 58.1945 11.0949 58.1581 11.1338C57.2275 12.0377 55.7811 12.3161 54.5339 12.3204C53.0592 12.2934 51.7814 11.8092 50.7429 10.7463C50.0003 9.87003 49.6338 8.6712 49.5902 7.53596C49.5861 7.44945 49.5861 7.44945 49.582 7.3612C49.5458 5.89451 50.0002 4.52331 51.0069 3.44874C51.8604 2.57588 53.0785 2.07771 54.2948 2.00531C55.7822 1.99044 57.2118 2.21607 58.3295 3.28867ZM52.8689 4.73542C52.169 5.63554 52.1852 6.7899 52.2542 7.87749C52.352 8.65079 52.6573 9.41948 53.2838 9.90987C53.8911 10.3028 54.5401 10.4314 55.2516 10.3002C55.9251 10.1314 56.3525 9.80142 56.7624 9.24362C57.108 8.60418 57.1981 7.89042 57.1935 7.17309C57.1932 7.11059 57.1929 7.04809 57.1925 6.9837C57.1776 6.11878 57.0059 5.25937 56.3995 4.60734C55.8723 4.12237 55.2132 3.94633 54.5083 3.96297C53.8553 4.03014 53.3016 4.23185 52.8689 4.73542Z" fill="#FF2A66"/>
<path id="Vector_4" d="M35.9289 14.9124C36.1185 14.999 36.2584 15.0881 36.4055 15.2355C36.4437 15.2734 36.4819 15.3113 36.5212 15.3503C36.5623 15.3918 36.6034 15.4332 36.6457 15.4759C36.6896 15.5197 36.7335 15.5635 36.7787 15.6086C36.9239 15.7535 37.0685 15.8988 37.2131 16.0442C37.3142 16.1453 37.4152 16.2464 37.5163 16.3475C37.7283 16.5596 37.9401 16.772 38.1518 16.9845C38.422 17.2559 38.6926 17.5268 38.9634 17.7976C39.1723 18.0065 39.3811 18.2156 39.5898 18.4248C39.6894 18.5247 39.7891 18.6245 39.8889 18.7243C40.029 18.8645 40.1688 19.005 40.3086 19.1455C40.3492 19.1861 40.3899 19.2267 40.4317 19.2686C40.68 19.5187 40.9139 19.7779 41.1445 20.0444C41.2955 20.216 41.4549 20.3777 41.617 20.5388C41.6496 20.5713 41.6822 20.6038 41.7158 20.6373C41.7855 20.7068 41.8553 20.7762 41.9252 20.8455C42.0363 20.9557 42.1472 21.0661 42.258 21.1766C42.4933 21.4111 42.7288 21.6454 42.9644 21.8796C43.2378 22.1513 43.5111 22.4232 43.7841 22.6954C43.8924 22.8033 44.0009 22.9109 44.1095 23.0186C44.436 23.3435 44.7556 23.6707 45.0538 24.022C45.2011 24.1925 45.3604 24.3478 45.5216 24.5051C45.6268 24.6077 45.7311 24.7112 45.8333 24.8167C45.8333 24.8393 45.8333 24.8618 45.8333 24.885C40.2149 25.797 40.2149 25.797 38.2355 24.3709C37.4197 23.7456 36.7042 23.0143 36.0143 22.2552C35.9573 22.1927 35.9004 22.1301 35.8417 22.0656C35.1865 21.3402 34.56 20.5946 33.9574 19.8251C33.6266 19.4059 33.2737 19.0099 32.8936 18.635C32.8345 18.5766 32.7754 18.5181 32.7145 18.4579C32.6708 18.4149 32.627 18.3719 32.5819 18.3277C32.9236 17.9149 33.2945 17.538 33.6743 17.1603C33.7396 17.0952 33.8048 17.03 33.8701 16.9648C34.0404 16.7948 34.2109 16.6249 34.3814 16.4551C34.556 16.2812 34.7304 16.1071 34.9048 15.9331C35.246 15.5926 35.5874 15.2524 35.9289 14.9124Z" fill="#FF2A66"/>
<path id="Vector_5" d="M61.6123 2.20768C62.4463 2.20768 63.2803 2.20768 64.1396 2.20768C64.1622 3.56014 64.1847 4.91259 64.2079 6.30604C64.7326 5.72965 64.7326 5.72965 65.2483 5.14617C65.4904 4.86979 65.7377 4.59792 65.9839 4.32516C66.0864 4.21134 66.1888 4.09749 66.2913 3.98363C66.906 3.30057 66.906 3.30057 67.0576 3.13221C67.1672 3.0104 67.2768 2.88854 67.3863 2.76667C67.4419 2.70477 67.4976 2.64287 67.5549 2.57909C67.6056 2.52265 67.6564 2.46621 67.7086 2.40806C67.8896 2.20814 67.8896 2.20814 68.0188 2.19946C68.072 2.19961 68.1253 2.19977 68.1801 2.19992C68.2403 2.19993 68.3004 2.19993 68.3624 2.19994C68.4278 2.20029 68.4932 2.20064 68.5606 2.20101C68.6605 2.20115 68.6605 2.20115 68.7624 2.2013C68.9761 2.20168 69.1898 2.20254 69.4035 2.20341C69.5479 2.20375 69.6924 2.20406 69.8369 2.20434C70.1919 2.2051 70.5469 2.20624 70.9019 2.20768C70.8373 2.28375 70.7726 2.35974 70.7078 2.43569C70.6718 2.47802 70.6357 2.52034 70.5986 2.56395C70.4079 2.7822 70.1982 2.98081 69.9907 3.18291C69.8518 3.32511 69.7224 3.46795 69.5933 3.61864C69.3329 3.91726 69.0573 4.19768 68.7762 4.47672C68.7253 4.52749 68.6744 4.57827 68.622 4.63058C68.4614 4.79078 68.3006 4.95073 68.1398 5.11068C68.0301 5.22006 67.9204 5.32946 67.8107 5.43887C67.5435 5.70534 67.276 5.97161 67.0085 6.23773C67.0888 6.45221 67.1731 6.63728 67.3065 6.8234C67.3385 6.86835 67.3704 6.91329 67.4034 6.9596C67.4379 7.00737 67.4724 7.05514 67.508 7.10436C67.5623 7.18045 67.5623 7.18045 67.6178 7.25807C67.733 7.41915 67.8488 7.57984 67.9648 7.74046C68.0382 7.84257 68.1117 7.94467 68.1852 8.04677C68.3699 8.3032 68.5552 8.55925 68.7406 8.81518C68.9263 9.07151 69.1115 9.32813 69.2967 9.58473C69.3701 9.6863 69.4435 9.78787 69.5169 9.88943C69.6712 10.1031 69.8254 10.317 69.9795 10.5309C70.0189 10.5855 70.0582 10.6401 70.0988 10.6963C70.1733 10.7996 70.2477 10.903 70.3221 11.0063C70.3563 11.0537 70.3904 11.1011 70.4256 11.1499C70.4587 11.1958 70.4918 11.2417 70.5259 11.289C70.6683 11.4829 70.8155 11.673 70.9634 11.8627C71.0385 11.9754 71.0385 11.9754 71.0385 12.112C70.6133 12.1375 70.1886 12.156 69.7628 12.1683C69.6183 12.1735 69.4739 12.1804 69.3296 12.1893C68.165 12.2594 68.165 12.2594 67.8355 12.0169C67.6156 11.7776 67.4729 11.5044 67.3392 11.2102C67.2673 11.0567 67.1769 10.9235 67.0771 10.7868C67.0492 10.7464 67.0214 10.706 66.9927 10.6644C66.9655 10.6251 66.9383 10.5858 66.9103 10.5453C66.8472 10.4539 66.7842 10.3624 66.7211 10.271C66.6897 10.2255 66.6583 10.18 66.626 10.1332C66.4975 9.94693 66.3694 9.76042 66.2413 9.5739C65.8835 9.05296 65.5244 8.533 65.1642 8.01369C64.7669 8.19759 64.4035 8.42795 64.2079 8.83336C64.0837 9.38084 64.1217 9.95782 64.1311 10.5154C64.1312 10.6702 64.131 10.8251 64.1306 10.9799C64.1295 11.3575 64.1347 11.7343 64.1396 12.112C63.3056 12.112 62.4716 12.112 61.6123 12.112C61.6123 8.84361 61.6123 5.57516 61.6123 2.20768Z" fill="#FF2A66"/>
<path id="Vector_6" d="M62.9785 14.7754C63.9027 14.7754 64.8269 14.7754 65.7791 14.7754C66.5262 16.0783 67.2662 17.3849 67.9862 18.703C68.0316 18.786 68.0316 18.786 68.0779 18.8707C68.3868 19.4383 68.687 20.0101 68.9894 20.5814C68.9894 18.6654 68.9894 16.7494 68.9894 14.7754C69.6657 14.7754 70.3419 14.7754 71.0386 14.7754C71.0386 17.6832 71.0386 20.591 71.0386 23.5869C70.1595 23.5869 69.2804 23.5869 68.3747 23.5869C68.2338 23.3248 68.0929 23.0628 67.9478 22.7928C67.6364 22.2141 67.3238 21.6361 67.0086 21.0595C66.7073 20.5079 66.4068 19.9559 66.1078 19.4031C66.0705 19.3345 66.0332 19.2659 65.9948 19.1953C65.6576 18.5707 65.3457 17.9387 65.0277 17.3027C65.0277 19.3765 65.0277 21.4503 65.0277 23.5869C64.3515 23.5869 63.6752 23.5869 62.9785 23.5869C62.9785 20.6791 62.9785 17.7713 62.9785 14.7754Z" fill="white"/>
<path id="Vector_7" d="M49.9316 14.7757C50.6924 14.7715 51.4532 14.7673 52.237 14.7629C52.4756 14.7611 52.7142 14.7592 52.96 14.7573C53.2555 14.7563 53.2555 14.7563 53.3946 14.7562C53.49 14.7559 53.5854 14.7551 53.6808 14.7541C54.7382 14.743 55.5192 14.9416 56.4079 15.5143C56.9728 16.0792 57.2468 16.7637 57.2575 17.5549C57.2494 18.328 57.0244 19.008 56.4783 19.5729C55.2698 20.6186 53.6761 20.4593 52.1857 20.4451C52.1857 21.482 52.1857 22.5189 52.1857 23.5872C51.4419 23.5872 50.698 23.5872 49.9316 23.5872C49.9316 20.6794 49.9316 17.7716 49.9316 14.7757ZM52.1857 16.4834C52.1857 17.2047 52.1857 17.926 52.1857 18.6692C52.49 18.6748 52.7943 18.6804 53.1079 18.6863C53.2027 18.6887 53.2976 18.6912 53.3954 18.6938C53.9388 18.6986 54.3398 18.6728 54.7577 18.2935C54.9497 18.0796 54.9698 17.7859 54.9863 17.508C54.9387 17.1855 54.8472 16.9608 54.6191 16.7267C54.286 16.5284 54.0357 16.4665 53.6466 16.47C53.5314 16.4706 53.5314 16.4706 53.4138 16.4711C53.3171 16.4723 53.2203 16.4736 53.1207 16.4748C52.6579 16.4791 52.6579 16.4791 52.1857 16.4834Z" fill="white"/>
<path id="Vector_8" d="M58.6066 14.7754C59.373 14.7754 60.1394 14.7754 60.929 14.7754C60.929 17.6832 60.929 20.591 60.929 23.5869C60.1626 23.5869 59.3962 23.5869 58.6066 23.5869C58.6066 20.6791 58.6066 17.7713 58.6066 14.7754Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4383_3743">
<rect width="71.0383" height="25" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

          </div>
        </Box>

        {/* الروابط (في المنتصف) */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '30px' }}>
  {/* الروابط */}
  <Typography
    variant="body1"
    component={Link}
    to="/"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    الرئيسية
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/about-us"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    عنّا
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/why-us"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    لماذا نحن
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/rewards"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    نظام المكافآت
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/download"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    تحميل التطبيق
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/api"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    API
  </Typography>
  <Typography
    variant="body1"
    component={Link}
    to="/faq"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'bold',
      '&:hover': { textDecoration: 'none' },
    }}
  >
    FAQ
  </Typography>
</Box>


<Box sx={{ display: 'flex', alignItems: 'center', gap: '25px', marginRight: 'auto' }}>
<IconButton
      edge="end"
      color="inherit"
      onClick={toggleLanguage}
      sx={{
        backgroundColor: '#170B23', 
        borderRadius: '50%', 
        padding: '10px',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#FFFFFF', 
          fontWeight: 'bold', 
          fontSize: '14px',
        }}
      >
        {language}
      </Typography>
    </IconButton>

<IconButton
  edge="end"
  color="inherit"
  onClick={() => setDarkMode((prev) => !prev)}
  sx={{
    backgroundColor: darkMode ? '#722ED1' : '#4B6A9B', 
    borderRadius: '50%', 
    padding: '8px', // حشو داخلي مناسب
  }}
>
  {darkMode ? (
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g id="tdesign:mode-dark">
   <path id="Vector" d="M19.6133 4.66331L17.8997 5.60051L19.6133 6.53771L20.5505 8.25131L21.4877 6.53771L23.2013 5.60051L21.4877 4.66331L20.5505 2.94971L19.6133 4.66331ZM13.0949 5.64011C11.5233 5.959 10.0566 6.66651 8.82871 7.69806C7.60086 8.7296 6.65098 10.0523 6.06581 11.5454C5.48064 13.0385 5.27883 14.6543 5.47879 16.2455C5.67876 17.8366 6.27414 19.3523 7.21057 20.6541C8.14699 21.956 9.39462 23.0025 10.8395 23.6982C12.2845 24.3938 13.8806 24.7164 15.4823 24.6365C17.0839 24.5565 18.6401 24.0767 20.0086 23.2406C21.3771 22.4046 22.5143 21.2391 23.3165 19.8505C20.4667 19.8283 17.7412 18.6807 15.734 16.6577C13.7267 14.6347 12.6004 11.9004 12.6005 9.05051C12.6005 7.87451 12.7577 6.72611 13.0949 5.64011ZM3.00049 15.0505C3.00049 8.42291 8.37289 3.05051 15.0005 3.05051H17.0813L16.0397 4.85051C15.3449 6.05051 15.0005 7.47851 15.0005 9.05051C15.0003 10.2908 15.2748 11.5158 15.8043 12.6375C16.3338 13.7591 17.1051 14.7496 18.0628 15.5378C19.0205 16.3259 20.1409 16.8922 21.3435 17.196C22.546 17.4997 23.801 17.5334 25.0181 17.2945L27.0365 16.9021L26.3849 18.8533C24.7949 23.6149 20.3009 27.0505 15.0005 27.0505C8.37289 27.0505 3.00049 21.6781 3.00049 15.0505ZM25.2005 8.34971L26.2973 10.3537L28.3013 11.4505L26.2973 12.5473L25.2005 14.5513L24.1037 12.5473L22.0997 11.4505L24.1037 10.3537L25.2005 8.34971Z" fill="white"/>
   </g>
   </svg>
   
  ) : (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="material-symbols:light-mode-outline-rounded">
    <path id="Vector" d="M15.0009 18.7032C16.0295 18.7032 16.9039 18.3432 17.624 17.6231C18.344 16.9031 18.704 16.0287 18.704 15.0001C18.704 13.9714 18.344 13.0971 17.624 12.377C16.9039 11.657 16.0295 11.2969 15.0009 11.2969C13.9722 11.2969 13.0979 11.657 12.3778 12.377C11.6578 13.0971 11.2977 13.9714 11.2977 15.0001C11.2977 16.0287 11.6578 16.9031 12.3778 17.6231C13.0979 18.3432 13.9722 18.7032 15.0009 18.7032ZM15.0009 21.172C13.2933 21.172 11.838 20.57 10.6349 19.3661C9.43178 18.1621 8.82981 16.7068 8.82899 15.0001C8.82816 13.2933 9.43013 11.838 10.6349 10.6341C11.8396 9.43013 13.295 8.82816 15.0009 8.82816C16.7068 8.82816 18.1626 9.43013 19.3681 10.6341C20.5737 11.838 21.1753 13.2933 21.1728 15.0001C21.1703 16.7068 20.5684 18.1626 19.3669 19.3673C18.1654 20.5721 16.7101 21.1736 15.0009 21.172ZM2.65708 16.2344C2.30734 16.2344 2.01438 16.1159 1.7782 15.8789C1.54203 15.6419 1.42353 15.349 1.4227 15.0001C1.42188 14.6511 1.54038 14.3582 1.7782 14.1212C2.01603 13.8842 2.30899 13.7657 2.65708 13.7657H5.12585C5.47559 13.7657 5.76896 13.8842 6.00596 14.1212C6.24296 14.3582 6.36105 14.6511 6.36023 15.0001C6.3594 15.349 6.2409 15.6424 6.00472 15.8802C5.76855 16.118 5.47559 16.2361 5.12585 16.2344H2.65708ZM24.8759 16.2344C24.5262 16.2344 24.2332 16.1159 23.9971 15.8789C23.7609 15.6419 23.6424 15.349 23.6416 15.0001C23.6407 14.6511 23.7592 14.3582 23.9971 14.1212C24.2349 13.8842 24.5278 13.7657 24.8759 13.7657H27.3447C27.6944 13.7657 27.9878 13.8842 28.2248 14.1212C28.4618 14.3582 28.5799 14.6511 28.5791 15.0001C28.5783 15.349 28.4598 15.6424 28.2236 15.8802C27.9874 16.118 27.6944 16.2361 27.3447 16.2344H24.8759ZM15.0009 6.3594C14.6512 6.3594 14.3582 6.2409 14.122 6.0039C13.8858 5.7669 13.7673 5.47394 13.7665 5.12502V2.65626C13.7665 2.30652 13.885 2.01356 14.122 1.77738C14.359 1.5412 14.652 1.4227 15.0009 1.42188C15.3498 1.42106 15.6432 1.53956 15.881 1.77738C16.1188 2.0152 16.2369 2.30816 16.2353 2.65626V5.12502C16.2353 5.47476 16.1168 5.76813 15.8798 6.00513C15.6428 6.24214 15.3498 6.36022 15.0009 6.3594ZM15.0009 28.5783C14.6512 28.5783 14.3582 28.4598 14.122 28.2228C13.8858 27.9858 13.7673 27.6928 13.7665 27.3439V24.8751C13.7665 24.5254 13.885 24.2324 14.122 23.9962C14.359 23.7601 14.652 23.6416 15.0009 23.6407C15.3498 23.6399 15.6432 23.7584 15.881 23.9962C16.1188 24.2341 16.2369 24.527 16.2353 24.8751V27.3439C16.2353 27.6936 16.1168 27.987 15.8798 28.224C15.6428 28.461 15.3498 28.5791 15.0009 28.5783ZM7.16257 8.88988L5.83561 7.59378C5.58874 7.36748 5.47024 7.07946 5.48011 6.72972C5.48999 6.37998 5.60849 6.08167 5.83561 5.83479C6.08249 5.58791 6.3808 5.46448 6.73054 5.46448C7.08028 5.46448 7.3683 5.58791 7.59461 5.83479L8.89071 7.16175C9.11701 7.40863 9.23016 7.69665 9.23016 8.02582C9.23016 8.35498 9.11701 8.64301 8.89071 8.88988C8.6644 9.13676 8.38173 9.25526 8.04269 9.24538C7.70364 9.23551 7.41027 9.11701 7.16257 8.88988ZM22.4072 24.1653L21.1111 22.8384C20.8848 22.5915 20.7716 22.2985 20.7716 21.9595C20.7716 21.6205 20.8848 21.3374 21.1111 21.1103C21.3374 20.8634 21.6205 20.7453 21.9603 20.756C22.3002 20.7667 22.5932 20.8848 22.8392 21.1103L24.1662 22.4064C24.413 22.6327 24.5315 22.9207 24.5217 23.2704C24.5118 23.6202 24.3933 23.9185 24.1662 24.1653C23.9193 24.4122 23.621 24.5357 23.2712 24.5357C22.9215 24.5357 22.6335 24.4122 22.4072 24.1653ZM21.1111 8.88988C20.8642 8.66358 20.7457 8.38091 20.7556 8.04186C20.7654 7.70282 20.884 7.40945 21.1111 7.16175L22.4072 5.83479C22.6335 5.58791 22.9215 5.46941 23.2712 5.47929C23.621 5.48916 23.9193 5.60766 24.1662 5.83479C24.413 6.08167 24.5365 6.37998 24.5365 6.72972C24.5365 7.07946 24.413 7.36748 24.1662 7.59378L22.8392 8.88988C22.5923 9.11619 22.3043 9.22934 21.9751 9.22934C21.646 9.22934 21.358 9.11619 21.1111 8.88988ZM5.83561 24.1653C5.58874 23.9185 5.4653 23.6202 5.4653 23.2704C5.4653 22.9207 5.58874 22.6327 5.83561 22.4064L7.16257 21.1103C7.40945 20.8839 7.70241 20.7708 8.04145 20.7708C8.3805 20.7708 8.66358 20.8839 8.89071 21.1103C9.13758 21.3366 9.25608 21.6196 9.24621 21.9595C9.23633 22.2994 9.11783 22.5923 8.89071 22.8384L7.59461 24.1653C7.3683 24.4122 7.08028 24.5307 6.73054 24.5208C6.3808 24.511 6.08249 24.3925 5.83561 24.1653Z" fill="#00040F"/>
    </g>
    </svg>
    
  )}
</IconButton>


<button
  style={{
    background: 'var(--primary-pink, #FF2A66)', // الخلفية
    color: 'var(--general-btn-text, #FFF)', // لون النص
    border: 'none', // إزالة الحدود
    padding: '15px 20px', // الحشو الداخلي
    borderRadius: '30px', // الحواف الدائرية
    fontWeight: 700, // وزن الخط الغامق
    fontFamily: 'Tajawal, sans-serif', // نوع الخط
    fontSize: '16px', // حجم الخط
    lineHeight: '22px', 
    textAlign: 'center',
    cursor: 'pointer', // مؤشر اليد عند التمرير
    width: '135px', // عرض الزر
    height: '48px', // ارتفاع الزر
  }}
>
  ابدأ الآن معنا!
</button>


</Box>



      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
