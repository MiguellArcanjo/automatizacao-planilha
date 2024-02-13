import Image from "next/image";
import style from "@/src/styles/home.module.css";
import "@/src/styles/global.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={style.main} style={{margin: 0}}>
      <section>
        <h1 className={style.title}>O que gostaria de fazer?</h1>

        <div>
          <Link href="lancar" className={style.link}>Lançar proposta</Link>
          <Link href="www.google.com" className={style.link}>Consultar proposta</Link>
        </div>
      </section>
    </div>
  );
}
