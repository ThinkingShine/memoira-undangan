import svgPaths from "./svg-gqw886fp0r";
import imgImageWithFallback from "./372382566273cb40f7ecb1b15bea7e5ca9e80e7f.png";
import imgImageWithFallback1 from "./d2dc2198363354a7e9b4ba6a34a746627bb6c8e4.png";
import imgImageWithFallback2 from "./a8160687636967d18de5d129344d1928817e24fe.png";
import imgImageWithFallback3 from "./660698d7bb5b56d2290ea908c3441d1fbc1c2c6a.png";
import imgImageWithFallback4 from "./ad71759557f5c1a8c71ddd66ace54bcc8177576c.png";
import imgImageWithFallback5 from "./76cbf14262b159dcd4ac94cfe643c1da2bde49c0.png";
import imgImageWithFallback6 from "./8944e35277c8a4f862ac1e2be6935dbe4d130e24.png";
import imgImageWithFallback7 from "./e1a8639a42c16aaa521715b4de0c837887eef96e.png";
import imgImageWithFallback8 from "./c95a9157492990fcf3119785b178fc122f036ffb.png";
import imgImageWithFallback9 from "./2419f22fe905399a1718a8842957b21a3bbcf062.png";
import imgImageWithFallback10 from "./363737d36daab6fccb0e564148f215a9f374e239.png";

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic','Noto_Sans_Arabic:Regular',sans-serif] font-normal italic leading-[36px] relative shrink-0 text-[#3d4a2b] text-[30px] text-center whitespace-nowrap" dir="auto">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a5a4f] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">{`Assalamu'alaikum Warahmatullahi Wabarakatuh`}</p>
      </div>
    </div>
  );
}

function Text() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider() {
  return (
    <div className="h-[72px] relative shrink-0 w-[672px]" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[32px] relative size-full">
        <Text />
        <Icon />
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[32.5px] relative shrink-0 text-[#3d4a2b] text-[20px] text-center w-[672px]">{`"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."`}</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#b08d57] text-[14px] text-center tracking-[1.4px] whitespace-nowrap">— QS. AR-RUM : 21 —</p>
      </div>
    </div>
  );
}

function Text2() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group1() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[672px]" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[32px] relative size-full">
        <Text2 />
        <Icon1 />
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center w-[672px]">Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami. Sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
      </div>
    </div>
  );
}

function Opening() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Opening">
      <Paragraph />
      <Paragraph1 />
      <OrnamentDivider />
      <Paragraph2 />
      <Paragraph3 />
      <OrnamentDivider1 />
      <Paragraph4 />
    </div>
  );
}

function OpeningMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Opening:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Opening />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f7f3ea] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <OpeningMargin />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">{`The Bride & Groom`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1293px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">Mempelai</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Heading />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute flex items-center justify-center left-[-5.67px] size-[235.33px] top-[-5.67px]">
      <div className="flex-none rotate-[-2.98deg]">
        <div className="border-2 border-[#b08d57] border-solid relative rounded-[16777200px] size-[224px]" data-name="Container" />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[208.379px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[6.8px] rounded-[16970976px] size-[210.402px] top-[6.8px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.012px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden className="absolute border-[1.012px] border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[16970976px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[224px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="h-[40px] relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[3.6px] uppercase whitespace-nowrap">Mempelai Wanita</p>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#3d4a2b] text-[36px] text-center w-[403px]">Ervine Chastine Marind, S.Gz., M.Sc., ANutr</p>
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div className="h-[84px] relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <div className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px] mb-0">Putri dari</p>
          <p className="leading-[24px] mb-0">Bapak Margono (Alm.)</p>
          <p className="leading-[24px]">{`& Ibu Sri Indawati`}</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 h-[436px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerMargin />
        <Profile />
        <Profile1 />
        <Profile2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[96px] left-0 top-[-0.45px] w-[59px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[96px] not-italic relative shrink-0 text-[#b08d57] text-[96px] whitespace-nowrap">{`&`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[96px] items-start relative shrink-0 w-[59px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-center shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[16px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute flex items-center justify-center left-[-5.67px] size-[235.33px] top-[-5.67px]">
      <div className="flex-none rotate-[-2.98deg]">
        <div className="border-2 border-[#b08d57] border-solid relative rounded-[16777200px] size-[224px]" data-name="Container" />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-[6.8px] rounded-[16970976px] size-[210.402px] top-[6.8px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.012px] relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
      <div aria-hidden className="absolute border-[1.012px] border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[16970976px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[224px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[3.6px] uppercase whitespace-nowrap">Mempelai Pria</p>
      </div>
    </div>
  );
}

function Profile4() {
  return (
    <div className="relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#3d4a2b] text-[36px] text-center w-[403px]">Muhammad Fikri Mubarok, S.H., M.Sc</p>
      </div>
    </div>
  );
}

function Profile5() {
  return (
    <div className="h-[84px] relative shrink-0 w-[402.719px]" data-name="Profile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <div className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px] mb-0">Putra dari</p>
          <p className="leading-[24px] mb-0">Bapak Sumarno</p>
          <p className="leading-[24px]">{`& Ibu Siti Romdhoniyati, S.Pd`}</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-3 h-[436px] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerMargin2 />
        <Profile3 />
        <Profile4 />
        <Profile5 />
      </div>
    </div>
  );
}

function Couple() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___402.72px_58.56px_402.72px] grid-rows-[_436px] max-w-[896px] relative shrink-0 w-[896px]" data-name="Couple">
      <Container1 />
      <ContainerMargin1 />
      <Container6 />
    </div>
  );
}

function CoupleMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Couple:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <Couple />
      </div>
    </div>
  );
}

function Text5() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group2() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider2() {
  return (
    <div className="h-[104px] relative shrink-0 w-[1293px]" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center py-[32px] relative size-full">
        <Text5 />
        <Icon2 />
        <Text6 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(238, 242, 234) 0%, rgb(240, 242, 234) 20%, rgb(242, 242, 234) 40%, rgb(243, 243, 234) 60%, rgb(245, 243, 234) 80%, rgb(247, 243, 234) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <Container />
        <CoupleMargin />
        <OrnamentDivider2 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">Our Love Story</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1293px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">Cerita Cinta Kami</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph6 />
        <Heading1 />
      </div>
    </div>
  );
}

function Container11() {
  return <div className="absolute h-[886px] left-[384px] top-0 w-px" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(4, 3, 1, 0.14) 7.1429%, rgba(26, 18, 7, 0.286) 14.286%, rgba(52, 40, 21, 0.427) 21.429%, rgba(80, 63, 36, 0.573) 28.571%, rgba(111, 88, 52, 0.714) 35.714%, rgba(143, 114, 69, 0.86) 42.857%, rgb(176, 141, 87) 50%, rgba(143, 114, 69, 0.86) 57.143%, rgba(111, 88, 52, 0.714) 64.286%, rgba(80, 63, 36, 0.573) 71.429%, rgba(52, 40, 21, 0.427) 78.571%, rgba(26, 18, 7, 0.286) 85.714%, rgba(4, 3, 1, 0.14) 92.857%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#3d4a2b] text-[24px] text-right whitespace-nowrap">Dipertemukan di Tanah Rantau</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] text-right w-[320px]">Takdir mempertemukan kami di sebuah acara komunitas Muslim Indonesia di Sheffield, Britania Raya. Di tengah dinginnya udara Inggris, hangatnya silaturahmi menjadi awal kisah ini.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[48px] relative size-full">
        <Heading2 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p1cfd5a00} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[360px] rounded-[16777200px] size-[48px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid-cols-[__368px_368px] grid-rows-[_144px] inline-grid left-0 top-0" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container" />;
}

function PlaceholderForLoveStory() {
  return <div className="col-2 h-[144px] justify-self-start relative row-1 self-start shrink-0 w-[368px]" data-name="Placeholder for LoveStory" />;
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#3d4a2b] text-[24px] whitespace-nowrap">Dua Kota, Satu Tujuan</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] w-[320px]">Fikri menempuh studi Master di University of Leeds, sementara Ervine menempuh studi Master di University of Nottingham. Terbentang dua kota penuh sejarah, diantara kami saling bersapa dan mengenal.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[144px] left-[400px] top-0 w-[368px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <Heading3 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.pd2ce200} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 8.33333V13.3333" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ead9c00} id="Vector_3" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[360px] rounded-[16777200px] size-[48px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid-cols-[__368px_368px] grid-rows-[_144px] inline-grid left-0 top-[192px]" data-name="Container">
      <Container17 />
      <PlaceholderForLoveStory />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#3d4a2b] text-[24px] text-right whitespace-nowrap">Jarak Bukan Penghalang</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] text-right w-[320px]">Perjalanan Leeds–Nottingham menjadi saksi bisu pertemuan demi pertemuan kami. Kereta yang melaju, secangkir teh hangat, dan obrolan panjang yang perlahan merangkai rasa yang tumbuh menjadi cinta.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[48px] relative size-full">
        <Heading4 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container22() {
  return <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p2f84f400} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[360px] rounded-[16777200px] size-[48px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid-cols-[__368px_368px] grid-rows-[_144px] inline-grid left-0 top-[384px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container" />;
}

function PlaceholderForLoveStory1() {
  return <div className="col-2 h-[144px] justify-self-start relative row-1 self-start shrink-0 w-[368px]" data-name="Placeholder for LoveStory" />;
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#3d4a2b] text-[24px] whitespace-nowrap">Terbang Melamar</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] w-[320px]">Ketika studi telah usai, Fikri melamar Ervine pada bulan Oktober 2026. Menjadi titik awal perjalanan menuju pernikahan, dengan jarak 11.000 km membentang jarak antara kami.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[144px] left-[400px] top-0 w-[368px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[48px] relative size-full">
        <Heading5 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.pdab9800} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[360px] rounded-[16777200px] size-[48px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid-cols-[__368px_368px] grid-rows-[_144px] inline-grid left-0 top-[576px]" data-name="Container">
      <Container25 />
      <PlaceholderForLoveStory1 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#3d4a2b] text-[24px] text-right whitespace-nowrap">Menuju Babak Baru</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] text-right w-[320px]">Bulan Agustus 2026 ini dengan penuh keyakinan kami siap memulai babak baru dalam ikatan pernikahan, Semoga Allah memberkahi perjalanan ibadah pernikahan ini.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[48px] relative size-full">
        <Heading6 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container30() {
  return <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_16_603)" id="Icon">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_16_603">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[360px] rounded-[16777200px] size-[48px] top-0" data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute gap-x-[32px] gap-y-[32px] grid-cols-[__368px_368px] grid-rows-[_118px] inline-grid left-0 top-[768px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function LoveStory() {
  return (
    <div className="h-[886px] max-w-[768px] relative shrink-0 w-[768px]" data-name="LoveStory">
      <Container11 />
      <Container12 />
      <Container16 />
      <Container20 />
      <Container24 />
      <Container28 />
    </div>
  );
}

function LoveStoryMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="LoveStory:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[48px] pt-[40px] relative size-full">
        <LoveStory />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f7f3ea] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <Container10 />
        <LoveStoryMargin />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">Save The Date</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1293px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">Detail Acara</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Heading7 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">Menghitung hari menuju hari bahagia kami</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[40px] left-[20.02px] text-[#3d4a2b] text-[36px] text-center top-[4px] whitespace-nowrap">22</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[2.4px] uppercase whitespace-nowrap">Hari</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f7f3ea] h-full min-w-[90px] relative rounded-[10px] shrink-0 w-[90px]" data-name="Container">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] px-[25px] py-[17px] relative size-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[40px] left-[20.41px] text-[#3d4a2b] text-[36px] text-center top-[4px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[2.4px] uppercase whitespace-nowrap">Jam</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f3ea] h-full min-w-[90px] relative rounded-[10px] shrink-0 w-[90px]" data-name="Container">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] px-[25px] py-[17px] relative size-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[40px] left-[25.2px] text-[#3d4a2b] text-[36px] text-center top-[4px] whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[2.4px] uppercase whitespace-nowrap">Menit</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f7f3ea] h-full min-w-[90px] relative rounded-[10px] shrink-0 w-[100.063px]" data-name="Container">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] px-[25px] py-[17px] relative size-full">
          <Container40 />
          <Container41 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[40px] left-[23.64px] text-[#3d4a2b] text-[36px] text-center top-[4px] whitespace-nowrap">07</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[2.4px] uppercase whitespace-nowrap">Detik</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#f7f3ea] h-full min-w-[90px] relative rounded-[10px] shrink-0 w-[96.906px]" data-name="Container">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] px-[25px] py-[17px] relative size-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Countdown() {
  return (
    <div className="h-[134px] relative shrink-0 w-[768px]" data-name="Countdown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start justify-center pt-[32px] relative size-full">
        <Container33 />
        <Container36 />
        <Container39 />
        <Container42 />
      </div>
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="EventDetails">
      <Paragraph13 />
      <Countdown />
    </div>
  );
}

function EventDetailsMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventDetails:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <EventDetails />
      </div>
    </div>
  );
}

function Text7() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group3() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group3 />
      </div>
    </div>
  );
}

function Text8() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider3() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1293px]" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[40px] relative size-full">
        <Text7 />
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function EventCard() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259.328px]" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#3d4a2b] text-[40px] text-center whitespace-nowrap">Akad Nikah</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] whitespace-nowrap">Rabu</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] whitespace-nowrap">26 Agustus 2026</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[124.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative size-full">
        <Icon9 />
        <Container47 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_19_1438)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_1438">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">08.00 WIB — selesai</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[40px] relative shrink-0 w-[259.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[16px] relative size-full">
        <Icon10 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[4px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] text-center whitespace-nowrap">Masjid An Noor</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#5a5a4f] text-[14px] text-center whitespace-nowrap">Ciputat, Tangerang Selatan</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[136.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[64px] relative shrink-0 w-[259.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center pt-[16px] relative size-full">
        <IconMargin />
        <Container52 />
      </div>
    </div>
  );
}

function EventCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container46 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-[#556b3d] h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="SlotClone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <IconMargin1 />
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f7f3ea] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">Lihat Lokasi</p>
        </div>
      </div>
    </div>
  );
}

function SlotCloneMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="SlotClone:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <SlotClone />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <EventCard />
        <EventCard1 />
        <SlotCloneMargin />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Card />
      </div>
    </div>
  );
}

function EventCard2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259.336px]" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#3d4a2b] text-[40px] text-center whitespace-nowrap">Walimatul ‘Ursy</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] whitespace-nowrap">Rabu</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] whitespace-nowrap">26 Agustus 2026</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-[124.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative size-full">
        <Icon13 />
        <Container57 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_19_1438)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_1438">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">15.30 WIB — selesai</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[40px] relative shrink-0 w-[259.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[16px] relative size-full">
        <Icon14 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[13.438px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 13.4375 16" width="13.4375">
        <g id="Icon">
          <path d={svgPaths.p2ef2d000} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.11979" />
          <path d={svgPaths.p14f47b00} id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.11979" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[4px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] text-center whitespace-nowrap">Rumah Mempelai Perempuan</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#5a5a4f] text-[14px] text-center w-[234px]">Perumahan Mangunjaya 1, Tambun, Bekasi, Jawa Barat</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-[233.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center pt-[16px] relative size-full">
        <IconMargin2 />
        <Container62 />
      </div>
    </div>
  );
}

function EventCard3() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container56 />
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="bg-[#556b3d] h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="SlotClone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <IconMargin3 />
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f7f3ea] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">Lihat Lokasi</p>
        </div>
      </div>
    </div>
  );
}

function SlotCloneMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="SlotClone:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <SlotClone1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <EventCard2 />
        <EventCard3 />
        <SlotCloneMargin1 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Card1 />
      </div>
    </div>
  );
}

function EventCard4() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259.336px]" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#3d4a2b] text-[40px] text-center whitespace-nowrap">Ngunduh Mantu</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] whitespace-nowrap">Minggu</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] whitespace-nowrap">30 Agustus 2026</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-[124.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative size-full">
        <Icon17 />
        <Container67 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_19_1438)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_1438">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">09.00 WIB — selesai</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[40px] relative shrink-0 w-[259.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center pt-[16px] relative size-full">
        <Icon18 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #556B3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[4px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3d4a2b] text-[20px] text-center whitespace-nowrap">Balai Desa Gempol</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#5a5a4f] text-[14px] text-center whitespace-nowrap">Klaten, Jawa Tengah</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-[147.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[64px] relative shrink-0 w-[259.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start justify-center pt-[16px] relative size-full">
        <IconMargin4 />
        <Container72 />
      </div>
    </div>
  );
}

function EventCard5() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container66 />
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p1f466f80} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin5() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="bg-[#556b3d] h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="SlotClone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <IconMargin5 />
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f7f3ea] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">Lihat Lokasi</p>
        </div>
      </div>
    </div>
  );
}

function SlotCloneMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="SlotClone:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <SlotClone2 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f7f3ea] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <EventCard4 />
        <EventCard5 />
        <SlotCloneMargin2 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[rgba(255,255,255,0)] col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Card2 />
      </div>
    </div>
  );
}

function EventDetails1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[___325.33px_325.34px_325.34px] grid-rows-[_474px] h-[474px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="EventDetails">
      <Container45 />
      <Container55 />
      <Container65 />
    </div>
  );
}

function EventDetailsMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="EventDetails:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <EventDetails1 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(238, 242, 234) 0%, rgb(240, 242, 234) 20%, rgb(242, 242, 234) 40%, rgb(243, 243, 234) 60%, rgb(245, 243, 234) 80%, rgb(247, 243, 234) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <Container32 />
        <EventDetailsMargin />
        <OrnamentDivider3 />
        <EventDetailsMargin1 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">Our Moments</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1293px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">Galeri</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Heading8 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container76() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container77() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container78() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container79() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container80() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Container81() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
    </div>
  );
}

function Container82() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
    </div>
  );
}

function Container83() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback9 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageWithFallback10() {
  return (
    <div className="h-[328.664px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback10} />
    </div>
  );
}

function Container84() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallback10 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Gallery() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___330.66px_330.66px_330.66px] grid-rows-[___330.66px_330.66px_330.66px] h-[1023.992px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Gallery">
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
    </div>
  );
}

function GalleryMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <Gallery />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f7f3ea] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <Container75 />
        <GalleryMargin />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">{`RSVP & Wishes`}</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1293px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Great_Vibes:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">Konfirmasi Kehadiran</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph15 />
        <Heading9 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#3d4a2b] text-[14px] whitespace-nowrap">Nama</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[13px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px] w-full">Nama Anda</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Label />
        <Input />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#3d4a2b] text-[14px] whitespace-nowrap">Jumlah Tamu</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[13px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[-0.1504px] w-full">1</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container87 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#3d4a2b] text-[14px] whitespace-nowrap">Kehadiran</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[3px] size-[8px] top-[-4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g clipPath="url(#clip0_16_597)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #030213)" id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_16_597">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Radio Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-px relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#5a5a4f] text-[14px] whitespace-nowrap">Hadir</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <RadioButton />
        <Label3 />
      </div>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Radio Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#5a5a4f] text-[14px] whitespace-nowrap">Tidak Hadir</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <RadioButton1 />
        <Label4 />
      </div>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16777200px] shrink-0 size-[16px]" data-name="Radio Button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label5() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#5a5a4f] text-[14px] whitespace-nowrap">Ragu</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <RadioButton2 />
        <Label5 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[24px] relative shrink-0 w-[322px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pt-[8px] relative size-full">
        <Container90 />
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container89 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container88 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#3d4a2b] text-[14px] whitespace-nowrap">{`Ucapan & Doa`}</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[64px] min-h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] px-[13px] py-[9px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px] w-full">Tulis doa terbaik untuk kami...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Textarea />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[16px] relative size-full">
        <Container93 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_16_589)" id="Icon">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_16_589">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin6() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Icon:margin">
      <Icon22 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#556b3d] h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <IconMargin6 />
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f7f3ea] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">Kirim</p>
        </div>
      </div>
    </div>
  );
}

function RsvpWishes1() {
  return (
    <div className="relative shrink-0 w-full" data-name="RSVPWishes">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container86 />
        <ContainerMargin3 />
        <ContainerMargin4 />
        <ContainerMargin5 />
        <Button />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f7f3ea] col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Card">
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[25px] relative size-full">
        <RsvpWishes1 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[24px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center whitespace-nowrap">Ucapan dari para tamu (1)</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d={svgPaths.p13f2e300} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#556b3d] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#3d4a2b] text-[18px] whitespace-nowrap">Ervine</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#b08d57] text-[10px] tracking-[0.6172px] uppercase whitespace-nowrap">Hadir · 35 hari lalu</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0 w-[118.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container98 />
        <Container99 />
      </div>
    </div>
  );
}

function RsvpWishes2() {
  return (
    <div className="h-[46px] relative shrink-0 w-[330px]" data-name="RSVPWishes">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[8px] relative size-full">
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function RsvpWishes3() {
  return (
    <div className="relative shrink-0 w-full" data-name="RSVPWishes">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[#5a5a4f] text-[14px] whitespace-nowrap">Bagus bgttt</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f7f3ea] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden className="absolute border border-[rgba(176,141,87,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[17px] relative size-full">
        <RsvpWishes2 />
        <RsvpWishes3 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[123.5px] max-h-[500px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[8px] relative size-full">
          <Card4 />
        </div>
      </div>
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function RsvpWishes() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[__372px_372px] grid-rows-[_366px] h-[366px] max-w-[768px] relative shrink-0 w-[768px]" data-name="RSVPWishes">
      <Card3 />
      <Container94 />
    </div>
  );
}

function RsvpWishesMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="RSVPWishes:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <RsvpWishes />
      </div>
    </div>
  );
}

function Text13() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group4() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group4 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider4() {
  return (
    <div className="h-[104px] relative shrink-0 w-[1293px]" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center py-[32px] relative size-full">
        <Text13 />
        <Icon24 />
        <Text14 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(238, 242, 234) 0%, rgb(240, 242, 234) 20%, rgb(242, 242, 234) 40%, rgb(243, 243, 234) 60%, rgb(245, 243, 234) 80%, rgb(247, 243, 234) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <Container85 />
        <RsvpWishesMargin />
        <OrnamentDivider4 />
      </div>
    </div>
  );
}

function Text15() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function Group5() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" height="34.5298" preserveAspectRatio="none" viewBox="0 0 34.5298 34.5298" width="34.5298">
          <g id="Group">
            <path d={svgPaths.p35497880} id="Vector" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p26033900} id="Vector_2" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
            <path d={svgPaths.p36f0a480} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B08D57)" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group5 />
      </div>
    </div>
  );
}

function Text16() {
  return <div className="h-px relative shrink-0 w-[64px]" style={{ backgroundImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.07) 7.1429%, rgba(4, 3, 1, 0.14) 14.286%, rgba(14, 9, 3, 0.216) 21.429%, rgba(26, 18, 7, 0.286) 28.571%, rgba(38, 29, 14, 0.357) 35.714%, rgba(52, 40, 21, 0.427) 42.857%, rgba(66, 51, 28, 0.5) 50%, rgba(80, 63, 36, 0.573) 57.143%, rgba(95, 75, 44, 0.643) 64.286%, rgba(111, 88, 52, 0.714) 71.429%, rgba(127, 101, 61, 0.784) 78.571%, rgba(143, 114, 69, 0.86) 85.714%, rgba(159, 127, 78, 0.93) 92.857%, rgb(176, 141, 87) 100%)" }} data-name="Text" />;
}

function OrnamentDivider5() {
  return (
    <div className="relative shrink-0 w-full" data-name="OrnamentDivider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative size-full">
        <Text15 />
        <Icon25 />
        <Text16 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Cormorant_Garamond:Italic',sans-serif] font-normal italic leading-[26px] relative shrink-0 text-[#5a5a4f] text-[16px] text-center w-[672px]">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai. Atas kehadiran dan doa restunya, kami ucapkan terima kasih.</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[52px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5a5a4f] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">{`Wassalamu'alaikum Warahmatullahi Wabarakatuh`}</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[56px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#b08d57] text-[12px] text-center tracking-[4.8px] uppercase whitespace-nowrap">Kami yang berbahagia</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="blur-[0px] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#3d4a2b] text-[60px] text-center whitespace-nowrap">
        <span className="leading-[60px]">{`Ervine `}</span>
        <span className="leading-[60px] text-[#b28e58]">{`&`}</span>
        <span className="leading-[60px]">{` Fikri`}</span>
      </p>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Heading10 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[64px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[48px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(90,90,79,0.7)] text-center tracking-[0.6px] whitespace-nowrap">Made with love by us · 2026 ·</p>
      </div>
    </div>
  );
}

function Closing() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Closing">
      <OrnamentDivider5 />
      <Paragraph17 />
      <Paragraph18 />
      <Paragraph19 />
      <Heading2Margin />
      <Paragraph20 />
    </div>
  );
}

function ClosingMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Closing:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[32px] relative size-full">
        <Closing />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(247, 243, 234) 0%, rgb(244, 241, 232) 11.111%, rgb(241, 240, 230) 22.222%, rgb(238, 238, 228) 33.333%, rgb(235, 237, 226) 44.444%, rgb(233, 235, 224) 55.556%, rgb(230, 234, 222) 66.667%, rgb(227, 232, 220) 77.778%, rgb(224, 231, 218) 88.889%, rgb(221, 229, 216) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[80px] relative size-full">
        <ClosingMargin />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f7f3ea] h-[982px] min-h-[982px] relative shrink-0 w-[1341px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function Petal() {
  return (
    <div className="relative shrink-0 size-[21.648px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.6484" preserveAspectRatio="none" viewBox="0 0 21.6484 21.6484" width="21.6484">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p175e2500} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute flex items-center justify-center left-[1138.84px] size-[30.402px] top-[690.51px]">
      <div className="flex-none rotate-[-122.73deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[22px]" data-name="Container">
          <Petal />
        </div>
      </div>
    </div>
  );
}

function Petal1() {
  return (
    <div className="relative shrink-0 size-[13.586px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5859" preserveAspectRatio="none" viewBox="0 0 13.5859 13.5859" width="13.5859">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p134be00} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute flex items-center justify-center left-[975.22px] size-[14.617px] top-[506.48px]">
      <div className="flex-none rotate-[177.42deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[14px]" data-name="Container">
          <Petal1 />
        </div>
      </div>
    </div>
  );
}

function Petal2() {
  return (
    <div className="relative shrink-0 size-[16.492px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.4922" preserveAspectRatio="none" viewBox="0 0 16.4922 16.4922" width="16.4922">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p1d8f1900} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute flex items-center justify-center left-[526.64px] size-[17.517px] top-[250.02px]">
      <div className="flex-none rotate-[95.73deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[16px]" data-name="Container">
          <Petal2 />
        </div>
      </div>
    </div>
  );
}

function Petal3() {
  return (
    <div className="relative shrink-0 size-[22.195px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.1953" preserveAspectRatio="none" viewBox="0 0 22.1953 22.1953" width="22.1953">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p17752300} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute flex items-center justify-center left-[1223.47px] size-[24.123px] top-[778.36px]">
      <div className="flex-none rotate-[-95.84deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[22px]" data-name="Container">
          <Petal3 />
        </div>
      </div>
    </div>
  );
}

function Petal4() {
  return (
    <div className="relative shrink-0 size-[21.836px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.8359" preserveAspectRatio="none" viewBox="0 0 21.8359 21.8359" width="21.8359">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p39b33900} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute flex items-center justify-center left-[809.57px] size-[26.623px] top-[1034.37px]">
      <div className="flex-none rotate-[-13.84deg]">
        <div className="content-stretch flex flex-col items-start opacity-27 relative size-[22px]" data-name="Container">
          <Petal4 />
        </div>
      </div>
    </div>
  );
}

function Petal5() {
  return (
    <div className="relative shrink-0 size-[13.227px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.2266" preserveAspectRatio="none" viewBox="0 0 13.2266 13.2266" width="13.2266">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.pca94d40} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute flex items-center justify-center left-[626.42px] size-[13.131px] top-[516.97px]">
      <div className="flex-none rotate-[-179.42deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[13px]" data-name="Container">
          <Petal5 />
        </div>
      </div>
    </div>
  );
}

function Petal6() {
  return (
    <div className="relative shrink-0 size-[21.773px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.7734" preserveAspectRatio="none" viewBox="0 0 21.7734 21.7734" width="21.7734">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p250c9400} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute flex items-center justify-center left-[212.98px] size-[29.014px] top-[586.31px]">
      <div className="flex-none rotate-[-156.16deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[22px]" data-name="Container">
          <Petal6 />
        </div>
      </div>
    </div>
  );
}

function Petal7() {
  return (
    <div className="relative shrink-0 size-[14.531px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.5312" preserveAspectRatio="none" viewBox="0 0 14.5312 14.5312" width="14.5312">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p3a584a80} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute flex items-center justify-center left-[1194.52px] size-[21.13px] top-[951.53px]">
      <div className="flex-none rotate-[-39.93deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[15px]" data-name="Container">
          <Petal7 />
        </div>
      </div>
    </div>
  );
}

function Petal8() {
  return (
    <div className="relative shrink-0 size-[15.172px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.1719" preserveAspectRatio="none" viewBox="0 0 15.1719 15.1719" width="15.1719">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p34db6d00} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute flex items-center justify-center left-[1319.13px] size-[18.932px] top-[570.31px]">
      <div className="flex-none rotate-[-161.81deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[15px]" data-name="Container">
          <Petal8 />
        </div>
      </div>
    </div>
  );
}

function Petal9() {
  return (
    <div className="relative shrink-0 size-[10.25px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.25" preserveAspectRatio="none" viewBox="0 0 10.25 10.25" width="10.25">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p14fcd00} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute flex items-center justify-center left-[839.07px] size-[14.142px] top-[938.49px]">
      <div className="flex-none rotate-[-44.52deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[10px]" data-name="Container">
          <Petal9 />
        </div>
      </div>
    </div>
  );
}

function Petal10() {
  return (
    <div className="relative shrink-0 size-[22.719px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.7188" preserveAspectRatio="none" viewBox="0 0 22.7188 22.7188" width="22.7188">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p3d525100} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute flex items-center justify-center left-[785.99px] size-[32.337px] top-[632.13px]">
      <div className="flex-none rotate-[-141.19deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[23px]" data-name="Container">
          <Petal10 />
        </div>
      </div>
    </div>
  );
}

function Petal11() {
  return (
    <div className="relative shrink-0 size-[11.133px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.1328" preserveAspectRatio="none" viewBox="0 0 11.1328 11.1328" width="11.1328">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p2d2c4700} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute flex items-center justify-center left-[366.49px] size-[12.191px] top-[252.74px]">
      <div className="flex-none rotate-[96.6deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[11px]" data-name="Container">
          <Petal11 />
        </div>
      </div>
    </div>
  );
}

function Petal12() {
  return (
    <div className="relative shrink-0 size-[14.508px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.5078" preserveAspectRatio="none" viewBox="0 0 14.5078 14.5078" width="14.5078">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p36530c40} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute flex items-center justify-center left-[1214.06px] size-[20.27px] top-[882.22px]">
      <div className="flex-none rotate-[-62.15deg]">
        <div className="content-stretch flex flex-col items-start opacity-70 relative size-[15px]" data-name="Container">
          <Petal12 />
        </div>
      </div>
    </div>
  );
}

function Petal13() {
  return (
    <div className="relative shrink-0 size-[17.109px]" data-name="Petal">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.1094" preserveAspectRatio="none" viewBox="0 0 17.1094 17.1094" width="17.1094">
        <g id="Petal" opacity="0.5">
          <path d={svgPaths.p191d67f0} fill="var(--fill-0, #B08D57)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute flex items-center justify-center left-[542.86px] size-[17.409px] top-[1075.67px]">
      <div className="flex-none rotate-[-1.4deg]">
        <div className="content-stretch flex flex-col items-start opacity-3 relative size-[17px]" data-name="Container">
          <Petal13 />
        </div>
      </div>
    </div>
  );
}

function FloatingPetals() {
  return (
    <div className="absolute h-[982px] left-0 top-0 w-[1341px]" data-name="FloatingPetals">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container100 />
        <Container101 />
        <Container102 />
        <Container103 />
        <Container104 />
        <Container105 />
        <Container106 />
        <Container107 />
        <Container108 />
        <Container109 />
        <Container110 />
        <Container111 />
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p19cded00} id="Vector" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 7.5L13.3333 12.5" id="Vector_2" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 7.5L18.3333 12.5" id="Vector_3" stroke="var(--stroke-0, #F7F3EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function MusicToggle() {
  return (
    <div className="absolute bg-[#556b3d] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] left-[1269px] rounded-[16777200px] size-[48px] top-[910px]" data-name="MusicToggle">
      <div aria-hidden className="absolute border border-[#b08d57] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

export default function UndanganDigital() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Undangan Digital">
      <App />
      <FloatingPetals />
      <MusicToggle />
    </div>
  );
}