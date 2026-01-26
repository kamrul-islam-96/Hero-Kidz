import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className="py-8">
        <Products />
      </section>
    </div>
  );
}
