import React from "react";
import { Sparkles, BookOpen, Heart, Star } from "lucide-react";

const PujaPath: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-700 via-orange-500 to-pink-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Puja-Path
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🕉️ Ritual Worship and Sacred Recitation
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
            Puja-Path refers to the traditional forms of worship and recitation
            that connect the devotee with the divine. Puja involves offering
            flowers, incense, food, and prayers to a deity, symbolizing
            surrender, devotion, and gratitude. Path refers to the chanting or
            recitation of sacred texts, mantras, and hymns that purify the mind
            and environment.
          </p>
          <p>
            These practices are designed to bring the outer actions in harmony
            with inner devotion. Ritual and sound become vehicles for spiritual
            elevation, turning ordinary acts into expressions of love and
            reverence for the sacred.
          </p>
          <p>
            Puja-Path has been practiced for millennia, forming the backbone of
            temple rituals, daily household worship, and personal devotional
            routines. It emphasizes both structure and heartfelt engagement,
            reminding the practitioner that devotion is expressed through both
            doing and being.
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
            The underlying philosophy of Puja-Path is that outward devotion and
            ritual can transform inner consciousness. When actions are
            performed with awareness and reverence, they align the mind,
            heart, and body with divine principles. Rituals are not mere
            formalities — they are bridges to higher awareness.
          </p>
          <p>
            Sacred recitation, or Path, works on multiple levels. The sound
            vibrations resonate with subtle energies, harmonizing the nervous
            system and calming the mind. Repetition of mantras purifies the
            heart, cultivates devotion, and fosters mindfulness.
          </p>
          <p>
            Puja-Path also reflects the ancient understanding that humans learn
            and remember through action. Physical gestures, offerings, and
            ritualized sequences embed devotion into both memory and body,
            creating a holistic spiritual experience that is both tangible and
            transcendent.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-pink-500" />
          Practice & Steps
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Daily practice typically starts with simple offerings — lighting a
            lamp, presenting flowers, or arranging a small altar. These actions
            help focus the mind and cultivate reverence. Chanting a short
            mantra or verse is combined with breath awareness to integrate
            body, mind, and speech.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🔹 <b>Offerings:</b> Flowers, incense, and food offered with
              mindfulness create a symbolic act of surrender.
            </li>
            <li>
              🔹 <b>Mantra Recitation:</b> Reciting sacred syllables purifies
              thoughts and strengthens devotion.
            </li>
            <li>
              🔹 <b>Meditative Attention:</b> Maintaining awareness of the
              present moment, breath, and heart enhances the power of ritual.
            </li>
            <li>
              🔹 <b>Reflection:</b> Contemplating the meaning of texts and
              prayers deepens understanding and integration.
            </li>
          </ul>
          <p>
            Elaborate temple rituals follow structured sequences with multiple
            mantras, offerings, and gestures. Each act has symbolic significance,
            reinforcing moral, spiritual, and cosmic principles.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-yellow-300 bg-gradient-to-br from-yellow-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Star className="w-5 h-5 text-yellow-500" />
          Benefits of Puja-Path
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>🕉️ Cultivates devotion, gratitude, and humility.</li>
          <li>🌊 Calms the mind and harmonizes emotional states.</li>
          <li>🌱 Creates a rhythm of daily practice and spiritual discipline.</li>
          <li>💫 Purifies thoughts and intentions, supporting ethical living.</li>
          <li>🔮 Enhances connection to divine energies and cosmic principles.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700">
          Puja-Path is more than ritual — it is an integration of action,
          devotion, and awareness. Whether simple or elaborate, every offering
          and recitation bridges the human and the divine. With sincerity,
          regular practice transforms ordinary daily life into a sacred journey,
          awakening the heart and mind to the timeless presence that pervades
          all things.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Beginner to Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Suitable for practitioners new to ritual and recitation, as well as
          those seeking to deepen daily spiritual discipline. Regular practice
          fosters devotion and inner alignment.
        </p>
      </div>
    </div>
  );
};

export default PujaPath;
