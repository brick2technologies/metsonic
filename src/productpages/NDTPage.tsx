import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ndtProducts,
  type NDTCategory,
  type NDTProduct,
} from "../data/ndtData";

type FlatProduct = {
  id: number;
  name: string;
  image: string;
  category: string;
};

// ✅ slug helper (NO data change)
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const NDTPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const navigate = useNavigate();

  // 🔹 Flatten category → products
  const allProducts: FlatProduct[] = ndtProducts.flatMap(
    (category: NDTCategory) =>
      category.products.map((product: NDTProduct) => ({
        id: product.id,
        name: product.name,
        image: product.image,
        category: category.categoryName,
      }))
  );

  const categories: string[] = [
    "All",
    ...ndtProducts.map(
      (c: NDTCategory) => c.categoryName
    ),
  ];

  const filteredProducts = allProducts.filter((product: FlatProduct) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Non-Destructive Testing Equipment
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Advanced NDT solutions for industrial inspection
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 w-full">
        <div className="flex w-full flex-col overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm sm:flex-row">
          {/* Search */}
          <input
            type="text"
            placeholder="Search NDT equipment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent py-3 pl-6 pr-4 text-sm focus:outline-none"
          />

          <div className="hidden w-px bg-gray-300 sm:block" />

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none bg-transparent py-3 pl-4 pr-10 text-sm focus:outline-none"
          >
            {categories.map((cat: string) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: FlatProduct) => (
            <div
              key={product.id}
              onClick={() =>
                navigate(
                  `/products/ndt/${slugify(product.name)}`
                )
              }
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {product.category}
                </p>
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

export default NDTPage;
