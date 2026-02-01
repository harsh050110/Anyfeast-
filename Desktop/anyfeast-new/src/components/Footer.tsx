import {
  Truck,
  Lock,
  Package,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3a3a3a] text-gray-300 mt-20">

      {/* TOP TRUST BAR */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Package className="w-5 h-5" />
            Cash On Delivery
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Lock className="w-5 h-5" />
            100% Secure Payments
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Truck className="w-5 h-5" />
            Free Delivery on First Order
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* AnyFeast */}
        <div>
          <h3 className="text-white font-semibold mb-4">AnyFeast</h3>
          <ul className="space-y-2 text-sm">
            <li>Shop</li>
            <li>Explore Recipe</li>
            <li>Our Story</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Cancellation & Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>AI Policy</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Get personalised meal ideas made just for you 👨‍🍳
          </h3>

          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l-md text-black outline-none"
            />
            <button className="bg-white px-3 rounded-r-md">
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          <h4 className="text-white mb-2">Social Links</h4>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Linkedin className="w-5 h-5 cursor-pointer" />
            <Youtube className="w-5 h-5 cursor-pointer" />
            <Facebook className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded">
              🍽
            </div>
            <strong className="text-white">AnyFeast</strong>
          </div>

          <p>
            World flavours delivered, kitchen convenience guaranteed. Team up
            with our vendors and partners to bring global recipes to life,
            right at home.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-6 text-xs text-gray-500">
          © 2026 AnyFeast™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
