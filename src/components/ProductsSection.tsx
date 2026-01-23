import { Link } from "react-router-dom";

const products = [
    {
        title: "Metallurgical Lab Equipments",
        desc: "Comprehensive solutions for material preparation and analysis."
    },
    {
        title: "NDT Equipments",
        desc: "Advanced non-destructive testing tools for material integrity assessment."
    },
    {
        title: "Physical Testing Equipments",
        desc: "Evaluate material properties like strength, hardness, elasticity, and durability."
    },
    {
        title: "Foundry Lab Equipments",
        desc: "Check sand and metal quality, crucial for casting integrity."
    },
    {
        title: "Chemical Testing Equipments",
        desc: "Instruments for precise chemical composition analysis."
    },
    // {
    //     title: "Ultrasonic Machines ",
    //     desc: "An ultrasonic testing (UT) machine uses high-frequency sound waves to detect internal flaws like cracks, voids, or thickness variations in materials."
    // },
    {
        title: "Consumables",
        desc: "Consumables for testing are the essential, often disposable items used up during scientific, material, or general lab analysis."
    }
];

export default function ProductsSection() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-4">

                {/* Section Header */}
                <div className="max-w-2xl mb-14">
                    <p className="text-sm tracking-wide text-blue-900 uppercase">
                        Our Products
                    </p>
                    <h2 className="mt-2 text-3xl sm:text-4xl text-slate-900 font-medium leading-tight">
                        Material Testing Equipments
                    </h2>
                    <p className="mt-4 text-slate-600 text-base">
                        Engineered solutions designed to meet international standards and
                        deliver consistent, reliable results.
                    </p>
                </div>

                {/* Product Cards */}
                <Link to="/products/">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="
                group
                rounded-2xl
                border border-slate-200
                bg-white
                p-7
                transition
                hover:border-blue-300
                hover:shadow-md
              "
                        >
                            

                            <h3 className="text-lg text-slate-900 font-medium">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>

                            <span className="
                mt-6
                inline-block
                text-sm
                text-blue-900
                group-hover:underline
              ">
                                View details →
                            </span>
                        </div>
                    ))}
                </div>
                </Link>
            </div>
        </section>
    );
}
