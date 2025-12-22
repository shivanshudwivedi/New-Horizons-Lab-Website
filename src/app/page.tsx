"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Atom, Radio, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <section className="w-full max-w-5xl mx-auto py-20 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          
          <Image 
            src="/nhl_cropped.png" 
            alt="New Horizons Lab Logo" 
            width={250} 
            height={250} 
            className="mx-auto mb-2 object-cover" 
          />
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-500 group-hover:from-white group-hover:to-cyan-300 transition-all tracking-wide">
            New Horizons Lab
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold">LIGO Scientific Collaboration</span>
            <br />
            <span className="font-bold">Physics / Trinity College Research Group </span>
            <br /> 
            <br />
            Uncovering the mysteries of the cosmos through Gravitational Waves, Quantum Optics, and Precision Measurement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <span>Our Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/team"
              className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full max-w-7xl mx-auto py-6 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {[
          {
            icon: <Radio className=" w-8 h-8 text-cyan-400 animate-pulse" />,
            title: "Gravitational Waves",
            desc: "Improving detection sensitivity and reducing systematic errors for the LIGO detectors.",
          },
          {
            icon: <Atom className="w-8 h-8 text-blue-500 animate-pulse" />,
            title: "Quantum Optics",
            desc: "Studying photon interactions and developing new variations for dark matter detection.",
          },
          {
            icon: <Sparkles className="w-8 h-8 text-sky-400 animate-pulse" />,
            title: "Ultra-cold Atoms",
            desc: "Bridging micro and macro worlds using atoms at the heart of quantum mechanics.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-middle"
          >
            <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit mx-auto flex justify-center items-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
