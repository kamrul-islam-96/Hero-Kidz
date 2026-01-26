import { getSingleProduct } from "@/actions/server/product";
import AddToCartBtn from "@/components/buttons/AddToCartBtn";
import Image from "next/image";
import {
  FaStar,
  FaShoppingCart,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const API_URL = `https://hero-kidz-kamrul-islam-96-kamruls-projects-a798478d.vercel.app/api/products/${id}`;

  try {
    const response = await fetch(API_URL);
    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType?.includes("application/json")) {
      return { title: "Hero Kidz | Kids Shop" };
    }

    const product = await response.json();
    return {
      title: product.name,
      description: product.description?.slice(0, 150),
      metadataBase: new URL(API_URL),
      openGraph: {
        title: `${product.name} | Hero Kidz`,
        description: product.description,
        url: `${API_URL}/products/${id}`,
        images: [
          {
            url: product.image,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  } catch (error) {
    return { title: "Hero Kidz" };
  }
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Product Not Found!
      </div>
    );
  }

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        {/* Left: Product Image */}
        <div className="relative group">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-2xl w-full object-contain bg-gray-50 max-h-125"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 badge badge-secondary p-3 font-bold">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral">{product.title}</h1>
            <p className="text-lg text-primary font-medium mt-1">
              {product.bangla}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-warning">
              <FaStar className="mr-1" />
              <span className="font-bold">{product.ratings}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500">
              {product.reviews} Reviews
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500 font-semibold">
              {product.sold} Sold
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {product.discount > 0 && (
              <span className="text-xl line-through text-gray-400">
                ৳{product.price}
              </span>
            )}
          </div>

          <div className="divider"></div>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Key Features:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.info?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <FaCheckCircle className="text-success shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary gap-2">
              <FaShoppingCart /> Buy Now
            </button>
            <div>
              <AddToCartBtn product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Description & QNA Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-base-100 p-6 rounded-2xl border border-base-200">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-base-100 p-6 rounded-2xl border border-base-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaQuestionCircle className="text-primary" /> Q&A
            </h3>
            <div className="space-y-4">
              {product.qna?.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-base-100 pb-3 last:border-0"
                >
                  <p className="font-semibold text-sm">Q: {item.question}</p>
                  <p className="text-gray-500 text-sm mt-1">A: {item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
