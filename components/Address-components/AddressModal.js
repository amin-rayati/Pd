"use client";
import { useState, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "150px",
// };
// const defaultCenter = { lat: 36.30991, lng: 59.361484 };

const AddressModal = ({ isModalOpen, closeModal }) => {
  // const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
  // });
  // const onMapClick = useCallback((event) => {
  //   setMarkerPosition({
  //     lat: event.latLng.lat(),
  //     lng: event.latLng.lng(),
  //   });
  // }, []);

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-100 p-6 rounded-[20px] w-[90%] max-w-md sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <IoMdClose size={30} color="#6b728094" />
              </button>
            </div>

            <div className="text-center mb-5">
              <p className="text-black text-lg font-bold">افزودن آدرس</p>
            </div>

            {/* <div className="h-[150px]">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={markerPosition}
                zoom={13}
                onClick={onMapClick}
              >
                <Marker position={markerPosition} draggable />
              </GoogleMap>
            </div> */}

            <form className="mt-5 space-y-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 text-right">
                  نام آدرس
                </label>
                <input
                  type="text"
                  className="p-3 border-none rounded-lg focus:outline-none my-3 text-right"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 text-right">
                  کد پستی
                </label>
                <input
                  type="text"
                  className="p-3 border-none rounded-lg focus:outline-none my-3 text-right"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500 text-right">
                  آدرس پستی
                </label>
                <textarea
                  rows={4}
                  className="p-3 border-none rounded-lg focus:outline-none my-3 text-right"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-[#0166ff] text-white px-4 py-2 rounded-lg w-[60%]">
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressModal;
