"use client";
import {
  Anglelefticon,
  Anglerighticon,
  Compareicon,
  Heartfillicon,
  Hearticon,
  Shareicon,
  Shoppingbagicon,
  Staricon,
} from "@/app/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "./ratings";
import { Quickview } from "./quick-view";
import Counter from "./counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper'; 
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { toggleFavProduct } from "@/store/reducers/user";
import { RootState } from "@/store";
interface ProductCard {
  images?: any[];
  name?: string;
  categoryName?: string;
  SKU?: number;
  id?: any;
  price?: any;
  priceRange?: boolean;
  minimum?: number;
  maximum?: number;
  discount?: number;
  rating?: number;
  color?: any;
  discription?: string;
  slider?: any[];
}
export const Productcard: React.FC<ProductCard> = ({
  images,
  name,
  categoryName,
  SKU,
  id,
  price = 1,
  priceRange = false,
  minimum,
  maximum,
  discount = 0,
  rating,
  color,
  discription,
  slider = [],
}) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(null);
  const [quickviewmodal, setSuickviewmodal] = React.useState(false);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };
  React.useEffect(() => {
    if (quickviewmodal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [quickviewmodal]);
  return (
    <>
      <div className="flex flex-col group">
        <div className="border rounded-md relative ">
          <div className="h-48 flex justify-center items-center">
            <Link href={`/product/${id}`} className="w-full h-full">
              <Image
                className="w-full h-full object-cover rounded-md neg-transition-scale"
                src={images ? images[0] : ""}
                alt="Image"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1 w-16 absolute top-2.5 left-2.5 right-2.5">
            <p className="bg-primary text-center relative z-10 justify-center text-white p-1 font-dm leading-none flex items-center rounded-sm font-medium text-[10px] whitespace-nowrap">
              Featured
            </p>
            <p className="bg-primary-2 flex leading-none text-center relative text-white p-1 font-dm items-center justify-center rounded-sm font-medium z-10 text-[10px] whitespace-nowrap uppercase">
              33.33% off
            </p>
          </div>
          <div className="invisible group-hover:visible absolute inset-0 p-1 z-20 ease-in-out duration-300">
            <div className="w-full h-full flex justify-end cursor-pointer pt-15p ">
              <div className="relative flex flex-col gap-2">
                <button className="h-6 w-6 flex justify-center items-center p-1 text-gray-400 border border-gray-2 rounded-full hover:bg-primary hover:text-white bg-white">
                  <Shoppingbagicon className="size-3" />
                </button>

                <button
                  onClick={toggleFav}
                  className="h-6 w-6 flex justify-center items-center p-1  text-gray-400 relative hover:bg-primary hover:text-white border border-gray-2 rounded-full bg-white"
                >
                  <Heartfillicon className="size-3" />
                </button>

                <button className="h-6 w-6 flex justify-center items-center p-1 text-gray-400 bg-white hover:bg-primary hover:text-white border border-gray-2 rounded-full">
                  <Compareicon className="size-3" />
                </button>
              </div>

              <div className="flex gap-2 absolute bottom-0 inset-x-0 p-1">
                <button
                  onClick={() => setSuickviewmodal(!quickviewmodal)}
                  className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20"
                >
                  Quick View
                </button>
                <button className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:text-center flex flex-col pt-3">
          <p className="text-sm text-gray-400 font-medium font-dm text-center">
            {categoryName}
          </p>

          <h2 className="text-lg sm:text-xl sm:leading-snug leading-snug font-dm font-medium text-center pt-1">
            <Link
              href={`/product/${id}`}
              className="text-gray-700 hover:text-primary ease-in-out duration-200"
            >
              {name}
            </Link>
          </h2>
          <div className="flex justify-center pt-2">
            <Ratings rating={rating} reviewtext={"hidden xl:inline-block"} />
          </div>
          <div
            className="flex items-center justify-center text-center gap-3 pt-2"
            data-label={discount}
          >
            {/* Price Range */}
            {priceRange ? (
              <p className="text-gray-700 font-dm font-semibold text-xl">
                ${minimum} - ${maximum}
              </p>
            ) : (
              <>
                {discount > 0 && (
                  <p className="text-gray-700 font-dm font-semibold text-xl">
                    ${price - (price * discount) / 100}
                  </p>
                )}
                <p
                  className={` font-dm  ${
                    discount > 0
                      ? "line-through text-gray-400 text-lg pl-1 font-medium"
                      : "text-gray-700 text-xl font-semibold"
                  }`}
                >
                  ${price}
                </p>
              </>
            )}
          </div>
          <p className="text-sm text-gray-400 font-dm font-medium text-left pt-2 hidden">
            {discription}
          </p>
        </div>
      </div>

      {quickviewmodal && (
        <Quickview onClick={() => setSuickviewmodal(!quickviewmodal)}>
          <div className="flex flex-col md:grid md:grid-cols-12 gap-5 ">
            <div className="col-span-5 relative z-40">
              <div className="flex flex-col gap-2">
                <div className="relative border border-gray-300 rounded p-2 group overflow-hidden">
                  <Swiper
                    className="mySwiper2 h-full"
                    modules={[FreeMode, Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    pagination={{
                      clickable: true,
                      el: ".pagination",
                      renderBullet: function (index, className) {
                        return (
                          '<span class="cursor-pointer ' +
                          className +
                          '"><span class="invisible">' +
                          (index + 1) +
                          "</span></span>"
                        );
                      },
                    }}
                    loop={true}
                    navigation={{
                      nextEl: ".swiper-next",
                      prevEl: ".swiper-prev",
                    }}
                  >
                    {slider.map((item: any, index: any) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={item}
                          alt=""
                          width={1024}
                          height={600}
                          className="w-auto h-auto object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button
                    className={`absolute z-20 top-1/2 -translate-y-1/2 size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center -left-40 group-hover:left-2 swiper-prev`}
                  >
                    <Anglelefticon className="size-3" />
                  </button>
                  <button
                    className={`absolute z-20 top-1/2 -translate-y-1/2 size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center -right-40 group-hover:right-2 swiper-next`}
                  >
                    <Anglerighticon className="size-3" />
                  </button>
                </div>
                <div className="w-full relative">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {slider.map((item: any, index: any) => (
                      <SwiperSlide key={index}>
                        <div className="border border-gray-300 rounded p-1 flex justify-center items-center">
                          <Image
                            src={item}
                            alt=""
                            width={50}
                            height={50}
                            className="w-20 h-auto object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-span-7 flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="text-sm bg-gray-100 text-gray-500 font-dm px-2 py-0.5">
                  Category: {categoryName}
                </p>
                <p className="text-sm bg-gray-100 text-gray-500 font-dm px-2 py-0.5">
                  SKU: {SKU}
                </p>
              </div>
              <h2 className="text-xl font-dm font-medium text-left text-gray-700">
                {name}
              </h2>
              <div className="flex gap-4 items-center">
                <button className="flex text-gray-500 relative hover:text-primary">
                  <Shareicon className="size-4" />
                </button>
                <button className="flex text-gray-500 relative hover:text-primary">
                  <Hearticon className="size-4" />
                </button>

                <button className="flex text-gray-500 relative hover:text-primary">
                  <Compareicon className="size-4" />
                </button>
              </div>
              <div
                className="flex items-center gap-3 pt-3"
                data-label={discount}
              >
                {/* Price Range */}
                {priceRange ? (
                  <p className="text-gray-700 font-dm font-semibold text-xl">
                    ${minimum} - ${maximum}
                  </p>
                ) : (
                  <>
                    {discount > 0 && (
                      <p className="text-gray-700 font-dm font-semibold text-xl">
                        ${price - (price * discount) / 100}
                      </p>
                    )}
                    <p
                      className={` font-dm  ${
                        discount > 0
                          ? "line-through text-gray-400 text-lg pl-1 font-medium"
                          : "text-gray-700 text-xl font-semibold"
                      }`}
                    >
                      ${price}
                    </p>
                  </>
                )}
              </div>
              <div className="flex gap-2 flex-col sm:flex-row">
                <Counter />
                <button className="text-white font-medium flex gap-1 justify-center items-center py-2 px-3 rounded flex-1 text-center font-dm bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                  <Shoppingbagicon className="size-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </Quickview>
      )}
    </>
  );
};
