import React from "react";
import Header from "../Header";
import { TextField, Button } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <Header />
      <div className="bg-slate-950 text-white flex flex-col md:flex-row items-center px-6 md:px-12 gap-10 py-12 md:py-16">
        
        {/* Right Section (Image + Glass Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 md:order-2 relative flex justify-center w-full md:w-1/2"
        >
          <img
            src="image.png"
            alt="job search"
            className="max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-lg"
          />

          {/* Top Left Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute top-2 left-2 sm:top-4 sm:left-4
              bg-white/10 backdrop-blur-md border border-white/20 
              rounded-xl shadow-lg p-4 
              w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]
              flex flex-col items-center justify-center text-center"
          >
            <p className="text-base font-semibold">🚀 10k+ Jobs</p>
            <p className="text-xs text-gray-200 mt-1">New openings daily</p>
          </motion.div>

          {/* Bottom Right Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4
              bg-white/10 backdrop-blur-md border border-white/20 
              rounded-xl shadow-lg p-4 
              w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]
              flex flex-col items-center justify-center text-center"
          >
            <p className="text-base font-semibold">💼 500+ Firms</p>
            <p className="text-xs text-gray-200 mt-1">Top companies hiring</p>
          </motion.div>
        </motion.div>

        {/* Left Section (Text + Search Bar) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-2 md:order-1 flex flex-col gap-6 max-w-lg w-full"
        >
          <div className="text-3xl sm:text-5xl font-bold leading-snug">
            Find your <span className="text-green-500">dream job</span> with us
          </div>
          <div className="text-gray-300 text-base sm:text-2xl leading-relaxed">
            Good life begins with a good company. Start exploring thousands of jobs
            in one place.
          </div>

          {/* Search Section */}
          <div className="flex flex-row gap-2 py-4 w-full overflow-x-auto no-scrollbar">
            
            {/* Job Title Input */}
            <TextField
              variant="outlined"
              placeholder="Job Title"
              InputProps={{ style: { color: "white", fontSize: "0.85rem" } }}
              sx={{
                width: "120px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                  height: "2.5rem",
                  backgroundColor: "#1e293b",
                  "& fieldset": { borderColor: "#334155" },
                  "&:hover fieldset": { borderColor: "#10b981" },
                  "&.Mui-focused fieldset": { borderColor: "#10b981" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#9ca3af",
                  opacity: 1,
                  fontSize: "0.85rem",
                },
              }}
            />

            {/* Job Type Input */}
            <TextField
              variant="outlined"
              placeholder="Job Type"
              InputProps={{ style: { color: "white", fontSize: "0.85rem" } }}
              sx={{
                width: "120px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem",
                  height: "2.5rem",
                  backgroundColor: "#1e293b",
                  "& fieldset": { borderColor: "#334155" },
                  "&:hover fieldset": { borderColor: "#10b981" },
                  "&.Mui-focused fieldset": { borderColor: "#10b981" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#9ca3af",
                  opacity: 1,
                  fontSize: "0.85rem",
                },
              }}
            />

            {/* Search Button */}
            <Button
              variant="contained"
              startIcon={<FiSearch />}
              sx={{
                width: "100px",
                bgcolor: "#10b981",
                "&:hover": { bgcolor: "#059669" },
                borderRadius: "0.5rem",
                height: "2.5rem",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "0.85rem",
              }}
            >
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;
