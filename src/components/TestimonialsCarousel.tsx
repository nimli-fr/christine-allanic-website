"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  context: string;
  date: string;
};

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const goTo = (i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <article className="relative bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-0.5" aria-label="5 étoiles sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 md:w-5 md:h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>
          <svg
            className="w-10 h-10 text-primary/20 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-6">
            &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
          </blockquote>
          <footer className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-accent">{testimonial.author}</p>
              <p className="text-sm text-gray-500">
                {testimonial.context} &middot; {testimonial.date}
              </p>
            </div>
          </footer>
        </article>

        {testimonials.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Témoignage précédent"
              className="hidden md:flex absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-accent hover:text-primary hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Témoignage suivant"
              className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-accent hover:text-primary hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Témoignage précédent"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-accent"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Témoignage suivant"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-accent"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Voir le témoignage de ${t.author}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
