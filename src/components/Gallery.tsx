/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import Swal from "sweetalert2";

const Gallery = () => {
  const [arrayImages, setArrayImages] = useState([
    { name: "image1", path: "/image.jpeg" },
    { name: "image2", path: "/image.jpeg" },
    { name: "image3", path: "/image.jpeg" },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const galleryRef = useRef<HTMLDivElement | null>(null);

  const handleImageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageName(e.target.value);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddImage = () => {
    if (!imageName || !imageFile) {
      setErrorMessage("Please provide both an image name and an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(imageFile);

    setArrayImages([...arrayImages, { name: imageName, path: imageUrl }]);
    setImageName("");
    setImageFile(null);
    setErrorMessage("");
    setShowDialog(false);

    Swal.fire({
      icon: "success",
      title: "Image Added",
      text: "The image has been successfully added to the gallery.",
    });
  };

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-2xl flex flex-col gap-8 justify-center items-center w-[620px]">
      <div className="h-16 flex justify-between items-center w-full">
        <button className="w-36 h-16 bg-black text-white rounded-3xl">
          Gallery
        </button>
        <div className="flex gap-5 items-center">
          <button
            className="image-button flex items-center gap-2"
            onClick={() => setShowDialog(true)}
          >
            <IoMdAdd />
            <span className="text-xs">ADD IMAGE</span>
          </button>
          <div className="flex gap-2 items-center">
            <button className="nav-button" onClick={scrollLeft}>
              <FiArrowLeft className="text-2xl text-gray-400 m-2" />
            </button>
            <button className="nav-button" onClick={scrollRight}>
              <FiArrowRight className="text-2xl text-gray-400 m-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[620px] h-44 overflow-x-auto">
        <div
          ref={galleryRef}
          className="flex gap-7 items-center w-max"
          style={{ scrollBehavior: "smooth" }}
        >
          {arrayImages.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={item.path}
                alt={item.name}
                className="rounded-3xl w-48 h-44"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Image</h2>
            <form>
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}
              <div className="mb-4">
                <label
                  htmlFor="imageName"
                  className="block text-sm font-medium mb-1"
                >
                  Image Name
                </label>
                <input
                  type="text"
                  id="imageName"
                  value={imageName}
                  onChange={handleImageNameChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imageFile"
                  className="block text-sm font-medium mb-1"
                >
                  Image File
                </label>
                <input
                  type="file"
                  id="imageFile"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="w-full"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
