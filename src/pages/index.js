import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { getURL } from "@/helpers/utility";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Portfolio - Home Page</title>
        <meta name="description" content="This is the home page for Alexander's Portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${getURL()}favicon.ico`} />
      </Head>

      <div className="text-3xl h-screen bg-gradient-to-r from-dark-green to-35% to-medium-green">
        <header>
          <NavBar />
        </header>
        <div className="lg:ml-20 ml-10 lg:mt-10 w-full flex h-4/6">
          <div className="lg:basis-7/12 flex items-center">
            <div className="lg:pr-20 pr-10">
              <h1 className="lg:text-7xl text-5xl font-semibold text-white">
                Hello, it's me! M...
                <span className="text-natural-yellow">Alex</span>
              </h1>
              <p className="lg:text-2xl text-lg text-light-green">
                Technical support engineer
              </p>
              <p className="lg:text-2xl text-lg text-light-green">
                React developer
              </p>
              <p className="lg:text-lg text-xs mt-5 pr-10 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-10">
                <Link
                  href=""
                  className="border-2 border-natural-yellow py-2 px-6 rounded-full text-white lg:text-lg text-sm animate-pulse hover:animate-none "
                >
                  <button>Let's get in touch 💬</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:basis-4/12 basis-4/12 lg:items-center justify-left lg:flex lg:pl-20 hidden">
            <img
              src={`${getURL()}kek.JPG`}
              className="rounded-full h-80 border-natural-yellow border-2"
            ></img>
          </div>
        </div>
        <div className="lg:ml-20 ml-10 w-full">
          <p className="lg:text-lg text-sm font-semibold flex text-white">
            Socials
          </p>
          <div className="inline-block mr-4">
            <Link href="">
              <img src={`${getURL()}linkedin.png`} className="h-8"></img>
            </Link>
          </div>
          <div className="inline-block mr-4">
            <Link href="">
              <img src={`${getURL()}telegram.png`} className="h-8"></img>
            </Link>
          </div>
          <div className="inline-block mr-4">
            <Link href="">
              <img src={`${getURL()}facebook.png`} className="h-8"></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-3xl h-auto flex bg-dark-green pt-10 pb-10">
        <div className="basis-5/12 lg:ml-20 ml-10">
          <h2 className="lg:text-3xl text-xl text-natural-yellow font-semibold">
            My story
          </h2>
          <p className="lg:text-lg text-sm mt-5 text-white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p className="lg:text-lg text-sm mt-5 text-white">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
          </p>
          <p className="lg:text-lg text-sm mt-5 text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="basis-7/12 pl-20 pt-14">
          <div className="bg-medium-green border-2 border-r-0 border-natural-yellow p-5 rounded-l-2xl mb-10 bg-gradient-to-l from-medium-green to-light-green">
            <p className="lg:text-lg text-sm text-black">
              Etiam vel magna erat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Vivamus
              dapibus suscipit turpis, vitae efficitur orci porttitor eget.
            </p>
          </div>
          <div className="bg-medium-green border-2 border-r-0 border-natural-yellow p-5 rounded-l-2xl mb-10 bg-gradient-to-l from-medium-green to-light-green">
            <p className="lg:text-lg text-sm text-black">
              Pellentesque arcu urna, maximus ut nunc a, consectetur fringilla
              ex.
            </p>
          </div>
          <div className="bg-medium-green border-2 border-r-0 border-natural-yellow p-5 rounded-l-2xl mb-10 bg-gradient-to-l from-medium-green to-light-green">
            <p className="lg:text-lg text-sm text-black">
              Quisque egestas mollis vulputate. Vivamus erat orci, varius ac
              fringilla eu, efficitur at purus. Curabitur congue commodo nisl
              vel volutpat. Mauris feugiat turpis sed malesuada convallis.
            </p>
          </div>
        </div>
      </div>
      <div className="text-3xl h-auto bg-medium-green pt-10 pb-10 bg-gradient-to-t from-medium-green from-70% to-dark-green">
        <div className="lg:w-7/12 w-9/12 lg:m-auto ml-10">
          <p className="font-semibold text-natural-yellow flex lg:justify-center lg:text-3xl text-xl">
            Technical support role
          </p>
          <p className="mt-10  flex basis-3/12 lg:justify-center lg:text-lg text-sm text-white">
            Etiam vel magna erat. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Vivamus dapibus
            suscipit turpis, vitae efficitur orci porttitor eget. Quisque
            egestas mollis vulputate. Vivamus erat orci, varius ac fringilla eu,
            efficitur at purus. Curabitur congue commodo nisl vel volutpat.
            Mauris feugiat turpis sed malesuada convallis.
          </p>
          <p className="font-semibold text-light-green flex lg:text-2xl text-lg mt-10 mb-5">
            ⚙️ Technical stack
          </p>
          <div className="inline-block mr-4">
            <img src={`${getURL()}ps.png`} className="h-8" title="PowerShell"></img>
          </div>
          <div className="inline-block mr-4">
            <img src={`${getURL()}sql.png`} className="h-8" title="SQL"></img>
          </div>
          <div className="inline-block mr-4">
            <img src={`${getURL()}swagger.png`} className="h-8" title="Swagger"></img>
          </div>
          <div className="inline-block mr-4">
            <img src={`${getURL()}api.png`} className="h-8" title="API"></img>
          </div>
          <div className="inline-block mr-4">
            <img src={`${getURL()}iis.png`} className="h-8" title="IIS"></img>
          </div>
          <p className="font-semibold text-light-green flex lg:text-2xl text-lg mt-10 mb-5">
            🏆 Achivements
          </p>
          <div className="lg:p-5 p-2 inline-block rounded-xl border-2 border-dark-green m-1 lg:mr-5">
            <p className="font-semibold text-center text-natural-yellow lg:text-3xl text-xl">
              100%
            </p>
            <p className="lg:text-xl text-sm text-center text-white">SLA met</p>
          </div>
          <div className="lg:p-5 p-2 inline-block rounded-xl border-2 border-dark-green m-1 lg:mr-5">
            <p className="font-semibold text-center text-natural-yellow lg:text-3xl text-xl">
              0
            </p>
            <p className="lg:text-xl text-sm text-center text-white">
              Negative surveys
            </p>
          </div>
          <div className="lg:p-5 p-2 inline-block rounded-xl border-2 border-dark-green m-1 lg:mr-5">
            <p className="font-semibold text-center text-natural-yellow lg:text-3xl text-xl">
              30%
            </p>
            <p className="lg:text-xl text-sm text-center text-white">
              Cases with happy surveys
            </p>
          </div>
          <div className="lg:p-5 p-2 inline-block rounded-xl border-2 border-dark-green m-1 lg:mr-5">
            <p className="font-semibold text-center text-natural-yellow lg:text-3xl text-xl">
              0
            </p>
            <p className="lg:text-xl text-sm text-center text-white">
              KPIs violated
            </p>
          </div>
          <div className="lg:p-5 p-2 inline-block rounded-xl border-2 border-dark-green m-1 lg:mr-5">
            <p className="font-semibold text-center text-natural-yellow lg:text-3xl text-xl">
              3%
            </p>
            <p className="lg:text-xl text-sm text-center text-white">
              Escalated cases
            </p>
          </div>
          <p className="font-semibold text-natural-yellow flex lg:justify-center lg:mt-20 mt-10 lg:text-3xl text-xl">
            React developer
          </p>
          <p className="mt-10  flex basis-3/12 lg:justify-center lg:text-lg text-sm text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <p className="font-semibold text-natural-yellow flex mt-10 lg:text-2xl text-lg">
            🚧 Projects
          </p>
          <div className="flex mt-10 flex-col" /* project component */>
            <h2 className="text-light-green font-semibold text-xl">
              LoL helper
            </h2>
            <div className="flex lg:flex-row flex-col">
              <div className="basis-5/12">
                <img
                  src={`${getURL()}lol.JPG`}
                  className="border-2 border-dark-green rounded-md"
                ></img>
              </div>
              <div className="basis-7/12 pl-5">
                <p className="lg:text-lg text-sm text-white">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <p className="font-semibold text-light-green flex text-lg mt-5">
                  ⚙️ Technical stack
                </p>
                <div className="inline-block mr-4">
                  <img src={`${getURL()}html.png`} className="h-10" title="HTML"></img>
                </div>
                <div className="inline-block mr-4">
                  <img src={`${getURL()}css.png`} className="h-10" title="CSS"></img>
                </div>
                <div className="inline-block mr-4">
                  <img src={`${getURL()}react.png`} className="h-10" title="React"></img>
                </div>
                <div className="inline-block mr-4">
                  <img src={`${getURL()}nextjs.png`} className="h-10" title="Next JS"></img>
                </div>
                <div className="inline-block mr-4">
                  <img
                    src={`${getURL()}tailwind.svg`}
                    className="h-10"
                    title="Tailwind CSS"
                  ></img>
                </div>
                <div className="inline-block mr-4">
                  <img src={`${getURL()}api.png`} className="h-10" title="API"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
