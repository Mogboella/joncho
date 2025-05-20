"use client";

import { motion } from "framer-motion";
import HeaderBar from "@/components/HeaderBar";

export default function Home() {

  const testimonials = [
    {
      id: 1,
      quote: "PantryChef saved me from ordering takeout three times this week!",
      author: "Jamie, Busy Parent",
      position: "top-10 left-4 md:top-10 md:left-4 sm:top-5",
      rotate: "-3deg",
      width: "w-64 md:w-72",
      delay: 0.1
    },
    {
      id: 2,
      quote: "Discovered 5 recipes with just chicken and rice - amazing!",
      author: "Alex, College Student",
      position: "top-0 right-4 md:top-0 md:right-20 sm:top-10",
      rotate: "2deg",
      width: "w-60 md:w-64",
      delay: 0.3
    },
    {
      id: 3,
      quote: "Meal planning is now effortless with PantryChef",
      author: "Taylor, Meal Prepper",
      position: "bottom-50 left-1/4 md:bottom-50 md:left-1/3 sm:top-20 sm:left-0",
      rotate: "-1deg",
      width: "w-72 md:w-80",
      delay: 0.5
    },
    {
      id: 4,
      quote: "Cut my grocery bill by 30% using what I already had",
      author: "Morgan, Budget Cook",
      position: "top-64 left-1/3 md:top-70 md:left-1/4 sm:top-40",
      rotate: "4deg",
      width: "w-56 md:w-64",
      delay: 0.2
    },
    {
      id: 5,
      quote: "My picky eater finally enjoyed dinner thanks to these recipes!",
      author: "Riley, Parent",
      position: "bottom-20 right-8 md:bottom-10 md:right-32 sm:top-45",
      rotate: "-2deg",
      width: "w-68 md:w-76",
      delay: 0.4
    }
  ];
  return (
    <div className="min-h-screen text-[color:var(--color-foreground)] font-sans ">

      <div className="bg-orange-400 px-12 py-6">

        {/* Header */}
        <HeaderBar />


        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-16 mb-3">
          <motion.h1
            className="text-6xl md:text-6xl font-luckiest mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PANTRYCHEF
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl text-white dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover delicious recipes based on what you already have at home.
            Filter by budget, cuisine, or dietary preference — PantryChef’s got you covered.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition">
              Add Your Pantry Items
            </button>
            <button className="border border-black text-black py-3 px-6 rounded-full font-medium hover:bg-black hover:text-white transition">
              Explore Recipes
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative w-full text-[#5a1f24]">
        <div className="max-w-8xl mx-auto">
          <svg
            className="absolute -bottom-1 w-full h-15"
            viewBox="0 0 1200 30"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,20C60,20,60,10,120,10C180,10,180,20,240,20C300,20,300,10,360,10C420,10,420,20,480,20C540,20,540,10,600,10C660,10,660,20,720,20C780,20,780,10,840,10C900,10,900,20,960,20C1020,20,1020,10,1080,10C1140,10,1140,20,1200,20L1200,30L0,30Z"
            />
          </svg>
        </div>
      </div>

      <section className="py-20 text-center px-6 bg-[#5a1f24]">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="mt-8">
            <img src="/undraw_add-files_d04y.svg" alt="Step 1" className="mx-auto h-35 mb-4" />
            <h3 className="font-semibold text-lg">Add Your Pantry</h3>
            <p className="text-white font-medium">Enter or snap what you have at home.</p>
          </div>
          <div className="mt-8">
            <img src="/undraw_personal-settings_8xv3.svg" alt="Step 2" className="mx-auto h-35 mb-4" />
            <h3 className="font-semibold text-lg">Set Preferences</h3>
            <p className="text-white font-medium">Choose your budget, diet, and taste profile.</p>
          </div>
          <div className="mt-8">
            <img src="/undraw_pie-graph_8m6b.svg" alt="Step 3" className="mx-auto h-35 mb-4" />
            <h3 className="font-semibold text-lg">Get Recipes</h3>
            <p className="text-white font-medium">Get recipe matches instantly or <br />create custom recipes with AI !</p>
          </div>
        </div>
      </section>


      <section className="bg-[#5a1f24] py-32 px-6 text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-12">Testemonials</h2>

        <div className="relative mt-10 max-w-6xl mx-auto min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute ${testimonial.position} ${testimonial.width} bg-white p-6 rounded-lg shadow-md`}
              style={{ rotate: testimonial.rotate }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: testimonial.delay, duration: 0.6 }}
            >
              <p className="italic text-gray-700 mb-2">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-500">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <div className="relative w-full text-[#5a1f24]">
        <div className="max-w-8xl mx-auto">
          <svg
            className="absolute -top-1 w-full h-15"
            viewBox="0 0 1200 30"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,10C60,10,60,20,120,20C180,20,180,10,240,10C300,10,300,20,360,20C420,20,420,10,480,10C540,10,540,20,600,20C660,20,660,10,720,10C780,10,780,20,840,20C900,20,900,10,960,10C1020,10,1020,20,1080,20C1140,20,1140,10,1200,10L1200,0L0,0Z"
            />
          </svg>
        </div>
      </div>


      <section className="bg-orange-400 py-32 text-center">
        <h2 className="text-4xl font-bold text-center mb-10">Popular Recipes</h2>
        <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="inline-flex gap-6 px-4 py-4 ">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="min-w-[300px] bg-orange-100 dark:bg-[#735557] rounded-lg p-4  shadow-md hover:scale-105 transition"
              >
                <img
                  src={`/pasta.avif`}
                  alt={`Pasta Rigatonni`}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Recipe {n}</h3>
                <p className="text-gray-700 dark:text-gray-300">Tasty and easy to make!</p>
              </div>
            ))}
          </div>
        </div>



      </section>

      <footer className="bg-[#97866A] text-white text-end px-4 py-6">
        <p>&copy; {new Date().getFullYear()} PantryChef. All rights reserved.</p>
      </footer>


    </div>

  );
}
