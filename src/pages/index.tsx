import Image from "next/image";
import Search from "../components/general/Search";
import DiscoverContainer from "@/components/discover/DiscoverContainer";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-wealthBgOrange/90 via-wealthBgYellow/50 pb-12">
        <header className="flex justify-center items-center py-6 relative">
          <Image
            src="/wealth-title.svg"
            alt="Wealth Logo"
            width={135}
            height={135}
          />
        </header>
        <div className="flex flex-col gap-4 justify-center items-center mt-12 text-center max-w-[550px] mx-auto pb-12 px-4 md:px-0">
          <div className="mb-4 font-avenirMedium">
            <h1 className="font-avenirHeavy text-wealthTxtBlack tracking-widest text-[14px]">
              WEALTH & PROSPERITY
            </h1>
          </div>
          <div className="">
            <h2 className="font-bebas text-6xl font-bold text-wealthTitleBlack text-shadow shadow-black/40">
              THE DIGITAL NOISE MAKERS IN THE FINANCIAL SPACE.
            </h2>
          </div>
          <div className="px-4">
            <h3 className="font-avenirMedium text-wealthTxtBlack leading-7 text-[16px]">
              Compare rates, crunch numbers and get expert guidance for life's
              biggest financial moments.
            </h3>
          </div>
          <div className="my-4 w-full">
            <Search />
          </div>
          <div className="mt-4 flex flex-col w-full">
            <div className="mb-4">
              <h4 className="font-avenirHeavy text-wealthTxtBlack tracking-widest text-[14px]">
                AS SEEN ON
              </h4>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <div>
                <Image
                  src="/forbes-logo.svg"
                  width={100}
                  height={100}
                  alt="Forbes Logo"
                />
              </div>
              <div>
                <Image
                  src="/the-wall-street-journey-logo.svg"
                  width={180}
                  height={180}
                  alt="The Wall Street Logo"
                />
              </div>
              <div>
                <Image
                  src="/wealthfront-logo.svg"
                  width={100}
                  height={100}
                  alt="Wealthfront Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 mt-4">
        <div className="flex flex-col text-center justify-center max-w-[450px] mx-auto">
          <h1 className="text-wealthTxtOrange text-shadow shadow-black/20 font-avenirHeavy tracking-widest text-[13px]">
            AREAS OF FOCUS
          </h1>
          <h2 className="font-bebas text-[35px] sm:text-[45px] mt-1">
            DISCOVER AN INTEREST OR TOPIC.
          </h2>
          <h3 className="px-4 font-avenirMedium text-wealthTxtBlack leading-7 text-[16px]">
            Compare rates, crunch numbers and get expert guidance for life's
            biggest financial moments.
          </h3>
        </div>
        <div className="mb-12 mx-8">
          <DiscoverContainer />
        </div>
      </div>
      <div className="flex justify-center items-center mb-16">
        <button className="bg-wealthButtonOrange px-24 py-4 hover:bg-wealthButtonOrange/80 font-avenirHeavy text-wealthTxtBlack tracking-widest text-[14px]">
          VIEW ALL OF OUR LATEST
        </button>
      </div>
    </main>
  );
}
