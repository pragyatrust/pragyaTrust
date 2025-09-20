import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const VivekaChudamani: React.FC = () => {
  const playlistUrl =
    'https://www.youtube.com/playlist?list=PLcCCF9CS73I2YB3oBBesI05S7KVXU4W6s';

  const embedUrl = playlistUrl.replace(
    'https://www.youtube.com/playlist?list=',
    'https://www.youtube.com/embed/videoseries?list='
  );

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Viveka Chudamani
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          👑 The Crest Jewel of Discrimination
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          Viveka Chudamani is a seminal Advaita Vedānta text guiding the aspirant 
          on the path to Self-realization through rigorous discrimination 
          between the eternal Self and transient appearances. The course 
          combines textual study, reflective discussion, and practical 
          meditative exercises to cultivate direct experiential understanding.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-purple-300 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-purple-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Seekers with a foundational understanding of Vedanta</li>
          <li>Students wishing to deepen insight into the Seer vs. Seen principle</li>
          <li>Practitioners looking for guided study of a classical text</li>
          <li>Anyone ready to engage in reflective contemplation and meditation</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-indigo-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: Completed</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Intermediate</li>
          <li>Format: Guided readings, reflective discussions, meditative exercises</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-green-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>🧘 Cultivate clarity in distinguishing Self from non-Self</li>
          <li>🌊 Reduce mental confusion and distraction</li>
          <li>🌱 Strengthen reflective and contemplative skills</li>
          <li>🕉️ Prepare for deeper study and meditation practice</li>
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
            title="Viveka Chudamani Playlist"
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
      <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Recommended for students with prior Vedanta knowledge and some meditation experience.
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

export default VivekaChudamani;
