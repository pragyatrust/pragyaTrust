import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users } from 'lucide-react';

const DrgDrsyaViveka: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Dṛg-Dṛśya-Viveka
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🔍 Discrimination Between the Seer and the Seen
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          This text teaches the fundamental principle of Advaita Vedānta: distinguishing the eternal Seer (Self) from the transient objects perceived by the senses. The course guides students through reflection and meditation to directly realize non-dual awareness.
        </p>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-pink-300 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-pink-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Students with a basic understanding of Vedanta</li>
          <li>Seekers wishing to explore the Seer-Seen principle in depth</li>
          <li>Those who want to integrate discrimination practice into daily life</li>
          <li>Practitioners interested in self-inquiry and meditative reflection</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-purple-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: 8-10 weeks</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Intermediate</li>
          <li>Format: Guided readings, discussions, and contemplative practice</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-green-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>🧘 Cultivate clarity in the distinction between Self and non-Self</li>
          <li>🌊 Reduce confusion and mental distractions</li>
          <li>🌱 Strengthen reflective and contemplative skills</li>
          <li>🕉️ Prepare for advanced non-dual studies</li>
        </ul>
      </div>

      {/* Level Box */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Recommended for seekers with some prior knowledge of Vedanta and meditation practice.
        </p>
      </div>
    </div>
  );
};

export default DrgDrsyaViveka;
