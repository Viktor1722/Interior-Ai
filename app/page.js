"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Home1 from "../public/Home1.png";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [futureHomeImage, setFutureHomeImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("");

  const handleImageUpload = (e, imageSetter) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      imageSetter(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDisplayFutureHome = () => {
    if (selectedStyle === "Minimalistic" && uploadedImage) {
      setIsLoading(true); // Start loading
      setTimeout(() => {
        // Set the future home image to the Home1 import
        setFutureHomeImage(Home1.src); // Use the imported image's src
        setIsLoading(false); // Stop loading after delay
      }, 3000); // Delay of 3 seconds
    }
  };

  const handleToggleImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFutureHomeImage((currentImage) =>
        currentImage === Home1.src ? Home2.src : Home1.src
      );
    }, 3000);
  };

  return (
    <main className="bg-slate-100 flex min-h-screen flex-col items-center p-10">
      <nav>
        <div class=" flex flex-wrap items-center justify-between ">
          <Image src={logo} width={120} className="mr-52" />

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded md:bg-transparent text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light md:p-0  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=" block py-2 px-3 text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=" block py-2 px-3 text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="blurry-card"
        className=" mt-24 bg-cover bg-center bg-custom-name rounded-3xl p-4 md:p-8"
      >
        <div className="relative w-full max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mr-[134px] flex flex-col items-center justify-center space-y-4">
              <div className="border w-full md:w-[300px] h-[300px] border-solid border-custom-blue rounded">
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded Image"
                    className="h-full w-full object-cover rounded"
                  />
                ) : (
                  <label
                    htmlFor="file-upload-1"
                    className="text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light cursor-pointer p-2 rounded-md flex justify-center items-center h-full"
                  >
                    Upload an image
                    <input
                      id="file-upload-1"
                      type="file"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, setUploadedImage)}
                    />
                  </label>
                )}
              </div>
              <br></br>

              <div className="border w-full md:w-[300px] h-[300px] border-solid border-custom-blue rounded">
                {futureHomeImage ? (
                  <img
                    src={futureHomeImage}
                    alt="Future Home"
                    className="h-full w-full object-cover rounded"
                  />
                ) : (
                  <label
                    htmlFor="file-upload-2"
                    className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light p-2 rounded-md flex justify-center items-center h-full"
                  >
                    Your future home
                    <input id="file-upload-2" type="file" className="hidden" />
                  </label>
                )}
              </div>
            </div>

            <div class="flex items-center justify-center  ml-16 mt-32 h-96 isolate aspect-video w-96 rounded-xl">
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light mb-4 text-3xl max-w-72">
                  Configure your future home
                </h1>
                <h1 className="text-white mb-14 text-lg max-w-72">
                  We present you our Ai powered tool that will give the chance
                  to configure your future home the way you like it
                </h1>
                <Select>
                  <SelectTrigger className="w-[250px] border-solid bg-clip-text text-transparent bg-gradient-to-br from-gold-dark to-gold-light">
                    <SelectValue placeholder="Select Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Styles</SelectLabel>
                      <SelectItem value="Modern">Modern</SelectItem>
                      <SelectItem value="Vintage">Vintage</SelectItem>
                      <SelectItem value="Minimalistic">Minimalistic</SelectItem>
                      <SelectItem value="Industrial">Industrial</SelectItem>
                      <SelectItem value="Scandinavian">Scandinavian</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <br></br>
                <br></br>
                <Select>
                  <SelectTrigger className="w-[250px] border-solid bg-clip-text text-transparent bg-gradient-to-br from-gold-dark to-gold-light">
                    <SelectValue placeholder="Select a amount of Ai involved" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Ai involvement</SelectLabel>
                      <SelectItem value="apple">Little</SelectItem>
                      <SelectItem value="banana">Moderate</SelectItem>
                      <SelectItem value="blueberry">Heavy</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <br></br>
                <br></br>
                <Select>
                  <SelectTrigger className="w-[250px] border-solid bg-clip-text text-transparent bg-gradient-to-br from-gold-dark to-gold-light">
                    <SelectValue placeholder="Number of generated images" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Number of images</SelectLabel>
                      <SelectItem value="apple">1</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <br></br>
                <br></br>
                <Button
                  onClick={handleToggleImage}
                  className=" bg-transparent border-solid border text-transparent bg-clip-text bg-gradient-to-br from-gold-dark to-gold-light w-[250px]"
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              VisualCapture™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
