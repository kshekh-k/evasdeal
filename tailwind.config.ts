import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--nunito)", ...defaultTheme.fontFamily.sans],
        dm: ["var(--dmsans)", ...defaultTheme.fontFamily.sans],
    },
      colors: {
        red:{
          DEFAULT:'#c5331e',
          2:'#953426',
        },
        blue:{
          DEFAULT:'#4e6297',
          1:'#3a4a75'
        },
        primary:
        {
          DEFAULT:'#00BF89', 
          2: '#006A53'
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow:{
        1:'0 5px 10px -2px rgba(0,0,0,.1)',
      },

      spacing: {
        "128": "32rem",
        "92": "475px",
        "63": "270px",
        "29": "120px",
        "25": "100px",
        "105p": "105px",
        "50p": "50px",
        "54p": "54px",
        "33": "130px",
        "23": "88px",
        "1p": "1px",
        "2p": "2px",
        "3p": "3px",
        "5p": "5px",
        "7p": "7px",
        "9p": "9px",
        "10p": "10px",
        "11p": "11px",
        "13p": "13px",
        "15p": "15px",
        "18p": "18px",
        "19p": "19px",
        "21p": "21px",
        "22p": "22px",
        "23p": "23px",
        "25p": "25px",
        "26p": "26px",
        "29p": "29px",
        "30p": "30px",
        "31p": "31px",
        "35p": "35px",
        "52p": "52px",
        "53p": "53px",
        "55p": "55px",
        "59p": "59px",
        "27p": "27px",
        "33.5p": "33.5px", 
        "38p": "38px",
        "40p": "40px",
        "46p": "46px",
        "47p": "47px",
        "49p": "49px",  
        "58p": "58px",
        "75p": "75px",
        "77p": "77px",
        "60p": "60px",
        "65p": "65px",
        "66p": "66px",
        "68p": "68px",
        "70p": "70px",
        "72p": "72px",
        "74p": "74px",
        "78p": "78px",
        "80p": "80px",
        "82p": "82px",
        "84p": "84px",
        "89p": "89px",
        "93p": "93px",
        "90p": "90px",
        "97p": "97px",
        "103p": "103px",
        "116p": "116px",
        "120p": "120px",
        "125p": "125px",
        "130p": "130px",
        "135p": "135px",
        "132p": "132px",
        "150p": "150px",
        "216p": "216px",
        "225p": "225px",
        "296p": "296px",
        "270p": "270px", 
        "137p": "137px",
        "141p": "141px",
        "146p": "146px", 
        "152p": "152px",
        "155p": "155px",
        "163p": "163px",
        "168p": "168px",
        "173p": "173px",
        "210p": "210px", 
        "245p": "245px",
        "250p": "250px",
        "260p": "260px",
        "263p": "263px",
        "266p": "266px",
        "275p": "275px",
        "300p": "300px",
        "312p": "312px",
        "318p": "318px",
        "322p": "322px",
        "337p": "337px",
        "345p": "345px",
        "344p": "344px",
        "354p": "354px",
        "364p": "364px",
        "370p": "370px",
        "382p": "382px",
        "385p": "385px",
        "400p": "400px",
        "407p": "407px",
        "411p": "411px",
        "418p": "418px",
        "430p": "430px",
        "450p": "450px",
        "468p":"468px",
        "485p": "485px",
        "491p": "491px",
        "494p": "494px",
        "470p": "470px",
        "480p": "480px",
        "532p": "532px",
        "556p": "556px",
        "505p": "505px",
        "1179p": "1179px",
        "1253p": "1253px",
        "1575p": "1575px",
        "600p":"600px",
        "649p":"649px",
        "690p": "690px",
        "19%": "19%",
        "23%": "23%",
        "24%": "24%",
        "36%": "36%",
        "27%": "27%",
        "28%": "28%",
        "42%": "42%",
        "46%": "46%",
        "49%": "49%",
        "54%": "54%",
        "58%": "58%",
        "72%": "72%",
        "76%": "76%",
        "77%": "77%",
        "340p": "340px",
        "700p": "700px",
        "848p": "848px",
        "850p": "850px",
        "860p": "860px",
        "1425p": "1425px",
        },

    },


    // site container

    container: {
      center: true,   
      screens: {
        'xl': '1210px',
      },
    },



    screens: {
			mv: '360px',
			// => @media (min-width: 480px) { ... }

			xs: '480px',
			// => @media (min-width: 480px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			ml: '992px', // Medium Large
			// => @media (min-width: 992px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			sl: '1199px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '1921px',
			// => @media (min-width: 1920px) { ... }

    
		}
  },
  plugins: [],
};
export default config;
