import { ArrowSquareOut } from "@phosphor-icons/react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Work = () => {
  return (
    <div className=" mt-20 mx-7 pb-5 overflow-x-hidden" id="work">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Work
      </p>

      <section className="text-center mt-10">
        {/* 1 */}
        <div className="flex  justify-center gap-5 md:gap-10 flex-wrap">
          <div>
            <img
              src="https://food2001.netlify.app/assets/food1-11260a92.jpeg"
              alt=""
              style={{ width: "500px", height: "300px" }}
              className=" object-cover"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Delicious Food 🍗</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Delicious Food is a delectable food website meticulously crafted
              with React and styled using Tailwind CSS. It's a feast for the
              eyes and the perfect destination for food enthusiasts. Explore a
              world of mouthwatering recipes, culinary tips, and a vibrant
              community of food lovers, all presented in a visually stunning and
              responsive design. Discover, share, and savor the flavors of
              Delicious Food, where every click leads to a delightful culinary
              adventure.
            </p>

            <p className="mt-5">
              <a
                href="https://food2001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex  justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src="https://benjamin-dev.netlify.app/assets/sample-f20854b3.jpg"
              alt=""
              style={{ width: "500px", height: "300px" }}
              className=" object-cover"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Authentic Roof 🏠</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Authentic Roof's website, meticulously built with React and
              Bootstrap, is your gateway to top-notch roofing solutions. Our
              platform seamlessly combines sleek design with user-friendly
              navigation, offering a professional and informative experience.
              Explore our roofing services, portfolios, and client testimonials
              in a responsive and visually appealing layout. Authentic Roof
              welcomes you to discover roofing excellence with the power of
              React and the reliability of Bootstrap, where every visit takes
              you one step closer to a durable and stylish roof.
            </p>

            <p className="mt-5">
              <a
                href="https://roofing2001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex  justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src="data:image/jpeg;base64,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CamncRG12cgkjJwQfmCuvrTTl41Vqm2Qte+hs9A01IrGGNznVGRwgMJJ2HiRjmsFs0tftPa6hulPVT3akuERiuUsxijfGR9R3CMZxy2Gdys0MFq1Rre5aguVmio7GJ7aY/aHOkk4SHfd235HouW6y1LW329UNuFhhit1SYAa2d0bn9MKW0vZLjQa91TdKqnDKKv7n2aTvGnj4Qc7A5HPxVQqtJ3mHVF+q5tDUN9grax0tPLUVsUZY3oAcndbpja9klrJrXTS3H2b2p7MyGlcXRk/hJ5jGF3lF6bFQ2y0jKy3R22VkfB7HHKJGwgbBocNjsApRSsREQEREBERAREQdaqFTwfwgh7zO/e5xj4LrfzjpQfN6kkQRp+mccrf83rmojuRBMEsLXGIDBHuh+efLOMZUiiCMDbmHuOIuH3cNDvDbiHL139NlxLHduI91JT8HC/AI3zl3D+XB+alEQR7mV/d0wa5hcCO/wA4GfTb1/dYo47txs718PB3nv4wctx4bdfipVEEfHHXmkiEkrBUB443ADBbnfw22XDGXL2eYPfF33F/dnmAPNSKIIl8d44X8MsPFwNDdsDiz7x5HwWVjbmBPl8BceHug4e6OucbqRRBG/znpQfN6fznpQfN6kkQYqbvhC32ju+9+13eeH4ZWVEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="
              alt=""
              style={{ width: "500px", height: "300px" }}
              className=" object-cover"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Benix homes 🏠</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Benix Homes presents an elegant real estate website, expertly
              crafted using React and Styled Components. Explore a world of
              luxury properties, expert real estate services, and a responsive,
              aesthetically pleasing design that's as dynamic as the market
              itself. Discover your dream home, investment opportunity, or real
              estate expertise all in one place. Benix Homes invites you to
              embark on a seamless journey through the world of real estate,
              where every click is a step closer to your next chapter.
            </p>

            <p className="mt-5">
              <a
                href="https://real2001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex  justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src="https://myblog2001.netlify.app/assets/logo-86125ae6.png"
              alt=""
              style={{ width: "500px", height: "300px" }}
              //   className=" object-cover"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Blog & News 👨‍💻📰</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Blog & News, developed with React, styled with Tailwind CSS, and
              powered by Supabase, is your gateway to a world of insightful
              content and breaking news. Our website seamlessly combines sleek
              design and cutting-edge technology, providing a user-friendly
              experience. Explore a wide range of articles, stories, and the
              latest news, all presented in a visually stunning and responsive
              layout. Blog & News welcomes you to dive into a world of
              knowledge, where every click connects you to a universe of
              information, made easily accessible with React, Tailwind, and
              Supabase.
            </p>

            <p className="mt-5">
              <a
                href="https://myblog2001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex  justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8VFRcAAAALCw76+vpGRkcGBgpcXFysrKwRERNWVla3t7fFxcXc3NyGhoYAAAXu7u7k5OS+vr6ampp4eHgyMjLV1dXMzMyRkZEgICBAQEApKSlMTExRUVFpaWljY2Ojo6M5OTlXJD9JAAAENklEQVRoge1a27aqMAyEFgsFuSkCiqL+/08emoL0gu4t7WI/nM6bWdjBJk0mqZ7n4ODg4ODg4ODg4OBgB8UNCbg8ik3Zb8gXQND5sCF56VNfAkbJduxFp7D7FKXb0bei2zGjR/1m5IG3z2bsEPz4cjN6GRWj39LzElJCN916GcFlcD3eBX9Efx+2nvobRr2ECBy/ZcYRkQJ75QXrYcBenAbH0/N1Z4DHevo+Z0cemwBFq9mPyDcFua3e/doCe7iaPeDsmIjACzYCNirboGShbC2554VsWRJLuDJ6fJFsIWOi51CyPZnR5MC2cOZqyVaCTQkmNDCRu2y7s5hFBvpoD0xHyVaArVXYfcgMmg0/DY48OD5XfhPS3Rks2MoF25foWL4h8vvDG8mlr1zYo2jJQ98hgyXkQoOZj0PJVC8wcXlgJE4SWOIh2Z6s8F6k/djrQiSANI1MyL0S6wojzFnhldj5SzaiiQenoTZhjsdP6djwLZXYH7qDEnO3T1TSujwJFD+YqoVU8TUS3aORHk48OEVLcCMs+xnKsjofHJ/Hh+SFA6c6JgJiDElVsEQ+fM+MnEvLoaUTASVFshDdRPXDsgL9+ipL5VOwBtF6dnwybsHT9ezGbmfSEmq36tKhu1YjIdda0Pbn5X9CD6kt2c84D/Q4Fgz8WGbNy9BUevJbh6PWU7AMLpWZWksKV3basYXJS62piR1R+ruD+oLBmRoJSmEl5mf8FCzQ34nxHKn73JgriwkgLcU0mkF3KbAz51AiFIOHvQ6wVX9ZqyZ6/jqCITQVlDM0aRmpdY9FuFRRwFkXG+S6tDyomwGHsps/WxCUM0Ba4vmnNcoBC1hk4NP8hYfNiY8qLWtF7AU7lgB28xcqXWyshyotYaYpZIDgpIg/C4JyRklZZidTI08pT/TK57nRp6A1rA27TlA06Au8hH3+bCooZ1QrqqypoJyRfM9Oz7bIubTUJgafkNs67d4kLf04/DXu1rzucWn5v08t/wYwtRQz+bbol4Y1m4GfeBRHv0DS2L7HK3TJ/gGn1ip/eSPfJDqMur1Fcv/bVIuRNfqgy78kt3mVBhoWGrfxLRadTX3pqfxqiZ1PAp5Ruo956EdlqqEB9vyZpIfxKTs/vuEDVwjj6q1aBaGbQ38V9Aujy7XgbSSPIrgoJreFpzJBZluZ1Y1oxflcrHaQE3qxuWOyk5jPDmZ2vm7A7gbwUkDxfmb0NdJHuWsRCTm+Yfcd+dK6R0F2NxZLYslDmLUm6ZP4/vIgDFoMSlh41B1IakvyBgQ1RdesR/htIuHqi6Iwu49TG0vXx814NTUmmzeF9sCfItPo0M6B88bTNAG9u2qRVD+62rs5r9D0fxCKurfV8y48dbNZYx8YNnTI4v2HZdvXU5nd/wwUj91QP7rsc39UHi/sqfav/iri4ODg4ODg4ODg4PAf4B95bTgTzWUyqAAAAABJRU5ErkJggg=="
              alt=""
              style={{ width: "500px", height: "300px" }}
              //   className=" object-cover"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">BENIXMALL</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              An ecommerce site where consumers can buy products online. It
              typically offers a user-friendly interface for browsing,
              selecting, and purchasing items, as well as secure payment and
              shipping options, making it convenient for people to shop from the
              comfort of their own homes.
            </p>

            <p className="mt-5">
              <a
                href="https://benix2001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
