import React from "react";
import { Sparkles, Heart, BookOpen, Music } from "lucide-react";

const JapB: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-700 via-purple-500 to-indigo-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Jap
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🎵 The Practice of Mantra Repetition
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-pink-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Jap, also known as Japa, is the sacred practice of repeating a
            mantra, divine name, or seed syllable. This repetition brings the
            mind to a single point, aligning the heart, speech, and mind in
            devotion. It is a central practice in bhakti and yogic traditions,
            blending focus, rhythm, and sacred sound into a powerful spiritual
            discipline.
          </p>
          <p>
            The purpose of Jap is not mechanical repetition but transformation.
            By turning attention inward and vibrating sacred sounds, the mind
            slowly detaches from habitual thoughts, centering on divine
            presence. Over time, this practice purifies the subconscious and
            strengthens inner calm.
          </p>
          <p>
            Historically, Jap has been performed with a mala of 108 beads. Each
            bead represents a repetition, grounding the practitioner in rhythm
            and devotion. The physical act of moving the beads combines with
            sound and attention to produce a multi-layered meditative experience.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <BookOpen className="w-5 h-5 text-purple-500" />
          Philosophy & Meaning
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            The philosophy behind Jap is that sound and consciousness are deeply
            intertwined. Every mantra carries subtle vibrations that resonate
            with the universe. Repetition aligns the individual mind with cosmic
            rhythm, awakening intuition and inner stillness. In essence, Jap
            turns the ordinary mind into a vessel for divine energy.
          </p>
          <p>
            Mantra repetition also develops mindfulness. By focusing attention
            on sound and rhythm, the mind disengages from past regrets and future
            anxieties. The repeated mantra acts as an anchor, keeping the
            practitioner grounded in the present moment.
          </p>
          <p>
            Furthermore, Jap embodies devotion (bhakti) and surrender. The
            practitioner acknowledges a higher power or the universal essence,
            fostering humility, love, and compassion. The vibrational nature of
            the practice affects body, mind, and subtle energy simultaneously.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-pink-300 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-pink-500" />
          Practice & Techniques
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Practitioners can start Jap silently, whispered, or aloud. Beginners
            may use short mantras, while advanced seekers explore long,
            intricate ones. Consistency is key: daily repetition builds the
            subtle layers of awareness and devotion.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🔹 <b>Silent Jap:</b> Focus inwardly, hearing the mantra with the
              mind alone, ideal for meditation sessions.
            </li>
            <li>
              🔹 <b>Whispered Jap:</b> Softly vocalize the mantra, combining
              auditory and mental focus.
            </li>
            <li>
              🔹 <b>Loud Jap:</b> Chant audibly, activating vibration in the
              body and surroundings, enhancing energetic flow.
            </li>
          </ul>
          <p>
            Using a mala of 108 beads enhances concentration. Each rotation
            completes a cycle of focus and devotion. The repetitive sound
            harmonizes breath, mind, and heartbeat, integrating meditation into
            living awareness.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-purple-300 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Music className="w-5 h-5 text-purple-500" />
          Benefits of Jap
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>🧘‍♂️ Cultivates inner calm and focus in daily life.</li>
          <li>🌊 Reduces mental chatter, stress, and emotional turbulence.</li>
          <li>🪷 Awakens devotion, love, and alignment with higher energy.</li>
          <li>🔮 Enhances intuitive understanding and spiritual insight.</li>
          <li>💫 Harmonizes body, mind, and subtle energy vibrations.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700">
          Jap is a versatile, timeless practice. Accessible to all, it
          transforms repetition into presence, devotion, and awareness. With
          regular practice, the practitioner experiences clarity, serenity, and
          connection to the deeper essence of life. It is a bridge from
          ordinary consciousness to the sacred.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner to Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Suitable for anyone wishing to cultivate focus, devotion, and inner
          calm. Regular daily practice recommended for deeper transformation.
        </p>
      </div>
    </div>
  );
};

export default JapB;
