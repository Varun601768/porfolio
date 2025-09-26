import React, { useRef, useEffect } from 'react';

// Custom hook to detect if the section is active
function useIsActiveSection(sectionId: string) {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);
  return isActive;
}

const memoriesPhotos = [
  '/m1.jpeg', '/m2.jpeg', '/m3.jpeg', '/m4.jpeg', '/m5.jpeg', '/m9.jpeg', '/m6.jpeg', '/m7.jpeg', '/m10.jpeg', '/m11.png', '/m12.jpeg', '/m13.jpeg', '/m14.jpeg', '/m15.jpeg'
];

const memoriesVideos = [
  '/WhatsApp Video 2025-09-25 at 9.31.58 PM.mp4',
  '/WhatsApp Video 2025-09-25 at 10.13.34 PM.mp4'
  // Add more video paths as needed
];

const Memories: React.FC = () => {
  const isActive = useIsActiveSection('memories');
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [highlightedPhoto, setHighlightedPhoto] = React.useState<string | null>(null);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = true; // Ensure videos are always muted
        video.play();
      }
    });
  }, []);

  return (
    <section id="memories" className="py-16 bg-gray-50 dark:bg-gray-900">
      {isActive && (
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Memories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {memoriesPhotos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Memory ${idx + 1}`}
                className={`rounded-lg shadow-md object-cover w-full h-40 cursor-pointer ${highlightedPhoto === src ? 'ring-4 ring-blue-500' : ''}`}
                onClick={() => setHighlightedPhoto(src)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
          {/* Highlighted Photo Modal */}
          {highlightedPhoto && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
              <div className="relative">
                <img
                  src={highlightedPhoto}
                  alt="Highlighted Memory"
                  className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-4 border-blue-500"
                />
                <button
                  className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-3 py-1 text-lg font-bold"
                  onClick={() => setHighlightedPhoto(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
            <h3 className="text-xl font-semibold mb-2">Memory Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {memoriesVideos.map((src, idx) => (
                <video
                  key={idx}
                  ref={el => {
                    videoRefs.current[idx] = el;
                    if (el) el.muted = true;
                  }}
                  src={src}
                  controls
                  autoPlay
                  muted={true}
                  loop
                  className="rounded-lg shadow-lg w-full max-w-xl"
                >
                  Sorry, your browser does not support embedded videos.
                </video>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Memories;
