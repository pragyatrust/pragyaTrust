import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const SadhanaPanchakam: React.FC = () => {
  const playlistUrl =
    'https://www.youtube.com/playlist?list=PLcCCF9CS73I11dZCSY9UKFxommv_gJHJz';

  const embedUrl = playlistUrl.replace(
    'https://www.youtube.com/playlist?list=',
    'https://www.youtube.com/embed/videoseries?list='
  );

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-700 via-pink-500 to-orange-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Sādhana Pañcakam
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          ✨ Five Verses on Spiritual Practice
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-rose-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          Sādhana Pañcakam, composed by Ādi Śaṅkarācārya, is a concise manual 
          of spiritual practice in just five verses. Each verse provides transformative 
          instructions for seekers, covering study, discipline, reflection, devotion, 
          and meditation. This course offers guided exploration of these essential teachings.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-pink-300 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-pink-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Beginners stepping into Vedānta practice</li>
          <li>Seekers looking for structured daily spiritual discipline</li>
          <li>Anyone interested in combining study, devotion, and meditation</li>
          <li>Practitioners who want a compact yet complete spiritual roadmap</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-rose-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: Completed</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Beginner</li>
          <li>Format: Guided study, chanting, reflection, and practice integration</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-yellow-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>📖 Build a solid foundation in Advaita Vedānta practice</li>
          <li>🧘 Learn a balanced approach of study, devotion, and meditation</li>
          <li>🌱 Establish discipline in daily life and spiritual routine</li>
          <li>🌺 Gain clarity and inspiration from concise teachings</li>
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
            title="Sadhana Panchakam Playlist"
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
      <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-orange-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner</h3>
        <p className="mt-2 text-sm opacity-90">
          Ideal for those beginning their Vedānta journey with structured guidance.
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

export default SadhanaPanchakam;
