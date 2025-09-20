import React from "react";
import { Sparkles, BookOpen, Heart, Star } from "lucide-react";

const TeerthYatra: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-700 via-orange-500 to-pink-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Teerth Yatra
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🕉️ Sacred Pilgrimage and Spiritual Journey
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Teerth Yatra, the sacred pilgrimage journey, is a practice of
            traveling to holy sites to deepen spiritual understanding and
            devotion. It is more than physical travel — it is a journey of the
            heart and mind, connecting the seeker to centuries of tradition,
            saints, and divine presence.
          </p>
          <p>
            Pilgrimage sites, rivers, mountains, and temples act as
            catalysts, inspiring reflection, purification, and inner awakening.
            The journey itself becomes a metaphor for life: overcoming obstacles,
            encountering teachings, and experiencing transformation.
          </p>
          <p>
            Through Teerth Yatra, the seeker cultivates mindfulness, humility,
            gratitude, and devotion. Each step, ritual, and encounter is an
            opportunity to deepen presence and align with higher consciousness.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <BookOpen className="w-5 h-5 text-orange-500" />
          Philosophy & Meaning
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            The philosophy behind Teerth Yatra is that sacred places carry
            accumulated spiritual energy, blessings, and wisdom of past seekers.
            Visiting these sites allows practitioners to resonate with this
            energy, fostering inner clarity and devotion.
          </p>
          <p>
            Beyond the physical journey, Teerth Yatra teaches patience,
            discipline, and detachment. The hardships of travel — enduring
            weather, walking long distances, and adjusting to unfamiliar
            surroundings — mirror the challenges of life, helping the seeker
            cultivate resilience and equanimity.
          </p>
          <p>
            The pilgrimage also embodies the principle that spiritual growth
            requires active participation. It is not passive observation but
            engagement: visiting shrines, offering prayers, reflecting on
            teachings, and integrating insights into daily life.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-pink-500" />
          Practice & Guidance
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Preparing for Teerth Yatra involves both planning and inner
            readiness. Practitioners often engage in meditation, study of
            sacred texts, and chanting to align mind and heart before embarking.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🔹 <b>Planning the Route:</b> Select pilgrimage sites with
              historical or spiritual significance. Research local traditions,
              festivals, and rituals.
            </li>
            <li>
              🔹 <b>Daily Practices:</b> Maintain spiritual practices — chanting,
              meditation, self-reflection — during the journey to deepen
              awareness.
            </li>
            <li>
              🔹 <b>Engaging with Community:</b> Interact with local devotees,
              priests, and fellow pilgrims to absorb wisdom and inspiration.
            </li>
            <li>
              🔹 <b>Reflection:</b> Observe inner reactions, challenges, and
              lessons, integrating them into personal spiritual growth.
            </li>
          </ul>
          <p>
            Pilgrimage is not just visiting sites; it is a conscious practice of
            humility, devotion, and inner transformation.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-yellow-300 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Star className="w-5 h-5 text-yellow-500" />
          Benefits of Teerth Yatra
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>🕉️ Deepens devotion and spiritual connection.</li>
          <li>🌊 Enhances mindfulness, reflection, and inner clarity.</li>
          <li>🌱 Cultivates humility, patience, and resilience.</li>
          <li>💫 Provides insights through sacred rituals and environments.</li>
          <li>🔮 Encourages integration of pilgrimage lessons into daily life.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700">
          Teerth Yatra is a transformative journey, blending physical travel,
          spiritual practice, and inner reflection. Each step along the path
          offers an opportunity to cultivate awareness, devotion, and harmony.
          By engaging fully with the journey, seekers return with not only
          memories of sacred sites, but with insights, clarity, and a deeper
          connection to the divine within.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner to Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Suitable for all practitioners interested in pilgrimage, spiritual
          exploration, and experiential learning. Regular reflection and
          devotion recommended during the journey.
        </p>
      </div>
    </div>
  );
};

export default TeerthYatra;
