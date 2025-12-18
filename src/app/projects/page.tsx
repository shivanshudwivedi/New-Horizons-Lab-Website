"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Telescope, X, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "seismic",
    icon: <div className="relative flex gap-2">
            <div className="relative w-30 h-30">
                <Image 
                    src="/logos/lvk.jpg" 
                    alt="LVK Logo" 
                    fill 
                    className="object-contain rounded-lg"
                />
            </div>
            <div className="relative w-30 h-30">
                <Image 
                    src="/logos/ligo.png" 
                    alt="LIGO Logo" 
                    fill 
                    className="object-contain rounded-lg"
                />
            </div>
          </div>,
    title: "Microseismic Noise Mitigation with Machine Learning for Advanced LIGO Detectors",
    shortDesc: "Using Machine Learning to model and suppress residual seismic motion within the isolation system.",
    fullDesc: "The unprecedented sensitivity of the Laser Interferometer Gravitational-Wave Observatory, which enables the detection of distant astrophysical sources, also renders the detectors highly susceptible to low-frequency ground motion. Persistent microseisms in the 0.1–0.3 Hz band couple into the instruments, degrade lock stability, and contribute substantially to detector downtime during observing runs.\n\nThe multi-stage seismic isolation system has achieved remarkable success in mitigating such disturbances through active feedback control, yet residual platform motion remains a key factor limiting low-frequency sensitivity and duty cycle. Further reduction of this residual motion is therefore critical for improving the long-term stability and overall astrophysical reach of the observatories.\n\nIn this work, we develop a data-driven approach that uses machine learning to model and suppress residual seismic motion within the isolation system. Ground and platform sensor data from the detectors are used to train a neural network that predicts platform motion driven by microseismic activity. When incorporated into the control scheme, the network’s predictions yield up to an order-of-magnitude reduction in residual motion compared to conventional linear filtering methods, revealing that non-linear couplings play a significant role in limiting current isolation performance. These results demonstrate that machine-learning-based control can provide a powerful new pathway for enhancing active seismic isolation, improving lock robustness, and extending the low-frequency observational capabilities of gravitational-wave detectors.",
    team: ["Shivanshu Dwivedi", "Claudia Geer", "Eyal Schwartz"],
    collaborators: [
      { name: "LIGO", logo: "/logos/ligo.png" }, 
      { name: "MIT", logo: "/logos/mit.png" },
      { name: "Stanford", logo: "/logos/stanford.png" },
      {name: "CalTech", logo:"/logos/caltech.png"},
      {name: "Tel Aviv University", logo:"/logos/tau.png"},
    ]
  },
  {
    id: "darm",
    icon: <div className="relative flex gap-2">
            <div className="relative w-30 h-30">
                <Image 
                    src="/logos/lvk.jpg" 
                    alt="LVK Logo" 
                    fill 
                    className="object-contain rounded-lg"
                />
            </div>
            <div className="relative w-30 h-30">
                <Image 
                    src="/logos/ligo.png" 
                    alt="LIGO Logo" 
                    fill 
                    className="object-contain rounded-lg"
                />
            </div>
          </div>,
    title: "Optimal Control of Optical Cavities for Advanced LIGO Detectors",
    shortDesc: "Optimizing the PRCL, SRCL and DARM Optical Cavities for Advanced LIGO Detectors",
    fullDesc: "Optimizing the Differential Arm Length (DARM) control loop is crucial for maintaining the interferometer's lock and sensitivity. This research investigates optimal control strategies to minimize residual DARM motion, thereby reducing noise and improving the detector's duty cycle.\n\nBy employing advanced control techniques, we aim to suppress disturbances that affect the differential arm length, ensuring that the gravitational wave signal is not masked by noise. This involves a detailed analysis of the control loop dynamics and the implementation of robust control algorithms.",
    team: ["Claudia Geer", "Meric Yasar", "Kaia Henderson", "Eyal Schwartz"]
  },
  {
    id: "neuro",
    icon: <div className="relative flex gap-2 items-center">
            <Brain className="w-30 h-30 text-blue-500" />
            <div className="relative w-35 h-30 bg-white rounded-lg overflow-hidden">
                <Image 
                    src="/logos/trinity.png" 
                    alt="Trinity College Logo" 
                    fill 
                    className="object-contain p-1"
                />
            </div>
          </div>,
    title: "Thermodynamics of Memory: Entropy Analysis in Spiking Neural Networks",
    shortDesc: "Investigating the thermodynamics of memory by modeling the synapse as a fundamental unit of information storage.",
    fullDesc: "This project investigates the thermodynamics of memory in neural systems by modeling the synapse as a fundamental unit of information storage. We conducted both a literature review and computational simulations to explore how synaptic strength modifications affect entropy in spiking neural networks.\n\nUsing the NEST simulator, we implemented a 20×20 grid of adaptive exponential integrate-and-fire neurons connected with Tsodyks–Markram synapses, totaling over 11,000 connections with distance-dependent probabilities. Background Poisson input and targeted currents were applied to drive spiking activity, which was analyzed using a lattice field theory–based Gibbs–Shannon entropy framework.\n\nPreliminary results demonstrate measurable entropy shifts when subsets of synapses are selectively strengthened, though no consistent monotonic trend emerged. These findings suggest synaptic changes influence network informational capacity, but refinement of input dynamics, clustering, and inhibitory–excitatory balance is needed to clarify whether single synapses can be considered thermodynamic units of memory.",
    team: ["Kaia Henderson", "Meriç Yaşar", "Eyal Schwartz"]
  }
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Current Projects</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-left relative overflow-hidden flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="mb-6 flex justify-center md:justify-start">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors overflow-hidden">
                    {project.icon}
                  </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">{project.shortDesc}</p>
              
              {/* Project Card Footer: Team & Logos (if applicable) */}
              <div className="mt-auto pt-4 border-t border-white/5">
                 <div className="flex flex-wrap gap-2 mb-3">
                    {project.team.slice(0, 3).map((member) => (
                        <span key={member} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                            {member}
                        </span>
                    ))}
                    {project.team.length > 3 && (
                        <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                            +{project.team.length - 3} more
                        </span>
                    )}
                 </div>
                 {project.collaborators && (
                     <div className="flex items-center gap-3 mt-3 opacity-70 grayscale hover:grayscale-0 transition-all">
                         {/* Using text placeholders for logos as images are not provided, but structure is ready */}
                         {project.collaborators.map(collab => (
                             <div key={collab.name} className="text-[10px] font-bold text-white border border-white/20 px-1 rounded">
                                 {collab.name}
                             </div>
                         ))}
                     </div>
                 )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                <motion.div
                  layoutId={selectedId}
                  className="w-full max-w-3xl bg-[#0a0a12] border border-white/10 rounded-3xl overflow-hidden pointer-events-auto shadow-2xl shadow-cyan-900/20 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
                >
                  <div className="relative p-6 md:p-12">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    {(() => {
                        const project = projects.find(p => p.id === selectedId)!;
                        return (
                            <div className="text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-8 border-b border-white/10 pb-6 md:pb-8">
                                    <div className="p-3 md:p-4 rounded-2xl bg-cyan-500/10 self-start md:self-center">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {project.team.map((member) => (
                                                <span key={member} className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs md:text-sm text-blue-300">
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="prose prose-invert max-w-none">
                                    <div className="bg-white/5 rounded-2xl p-5 md:p-8 border border-white/5 mb-6 md:mb-8">
                                        <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                                            <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                                            Project Abstract
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line font-light">
                                            {project.fullDesc}
                                        </p>
                                    </div>

                                    {project.collaborators && (
                                        <div>
                                            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 md:mb-6 flex items-center gap-2">
                                                <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                                                Collaborations
                                            </h4>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                                {project.collaborators.map((collab) => (
                                                    <div key={collab.name} className="bg-white/5 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-3 hover:bg-white/10 transition-colors group">
                                                        <div className="h-12 w-12 md:h-16 md:w-16 relative flex items-center justify-center">
                                                            <Image 
                                                              src={collab.logo} 
                                                              alt={collab.name} 
                                                              fill 
                                                              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                        <span className="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">{collab.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })()}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-white/5"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Come Suggest a Project</h3>
          <p className="text-gray-400">
            Our lab is constantly evolving with new projects. Feel free to suggest a project you would like to work on.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
