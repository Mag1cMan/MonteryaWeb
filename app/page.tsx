import React from "react";

import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Monterya",
  description: "Montery MMORPG web base Play to Earn",
  // other metadata
};

export default function Home() {
  return (
    <>
    <ScrollUp/>
    <Hero />
    <Features />
    </>
  );
}
