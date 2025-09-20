import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const SanskritClass: React.FC = () => {
  const playlistUrl =
    'https://www.youtube.com/playlist?list=PLcCCF9CS73I35gao-rPV4CEmBdxzQsdvg';

  const embedUrl = playlistUrl.replace(
    'https://www.youtube.com/playlist?list=',
    'https://www.youtube.com/embed/videoseries?list='
  );

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Sanskrit Class
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          शतश्लोकेन पण्डितः – Mastering Sanskrit through 100 Verses
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          This Sanskrit Class is designed to help students become proficient in Sanskrit 
          through a systematic study of 100 carefully selected verses. Known as 
          "शतश्लोकेन पण्डितः", the course emphasizes grammar, vocabulary, and fluency 
          while keeping the process engaging and practical. It provides the perfect blend 
          of tradition and self-paced modern learning, making Sanskrit accessible to all.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-orange-300 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-orange-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Beginners who want to start their journey in Sanskrit</li>
          <li>Spiritual seekers interested in understanding scriptures in original form</li>
          <li>Students who prefer a verse-based, practical method of learning</li>
          <li>Teachers and learners looking for structured self-study resources</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-yellow-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: Completed</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Beginner</li>
          <li>Format: Chanting, explanation, grammar breakdown, self-study guidance</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-orange-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>📚 Gain the ability to read and understand Sanskrit verses</li>
          <li>🌱 Build vocabulary and grammar foundations naturally</li>
          <li>🕉️ Deepen your connection with spiritual and cultural texts</li>
          <li>🎯 Achieve independence in studying Sanskrit scriptures</li>
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
            title="Sanskrit Class Playlist"
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
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner</h3>
        <p className="mt-2 text-sm opacity-90">
          A simple and practical method to build a solid foundation in Sanskrit.
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

export default SanskritClass;
