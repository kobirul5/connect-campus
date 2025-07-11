'use client'
import { galleryImages, ICollageImage } from "@/data/galleryImage";
import { useState } from "react";

const CollegeGallery = () => {
  

  const [selectedImage, setSelectedImage] = useState<ICollageImage | null>();

  return (
    <section className="pv-10 px-4 ">
      <div className="container  mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Graduating Classes
            </span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="card bg-base-100 shadow-xl image-full hover:shadow-2xl transition-all duration-300 group"
              onClick={() => setSelectedImage(image)}
            >
              <figure>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full max-h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="card-body justify-end">
                <h3 className="card-title text-white">{image.caption}</h3>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline badge-sm text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal modal-open">
          <div className="modal-box max-w-5xl">
            <button 
              onClick={() => setSelectedImage(null)} 
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">{selectedImage.caption}</h3>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedImage.tags.map((tag, index) => (
                <span key={index} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CollegeGallery;