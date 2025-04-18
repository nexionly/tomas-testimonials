
import React from "react";
import { Testimonial } from "./Testimonial";

const testimonials = [
  {
    quote: "One of Tomas' key strengths is his leadership ability. He has a natural talent for guiding teams and inspiring collaboration, always keeping a customer-first mindset.",
    author: "Matteo Perretta",
    role: "Sr. Sales Enablement Leader",
    colorVariant: "purple" as const
  },
  {
    quote: "Tomas was someone I could always rely on—whether it was for problem-solving, big-picture strategy, or just keeping everything (and everyone) moving forward. He was the glue for our culture, keeping the team connected and motivated.",
    author: "Marie Yatco",
    role: "VP, Customer Experience, Kindsight",
    colorVariant: "blue" as const
  },
  {
    quote: "As a collaborator, Tomas brings a low-ego to his approach so it's easy to navigate difficult technical problems or feedback with him.",
    author: "Strat Barrett",
    role: "Full-Stack Software Engineer, Procurify",
    colorVariant: "pink" as const
  },
  {
    quote: "Tomas gets his hands into EVERYTHING. He's obsessed with enhancing the customer experience through enhancing internal processes.",
    author: "Nick Poisson",
    role: "Professional Services Manager, Procurify",
    colorVariant: "default" as const
  },
  {
    quote: "Tomas stands out for his collaboration, open-mindedness, and positive attitude, always bringing valuable insights to the table. His strong communication and responsiveness to changes and tweaks to the plan were key in ensuring the success of the project and making our work together seamless.",
    author: "Meghan Fisher",
    role: "Sr. Program Manager, Procurify",
    colorVariant: "purple" as const
  },
  {
    quote: "Tomas consistently demonstrated patience, respect, and a genuine curiosity that made every interaction with him enjoyable. He had a remarkable ability to explain what he needed while understanding the realities of product limitations, always approaching challenges with flexibility and a problem-solving mindset.",
    author: "Laura Pacheco",
    role: "Sr. Support Manager, Vitally",
    colorVariant: "blue" as const
  },
  {
    quote: "He has an exceptional ability to connect with people across all levels and departments, using these relationships to really understand challenges before crafting solutions.",
    author: "Sherman Hui",
    role: "Software Engineer, Procurify",
    colorVariant: "pink" as const
  },
  {
    quote: "After three years of working with Tomas, I've seen his talent for optimizing CX processes and driving efficiency. He excels at turning leadership ideas into action, making collaboration seamless.",
    author: "Jamie Schiffner",
    role: "Team Lead, Implementation Manager, Procurify",
    colorVariant: "default" as const
  },
  {
    quote: "I loved working with Tomas and cannot recommend him highly enough. He is skilled, knowledgeable, and has a great attitude to any problem that comes his way.",
    author: "Carla Lynn",
    role: "Customer Marketing, Procurify",
    colorVariant: "purple" as const
  }
];

export const TestimonialGrid = () => {
  return (
    <div className="mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            {...testimonial}
            className={`animate-fade-in ${index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            style={{ 
              animationDelay: `${index * 120}ms`,
              animationFillMode: 'both',
            }}
          />
        ))}
      </div>
    </div>
  );
};
