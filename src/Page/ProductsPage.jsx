import React from "react";
import { PopularProducts, Services, OurProducts, Footer } from "../sections";
import { BsSearch } from "react-icons/bs";
import { Nav } from "../components";
export default function ProductsPage() {
  return (
    <main>
      <Nav />

      <section className='padding-x padding-t pb-8'>
        <PopularProducts />
      </section>
      <section className='padding-x pb-4'>
        <OurProducts />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}
