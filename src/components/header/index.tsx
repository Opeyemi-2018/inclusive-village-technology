'use client';

import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RiTwitterXLine } from "react-icons/ri";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="lg:px-6 px-3 pt-7 relative">
            {/* ✅ Top bar with logo and toggle icon */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white lg:px-6 px-3 py-4">
                <div className="flex justify-between items-center">
                    <Image src="/iv-logo-no-bg.png" alt="iv logo" width={50} height={50} />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="transition-all duration-300">
                        <AnimatePresence mode="wait">
                            {menuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <LiaTimesSolid size={32} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaBarsStaggered size={32} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* ✅ Fixed Desktop Nav with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="desktop-nav"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="hidden lg:flex fixed  left-0 right-0 z-40 min-h-screen items-center justify-center bg-white"
                    >
                        <nav className="text-7xl font-bold flex flex-col gap-6 items-center uppercase">
                            <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
                            <Link href="/about" onClick={() => setMenuOpen(!menuOpen)}>About</Link>
                            <Link href="/home" onClick={() => setMenuOpen(!menuOpen)}>Work</Link>
                            <Link href="/home" onClick={() => setMenuOpen(!menuOpen)}>Blog</Link>
                            <Link href="/home" onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ✅ Fixed Mobile Nav (untouched visually, now fixed in position) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-nav"
                        className="lg:hidden pb-6 fixed top-[80px] left-0 right-0 z-40 bg-white"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <nav className="rounded-lg px-6 py-4 text-2xl font-bold flex flex-col gap-4 uppercase">
                            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            <Link href="/home" onClick={() => setMenuOpen(false)}>Work</Link>
                            <Link href="/home" onClick={() => setMenuOpen(false)}>Blog</Link>
                            <Link href="/home" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </nav>

                        <div className="space-y-4 px-6 pt-4 ">
                            <div className="text-[20px] text-gray-700">
                                <p>0803333333333</p>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3 text-orange-600">
                                <RiTwitterXLine size={25} />
                                <RiTwitterXLine size={25} />
                                <RiTwitterXLine size={25} />
                                <RiTwitterXLine size={25} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
