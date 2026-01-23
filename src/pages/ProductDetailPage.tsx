import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { metallographicProducts } from "../data/metallographicData";
import { ndtProducts } from "../data/ndtData";
import { physicalTestingProducts } from "../data/physicalTestingData";
import { chemicalTestingProducts } from "../data/chemicalTestingData";
import { foundryProducts } from "../data/foundryData";
import { ultrasonicProducts } from "../data/ultrasonicData";
import { consumablesProducts } from "../data/consumablesData";

// 🔹 slug helper (shared logic, no data change)
const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type UnifiedProduct = {
    id: number;
    name: string;
    image: string;
    description: string;
    specifications: Record<string, string>;
    category: string;
};

const ProductDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // 🔹 Merge Metallurgical + NDT products safely
    const product: UnifiedProduct | undefined = [
        ...metallographicProducts.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                category: category.categoryName,
            }))
        ),

        ...ndtProducts.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                category: category.categoryName,
            }))
        ),

        ...physicalTestingProducts.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                category: category.categoryName,
            }))
        ),

        ...chemicalTestingProducts.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                category: category.categoryName,
            }))
        ),

        ...foundryProducts.flatMap((category) =>
            category.products.map((product) => ({
                ...product,
                category: category.categoryName,
            }))
        ),

       // ✅ Ultrasonic (flat)
    ...ultrasonicProducts.map((product) => ({
      ...product,
      category: "Ultrasonic Machines",
      type: "ultrasonic",
    })),

    // ✅ Consumables (flat)
    ...consumablesProducts.map((product) => ({
      ...product,
      category: "Consumables",
      type: "consumables",
    })),
    ]
        .map((product) => ({
            ...product,
            slug: slugify(product.name),
        }))
        .find((item) => item.slug === slug);

    if (!product) {
        return (
            <p className="p-6 text-center text-gray-500">
                Product not found
            </p>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8">
            {/* Back */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-sm font-medium text-blue-600"
            >
                ← Back to products
            </button>

            <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">
                {/* Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-xl object-cover sm:h-[400px]"
                />

                {/* Content */}
                <div className="mt-6">
                    <p className="text-sm text-gray-500">
                        {product.category}
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-gray-800">
                        {product.name}
                    </h1>

                    <p className="mt-4 text-gray-600">
                        {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="mt-6">
                        <h2 className="mb-3 text-lg font-semibold text-gray-800">
                            Specifications
                        </h2>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {Object.entries(product.specifications).map(
                                ([key, value]) => (
                                    <div
                                        key={key}
                                        className="rounded-lg bg-gray-50 p-3 text-sm"
                                    >
                                        <span className="font-medium text-gray-700">
                                            {key}:
                                        </span>{" "}
                                        <span className="text-gray-600">
                                            {value}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
