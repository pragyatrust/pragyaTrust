import React from "react";
import { Sparkles, BookOpen, Focus, Eye } from "lucide-react";

const DhyanDharana: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-blue-500 to-cyan-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Dhyan & Dharana
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🧘 The Path of Meditation & Concentration
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Dhyan and Dharana are two vital limbs of the classical Ashtanga Yoga
            system described by Sage Patanjali. While Dharana refers to
            concentration — the focused holding of the mind on a single point —
            Dhyan refers to meditation, the effortless flow of attention toward
            the object of awareness. Together, they form the foundation of
            spiritual practice, bridging the restless surface of the mind and
            the still depths of realization.
          </p>
          <p>
            In modern terms, Dharana can be seen as the training of attention,
            while Dhyan is the flowering of that trained attention into a
            meditative state. Without Dharana, meditation collapses into
            distraction; without Dhyan, concentration becomes rigid and dry. The
            two together create a balance of focus and openness, effort and
            surrender.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <BookOpen className="w-5 h-5 text-blue-500" />
          Philosophy & Vision
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            In the Yoga Sutras, Patanjali presents Dharana, Dhyan, and Samadhi
            as the final three stages of inner practice — collectively known as
            Samyama. Dharana is the act of holding; Dhyan is the state of
            flowing awareness; Samadhi is the merging of awareness with its
            object. In this way, Dhyan is both a practice and a doorway: it is
            the bridge between effort and transcendence.
          </p>
          <p>
            Philosophically, Dharana represents the discipline of the mind. It
            recognizes that attention is scattered and must be gathered before
            it can be offered to the Divine. Dhyan, however, represents the
            grace that arises when attention is stable — the state in which the
            ego softens and the true Self shines through. Together, they teach
            that liberation requires both discipline and surrender.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Focus className="w-5 h-5 text-cyan-500" />
          Practice & Cultivation
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            To cultivate Dharana, practitioners often choose a single object of
            focus: the breath, a mantra, a flame, or even the heart center. The
            task is simple but powerful — whenever the mind wanders, gently
            bring it back. This repetitive act strengthens the “muscle” of
            attention, creating mental steadiness.
          </p>
          <p>
            Once Dharana is stable, it naturally flows into Dhyan. Here, effort
            dissolves, and attention becomes like an unbroken stream of oil
            pouring from one vessel to another. The practitioner is not forcing
            concentration but resting in the joy of presence. Thoughts may still
            appear, but they no longer dominate; they rise and fall like waves
            on the surface of a vast ocean of awareness.
          </p>
          <p>
            Regular practice deepens the mind’s capacity for stillness. Over
            time, even daily activities become infused with meditative quality.
            Walking, speaking, or studying no longer scatter awareness; instead,
            they become expressions of the same inner quiet.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Eye className="w-5 h-5 text-teal-500" />
          Benefits of Dhyan & Dharana
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>
            🧠 Strengthens attention and reduces habitual distraction.
          </li>
          <li>
            🌊 Calms emotional turbulence and fosters inner clarity.
          </li>
          <li>
            🪷 Cultivates a meditative awareness that carries into daily life.
          </li>
          <li>
            🔮 Opens the door to Samadhi — the direct experience of unity.
          </li>
          <li>
            🌟 Improves creativity, memory, and mental resilience.
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700 space-y-4">
          Dhyan and Dharana are not abstract concepts reserved for monks or
          sages. They are living practices that anyone can cultivate. In a world
          of endless distraction, the ability to rest the mind in stillness is a
          profound gift. By training concentration and opening into meditation,
          we rediscover the peace that is our birthright. The yogic texts remind
          us: when the mind is steady, the Self reveals itself effortlessly.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Intermediate to Advanced</h3>
        <p className="mt-2 text-sm opacity-90">
          Ideal for seekers ready to deepen their practice beyond relaxation.
          Requires commitment to regular sitting practice and willingness to
          observe the mind with patience.
        </p>
      </div>
    </div>
  );
};

export default DhyanDharana;
