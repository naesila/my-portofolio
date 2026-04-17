import svgPaths from "./svg-cl4mrvounc";
import imgMyPhoto from "./aa33e3fcd9478f780821a66adaf260864fd0b6e7.png";
import imgImage from "./3e2c4329e3e32c13eb96d186525b2a528d81d0a7.png";
import imgImage1 from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImage2 from "./46cd3ac1c3cef7ec6d274844917895ccc0836009.png";
import imgImage3 from "./74d8b1011239126b455a76fb70967d13f3db6266.png";
import imgImage4 from "./e1cb6ca2b03424844a6335c7caa7306fb9edcca0.png";
import imgImage5 from "./1cc48cb0e52e6e62abbe803e08ad6f9ad8ce54a1.png";
import imgImage6 from "./0f6ccda758c22d920c1be7e42a759636bf81d5fe.png";
import imgImage7 from "./128cae03a7d1c4c42f4317a9ed010d48f0e408e3.png";
import imgImage8 from "./debat.png";
import imgImage9 from "./9ee4c27fb50a84fedf883320932cabfb5870228b.png";

function Logo() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[1.5] not-italic relative shrink-0 text-[30px]" data-name="Logo">
      <p className="font-['Iosevka_Charon:Medium',sans-serif] h-[45px] relative shrink-0 text-[#1f1f1f] tracking-[-6.6px] w-[96px]">{`Information `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#fc3314] w-[122px]">System</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[32px] items-end leading-[1.3] relative shrink-0 text-[#1f1f1f] text-[18px] whitespace-nowrap" data-name="Links">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Services</p>
      <p className="relative shrink-0">Portfolio</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" dir="auto">
        Let’s Talk
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[124px] relative size-full">
          <div className="absolute left-[438px] size-[146px] top-[-98px]" data-name="Background">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 146">
              <circle cx="73" cy="73" fill="var(--fill-0, #FC3314)" id="Background" r="73" />
            </svg>
          </div>
          <Logo />
          <Links />
          <Button />
        </div>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-[#1f1f1f] w-full" data-name="Section heading">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] w-full">{`Information Systems Student | Digital & Data Enthusiast`}</p>
      <div className="font-['Montserrat:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.5] mb-0 text-[48px]">Hi I’m</p>
        <p className="leading-[1.5] text-[#fc3314] text-[48px]">Naesila Islamia</p>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">Welcome to my portfolio. Here, you can explore my projects, experiences, and how I contribute to creating structured and meaningful digital solutions.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center px-[56px] py-[12px] relative shrink-0" data-name="Button">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" dir="auto">
        Hire Me
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[36px] py-[12px] relative shrink-0 w-[177px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap" dir="auto">
        Portfolio
      </p>
    </div>
  );
}

function CtAs() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="CTAs">
      <Button1 />
      <Button2 />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Header Content">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[64px] relative size-full">
        <SectionHeading />
        <CtAs />
      </div>
    </div>
  );
}

function Shape1() {
  return (
    <div className="col-1 h-[270.712px] ml-[8.38px] mt-[208.51px] relative row-1 w-[241.618px]" data-name="shape_117">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 241.618 270.712">
        <g id="shape_117">
          <path d={svgPaths.pab39300} fill="var(--fill-0, #1F1F1F)" id="Vector" />
          <path d={svgPaths.p361d4600} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
          <path d={svgPaths.p286ed900} fill="var(--fill-0, #1F1F1F)" id="Vector_3" />
          <path d={svgPaths.p11f9ad00} fill="var(--fill-0, #1F1F1F)" id="Vector_4" />
          <path d={svgPaths.pe99fe70} fill="var(--fill-0, #1F1F1F)" id="Vector_5" />
          <path d={svgPaths.pef38f00} fill="var(--fill-0, #1F1F1F)" id="Vector_6" />
          <path d={svgPaths.p384f2f00} fill="var(--fill-0, #1F1F1F)" id="Vector_7" />
          <path d={svgPaths.p6bd7a00} fill="var(--fill-0, #1F1F1F)" id="Vector_8" />
          <path d={svgPaths.pd218fc0} fill="var(--fill-0, #1F1F1F)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Shape() {
  return (
    <div className="col-1 h-[55.599px] ml-0 mt-[144.64px] relative row-1 w-[132.363px]" data-name="shape_73">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.363 55.5998">
        <g id="shape_73">
          <path d={svgPaths.p9715b00} fill="var(--fill-0, #1F1F1F)" id="Vector" />
          <path d={svgPaths.p3d8e9380} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[47.456px] relative w-[97.116px]">
      <div className="absolute inset-[0_0_-9.94%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.1159 52.1744">
          <g id="Frame 3">
            <path d={svgPaths.p67b6500} fill="var(--fill-0, #1F1F1F)" id="Vector" />
            <path d={svgPaths.p2935a300} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
            <path d={svgPaths.p3df7b980} fill="var(--fill-0, #1F1F1F)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image">
      <Shape1 />
      <Shape />
      <div className="col-1 flex h-[516px] items-center justify-center ml-[183.3px] mt-[0.42px] relative row-1 w-[45px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Inter:Bold',sans-serif] font-bold h-[516px] leading-[normal] not-italic relative text-[475.179px] text-[rgba(255,255,255,0.5)] w-[45px]">I</p>
        </div>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold h-[498px] leading-[normal] ml-[239.3px] mt-0 not-italic relative row-1 text-[#fc3314] text-[475.179px] w-[272px]">S</p>
      <div className="col-1 h-[505px] ml-[0.3px] mt-[25.42px] relative row-1 w-[506px]" data-name="my photo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.85%] left-0 max-w-none top-[-20.55%] w-full" src={imgMyPhoto} />
        </div>
      </div>
      <div className="col-1 flex h-[97.116px] items-center justify-center ml-[363.37px] mt-[430.3px] relative row-1 w-[47.456px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[48px] items-end justify-center px-[124px] relative size-full">
          <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
            <HeaderContent />
          </div>
          <Image />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute bg-[#ffd4d0] content-stretch flex flex-col gap-[32px] h-[638px] items-center justify-end left-[5px] overflow-clip pt-[40px] top-0 w-[1430px]" data-name="Hero">
      <Navbar />
      <Container />
    </div>
  );
}

function AboutHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] relative shrink-0 text-center text-white w-[810px]" data-name="About Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[36px] w-full">About Me</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">I’m Naesila, an Information Systems student with a strong interest in data, communication, and business development. I enjoy working with data by organizing, analyzing, and transforming it into meaningful insights. I also have strong public speaking skills and enjoy creating content, allowing me to communicate ideas clearly and effectively. I am interested in roles that combine analytical thinking and communication, such as data, business, or sales-related roles.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Projects Completed</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Info 01">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#ffd4d0] text-[64px] text-center whitespace-nowrap">5+</p>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Learning Experience</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[96px] items-center min-w-px relative" data-name="Info 02">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#ffd4d0] text-[64px] text-center whitespace-nowrap">10+</p>
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Organization Experience</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Info 03">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#ffd4d0] text-[64px] text-center whitespace-nowrap">10+</p>
      <Frame6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[64px] h-[71px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Info />
      <Info1 />
      <Info2 />
    </div>
  );
}

function About() {
  return (
    <div className="absolute bg-[#1f1f1f] content-stretch flex flex-col gap-[32px] h-[440px] items-center left-[5px] overflow-clip pb-[80px] pt-[64px] px-[188px] top-[638px] w-[1430px]" data-name="About">
      <AboutHeading />
      <Container1 />
    </div>
  );
}

function ServicesHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] relative shrink-0 text-center w-[810px]" data-name="Services  Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#1f1f1f] text-[36px] w-[min-content]">My Skill</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[#0f0808] text-[16px] w-[1064px]">Mahasiswa Sistem Informasi yang antusias pada bidang Data Analytics dan IT Infrastructure. Memiliki kemampuan Public Speaking untuk menyampaikan insight data secara jelas dan persuasif. Tertarik mengeksplorasi peran sebagai Data Analyst, Solutions Architect, atau Account Executive untuk menjembatani kebutuhan teknis dan solusi bisnis.</p>
    </div>
  );
}

function Services1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Services 01">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <div className="h-[53.97px] relative shrink-0 w-[47.978px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9777 53.9702">
            <path d={svgPaths.p2bc41280} id="Vector" stroke="var(--stroke-0, #FC3314)" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#1f1f1f] text-[18px] w-[min-content]">Data Analyst</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f1f1f] text-[14px] w-[min-content]">Saya menganalisis data menggunakan tools seperti Microsoft Excel, SQL, dan Power BI untuk mengolah data, menemukan pola, serta menghasilkan insight yang dapat digunakan dalam pengambilan keputusan.</p>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="h-[54px] relative shrink-0 w-[88px]" data-name="Vector">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 54">
        <g id="Vector">
          <circle cx="22" cy="27" id="Ellipse 797" r="21" stroke="var(--stroke-0, #FC3314)" strokeWidth="2" />
          <circle cx="44" cy="27" id="Ellipse 798" r="21" stroke="var(--stroke-0, #FC3314)" strokeWidth="2" />
          <circle cx="66" cy="27" id="Ellipse 799" r="21" stroke="var(--stroke-0, #FC3314)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Services2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Services 02">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Vector />
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#1f1f1f] text-[18px] w-[min-content]">Data Visualization</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f1f1f] text-[14px] w-[min-content]">Saya membuat dashboard dan visualisasi data yang jelas, informatif, dan mudah dipahami untuk membantu menyampaikan insight secara efektif.</p>
      </div>
    </div>
  );
}

function SearchStatus() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[54px]" data-name="search-status">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="search-status">
          <path d="M31.5004 11.2504H45.0004" id="Vector" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M31.5004 18.0004H38.2504" id="Vector_2" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8d27f00} id="Vector_3" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p317e2700} id="Vector_4" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M53 1V53H1V1H53Z" id="Vector_5" opacity="0" stroke="var(--stroke-0, #FC3314)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Vector1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Vector">
      <SearchStatus />
    </div>
  );
}

function Services3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Services 03">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Vector1 />
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#1f1f1f] text-[18px] w-[min-content]">UX Research</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f1f1f] text-[14px] w-[min-content]">Saya mampu melakukan riset pengguna untuk memahami kebutuhan, perilaku, dan preferensi pengguna sebagai dasar dalam merancang solusi yang meningkatkan kualitas dan pengalaman penggunaan produk digital.</p>
      </div>
    </div>
  );
}

function VuesaxLinearTask() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/task">
      <div className="absolute inset-[0_-0.23%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.1111 48">
          <g id="task">
            <path d="M22.2222 39.1111H47.1111" id="Vector" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M22.2222 24.8889H47.1111" id="Vector_2" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M22.2222 10.6667H47.1111" id="Vector_3" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 11L8 13L14 7" id="Vector_4" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 25L8 27L14 21" id="Vector_5" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 39L8 41L14 35" id="Vector_6" stroke="var(--stroke-0, #FC3314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Vector_7" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Vector2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[54px]" data-name="Vector">
      <div className="relative shrink-0 size-[48px]" data-name="vuesax/linear/task">
        <VuesaxLinearTask />
      </div>
    </div>
  );
}

function Services4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Services 04">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Vector2 />
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#1f1f1f] text-[18px] w-[min-content]">{` Data Cleaning`}</p>
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#1f1f1f] text-[14px] w-[min-content]">Saya mampu mengolah dan membersihkan data mentah untuk meningkatkan kualitas data agar lebih akurat, konsisten, dan terstruktur sehingga dapat digunakan secara optimal dalam proses analisis.</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex gap-[32px] h-[325px] items-start relative shrink-0 w-full" data-name="Services">
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-w-px relative" data-name="Container">
      <ServicesHeading />
      <Services />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="absolute bg-white content-stretch flex h-[527px] items-center justify-center left-0 overflow-clip px-[124px] py-[64px] top-[1078px] w-[1440px]" data-name="Services Section">
      <Container2 />
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center leading-[1.5] min-w-px relative text-[#1f1f1f]" data-name="Section Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[36px] whitespace-nowrap" dir="auto">
        My Portfolio
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-center w-[490px]">Jelajahi berbagai proyek analisis data, dashboard, dan UX yang berfokus pada insight dan solusi digital.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-[#ffd4d0] content-stretch flex items-start justify-center mb-[-100px] overflow-clip pb-[142px] pt-[50px] px-[124px] relative shrink-0 w-[1440px]" data-name="Heading">
      <SectionHeading1 />
    </div>
  );
}

function HeadlineSubhead() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]" data-name="Headline & Subhead">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]" dir="auto">
        E-commerce Platform
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[242px]" dir="auto">
        Web Design / Usability Testing
      </p>
    </div>
  );
}

function Send() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Content">
      <HeadlineSubhead />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 01">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[81.32%] left-[3.26%] max-w-none top-[10.44%] w-[95.99%]" src={imgImage} />
        </div>
      </div>
      <Content />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]" dir="auto">
        Beauty App Design
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[242px]" dir="auto">{`UX Research / App Design `}</p>
    </div>
  );
}

function Send1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send1 />
    </div>
  );
}

function HeadlineSubhead1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline & Subhead">
      <Frame18 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 02">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <HeadlineSubhead1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]" dir="auto">
        Personal Page
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[242px]" dir="auto">
        Web Design
      </p>
    </div>
  );
}

function Send2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send2 />
    </div>
  );
}

function HeadlineSubhead2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline & Subhead">
      <Frame19 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 03">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.48%] left-0 max-w-none top-[-1.63%] w-full" src={imgImage2} />
        </div>
      </div>
      <HeadlineSubhead2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]" dir="auto">
        Furniture Mobile App
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[242px]" dir="auto">{`App Design `}</p>
    </div>
  );
}

function Send3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send3 />
    </div>
  );
}

function HeadlineSubhead3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline & Subhead">
      <Frame20 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 04">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#febc9a] inset-0" />
          <img alt="" className="absolute max-w-none object-contain size-full" src={imgImage3} />
        </div>
      </div>
      <HeadlineSubhead3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[20px] whitespace-nowrap" dir="auto">
        Coffee House Landing Page
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]" dir="auto">{`UX Research / Web Design `}</p>
    </div>
  );
}

function Send4() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send4 />
    </div>
  );
}

function HeadlineSubhead4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline & Subhead">
      <Frame21 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 05">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <HeadlineSubhead4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[20px] w-[min-content]" dir="auto">
        Home Services Page
      </p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-[242px]" dir="auto">
        Web Design / Marketing
      </p>
    </div>
  );
}

function Send5() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22.6px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5996 22.5996">
        <g id="Send">
          <g id="Group">
            <path d={svgPaths.p9d04540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
            <path d={svgPaths.pfcfcd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.41248" />
          </g>
          <path d={svgPaths.p2779a60} id="Vector_3" opacity="0" stroke="var(--stroke-0, white)" strokeWidth="0.94165" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSend5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="vuesax/linear/send">
      <Send5 />
    </div>
  );
}

function HeadlineSubhead5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline & Subhead">
      <Frame22 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#fc3314] content-stretch flex items-center justify-center p-[7.533px] relative rounded-[64.974px]" data-name="vuesax/linear/send">
            <VuesaxLinearSend5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Card 06">
      <div className="h-[198.333px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <HeadlineSubhead5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[1192px]" data-name="Row">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center mb-[-100px] pb-[64px] px-[124px] relative shrink-0 w-[1440px]" data-name="Cards Container">
      <Row />
      <Row1 />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col items-start justify-end left-0 pb-[100px] top-[1605px]" data-name="Portfolio">
      <Heading />
      <CardsContainer />
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f] text-center w-full" data-name="Section Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[36px] w-[min-content]">Organizational Journey</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-[626px]">Exploring my experience in organizational roles, including leadership, collaboration, and contributing to impactful activities.</p>
    </div>
  );
}

function SkillsContainer() {
  return <div className="h-[184px] shrink-0 w-[30px]" data-name="Skills Container" />;
}

function Skills() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col gap-[64px] items-center left-0 overflow-clip px-[188px] py-[90px] top-[2545.67px] w-[1440px]" data-name="Skills">
      <SectionHeading2 />
      <SkillsContainer />
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right">
          <path d={svgPaths.p1e482800} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowRight1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow-right">
          <path d={svgPaths.p1e482800} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Testemonial() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Testemonial">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[40px]" data-name="vuesax/linear/arrow-right">
            <VuesaxLinearArrowRight />
          </div>
        </div>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] text-center w-[768px]">{`Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!`}</p>
      <div className="relative shrink-0 size-[40px]" data-name="vuesax/linear/arrow-right">
        <VuesaxLinearArrowRight1 />
      </div>
    </div>
  );
}

function ClientImgInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Client Img & Info">
      <div className="relative rounded-[123px] shrink-0 size-[70px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[123px]">
          <img alt="" className="absolute h-[159.24%] left-0 max-w-none top-[-14.85%] w-full" src={imgImage6} />
        </div>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1f1f1f] text-[0px] text-center whitespace-nowrap">
        <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] text-[16px]">John Smith</span>
        <span className="leading-[1.5] text-[16px]">{` / CEO of XYZ Company`}</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-w-px relative" data-name="Container">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[36px] whitespace-nowrap">Testemonials</p>
      <Testemonial />
      <ClientImgInfo />
    </div>
  );
}

function Testemonials() {
  return (
    <div className="absolute bg-[#ffd4d0] content-stretch flex gap-[10px] items-center justify-center left-0 overflow-clip pb-[64px] pt-[90px] px-[124px] top-[3099.67px] w-[1440px]" data-name="Testemonials">
      <Container3 />
      <div className="-translate-x-1/2 absolute left-1/2 size-[122px] top-[-61px]" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 122">
          <path d={svgPaths.p3a0d6300} fill="var(--fill-0, #FC3314)" id="Background" />
        </svg>
      </div>
    </div>
  );
}

function SectionHeading3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f] text-center w-[799px]" data-name="Section Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[36px] w-full">My Achievements</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Highlighting my key achievements through impactful contributions, leadership experiences, and continuous personal and professional growth.</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[202.154px] relative shrink-0 w-[336px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[207.76%] left-[0.03%] max-w-none top-[-34.33%] w-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full" data-name="Container">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[304px]">23 Februari – 16 Maret 2026</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[16px] w-[min-content]">Google Student Ambassador</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]">Selected as a Google Student Ambassador, actively promoting technology awareness, leading initiatives, and engaging students in digital innovation and learning.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[12px] text-center whitespace-nowrap">Read More</p>
    </div>
  );
}

function VuesaxLinearArrowRight2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function CtaLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA/Link">
      <Frame1 />
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-right">
        <VuesaxLinearArrowRight2 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] px-[16px] relative shrink-0 w-[336px]" data-name="Content">
      <Container4 />
      <CtaLink />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative self-stretch shrink-0" data-name="Card 01">
      <Image1 />
      <Content1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full" data-name="Container">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[304px]">14 Desember 2025</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[16px] w-[min-content]">Juara 1 Debat Rakyat Kampus</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]">Awarded 1st place in the Campus Public Debate Competition, showcasing excellence in critical thinking, public speaking, and persuasive communication.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[12px] text-center whitespace-nowrap">Read More</p>
    </div>
  );
}

function VuesaxLinearArrowRight3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function CtaLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA/Link">
      <Frame2 />
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-right">
        <VuesaxLinearArrowRight3 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[16px] px-[16px] relative size-full">
        <Container5 />
        <CtaLink1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative self-stretch shrink-0" data-name="Card 02">
      <div className="h-[197px] relative shrink-0 w-[336px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <Content2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full" data-name="Container">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[12px] w-[304px]">August 15, 2023 / UX</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[16px] w-[min-content]">Boosting UX with Microinteractions</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[14px] w-[min-content]">Discover the power of microinteractions in enhancing user experience and engagement.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[12px] text-center whitespace-nowrap">Read More</p>
    </div>
  );
}

function VuesaxLinearArrowRight4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function CtaLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA/Link">
      <Frame3 />
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-right">
        <VuesaxLinearArrowRight4 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[16px] px-[16px] relative size-full">
        <Container6 />
        <CtaLink2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative self-stretch shrink-0" data-name="Card 03">
      <div className="h-[197px] relative shrink-0 w-[336px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Content3 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex h-[426.154px] items-start justify-between relative shrink-0 w-[1192px]" data-name="Cards">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Blog() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col gap-[48px] items-center left-0 overflow-clip px-[124px] py-[90px] top-[3513.67px] w-[1440px]" data-name="Blog">
      <SectionHeading3 />
      <Cards />
    </div>
  );
}

function SectionHeading4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] relative shrink-0 text-[#1f1f1f] w-full" data-name="Section Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[36px] w-full">Get in Touch</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">{`Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.`}</p>
    </div>
  );
}

function BxsPhoneCall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bxs:phone-call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bxs:phone-call">
          <path d={svgPaths.p391d7b00} fill="var(--fill-0, #1F1F1F)" id="Vector" />
          <path d={svgPaths.p2ad9a680} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <BxsPhoneCall />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">+62 81514 1247 32</p>
    </div>
  );
}

function IcSharpEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:sharp-email">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:sharp-email">
          <path d={svgPaths.pedd5c00} fill="var(--fill-0, #1F1F1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <IcSharpEmail />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">naesila99@gmail.com</p>
    </div>
  );
}

function CarbonLocationFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="carbon:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="carbon:location-filled">
          <path d={svgPaths.p7995000} fill="var(--fill-0, #1F1F1F)" id="Vector" />
          <g id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <CarbonLocationFilled />
      <p className="flex-[1_0_0] font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#1f1f1f] text-[16px]">{`Jakarta Selatan `}</p>
    </div>
  );
}

function ContactInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Contact Info">
      <Frame15 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionHeading4 />
      <ContactInfo1 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group 1000001749">
          <circle cx="15" cy="15" fill="var(--fill-0, white)" id="Ellipse 795" r="15" />
          <path d={svgPaths.p2f437500} fill="var(--fill-0, #1F1F1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group 1000001750">
          <circle cx="15" cy="15" fill="var(--fill-0, white)" id="Ellipse 796" r="15" />
          <path clipRule="evenodd" d={svgPaths.p130ec440} fill="var(--fill-0, #1F1F1F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 110">
          <rect fill="var(--fill-0, white)" height="30" rx="15" width="30" />
          <path d={svgPaths.p342a5200} fill="var(--fill-0, #1F1F1F)" id="Dribbble" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 109">
          <rect fill="var(--fill-0, white)" height="30" rx="15" width="30" />
          <path d={svgPaths.p2b883100} fill="var(--fill-0, #1F1F1F)" id="Facebook" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Social icons">
      <Group />
      <Group1 />
      <Frame17 />
      <Frame16 />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-w-px relative self-stretch" data-name="Contact info">
      <Container7 />
      <SocialIcons />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[14px] relative shrink-0 w-[566px]" data-name="Input">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8d8d8d] text-[14px] whitespace-nowrap">First name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8d8d8d] text-[14px] whitespace-nowrap">Email</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8d8d8d] text-[14px] whitespace-nowrap">Phone number</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Input">
      <div className="content-stretch flex items-start px-[16px] py-[13px] relative size-full">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8d8d8d] text-[14px] whitespace-nowrap">Your message</p>
      </div>
    </div>
  );
}

function TextFields1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text fields">
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-center justify-center px-[56px] py-[12px] relative shrink-0" data-name="Button">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" dir="auto">
        Send Message
      </p>
    </div>
  );
}

function TextFields() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-w-px relative" data-name="Text fields">
      <TextFields1 />
      <Button3 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute bg-[#ffd4d0] content-stretch flex gap-[60px] items-start left-0 overflow-clip p-[124px] top-[5377px] w-[1440px]" data-name="Contact">
      <ContactInfo />
      <TextFields />
      <div className="absolute bottom-[267.15px] right-[1353px] size-[221px]" data-name="Background">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 221">
          <circle cx="110.5" cy="110.5" fill="var(--fill-0, #FC3314)" id="Background" r="110.5" />
        </svg>
      </div>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[32px] items-end leading-[1.5] relative shrink-0 text-[20px] text-white" data-name="Links">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Services</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start not-italic relative shrink-0" data-name="Logo">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#013] text-[0px] tracking-[-7.92px]">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] text-[36px] text-white">S</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] text-[#fc3314] text-[36px]">J</span>
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#fc3314] text-[36px]">Design</p>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex font-['Montserrat:Bold',sans-serif] font-bold gap-[32px] items-end leading-[1.5] relative shrink-0 text-[20px] text-white w-[177px]" data-name="Links">
      <p className="relative shrink-0">Portfolio</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0 whitespace-nowrap" data-name="Links Container">
      <Links1 />
      <Logo1 />
      <Links2 />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="h-[25.454px] relative shrink-0 w-[178.724px]" data-name="Social Links">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178.724 25.4536">
        <g id=" Social Links">
          <path d={svgPaths.p2d6a2a00} fill="var(--fill-0, white)" id="Instagram" />
          <path d={svgPaths.p24dca480} fill="var(--fill-0, white)" id="Twitter" />
          <path d={svgPaths.p1394e80} fill="var(--fill-0, white)" id="Dribbble" />
          <path d={svgPaths.p10a04f80} fill="var(--fill-0, white)" id="Facebook" />
        </g>
      </svg>
    </div>
  );
}

function TextSocialLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Text & Social Links">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" dir="auto">
        Follow me on social media:
      </p>
      <SocialLinks />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0" data-name="Container">
      <LinksContainer />
      <TextSocialLinks />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#1f1f1f] content-stretch flex flex-col items-center left-[5px] overflow-clip px-[300px] py-[80px] top-[6092px] w-[1430px]" data-name="Footer">
      <Container8 />
    </div>
  );
}

function SectionHeading5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] relative shrink-0 text-[#1f1f1f] text-center w-[810px]" data-name="Section Heading">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[36px] w-[min-content]">Organizational Journey</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-[626px]">Exploring my experience in organizational roles, including leadership, collaboration, and contributing to impactful activities.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[5px] shrink-0 w-[333px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Bar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Bar">
      <Frame7 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">60%</p>
    </div>
  );
}

function Skill() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 01">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Interaction Design</p>
      <Bar />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[5px] shrink-0 w-[298px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Bar">
      <Frame8 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">70%</p>
    </div>
  );
}

function Skill1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 02">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Usability Testing</p>
      <Bar1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[5px] shrink-0 w-[205px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <Frame9 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">45%</p>
    </div>
  );
}

function Skill2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 03">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">User Research</p>
      <Label />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Left">
      <Skill />
      <Skill1 />
      <Skill2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[6px] shrink-0 w-[404px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Bar2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Bar">
      <Frame10 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">95%</p>
    </div>
  );
}

function Skill3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 04">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Figma</p>
      <Bar2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[5px] shrink-0 w-[378px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Bar3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Bar">
      <Frame11 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">80%</p>
    </div>
  );
}

function Skill4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 05">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Prototyping</p>
      <Bar3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <div className="bg-[#1f1f1f] h-[6px] shrink-0 w-[234px]" />
      <div className="bg-[#e1e1e1] flex-[1_0_0] h-[5px] min-w-px" />
    </div>
  );
}

function Bar4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bar">
      <Frame12 />
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">50%</p>
    </div>
  );
}

function Skill5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Skill 06">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1f1f] text-[16px] whitespace-nowrap">Information Architecture</p>
      <Bar4 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Right">
      <Skill3 />
      <Skill4 />
      <Skill5 />
    </div>
  );
}

function SkillsContainer1() {
  return (
    <div className="content-stretch flex gap-[120px] items-start justify-center relative shrink-0 w-full" data-name="Skills Container">
      <Left />
      <Right />
    </div>
  );
}

function Skills1() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col gap-[64px] items-center left-[5px] overflow-clip px-[188px] py-[90px] top-[4391px] w-[1440px]" data-name="Skills">
      <SectionHeading5 />
      <SkillsContainer1 />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Hero />
      <About />
      <ServicesSection />
      <Portfolio />
      <Skills />
      <Testemonials />
      <Blog />
      <Contact />
      <Footer />
      <Skills1 />
    </div>
  );
}