"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, Users, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "GW231123: A Binary Black Hole Merger with Total Mass 190–265 M",
    authors: "A. G. Abac et al. (LIGO Scientific Collaboration, Virgo Collaboration & KAGRA collaboration)",
    journal: "The Astrophysical Journal Letters, 993, L25",
    year: "2025",
    link: "https://iopscience.iop.org/article/10.3847/2041-8213/ae0c9c"
  },
  {
    title: "GW250114: testing Hawking’s area law and the Kerr nature of black holes",
    authors: "A. G. Abac et al. (LIGO Scientific Collaboration, Virgo Collaboration & KAGRA collaboration)",
    journal: "Physical Review Letters, 135, 111403",
    year: "2025",
    link: "https://journals.aps.org/prl/abstract/10.1103/kw5g-d732"
  },
  {
    title: "Improving cosmological reach of a gravitational wave observatory using Deep Loop Shaping",
    authors: "Buchli J., Tracey B., Andric T. et al.",
    journal: "Science, 389 (6764), 1012-1015",
    year: "2025",
    link: "https://www.science.org/doi/10.1126/science.adw1291"
  },
  {
    title: "Broadband limits on stochastic length fluctuations from a pair of table-top interferometers",
    authors: "A. Patra, L. Aiello, A. Ejlli et al.",
    journal: "Physical Review Letters, 135, 101402",
    year: "2025",
    link: "https://journals.aps.org/prl/abstract/10.1103/61j9-cjkk"
  },
  {
    title: "Advanced LIGO detector performance in the fourth observing run",
    authors: "E. Capote, W. Jia, N. Aritomi et al.",
    journal: "Physical Review D, 111, 062002",
    year: "2025",
    link: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.062002"
  },
  {
    title: "A control strategy for seismic noise reduction on advanced LIGO gravitational-wave detector",
    authors: "C. Di Fronzo, J. Driggers, J. Warner, E. Schwartz, et al.",
    journal: "Classical and Quantum Gravity 42 045019",
    year: "2025",
    link: "https://iopscience.iop.org/article/10.1088/1361-6382/adab5f"
  },
  {
    title: "Squeezing the quantum noise of a gravitational-wave detector below the standard quantum limit",
    authors: "W. Jia , V. Xu , K. Kuns et al.",
    journal: "Science, 385, 6715, 1318-1321",
    year: "2024",
    link: "https://www.science.org/doi/10.1126/science.ado8069"
  },
  {
    title: "Observation of Gravitational Waves from the Coalescence of a 2.5–4.5? Compact Object and a Neutron Star",
    authors: "A. G. Abac et al. (LIGO Scientific Collaboration, Virgo Collaboration and KAGRA Collaboration)",
    journal: "The Astrophysical Journal Letters, 970 L34",
    year: "2024",
    link: "https://iopscience.iop.org/article/10.3847/2041-8213/ad5beb"
  },
  {
    title: "Broadband Quantum Enhancement of the LIGO Detectors with Frequency-Dependent Squeezing",
    authors: "D. Ganapathy, W. Jia, M. Nakano et. al.",
    journal: "Physical Review X, 13, 041021",
    year: "2023",
    link: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.13.041021"
  },
  {
    title: "Probing dark matter with polarimetry techniques",
    authors: "A. Ejlli, S.M. Vermeulen, E. Schwartz et. al.",
    journal: "Physical Review D, 107, 083035",
    year: "2023",
    link: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.083035"
  },
  {
    title: "Point Absorber Limits to Future Gravitational-Wave Detectors",
    authors: "W. Jia, H. Yamamoto, K. Kuns et. al.",
    journal: "Physical Review Letters, 127, 241102",
    year: "2021",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.241102"
  },
  {
    title: "Approaching the motional ground state of a 10-kg object",
    authors: "C. Whittle, E.D. Hall, S. Dwyer et. al.",
    journal: "Science, 372 (6548), 1333-1336",
    year: "2021",
    link: "https://www.science.org/doi/10.1126/science.abh2634"
  },
  {
    title: "Improving the Robustness of the Advanced LIGO Detectors to Earthquakes",
    authors: "E. Schwartz, A. Pele, J. Warner et. al.",
    journal: "Classical and Quantum Gravity, 37 235007",
    year: "2020",
    link: "https://iopscience.iop.org/article/10.1088/1361-6382/abbc8c/meta"
  },
  {
    title: "GW190521: A Binary Black Hole Merger with a Total Mass of 150M?",
    authors: "R. Abbott et al. (LIGO Scientific Collaboration and Virgo Collaboration)",
    journal: "Physical Review Letters, 125, 101102",
    year: "2020",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.125.101102"
  },
  {
    title: "Direct Measurements of Collisional Dynamics in Cold Atom Triads",
    authors: "Reynolds L. A., Schwartz E., Ebling U. et. al.",
    journal: "Physical Review Letters, 124, 073401",
    year: "2020",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.073401"
  },
  {
    title: "Quantum correlations between light and the kilogram-mass mirrors of LIGO",
    authors: "H. Yu, L. McCuller, M. Tse et. al.",
    journal: "Nature, 583, 43–47",
    year: "2020",
    link: "https://www.nature.com/articles/s41586-020-2420-8"
  },
  {
    title: "Quantum–Enhanced Advanced LIGO Detectors in the Era of Gravitational-Wave Astronomy",
    authors: "M. Tse, H. Yu, N. Kijbunchoo et. al.",
    journal: "Physical Review Letters, 123, 231107",
    year: "2019",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.231107"
  },
  {
    title: "Thermally robust spin correlations between two 85Rb atoms in an optical microtrap",
    authors: "Sompet P., Szigeti S.S., Schwartz E. et. al.",
    journal: "Nature Communications, 10, 1889",
    year: "2019",
    link: "https://www.nature.com/articles/s41467-019-09420-6"
  }
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Publications</h1>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 flex items-start gap-2">
                    {pub.title}
                    <ExternalLink className="w-4 h-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 flex-shrink-0 mt-1" />
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="italic">{pub.journal}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 self-start">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium group-hover:bg-blue-500/20 group-hover:text-blue-200 transition-colors">
                    <Calendar className="w-3 h-3" />
                    <span>{pub.year}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
