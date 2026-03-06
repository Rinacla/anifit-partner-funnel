"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

const VIDEO_ID = "jx_Bl4dWkQk";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("trackCustom", "VideoPlay", { video: "business-presentation" });
    }
  }, []);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Das Anifit-Geschäftsmodell in 30 Minuten
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
          Schau dir die offizielle Business-Präsentation an. Danach weißt du genau,
          ob das zu dir passt.
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-900" style={{ aspectRatio: "16/9" }}>
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Anifit Business-Präsentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          ) : (
            <button
              onClick={handlePlay}
              className="group absolute inset-0 w-full h-full cursor-pointer"
              aria-label="Video abspielen"
            >
              {/* Thumbnail */}
              <Image
                src={THUMBNAIL}
                alt="Anifit Business-Präsentation Vorschau"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                unoptimized
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                  <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md">
                30:12
              </div>
            </button>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Offizielle Provital/Anifit Geschäftspräsentation · Auch als{" "}
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-600 transition-colors"
          >
            YouTube-Link
          </a>
        </p>
      </div>
    </section>
  );
}
