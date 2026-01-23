import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ultrasonicProducts } from "../data/ultrasonicData";

type FlatProduct = {
  id: number;
  name: string;
  image: string;
};

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const UltrasonicPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  // 🔹 Search-only filtering
  const filteredProducts: FlatProduct[] =
    ultrasonicProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Ultrasonic Cleaning Machines/Bath
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Advanced ultrasonic cleaning solutions
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 w-full">
        <div className="flex overflow-hidden rounded-full border bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search ultrasonic machines"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-6 pr-4 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() =>
                navigate(
                  `/products/ultrasonic/${slugify(product.name)}`
                )
              }
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>

                <span className="mt-3 inline-block text-sm text-blue-600">
                  View Details →
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default UltrasonicPage;
