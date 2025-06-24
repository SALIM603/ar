import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Wand2, Download, Loader, Check } from 'lucide-react';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: string}>({});
  const [showProductSelection, setShowProductSelection] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const productOptions = {
    floorTiles: [
      {
        id: 'marble-floor',
        name: 'Premium Marble Floor',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹1,200/sq.m'
      },
      {
        id: 'wooden-floor',
        name: 'Wooden Finish Floor',
        image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹800/sq.m'
      },
      {
        id: 'ceramic-floor',
        name: 'Ceramic Floor Tiles',
        image: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹600/sq.m'
      }
    ],
    wallTiles: [
      {
        id: 'designer-wall',
        name: 'Designer Wall Tiles',
        image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹600/sq.m'
      },
      {
        id: 'textured-wall',
        name: 'Textured Wall Tiles',
        image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹750/sq.m'
      },
      {
        id: 'subway-wall',
        name: 'Subway Wall Tiles',
        image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹500/sq.m'
      }
    ],
    sanitary: [
      {
        id: 'modern-basin',
        name: 'Modern Wash Basin',
        image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹8,500'
      },
      {
        id: 'luxury-toilet',
        name: 'Luxury Toilet Suite',
        image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹15,000'
      },
      {
        id: 'shower-set',
        name: 'Premium Shower Set',
        image: 'https://images.pexels.com/photos/1454808/pexels-photo-1454808.jpeg?auto=compress&cs=tinysrgb&w=200',
        price: '₹12,000'
      }
    ]
  };

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setGeneratedImage(null);
        setShowProductSelection(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleProductSelect = (category: string, productId: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [category]: productId
    }));
  };

  const generateDesign = async () => {
    if (!uploadedImage || Object.keys(selectedProducts).length === 0) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    // For demo purposes, we'll use a sample generated image
    // In a real implementation, this would call an AI service with selected products
    setGeneratedImage('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800');
    setIsGenerating(false);
  };

  const getSelectedProductsCount = () => Object.keys(selectedProducts).length;

  return (
    <section id="upload" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Interior Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your unfinished interior photo, select your preferred products, and let our AI transform it
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1: Upload Image */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Upload Your Interior Photo
            </h3>
            
            <div
              className={`upload-area rounded-lg p-8 text-center cursor-pointer ${
                dragOver ? 'dragover' : ''
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                className="hidden"
              />
              
              {uploadedImage ? (
                <div className="space-y-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded interior"
                    className="max-w-full h-64 object-cover rounded-lg mx-auto"
                  />
                  <p className="text-green-600 font-medium flex items-center justify-center">
                    <Check className="h-5 w-5 mr-2" />
                    Image uploaded successfully!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-16 w-16 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Drop your image here</p>
                    <p className="text-gray-600">or click to browse</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Select Products */}
          {showProductSelection && (
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Select Your Products
              </h3>

              <div className="space-y-8">
                {/* Floor Tiles */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Floor Tiles</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productOptions.floorTiles.map((product) => (
                      <div
                        key={product.id}
                        className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          selectedProducts.floorTiles === product.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleProductSelect('floorTiles', product.id)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded mb-2"
                        />
                        <h5 className="font-medium text-sm text-gray-900">{product.name}</h5>
                        <p className="text-blue-600 font-semibold text-sm">{product.price}</p>
                        {selectedProducts.floorTiles === product.id && (
                          <div className="mt-2 flex items-center text-blue-600">
                            <Check className="h-4 w-4 mr-1" />
                            <span className="text-xs">Selected</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wall Tiles */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Wall Tiles</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productOptions.wallTiles.map((product) => (
                      <div
                        key={product.id}
                        className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          selectedProducts.wallTiles === product.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleProductSelect('wallTiles', product.id)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded mb-2"
                        />
                        <h5 className="font-medium text-sm text-gray-900">{product.name}</h5>
                        <p className="text-blue-600 font-semibold text-sm">{product.price}</p>
                        {selectedProducts.wallTiles === product.id && (
                          <div className="mt-2 flex items-center text-blue-600">
                            <Check className="h-4 w-4 mr-1" />
                            <span className="text-xs">Selected</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sanitary Products */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Sanitary Products</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productOptions.sanitary.map((product) => (
                      <div
                        key={product.id}
                        className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          selectedProducts.sanitary === product.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleProductSelect('sanitary', product.id)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded mb-2"
                        />
                        <h5 className="font-medium text-sm text-gray-900">{product.name}</h5>
                        <p className="text-blue-600 font-semibold text-sm">{product.price}</p>
                        {selectedProducts.sanitary === product.id && (
                          <div className="mt-2 flex items-center text-blue-600">
                            <Check className="h-4 w-4 mr-1" />
                            <span className="text-xs">Selected</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {getSelectedProductsCount() > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    {getSelectedProductsCount()} product{getSelectedProductsCount() > 1 ? 's' : ''} selected
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 3: Generate Design */}
          {showProductSelection && (
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Generate AI Design
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Generate Button */}
                <div className="space-y-4">
                  <motion.button
                    onClick={generateDesign}
                    disabled={isGenerating || getSelectedProductsCount() === 0}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isGenerating ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" />
                        <span>Generating Design...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-5 w-5" />
                        <span>Generate AI Design</span>
                      </>
                    )}
                  </motion.button>

                  {getSelectedProductsCount() === 0 && (
                    <p className="text-amber-600 text-sm text-center">
                      Please select at least one product to generate design
                    </p>
                  )}
                </div>

                {/* Result Display */}
                <div className="border-2 border-gray-200 rounded-lg p-6 text-center min-h-[200px] flex items-center justify-center">
                  {isGenerating ? (
                    <div className="space-y-4">
                      <Loader className="h-12 w-12 text-blue-600 mx-auto animate-spin" />
                      <p className="text-lg font-medium text-gray-900">Creating your design...</p>
                      <p className="text-gray-600">Applying selected products to your interior</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="space-y-4 w-full">
                      <img
                        src={generatedImage}
                        alt="AI generated interior"
                        className="max-w-full h-48 object-cover rounded-lg mx-auto"
                      />
                      <p className="text-green-600 font-medium">Design generated successfully!</p>
                      <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 mx-auto">
                        <Download className="h-4 w-4" />
                        <span>Download Result</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImageIcon className="h-12 w-12 text-gray-400 mx-auto" />
                      <p className="text-gray-600">Your AI-generated design will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;