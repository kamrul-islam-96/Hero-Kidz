import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
