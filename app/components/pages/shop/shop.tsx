"use client";
import React from "react";
import Filters from "./filters";
import { Productcard } from "../../ui/product-card";
import Sorting from "./sorting";
import { Adjustmenticon, Gridicon, Listicon } from "@/app/icons";
import { Productlistviewcard } from "../../ui/product-listview-card";
import Sidepanel from "../../ui/side-panel";
import useViewportWidth from "@/app/hooks/use-viewport-width";
import useSwr from "swr";
// import ProductItem from '../../product-item';
import ProductsLoading from "../../ui/loading";
import { ProductTypeList } from "@/types";
import ProductItem from "./product-item";
function Shopcomponent() {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSwr('/api/products', fetcher);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("@/api/products", fetcher);

  //   if (error) return <div>Failed to load users</div>;

  const viewportWidth = useViewportWidth();
  const [view, setView] = React.useState(0);
  const [sidePanelOpen, setSidePanelOpen] = React.useState(false);
  React.useEffect(() => {
    if (sidePanelOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidePanelOpen]);
  return (
    <>
      <div className="md:grid md:grid-cols-12 md:gap-5 pt-3">
        <div className="md:col-span-3 hidden md:block">
          <Filters />
          {!sidePanelOpen || (viewportWidth >= 768 && <></>)}
        </div>
        <div className="md:col-span-9 flex flex-col gap-5">
          <div className="flex justify-between gap-4">
            <button
              onClick={() => setSidePanelOpen(!sidePanelOpen)}
              className="bg-primary text-white rounded py-2 px-3 flex md:hidden gap-1 font-medium font-dm text-sm"
            >
              <Adjustmenticon className="size-4" /> <span>Filters</span>
            </button>
            <h3 className="text-xl text-gray-900 hidden md:block">
              179 products found
            </h3>
            <div className="flex gap-2 items-center">
              <div className="w-32 sm:w-44">
                <Sorting />
              </div>
              <select className="hidden md:block border border-gray-300 py-1.5 px-2 w-14 text-sm text-gray-600 font-dm font-medium outline-none focus:ring-0 focus:border-primary appearance-none">
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
              <div className="flex gap-1">
                <button
                  onClick={() => setView(0)}
                  className={`border border-gray-300 p-2 flex justify-center items-center ease-in-out duration-200 ${
                    view == 0
                      ? "text-primary border-primary"
                      : "text-gray-400 hover:text-primary hover:border-primary"
                  }`}
                >
                  <Gridicon className="size-4" />
                </button>
                <button
                  onClick={() => setView(1)}
                  className={`border border-gray-300 p-2 flex justify-center items-center ease-in-out duration-200 ${
                    view == 1
                      ? "text-primary border-primary"
                      : "text-gray-400 hover:text-primary hover:border-primary"
                  }`}
                >
                  <Listicon className="size-4" />
                </button>
              </div>
            </div>
          </div>
          {/* <Productcard rating={3.5} slider={['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', ]} categoryName='Home Appliances' thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" priceRange={true} minimum={40} maximum={100} discription={'Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'}  /> */}
          {view == 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-0">
              {data ? (
                <>
                  {data.map((item: ProductTypeList) => (
                    <ProductItem
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      color={item.color}
                      currentPrice={item.currentPrice}
                      key={item.id}
                      images={item.images}
                    />
                  ))}
                </>
              ) : (
                <>
                  <ProductsLoading />
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <Productlistviewcard
                rating={3.5}
                slider={[
                  "/images/product.png",
                  "/images/product.png",
                  "/images/product.png",
                  "/images/product.png",
                  "/images/product.png",
                ]}
                categoryName="Home Appliances"
                thumb="/images/product-1.webp"
                productName="Waist straight Slouchy jeans"
                priceRange={true}
                minimum={40}
                maximum={100}
                discription={
                  "Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
                }
              />
            </div>
          )}
        </div>
      </div>
      {sidePanelOpen && viewportWidth <= 767 && (
        <Sidepanel onClick={() => setSidePanelOpen(!sidePanelOpen)}>
          <div className="overflow-auto max-h-screen">
            <Filters />
          </div>
        </Sidepanel>
      )}
    </>
  );
}

export default Shopcomponent;
