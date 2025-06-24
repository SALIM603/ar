import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Wand2, Download, Loader } from 'lucide-react';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setGeneratedImage(null);
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

  const generateDesign = async () => {
    if (!uploadedImage) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // For demo purposes, we'll use a sample generated image
    // In a real implementation, this would call an AI service
    setGeneratedImage('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800');
    setIsGenerating(false);
  };

  return (
    <section id="upload" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Interior Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your unfinished interior photo and let our AI transform it with our premium tiles and sanitary products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">1. Upload Your Photo</h3>
            
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
                  <p className="text-green-600 font-medium">Image uploaded successfully!</p>
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

            {uploadedImage && (
              <motion.button
                onClick={generateDesign}
                disabled={isGenerating}
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
            )}
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">2. AI Generated Result</h3>
            
            <div className="border-2 border-gray-200 rounded-lg p-8 text-center min-h-[300px] flex items-center justify-center">
              {isGenerating ? (
                <div className="space-y-4">
                  <Loader className="h-16 w-16 text-blue-600 mx-auto animate-spin" />
                  <p className="text-lg font-medium text-gray-900">Creating your design...</p>
                  <p className="text-gray-600">This may take a few moments</p>
                </div>
              ) : generatedImage ? (
                <div className="space-y-4 w-full">
                  <img
                    src={generatedImage}
                    alt="AI generated interior"
                    className="max-w-full h-64 object-cover rounded-lg mx-auto"
                  />
                  <p className="text-green-600 font-medium">Design generated successfully!</p>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 mx-auto">
                    <Download className="h-4 w-4" />
                    <span>Download Result</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="h-16 w-16 text-gray-400 mx-auto" />
                  <p className="text-gray-600">Your AI-generated design will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;