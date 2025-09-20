import React from 'react';
import { Clock, BookOpen, Sparkles, Heart, Infinity, Users } from 'lucide-react';

const SiddhantaLeshaSangraha: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-teal-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Siddhānta Leśha Saṅgraha
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          📜 Collection of Doctrinal Glosses
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-green-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Siddhānta Leśha Saṅgraha is a concise compilation of essential doctrinal points
            within classical Advaita Vedānta. This course is designed to clarify core
            philosophical principles, offering a systematic understanding of the subtleties
            of non-dual thought.
          </p>
          <p>
            It is ideal for students who wish to consolidate their knowledge and remove
            ambiguities, ensuring that intellectual comprehension and practical realization
            go hand in hand.
          </p>
        </div>
      </div>

      {/* Who This Course is For */}
      <div className="rounded-xl shadow-lg border border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Users className="w-5 h-5 text-emerald-500" />
          Who This Course is For
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Students with prior knowledge of Advaita Vedānta</li>
          <li>Seekers wanting a systematic understanding of doctrinal points</li>
          <li>Those looking to deepen their contemplative and reflective practice</li>
          <li>Advanced practitioners preparing for independent study of classical texts</li>
        </ul>
      </div>

      {/* Course Details */}
      <div className="rounded-xl shadow-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-emerald-500" />
          Course Details
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><Clock className="inline w-4 h-4 mr-1 text-gray-500" /> Duration: 6-8 weeks</li>
          <li><BookOpen className="inline w-4 h-4 mr-1 text-gray-500" /> Level: Advanced</li>
          <li>Format: Guided readings, reflective discussions, and contemplative exercises</li>
          <li>Focus: Doctrinal clarification, textual comprehension, and integration of non-dual principles</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-lime-200 bg-gradient-to-br from-lime-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-lime-500" />
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>🧘 Develop precise understanding of Advaita Vedānta doctrines</li>
          <li>🌊 Eliminate conceptual confusion and subtle misunderstandings</li>
          <li>🌱 Strengthen contemplative and reflective skills</li>
          <li>🕉️ Build a solid foundation for further study or self-inquiry practice</li>
        </ul>
      </div>

      {/* Level Box */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Advanced</h3>
        <p className="mt-2 text-sm opacity-90">
          Recommended for students with prior knowledge of Vedanta and meditation practice.
        </p>
      </div>

    </div>
  );
};

export default SiddhantaLeshaSangraha;
