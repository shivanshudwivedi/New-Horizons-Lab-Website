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
  awards?: string[];
  teaching?: string;
  type: "professor" | "student";
}

const teamData: TeamMember[] = [
  {
    id: "eyal",
    name: "Eyal Schwartz",
    role: "Research Advisor & Assistant Professor of Physics",
    title: "Assistant Professor of Physics",
    type: "professor",
    image: "/team/eyal-schwartz.jpeg",
    email: "eyal.schwartz@trincoll.edu",
    linkedin: "https://www.linkedin.com/in/eyal-schwartz/",
    education: ["Ph.D., Technion-Israel Inst. of Tech.", "M.Sc., Technion-Israel Inst. of Tech.", "B.A., Technion-Israel Inst. of Tech."],
    interests: ["Gravitational Waves", "Advanced LIGO", "Quantum Optics", "Ultra-cold Atoms"],
    awards: [
        "Laser Interferometer Gravitational Waves Observatory Council member, 2024-present.",
        "Quantum World - Innovation for All project grant, Cardiff University, UK, 2022.",
        "University of Otago – Division of Science Strategic Seeding Grant, 2018.",
    ],
    teaching: "Eyal is passionate about teaching and assisting students to appreciate the beauty of nature.",
    bio: "Eyal Schwartz's research interests span from cosmic events to microscopic quantum physics phenomena. He uses precision measurement techniques, such as optical interferometry, to explore different peculiar behaviors in nature."
  },
  { 
    id: "claudia", 
    name: "Claudia Geer", 
    role: "Research Assistant",
    type: "student",
    graduationYear: "2026",
    major: "Physics",
    project: "LIGO Collaboration DARM Optimization",
    quote: "I'm currently working to mitigate the effects of seismic and microseismic activity in the PRCL, SRCL and DARM Optical Cavities. My interests lie in using computer science and physics to build and improve detectors. I've been wokring in this group since Summer 2025.",
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
    project: "LIGO Collaboration Seismic Noise Mitigation",
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
    project: "LIGO Collaboration DARM Optimization",
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
    graduationYear: "2026",
    project: "LIGO Collaboration DARM Optimization",
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
    image: "/new_horizons_lab.png",
    project: "Student Researcher",
    major: "Student Researcher",
    graduationYear: "",
    quote: ""
  },
  {
    id: "daniel",
    name: "Daniel Arango",
    role: "Research Assistant",
    type: "student",
    image: "/new_horizons_lab.png",
    project: "Student Researcher",
    major: "Student Researcher",
    graduationYear: "",
    quote: ""
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

const scatteredPositions = [
    { top: "10%", left: "10%" },
    { top: "20%", left: "80%" },
    { top: "30%", left: "50%" },
    { top: "40%", left: "20%" },
    { top: "50%", left: "70%" },
    { top: "60%", left: "30%" },
    { top: "70%", left: "15%" },
    { top: "80%", left: "80%" },
    { top: "85%", left: "45%" },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start overflow-hidden relative">
        <div className="relative w-full max-w-7xl mx-auto min-h-[80vh] flex flex-col">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 md:mb-16 z-10 pointer-events-none"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our Team</h1>
                <p className="text-lg md:text-xl text-cyan-200/80 font-light tracking-wide">Connected by curiosity (Click to explore)</p>
            </motion.div>

            <div className={`relative flex-grow w-full ${isMobile ? 'h-auto grid grid-cols-2 gap-y-16 gap-x-6 pt-12 pb-20' : 'h-[600px] md:h-[800px]'}`}>
                {/* Team Members Floating */}
                {teamData.map((member, index) => {
                    const pos = scatteredPositions[index % scatteredPositions.length];
                    
                    return (
                        <div
                            key={member.id}
                            className={`${isMobile ? 'relative flex flex-col items-center justify-center' : 'absolute'} cursor-pointer group`}
                            style={isMobile ? { zIndex: 10 } : { 
                                top: pos.top, 
                                left: pos.left,
                                zIndex: 10
                            }}
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative w-20 h-20 md:w-32 md:h-32 transition-transform duration-300 hover:scale-105 mb-3 md:mb-0">
                                 <div className={`absolute inset-0 rounded-full border-2 ${member.type === 'professor' ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]'} group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300`} />
                                 <div className="absolute inset-1.5 rounded-full overflow-hidden bg-black">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                 </div>
                                 {/* Name Tooltip (Desktop) */}
                                 <div className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-xl z-50">
                                    <span className="text-sm text-white font-medium tracking-wide">{member.name}</span>
                                 </div>
                            </div>
                            
                            {/* Mobile Name Label */}
                            {isMobile && (
                                <div className="text-center">
                                    <p className="text-white font-medium text-sm leading-tight">{member.name}</p>
                                    <p className="text-cyan-400/80 text-xs mt-1">{member.role}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
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
                                                {selectedMember.awards && (
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">Awards</h3>
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
