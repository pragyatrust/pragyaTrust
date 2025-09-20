import React from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const AhangrahUpasana: React.FC = () => {
  return (
    <>
      <SEO
        title="Ahangrah Upasana - Worship of the Self - Pragya Trust"
        description="Ahangrah Upasana guides the practitioner to revere the Self, recognizing the divine presence within."
        url="https://pragyatrust.com/meditation/ahangrah-upasana"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Ahangrah Upasana <span className="text-ochre-500">Worship of the Self</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Instead of seeking divinity outside, Ahangrah Upasana focuses on revering the “I” 
            within. Recognizing the Self as divine transforms every aspect of life.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Ahangrah Upasana is the practice of worshipping the Self. Traditional spiritual 
          paths often direct attention outward, but true realization begins internally.
        </p>
        <p>
          By meditating on the inner presence, one discovers a vast, timeless, and luminous 
          awareness. This inner worship dissolves egoistic tendencies and strengthens clarity, 
          love, and compassion.
        </p>
        <p>
          Practitioners cultivate self-respect, discipline, and mindfulness. Actions become 
          aligned with higher consciousness, and daily life transforms into a sacred ritual.
        </p>
      </section>

      {/* Practices Grid */}
      <section className="section-padding bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto container-padding">
        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Sun size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Inner Reverence</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Recognize the divine presence within yourself. Treat your inner being with love, 
            respect, and devotion.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Sun size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Daily Reflection</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Take time daily to reflect on inner awareness. Observe thoughts, emotions, 
            and actions as offerings of devotion to the Self.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Sun size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Alignment with Consciousness</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Actions, decisions, and thoughts naturally align with inner awareness. Life 
            becomes harmonious, purposeful, and sacred.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Sun size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Self-Discovery</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ahangrah Upasana uncovers layers of ego, habitual patterns, and limitations. 
            The practitioner discovers the boundless Self within.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Worshipping the Self does not imply selfishness; it is the foundation for true 
          compassion, clarity, and wisdom. By honoring the inner being, outer actions 
          reflect this sanctity.
        </p>
        <p>
          Daily practice strengthens inner stability. Challenges are approached with calm, 
          decisions arise with clarity, and life is imbued with a profound sense of purpose.
        </p>
        <p>
          Ahangrah Upasana is a transformative path, revealing the divine essence within every 
          moment, every action, and every breath.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Ahangrah Upasana
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Turn inward, revere the Self, and experience divinity within your own being.
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

export default AhangrahUpasana;
