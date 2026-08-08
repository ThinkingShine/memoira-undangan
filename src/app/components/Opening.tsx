import { Section } from "./Section";
import { OrnamentDivider } from "./OrnamentDivider";

export function Opening() {
  return (
    <Section className="bg-[#f7f3ea]">
      <div className="max-w-2xl mx-auto text-center">
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
          className="text-2xl md:text-3xl italic"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#5a5a4f] text-sm tracking-wider mt-2"
        >
          Assalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <OrnamentDivider />

        <p
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
          className="text-lg md:text-xl italic leading-relaxed"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#b08d57] tracking-widest text-sm mt-4"
        >
          — QS. AR-RUM : 21 —
        </p>

        <OrnamentDivider />

        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[#5a5a4f] leading-relaxed"
        >
          Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami. Sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
      </div>
    </Section>
  );
}
