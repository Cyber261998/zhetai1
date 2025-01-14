import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-600 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fast & Secure International Money Transfers
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Send money worldwide with competitive rates and reliable service. 
              Trust in our decades of experience in international remittance.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
                             flex items-center space-x-2 hover:bg-blue-50 transition-colors">
              <span>Start Transfer</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80" 
              alt="Global Money Transfer"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white h-16 rounded-t-[50px]"></div>
    </div>
  );
}