import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const Sakshi: React.FC = () => {
  return (
    <>
      <SEO
        title="Sakshi - The Art of Witnessing - Pragya Trust"
        description="Explore Sakshi, the practice of observing thoughts and emotions without attachment, cultivating clarity, presence, and inner peace."
        url="https://pragyatrust.com/meditation/sakshi"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Sakshi <span className="text-ochre-500">The Art of Witnessing</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Sakshi trains the mind to observe without attachment. By witnessing thoughts and emotions 
            without identification, one cultivates clarity, presence, and inner freedom.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Sakshi, the witness consciousness, is a central practice in Vedantic meditation. 
          It enables the practitioner to step back from mental turbulence and recognize the 
          transient nature of thoughts and emotions.
        </p>
        <p>
          Through Sakshi, awareness deepens, and the mind begins to perceive the subtle layers 
          of experience. One realizes that the self is not the mind, but the observer of the mind. 
          This insight fosters detachment, peace, and stability.
        </p>
        <p>
          Regular practice of Sakshi helps break habitual reactivity. Stressful situations are 
          met with presence, anger dissolves into understanding, and decisions arise from clarity 
          rather than impulse.
        </p>
      </section>

      {/* Practices Grid */}
      <section className="section-padding bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto container-padding">
        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Eye size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Mind Observation</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Watch thoughts as they arise without interference. Identify patterns and allow 
            insight to emerge naturally.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Eye size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Emotion Awareness</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Observe emotions without attachment or judgment. Witness feelings as passing 
            clouds, creating space for peace and balance.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Eye size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Inner Detachment</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Sakshi develops detachment without indifference. The practitioner becomes 
            resilient and peaceful, observing life with clarity.
          </p>
        </div>

        <div className="card p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
            <Eye size={32} />
          </div>
          <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Conscious Living</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Being the witness cultivates conscious living. Actions and words arise 
            from awareness rather than habit or impulse.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Sakshi is not merely observation, but a transformation of consciousness. As the 
          witness, the mind no longer clings to experiences but appreciates them fully. 
          Emotional intelligence grows, relationships deepen, and life unfolds with clarity.
        </p>
        <p>
          The more one practices Sakshi, the more subtle layers of consciousness are 
          revealed. This leads to an inner serenity that is unaffected by external circumstances.
        </p>
        <p>
          Ultimately, Sakshi connects the practitioner to the timeless awareness at the 
          heart of all existence — calm, clear, and radiant.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Your Sakshi Practice
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Step back, observe, and allow the mind to unfold naturally. Witness without 
            attachment, and discover freedom in the present moment.
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

export default Sakshi;
