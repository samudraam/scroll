import GalleryItem from "./GalleryItem";
import { Link } from "react-router-dom";

const galleryItems = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  borderColor: ["blue-500", "red-600", "amber-400", "purple-900", "green-500"][
    index % 5
  ],
}));

function ScrollGallery() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-10">
      <h1 className="text-black text-4xl lg:text-7xl lg:mb-20 font-laquer mb-6">
        SCROLL*25
      </h1>

      <div className="grid grid-cols-5 grid-auto-rows w-screen h-screen gap-2 items-center justify-center lg:ml-50 min-h-screen">
        {galleryItems.map((item) => (
          <Link key={item.id} to={`/page${item.id}`} className="block">
            <GalleryItem id={item.id} borderColor={item.borderColor} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScrollGallery;
