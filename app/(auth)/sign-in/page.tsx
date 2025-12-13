"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { Github, Chrome } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginPage = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md rounded-3xl border border-slate-700/40 bg-slate-900/40 p-10 shadow-2xl backdrop-blur-xl"
            >
                {/* Logo */}
                <div className="text-center">
                    <Link href="/">
                        <motion.h1
                            whileHover={{ scale: 1.03 }}
                            className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
                        >
                            PostHub
                        </motion.h1>
                    </Link>
                </div>

                {/* Title */}
                <div className="mt-10 space-y-1 text-center">
                    <h2 className="text-2xl font-semibold text-white">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-slate-400">
                        Sign in to continue to PostHub
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-10 space-y-4">
                    <Button
                        variant="outline"
                        className="w-full h-12 border-slate-600 bg-slate-800/40 text-slate-200 hover:bg-slate-700/40 hover:text-white transition-all"
                        onClick={() =>
                            signIn.social({
                                provider: "github",
                                callbackURL: "/",
                            })
                            // console.log("Ok")
                        }
                    >
                        <Github className="mr-2 h-5 w-5" />
                        Sign in with GitHub
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full h-12 border-slate-600 bg-slate-800/40 text-slate-200 hover:bg-slate-700/40 hover:text-white transition-all"
                        onClick={() =>
                            signIn.social({
                                provider: "google",
                                callbackURL: "/",
                            })
                            // console.log("Ok")
                        }
                    >
                        <Chrome className="mr-2 h-5 w-5" />
                        Sign in with Google
                    </Button>
                </div>

                {/* Terms */}
                <p className="mt-10 text-center text-[11px] text-slate-500">
                    By signing in, you agree to our{" "}
                    <span className="text-slate-400 underline cursor-pointer hover:text-slate-300">
                        Terms
                    </span>{" "}
                    and{" "}
                    <span className="text-slate-400 underline cursor-pointer hover:text-slate-300">
                        Privacy Policy
                    </span>
                </p>
            </motion.div>
        </section>
    );
};

export default LoginPage;
