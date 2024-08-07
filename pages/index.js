import Header from "@/components/templates/Header/Header";
import DescriptionBox from "@/components/modules/base/DescriptionBox/DescriptionBox";

export default function Home() {
  return (
    <section className="index__main">

      <div className="index__header">
        <Header />
      </div>

      <section className="index__boxes">
        <DescriptionBox />
        <DescriptionBox />
        <DescriptionBox />
      </section>
    </section>
  );
}
