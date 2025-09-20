import React from "react";
import { Sparkles, BookOpen, Heart, Infinity } from "lucide-react";

const Sahajawastha: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Sahajawastha
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          🪷 Cultivating a State of Natural Awareness
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Sahajawastha, often translated as “the natural state of awareness,”
            is one of the most celebrated states in the Indian spiritual
            tradition. Unlike methods that depend on force, concentration, or
            ritual discipline, Sahajawastha is about rediscovering what is
            already here — the effortless awareness in which every thought,
            feeling, and experience arises. It is not a practice you do, but a
            presence you recognize. 
          </p>
          <p>
            The sages describe Sahajawastha as the culmination of a spiritual
            journey: the moment when the seeker realizes that the very awareness
            they have been searching for has been silently present all along.
            It is likened to a person searching frantically for their glasses,
            only to realize they were wearing them all the while. This natural
            state is not exotic or distant — it is the most intimate truth of
            who we are.
          </p>
          <p>
            To live in Sahajawastha is to live in simplicity. It is to drop the
            restless need to control the flow of life and instead rest as the
            witnessing presence in which life unfolds. In this way, the practice
            is paradoxical: though it is called a state, it is actually our
            timeless nature, prior to all states.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          Philosophy & Vision
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            In Advaita Vedānta, Sahajawastha represents the living recognition
            of non-duality. The Upanishads declare “Tat Tvam Asi” — “That Thou
            Art” — pointing out that the Self (Ātman) and the Absolute
            (Brahman) are not separate. Sahajawastha is the direct experience of
            this truth, not as an idea but as a lived reality. In this natural
            state, the division between “seer” and “seen” dissolves.
          </p>
          <p>
            Teachers often emphasize that Sahajawastha is not “created” through
            practice. It is uncovered, much like clouds clearing to reveal the
            ever-shining sun. The clouds were never stronger than the sun — they
            only appeared to veil it. Similarly, thoughts, emotions, and
            conditioning seem to veil awareness but never truly touch it.
          </p>
          <p>
            Saints like Ramana Maharshi described Sahajawastha as abiding in the
            Self effortlessly. He explained that meditation can bring glimpses,
            but Sahajawastha is continuous, uninterrupted abidance. It does not
            waver with circumstances because it is not dependent on effort or
            mood; it is simply what is.
          </p>
          <p>
            This vision has profound implications for how we live. If awareness
            is our natural state, then struggle, anxiety, and confusion are only
            misunderstandings. We stop chasing peace as an external goal and
            instead rest in the peace that has never left us.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-pink-500" />
          Practice & Cultivation
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Though Sahajawastha is effortless, seekers often benefit from
            supportive practices to clear the ground. Meditation, mantra,
            pranayama, or self-inquiry can help stabilize the mind so it is not
            constantly swept away by distraction. These practices are like
            polishing a mirror so that it reflects the light of awareness more
            clearly.
          </p>
          <p>
            A simple method is to notice: Who is aware of this thought? Who is
            experiencing this emotion? Instead of chasing the content, rest in
            the awareness that notices it. Gradually, attention shifts from the
            changing objects of experience to the changeless subject. With time,
            the habit of grasping softens, and the natural state becomes more
            apparent.
          </p>
          <p>
            Daily life itself becomes a field of practice. Eating, speaking,
            studying, working — everything is an opportunity to remain
            established in effortless awareness. Unlike techniques that demand
            withdrawal, Sahajawastha integrates with ordinary living. In fact,
            the ordinary becomes extraordinary, because every moment is seen as
            shining with the light of consciousness.
          </p>
          <p>
            This practice is subtle, because the ego wants to “do” Sahajawastha.
            But the essence is non-doing: relaxing into the space that has never
            left. The mind cannot produce this state; it can only stop obscuring
            it.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Infinity className="w-5 h-5 text-green-500" />
          Benefits of Sahajawastha
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>
            🧘 Deep and effortless peace, independent of external conditions.
          </li>
          <li>
            🌊 Freedom from compulsive thought patterns and emotional reactivity.
          </li>
          <li>
            🌱 Integration of spirituality into daily life — no division between
            “practice” and “living.”
          </li>
          <li>
            🕉️ Direct realization of Advaitic truth — the end of seeking.
          </li>
          <li>
            💫 A natural radiance of joy, compassion, and clarity.
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700 space-y-4">
          Sahajawastha is the heart of all spiritual teaching. It is simple, yet
          profound; effortless, yet transformative. To rest in the natural state
          is to return home — to what we have always been. The seeker who
          abides here no longer runs after experiences but discovers that life
          itself is the play of awareness. This realization brings freedom,
          humility, and a joy that is untouched by time.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Advanced</h3>
        <p className="mt-2 text-sm opacity-90">
          Recommended for sincere practitioners with grounding in meditation or
          inquiry. Sahajawastha is simple, but not easy — it asks for honesty,
          surrender, and openness to what is.
        </p>
      </div>
    </div>
  );
};

export default Sahajawastha;
