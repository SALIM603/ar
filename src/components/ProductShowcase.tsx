import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const products = [
    {
      category: 'Floor Tiles',
      items: [
        {
          name: 'Premium Marble Floor Tiles',
          price: '₹1,200/sq.m',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['Water Resistant', 'Easy to Clean', 'Durable']
        },
        {
          name: 'Wooden Finish Floor Tiles',
          price: '₹800/sq.m',
          image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['Natural Look', 'Slip Resistant', 'Long Lasting']
        }
      ]
    },
    {
      category: 'Wall Tiles',
      items: [
        {
          name: 'Designer Wall Tiles',
          price: '₹600/sq.m',
          image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['Modern Design', 'Easy Installation', 'Stain Resistant']
        },
        {
          name: 'Textured Wall Tiles',
          price: '₹750/sq.m',
          image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['3D Effect', 'Premium Quality', 'Unique Pattern']
        }
      ]
    },
    {
      category: 'Sanitary Products',
      items: [
        {
          name: 'Modern Wash Basin',
          price: '₹8,500',
          image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['Contemporary Design', 'High Quality Ceramic', 'Easy Maintenance']
        },
        {
          name: 'Luxury Toilet Suite',
          price: '₹15,000',
          image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
          features: ['Water Efficient', 'Comfort Height', 'Soft Close Seat']
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of high-quality tiles and sanitary products
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((product, productIndex) => (
                <motion.div
                  key={product.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h4>
                    
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      {product.price}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;