import React from "react";
import { Sparkles, BookOpen, Heart, Eye } from "lucide-react";

const Swadhyay: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-teal-700 via-cyan-500 to-blue-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">
          Swadhyay
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          📖 Self-Study and Contemplation
        </p>
      </div>

      <div className="my-8 border-t border-gray-200" />

      {/* Introduction */}
      <div className="rounded-xl shadow-lg border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Sparkles className="w-5 h-5 text-teal-500" />
          Introduction
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Swadhyay, or self-study, is a foundational practice in yoga and
            Vedānta. It encourages seekers to engage deeply with sacred texts
            while reflecting on their own inner life. Swadhyay is not merely
            reading; it is contemplative understanding, integrating wisdom into
            daily living.
          </p>
          <p>
            Traditional texts include the Upanishads, Bhagavad Gītā, Yoga
            Sūtras, and commentaries by realized masters. The goal is to move
            from intellectual comprehension to experiential understanding, so
            each lesson transforms consciousness.
          </p>
          <p>
            Swadhyay cultivates honesty, discernment, and introspection. By
            examining thoughts, emotions, and actions, the practitioner sees
            where ignorance persists and where awareness already shines.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-xl shadow-lg border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <BookOpen className="w-5 h-5 text-cyan-500" />
          Philosophy & Insight
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            The philosophy of Swadhyay is that understanding arises from direct
            engagement with knowledge and self-reflection. By studying sacred
            texts, one connects with centuries of wisdom and the experience of
            sages. This acts as a mirror, reflecting both our limitations and
            potentials.
          </p>
          <p>
            Swadhyay also emphasizes integration. Knowledge is not complete until
            it is embodied. As one studies, one simultaneously observes and
            adjusts thoughts, emotions, and behavior. This bridges theory and
            lived experience, producing lasting transformation.
          </p>
          <p>
            The practice encourages humility and curiosity. No matter how much
            one learns, there is always more to explore, more layers of truth
            to uncover, and deeper realizations waiting in silence and reflection.
          </p>
        </div>
      </div>

      {/* Practice */}
      <div className="rounded-xl shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Heart className="w-5 h-5 text-blue-500" />
          Practice & Method
        </h2>
        <div className="leading-relaxed text-gray-700 space-y-4">
          <p>
            Swadhyay can be approached in structured or informal ways. Daily
            reading of a text, reflection on its meaning, and application to
            life forms the backbone. Journaling, meditation, and discussion with
            teachers or peers amplify insight.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🔹 <b>Scripture Study:</b> Read slowly and attentively, noting
              key teachings and reflections.
            </li>
            <li>
              🔹 <b>Contemplation:</b> Pause after passages, allowing ideas to
              settle in the mind and reveal personal meaning.
            </li>
            <li>
              🔹 <b>Application:</b> Integrate lessons into daily actions,
              decisions, and interactions.
            </li>
            <li>
              🔹 <b>Discussion:</b> Share insights with a mentor or community
              to deepen understanding and perspective.
            </li>
          </ul>
          <p>
            Over time, Swadhyay strengthens awareness, clarity, and discernment.
            It nurtures a reflective mind and a conscious life, transforming
            knowledge into wisdom.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-xl shadow-lg border border-cyan-300 bg-gradient-to-br from-cyan-50 to-white p-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
          <Eye className="w-5 h-5 text-cyan-500" />
          Benefits of Swadhyay
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>🧘 Enhanced self-awareness and introspection.</li>
          <li>🌊 Greater clarity of thought and emotional balance.</li>
          <li>🌱 Deep integration of wisdom into daily life.</li>
          <li>💫 Improved decision-making and ethical discernment.</li>
          <li>🔮 Connection to timeless spiritual insights.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="rounded-xl shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="leading-relaxed text-gray-700">
          Swadhyay is the bridge between knowledge and living wisdom. By
          combining study, reflection, and application, the seeker develops a
          deeper understanding of self and spirit. It transforms learning into
          insight, insight into action, and action into a harmonious, conscious
          life.
        </p>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-400 text-white rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">Level: Intermediate</h3>
        <p className="mt-2 text-sm opacity-90">
          Ideal for seekers with a foundational understanding of spiritual
          texts who wish to deepen their contemplative practice. Consistent
          study and reflection recommended.
        </p>
      </div>
    </div>
  );
};

export default Swadhyay;
