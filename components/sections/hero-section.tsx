"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Phone,
  Clock,
  BookOpen,
  Shield,
  Award,
} from "lucide-react";
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`${dmSans.className} relative min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden`}
    >
      
      <div className="flex h-1.5 w-full">
        <div className="h-full w-1/5 bg-indigo-500"></div>
        <div className="h-full w-1/5 bg-cyan-500"></div>
        <div className="h-full w-1/5 bg-teal-500"></div>
        <div className="h-full w-1/5 bg-blue-500"></div>
        <div className="h-full w-1/5 bg-violet-500"></div>
      </div>

      
      <BackgroundElements />

      
      <div className="container mx-auto px-4 py-12 md:pt-32 relative z-10">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-indigo-800/70 px-4 py-1.5 text-sm font-medium text-indigo-200 border border-indigo-700 backdrop-blur-sm"
            >
              <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Profesjonalna diagnostyka autyzmu
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-indigo-200">ADOS-2</span>
                <span className="block mt-2 text-xl md:text-2xl lg:text-3xl text-indigo-50 font-normal">
                  rzetelna diagnoza spektrum autyzmu
                </span>
              </h1>
              <p className="text-base lg:text-lg text-indigo-100 max-w-lg">
                Złoty standard w diagnozie autyzmu – już od 12. miesiąca życia.
                Obserwacja prowadzona przez certyfikowanego specjalistę w formie
                swobodnej zabawy lub rozmowy.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <FeatureCard
                icon={<Clock className="h-4 w-4" />}
                title="60 minut"
                description="Obserwacja w formie zabawy lub rozmowy"
              />
              <FeatureCard
                icon={<BookOpen className="h-4 w-4" />}
                title="5 modułów"
                description="Dostosowanych do wieku i poziomu komunikacji"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20">
                <Calendar className="h-5 w-5" />
                Umów wizytę
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-indigo-700 bg-indigo-800 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-800/90 hover:shadow-lg hover:shadow-indigo-800/10">
                <Phone className="h-5 w-5" />
                Skontaktuj się
              </button>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-indigo-800/30 group">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/assets/ados-2.jpg"
                  alt="Terapeuta z dzieckiem podczas badania ADOS-2"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-indigo-400/30 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2 border-indigo-400/30 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-indigo-400/30 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-indigo-400/30 rounded-br-lg"></div>
              </div>
            </div>

            
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -left-6 max-w-xs rounded-lg bg-indigo-800 p-4 shadow-lg md:-left-8 border border-indigo-700"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 text-indigo-200">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    Certyfikowani specjaliści
                  </h3>
                  <p className="text-sm text-indigo-200">
                    Diagnoza prowadzona przez wykwalifikowanych diagnostów
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute -top-6 -right-6 max-w-xs rounded-lg bg-teal-800 p-4 shadow-lg md:-right-8 border border-teal-700 hidden md:block"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-teal-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Złoty standard</h3>
                  <p className="text-sm text-teal-200">
                    Międzynarodowo uznana metoda diagnostyczna
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-indigo-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
        <span className="text-xs mt-1">Przewiń w dół</span>
      </motion.div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-indigo-800/50 bg-indigo-800/30 p-4 backdrop-blur-sm hover:bg-indigo-800/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-800 text-indigo-200">
          {icon}
        </div>
        <h3 className="font-medium text-white">{title}</h3>
      </div>
      <p className="text-sm text-indigo-200">{description}</p>
    </div>
  );
}

function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-transparent to-indigo-900/50 pointer-events-none" />
      <div className="absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-400/5 blur-[80px]" />
      <motion.div
        className="absolute top-[15%] left-[10%] h-16 w-16 rounded-tl-xl rounded-br-xl bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-[25%] right-[15%] h-20 w-20 rounded-tr-xl rounded-bl-xl bg-teal-500/10 backdrop-blur-sm border border-teal-500/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] h-14 w-14 rounded-tl-xl rounded-br-xl bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20"
        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] h-12 w-12 rounded-tr-xl rounded-bl-xl bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20"
        animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
    </>
  );
}
