import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Shield, Truck, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Design',
      description: 'Advanced AI technology to visualize your space with our products'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'Get your interior design in minutes, not days'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Premium quality products with warranty coverage'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free delivery and installation services available'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support and design consultation'
    },
    {
      icon: Award,
      title: 'Trusted Brand',
      description: 'Over 10 years of experience in tiles and sanitary'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with premium products to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;