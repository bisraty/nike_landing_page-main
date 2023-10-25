import React from "react";
import { Nav } from "../components";
import { Footer, Services, SuperQuality } from "../sections";

export default function AboutUsPage() {
  return (
    <main className='relative'>
      <Nav />

      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}
