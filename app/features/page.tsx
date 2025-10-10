import type { Metadata } from "next";
import { InterviewGrid } from "@/components/interview-grid";

export const metadata: Metadata = {
  title: "Interviews & Features | Andy Steiner",
  description: "Andy Steiner's interviews & features",
};

export default function Features() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Interviews & Features
      </h2>
      <InterviewGrid />
    </div>
  );
}
