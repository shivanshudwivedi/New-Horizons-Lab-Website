"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, GraduationCap, Brain, Quote, Linkedin, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title?: string;
  graduationYear?: string;
  major?: string;
  project?: string;
  quote?: string;
  email?: string;
  linkedin?: string;
  image: string;
  bio?: string;
  education?: string[];
  interests?: string[];
  trinityProfile?: string;
  teaching?: string;
  awards?: string[];
  type: "professor" | "student";
}

const teamData: TeamMember[] = [
  {
    id: "eyal",
    name: "Dr. Eyal Schwartz",
    role: "Group Leader",
    title: "Assistant Professor of Physics",
    type: "professor",
    image: "/team/eyal-schwartz.jpeg",
    email: "eyal.schwartz@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/eyal-schwartz-4097912b8/",
    education: ["Ph.D., Technion-Israel Inst. of Tech.", "M.Sc., Technion-Israel Inst. of Tech.", "B.A., Technion-Israel Inst. of Tech."],
    interests: ["Gravitational Waves", "Advanced LIGO", "Quantum Optics", "Ultra-cold Atoms"],
    trinityProfile: "https://internet3.trincoll.edu/facProfiles/Default.aspx?fid=1481167",
    teaching: "Eyal is passionate about teaching and assisting students to appreciate the beauty of nature.",
    bio: "My research interests span from cosmic events to microscopic quantum physics phenomena. I utilize precision measurement techniques, such as optical interferometry, to explore different peculiar behaviors in nature."
  },
  { 
    id: "claudia", 
    name: "Claudia Geer", 
    role: "Research Assistant",
    type: "student",
    graduationYear: "2026",
    major: "Physics",
    project: "LIGO Detectors Optical Cavities Optimization",
    quote: "I'm currently working to mitigate the PRCL, SRCL and DARM Optical Cavities in seismic frequencies. My interests lie in using computer science and physics to build and improve detectors. I've been wokring in this group since Summer 2025.",
    email: "claudia.geer@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/claudia-geer",
    image: "/team/claudia.jpg" 
  },
  { 
    id: "shivanshu", 
    name: "Shivanshu Dwivedi", 
    role: "Research Assistant",
    graduationYear: "2026",
    type: "student",
    major: "Physics & Computer Science",
    project: "Mitigating Seismic Noise for Advanced LIGO Detectors",
    quote: "I have been working on this project from the Spring of 2025. \n I contribute by applying Machine Learning techniques to the problem of seismic noise mitigation for Advanced LIGO detectors. \n I love the project because it combines my interests in physics and computer science, and I am excited to see the results of our work.",
    email: "shivanshu.dwivedi@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/shivanshudwivedi/",
    image: "/team/shivanshu-dwivedi.jpeg" 
  },
  { 
    id: "meric", 
    name: "Meric Yasar", 
    role: "Research Assistant",
    graduationYear: "2028",
    type: "student",
    major: "Physics & Mathematics",
    project: "LIGO Detectors Optical Cavities Optimization",
    quote: "I started working on this project in 2025. I am focusing on the relation between the seismic ground motion and PRC (Power Recycling Cavity) signals. Working on this project has really shown me how much I enjoy the combination of physics, mathematical modeling, and data analysis. I am also getting increasingly interested in the field of machine learning tools to understand complex patterns in the detector's behavior.",
    email: "meric.yasar@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/meric-yasar-1234567890/",
    image: "/team/meric.jpg" 
  },
  { 
    id: "kaia", 
    name: "Kaia Henderson", 
    role: "Research Assistant",
    type: "student",
    major: "Physics", 
    graduationYear: "2027",
    project: "LIGO Detectors Optical Cavities Optimization",
    quote: "I started working on this project in the Fall of 2025. I contribute by analyzing data from the Signal Recycling Cavity (SRC) in the LIGO Detector to better understand how it shapes the detector's sensitivity. I enjoy this work because it connects my interests in physics and data analysis, and I'm excited to help improve the performance of gravitational wave detectors.",
    email: "kaia.henderson@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/kaia-henderson-1234567890/",
    image: "/team/kaia.jpg" 
  },
  {
    id: "ryan",
    name: "Ryan M. Miller",
    role: "Research Assistant",
    type: "student",
    image: "/team/ryan.jpg",
    project: "Fabry-Perot Cavity Optimization",
    major: "Undeclared",
    graduationYear: "2029",
    quote: "I am working on constructing and optimizing a Fabry-Perot cavity as a part of a larger experiment to explore a power recycled common path interferometer as future GW detector."
  },
  {
    id: "daniel",
    name: "Daniel Arango",
    role: "Research Assistant",
    type: "student",
    image: "/team/daniel.jpg",
    project: "Fabry-Perot Cavity Optimization",
    major: "Physics & Engineering",
    graduationYear: "2028",
    quote: "I am working on constructing and optimizing a Fabry-Perot cavity as a part of a larger experiment to explore a power recycled common path interferometer as future GW detector."
  }
];

/**
 * {
    id:"Jason",
    name: "Jason Perez Mendez",
    role: "Research Assistant",
    type: "student",
    major: "Physics & Mechanical Engineering",
    graduationYear: "2028",
    project: "LIGO Setup and Calibration at Trinity College",
    quote: " ed LIGO detectors. \n I love the project because it combines my interests in physics and mechanical engineering, and I am excited to see the results of our work.",
    email: "jason.mendez@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/jpm06/",
    image: "/team/jason.jpg"
  },
  {
    id:"Pema",
    name: "Pema Gyaltshen Wangchuk ",
    role: "Research Assistant",
    type: "student",
    major: "Physics",
    graduationYear: "2028",
    project: "LIGO Setup and Calibration at Trinity College",
    quote: "For the Summer of 2025, I, along with Jason Perez, worked in the New Horizon Laboratory at Trinity College under the mentorship of Professor Schwartz.  Together, we constructed and aligned a Michelson interferometer in the lab and achieved a lock cycle of 83% for 40 minutes. Through this summer research experience, I gained hands-on experience working with precision optics, laser alignment, and setting up negative feedback loops. Through this experience, I was able to learn and gain a deeper appreciation for the science and work that goes behind LIGO.",
    email: "pema.gyaltshen@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/pema-wangchuk-5a423b279/",
    image: "/team/pema.jpeg"
  },
 */


export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start relative">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our Team</h1>
                <p className="text-lg md:text-xl text-cyan-200/80 font-light tracking-wide">Connected by curiosity (Click to explore)</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
                {teamData.map((member) => (
                    <div
                        key={member.id}
                        className="flex flex-col items-center text-center group cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                    >
                         <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] mb-4 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                             <Image
                                 src={member.image}
                                 alt={member.name}
                                 fill
                                 className="object-cover transition-transform duration-500 group-hover:scale-110"
                             />
                         </div>
                         <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                            <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                            <p className="text-cyan-300 text-sm font-medium">{member.role}</p>
                         </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Member Detail Modal */}
        <AnimatePresence>
            {selectedMember && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                        <motion.div
                            layoutId={selectedMember.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-3xl bg-[#0a0a12] border border-white/10 rounded-3xl overflow-hidden pointer-events-auto shadow-2xl shadow-cyan-900/20 max-h-[90vh] overflow-y-auto scrollbar-hide"
                        >
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white z-10 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex flex-col md:flex-row">
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/3 bg-gradient-to-b from-cyan-900/20 to-blue-900/10 p-8 flex flex-col items-center text-center">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 overflow-hidden mb-6 relative shadow-xl">
                                            <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">{selectedMember.name}</h2>
                                        <p className="text-cyan-400 font-medium mb-6">{selectedMember.role}</p>
                                        
                                        <div className="flex gap-3 justify-center">
                                            {selectedMember.email && (
                                                <a href={`mailto:${selectedMember.email}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                            {selectedMember.linkedin && (
                                                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full md:w-2/3 p-6 md:p-8 space-y-6">
                                        {selectedMember.type === 'professor' ? (
                                            // Professor View
                                            <>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                                        <Brain className="w-5 h-5 text-blue-400" />
                                                        Bio & Research
                                                    </h3>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {selectedMember.bio}
                                                    </p>
                                                </div>
                                                {selectedMember.interests && (
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Research Interests</h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedMember.interests.map(i => (
                                                                <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300">{i}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {selectedMember.trinityProfile ? (
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Academic Profile</h3>
                                                        <a 
                                                            href={selectedMember.trinityProfile}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-600/30 hover:text-white transition-colors text-sm font-medium"
                                                        >
                                                            View Trinity College Profile
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                        </a>
                                                    </div>
                                                ) : selectedMember.awards && (
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Awards & Honors</h3>
                                                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                                                            {selectedMember.awards.slice(0, 3).map((a, i) => (
                                                                <li key={i}>{a}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            // Student View
                                            <>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                                                        <span className="font-medium">Major:</span>
                                                        <span>{selectedMember.major}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <GraduationCap className="w-5 h-5 text-cyan-400" />
                                                        <span className="font-medium">Graduation Year:</span>
                                                        <span>{selectedMember.graduationYear}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Current Project</h3>
                                                        <p className="text-white font-medium">{selectedMember.project}</p>
                                                    </div>
                                                    
                                                    <div className="relative p-4 bg-white/5 rounded-xl border border-white/5 mt-6">
                                                        <Quote className="w-8 h-8 text-white/10 absolute -top-3 -left-3" />
                                                        <p className="text-gray-300 italic relative z-10 text-base md:text-lg text-center">
                                                            "{selectedMember.quote}"
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    </div>
  );
}
