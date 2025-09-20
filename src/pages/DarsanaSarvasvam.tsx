import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users } from 'lucide-react';

const DarsanaSarvasvam: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-500 to-cyan-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Darśana Sarvasvam
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          📚 A Study of Four Types of Non-Duality
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-blue-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          Darśana Sarvasvam explores four non-dual philosophical viewpoints systematically, helping students understand fundamental reality from multiple perspectives within Advaita Vedānta.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-indigo-300 bg-gradient-to-br from-indigo-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-indigo-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Advanced Vedanta students seeking systematic study</li>
          <li>Seekers interested in comparing multiple non-dual philosophies</li>
          <li>Practitioners looking to refine intellectual comprehension along with meditation</li>
          <li>Teachers and scholars exploring classical texts in depth</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-blue-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: 12-14 weeks</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Advanced</li>
          <li>Format: Reading, reflection, and comparative analysis</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-teal-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>🧠 Systematic understanding of non-dual philosophical viewpoints</li>
          <li>🌊 Improved clarity and intellectual discernment</li>
          <li>🌱 Enhanced reflection and contemplative insight</li>
          <li>🕉️ Ability to engage deeply with classical Vedanta texts</li>
        </ul>
      </div>

      {/* Level Box */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Advanced</h3>
        <p className="mt-2 text-sm opacity-90">
          Recommended for students with prior knowledge of Vedanta and meditation.
        </p>
      </div>

    </div>
  );
};

export default DarsanaSarvasvam;
