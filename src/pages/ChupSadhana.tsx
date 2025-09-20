import React from 'react';
import { ArrowRight, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const ChupSadhana: React.FC = () => {
  return (
    <>
      <SEO
        title="Chup Sadhana - Silence & Non-Doing - Pragya Trust"
        description="Chup Sadhana invites the practitioner to rest in silence and non-doing, experiencing the natural state beyond effort and techniques."
        url="https://pragyatrust.com/meditation/chup-sadhana"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Chup Sadhana <span className="text-ochre-500">Silence & Non-Doing</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Chup Sadhana emphasizes the art of resting in the natural state. Beyond action and 
            thought, one experiences pure presence and effortless awareness.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Chup Sadhana is a contemplative practice inviting the practitioner to experience 
          silence beyond verbal or mental activity. It fosters a deep inner stillness and 
          clarity that transcends ordinary consciousness.
        </p>
        <p>
          Through non-doing, habitual tensions and distractions dissolve. One rests in the 
          natural flow of awareness, noticing the subtle rhythms of life and breath.
        </p>
        <p>
          This practice encourages surrender, trust, and openness, allowing the Self to shine 
          unobstructed. Gradually, inner peace becomes the foundation of daily life.
        </p>
      </section>

      {/* Practices Grid */}
      <section className="section-padding bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto container-padding">
        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Pause size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Restful Awareness</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Simply rest in awareness without effort. Observe the natural flow of thoughts 
            and sensations without interference.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Pause size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Embrace Silence</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Silence is a powerful medium for transformation. Chup Sadhana nurtures mental 
            stillness and spiritual clarity through mindful quietude.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Pause size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Non-Doing Practice</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Release attachment to activity. Let the mind rest in non-doing, opening space 
            for intuitive awareness and insight.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Pause size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Natural Flow</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Experience the effortless flow of life. Observe without control, resist nothing, 
            and allow awareness to illuminate the present moment.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Chup Sadhana cultivates deep calm, patience, and presence. By stepping away 
          from constant activity and mental noise, the practitioner reconnects with the 
          natural state of being.
        </p>
        <p>
          Regular practice supports mental clarity, emotional balance, and spiritual insight. 
          Challenges are met with inner stability, and daily experiences gain depth and richness.
        </p>
        <p>
          The power of silence and non-doing lies in its simplicity. It nurtures profound 
          inner transformation, fostering harmony, awareness, and inner freedom.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Chup Sadhana
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rest in awareness, embrace silence, and experience the effortless state of the Self.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Get Guidance
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ChupSadhana;
