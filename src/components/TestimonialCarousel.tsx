
import React, { useState, useEffect } from "react";
import { Testimonial } from "./Testimonial";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "One of Tomas' key strengths is his leadership ability. He has a natural talent for guiding teams and inspiring collaboration, always keeping a customer-first mindset.",
    author: "Matteo Perretta",
    role: "Sr. Sales Enablement Leader"
  },
  {
    quote: "Tomas was someone I could always rely on—whether it was for problem-solving, big-picture strategy, or just keeping everything (and everyone) moving forward. He was the glue for our culture, keeping the team connected and motivated.",
    author: "Marie Yatco",
    role: "VP, Customer Experience, Kindsight"
  },
  {
    quote: "As a collaborator, Tomas brings a low-ego to his approach so it's easy to navigate difficult technical problems or feedback with him.",
    author: "Strat Barrett",
    role: "Full-Stack Software Engineer, Procurify"
  },
  {
    quote: "Tomas gets his hands into EVERYTHING. He's obsessed with enhancing the customer experience through enhancing internal processes.",
    author: "Nick Poisson",
    role: "Professional Services Manager, Procurify"
  },
  {
    quote: "Tomas stands out for his collaboration, open-mindedness, and positive attitude, always bringing valuable insights to the table. His strong communication and responsiveness to changes and tweaks to the plan were key in ensuring the success of the project and making our work together seamless.",
    author: "Meghan Fisher",
    role: "Sr. Program Manager, Procurify"
  },
  {
    quote: "Tomas consistently demonstrated patience, respect, and a genuine curiosity that made every interaction with him enjoyable. He had a remarkable ability to explain what he needed while understanding the realities of product limitations, always approaching challenges with flexibility and a problem-solving mindset.",
    author: "Laura Pacheco",
    role: "Sr. Support Manager, Vitally"
  },
  {
    quote: "He has an exceptional ability to connect with people across all levels and departments, using these relationships to really understand challenges before crafting solutions.",
    author: "Sherman Hui",
    role: "Software Engineer, Procurify"
  },
  {
    quote: "After three years of working with Tomas, I've seen his talent for optimizing CX processes and driving efficiency. He excels at turning leadership ideas into action, making collaboration seamless.",
    author: "Jamie Schiffner",
    role: "Team Lead, Implementation Manager, Procurify"
  },
  {
    quote: "I loved working with Tomas and cannot recommend him highly enough. He is skilled, knowledgeable, and has a great attitude to any problem that comes his way.",
    author: "Carla Lynn",
    role: "Customer Marketing, Procurify"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative p-4 md:p-8">
      <div className="relative overflow-hidden">
        <div className="flex justify-center items-center min-h-[400px] md:min-h-[300px]">
          <Testimonial
            {...testimonials[currentIndex]}
            className="animate-slide-in absolute"
            isVisible={!isAnimating}
          />
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full hover:bg-testimonial-bg transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full hover:bg-testimonial-bg transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
