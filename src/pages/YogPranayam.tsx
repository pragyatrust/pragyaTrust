import React from "react";
import { Wind, Sparkles, Heart, Activity } from "lucide-react";

const YogPranayam: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-teal-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Yog Pranayam
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🌬️ The Science of Breath & Vital Energy
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Wind className="w-5 h-5 text-green-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Yog Pranayam, the ancient art of conscious breath regulation, is one
            of the most powerful disciplines in the yogic tradition. “Prana”
            means vital life force, the subtle energy that animates body and
            mind, while “Ayam” means expansion or control. Together, Pranayam is
            the science of expanding, balancing, and mastering life energy
            through the gateway of breath.
          </p>
          <p>
            For millennia, yogis have recognized that the quality of our breath
            shapes the quality of our mind. When breath is shallow and erratic,
            the mind is restless and clouded. When breath is deep and rhythmic,
            the mind becomes clear and serene. Pranayam harnesses this intimate
            connection to unlock physical vitality, mental clarity, and
            spiritual awareness.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-emerald-500" />
          Philosophy & Yogic Vision
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            The yogic texts describe prana as the bridge between body and mind,
            matter and spirit. While food nourishes the body, prana nourishes
            consciousness itself. According to the Upanishads, “When prana
            departs, consciousness departs.” Thus, mastery over prana is
            regarded as mastery over life.
          </p>
          <p>
            In Patanjali’s Ashtanga Yoga, Pranayam is the fourth limb — placed
            after Asana (posture) and before Pratyahara (sense withdrawal).
            Philosophically, it represents the turning point of yoga practice:
            moving from external discipline to internal mastery. By refining the
            flow of breath, one refines the flow of thought and begins to
            prepare for meditation and Samadhi.
          </p>
          <p>
            The yogis also described subtle energy channels called nadis. When
            the nadis are purified through Pranayam, energy flows freely, and
            higher states of awareness become natural. In this way, breath
            becomes the key to awakening dormant spiritual potential.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Activity className="w-5 h-5 text-teal-500" />
          Practice & Techniques
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Yog Pranayam offers a wide spectrum of techniques, each with unique
            effects. Beginners often start with deep diaphragmatic breathing to
            increase lung capacity and calm the nervous system. From there, one
            progresses into structured practices such as:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>Anulom Vilom (Alternate Nostril Breathing):</b> Balances the
              left and right hemispheres of the brain, harmonizing logic and
              intuition.
            </li>
            <li>
              <b>Kapalabhati (Skull-Shining Breath):</b> A dynamic technique
              that cleanses the respiratory system and energizes the body.
            </li>
            <li>
              <b>Bhramari (Bee Breath):</b> Produces a humming sound that soothes
              the mind and relieves stress.
            </li>
            <li>
              <b>Ujjayi (Victorious Breath):</b> Generates internal heat,
              purifies energy channels, and enhances focus.
            </li>
          </ul>
          <p>
            Each technique requires mindful practice under guidance. Pranayam is
            not merely a breathing exercise — it is an energetic art that
            affects body chemistry, nervous system, and subtle consciousness.
            Regular practice gradually transforms health, emotions, and inner
            perception.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-lime-200 bg-gradient-to-br from-lime-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-lime-500" />
          Benefits of Yog Pranayam
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>
            🌬️ Strengthens lungs and improves oxygenation throughout the body.
          </li>
          <li>
            🧠 Enhances mental clarity, concentration, and memory.
          </li>
          <li>
            💖 Reduces stress and balances the nervous system.
          </li>
          <li>
            🔋 Boosts energy levels and combats fatigue.
          </li>
          <li>
            🪷 Awakens subtle awareness and prepares the mind for meditation.
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700">
          Yog Pranayam is a sacred gift from the yogic tradition — a reminder
          that the breath we take for granted is a divine key to healing and
          awakening. Through mindful breathing, we restore balance to body and
          mind, and open a gateway to deeper meditation. In a fast-paced modern
          world, Pranayam is not only a spiritual discipline but also a
          practical medicine for stress, anxiety, and fatigue. Ultimately, it
          reveals that the power to transform consciousness lies in every
          breath.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: All Levels</h3>
        <p className="mt-2 text-sm opacity-90">
          Accessible to beginners yet profound for advanced practitioners. With
          guidance, anyone can begin harnessing the power of breath to transform
          body, mind, and spirit.
        </p>
      </div>
    </div>
  );
};

export default YogPranayam;
