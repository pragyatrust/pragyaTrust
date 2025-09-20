import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tattvabodha: React.FC = () => {
  const playlistUrl =
    'https://www.youtube.com/playlist?list=PLcCCF9CS73I3CMBnK0ZrT6KFkBuUYHeoe';

  const embedUrl = playlistUrl.replace(
    'https://www.youtube.com/playlist?list=',
    'https://www.youtube.com/embed/videoseries?list='
  );

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Tattvabodha
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          📘 Knowledge of Reality
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-sky-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          Tattvabodha is one of the most accessible and foundational texts in Advaita Vedānta. 
          It introduces essential principles such as the nature of the Self, the five sheaths, 
          and the path to liberation. This course is perfect for beginners who want to establish 
          clarity before moving to deeper studies.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-cyan-300 bg-gradient-to-br from-cyan-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-cyan-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Absolute beginners in Vedānta</li>
          <li>Seekers looking for a structured entry point into Advaita</li>
          <li>Students who want clarity on basic concepts like the Self and liberation</li>
          <li>Practitioners who need a strong foundation before tackling advanced texts</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-sky-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: Completed</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Beginner</li>
          <li>Format: Systematic introduction, chanting, Q&A, guided reflection</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-teal-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>🔑 Gain clarity on the fundamentals of Vedānta</li>
          <li>🧘 Build confidence to study advanced texts</li>
          <li>🌱 Develop reflective skills for inner growth</li>
          <li>🕉️ Lay the foundation for a lifelong journey in Self-inquiry</li>
        </ul>
      </div>

      {/* Embedded YouTube Playlist */}
      <div className="rounded-xl shadow-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6">
          <Youtube className="w-6 h-6 text-red-500" />
          Watch the Playlist
        </h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-96 rounded-xl shadow-md"
            src={embedUrl}
            title="Tattvabodha Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Button to YouTube */}
        <div className="text-center">
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ochre-500 text-white py-3 px-6 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium"
          >
            <Youtube size={20} />
            Go to Course on YouTube
          </a>
        </div>
      </div>

      {/* Level Box */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner</h3>
        <p className="mt-2 text-sm opacity-90">
          Perfect for those starting their journey in Vedānta.
        </p>
      </div>

      {/* Other Courses Links */}
      <div className="rounded-xl shadow-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 space-y-3">
        <h2 className="text-2xl font-semibold mb-4">Explore Other Courses</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><Link to="/courses/other/sahajawastha" className="text-ochre-500 hover:underline">Sahajawastha</Link></li>
          <li><Link to="/courses/other/dhyan-dharana" className="text-ochre-500 hover:underline">Dhyan Dharana</Link></li>
          <li><Link to="/courses/other/yog-pranayam" className="text-ochre-500 hover:underline">Yog Pranayam</Link></li>
          <li><Link to="/courses/other/jap-practice" className="text-ochre-500 hover:underline">Jap Practice</Link></li>
          <li><Link to="/courses/other/swadhyay" className="text-ochre-500 hover:underline">Swadhyay</Link></li>
          <li><Link to="/courses/other/teerth-yatra" className="text-ochre-500 hover:underline">Teerth Yatra</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Tattvabodha;
