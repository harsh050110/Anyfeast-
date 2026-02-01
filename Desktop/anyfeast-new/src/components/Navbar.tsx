import {
  Search,
  Mic,
  Camera,
  Calendar,
  User,
  ShoppingCart,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

       
        <div className="flex items-center space-x-12">

          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded">
              🍽
            </div>
            <span className="text-lg font-semibold">
              AnyFeast
            </span>
          </div>

      
          <nav className="flex items-center space-x-6 text-sm text-gray-700">
            <span className="cursor-pointer hover:text-black">Recipe</span>
            <span className="cursor-pointer hover:text-black">Shop</span>
            <span className="cursor-pointer hover:text-black">Festivals</span>
            <span className="cursor-pointer hover:text-black">Blog</span>
            <span className="cursor-pointer hover:text-black">Our Story</span>
          </nav>

        </div>

        
        <div className="flex items-center space-x-5 text-gray-700">

          <Search className="w-5 h-5 cursor-pointer hover:text-black" />
          <Mic className="w-5 h-5 cursor-pointer hover:text-black" />
          <Camera className="w-5 h-5 cursor-pointer hover:text-black" />
          <Calendar className="w-5 h-5 cursor-pointer hover:text-black" />
          <User className="w-5 h-5 cursor-pointer hover:text-black" />

         
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
              17
            </span>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
