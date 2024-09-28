import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKGkTd0PdmrkYz8Q29HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzI2MjU0MWU2NzhjMWEzZTQyMTMzYTYyNGE1YTY5ZDNmBGdwb3MDNQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dnext%2Bjs%26type%3DE210IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D5&w=1920&h=1357&imgurl=codewithmosh.com%2F_next%2Fimage%3Furl%3Dhttps%3A%252F%252Fcdn.filestackcontent.com%252F8MbtJ4hTAaOk3KPcptqZ%26w%3D3840%26q%3D75&rurl=https%3A%2F%2Fcodewithmosh.com%2Fp%2Fultimate-nextjs-series&size=67KB&p=next+js&oid=262541e678c1a3e42133a624a5a69d3f&fr2=piv-web&fr=mcafee&tt=The+Ultimate+Next.js+Series&b=0&ni=21&no=5&ts=&tab=organic&sigr=zNSoad6Q8rVl&sigb=yGngBvG3NpvB&sigi=fEy.9cUznXH7&sigt=o7wf57Qtx.gK&.crumb=dxjjA23/ikJ&fr=mcafee&fr2=piv-web&type=E210IN714G0"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
