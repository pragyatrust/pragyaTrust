import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const Samvedana: React.FC = () => {
  return (
    <>
      <SEO
        title="Samvedana - Sensitivity & Compassion - Pragya Trust"
        description="Discover Samvedana, the practice of developing deep sensitivity, compassion, and awakened empathy through mindful living."
        url="https://pragyatrust.com/meditation/samvedana"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Samvedana <span className="text-ochre-500">Sensitivity & Compassion</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Samvedana cultivates the heart’s capacity to feel deeply and respond with genuine empathy. 
            Through awareness and practice, one learns to resonate with all beings.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          The essence of Samvedana is sensitivity — an awakened heart that perceives and feels 
          the needs, joys, and suffering of others. Compassion naturally arises when one develops 
          this heightened awareness.
        </p>
        <p>
          Practicing Samvedana requires slowing down and paying attention to subtle cues — a 
          fleeting emotion, a moment of joy, or a quiet suffering. Through observation without 
          judgment, the practitioner cultivates a compassionate heart.
        </p>
        <p>
          Over time, Samvedana transforms interpersonal interactions. Actions become rooted in 
          empathy, words in kindness, and thoughts in understanding. It creates an inner harmony 
          that radiates outward to communities and relationships.
        </p>
      </section>

      {/* Practices Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Heart Awareness</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Observe the emotions that arise within yourself and others. Allow the heart to open 
              naturally to feelings of joy, sorrow, and compassion.
            </p>
          </div>

          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Empathetic Listening</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Listen without judgment. Give full attention to others’ words, tone, and emotions. 
              Empathy deepens through mindful listening.
            </p>
          </div>

          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Compassionate Action</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sensitivity leads naturally to compassionate action. Perform acts of kindness without 
              expectation, and notice the effect it has on your own heart.
            </p>
          </div>

          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Mindful Presence</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Be fully present with people and situations. Presence itself becomes a form of 
              compassion that heals and uplifts.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Samvedana transforms the practitioner from a reactive state to one of conscious 
          engagement. Emotional intelligence deepens, patience increases, and understanding 
          blooms naturally.
        </p>
        <p>
          Practicing sensitivity is not weakness; it is strength. It builds connection, 
          encourages harmony, and allows one to navigate life with grace and presence.
        </p>
        <p>
          Over months of practice, daily life becomes richer. Simple moments — a smile, 
          an expression of gratitude, a helping hand — take on profound significance. 
          Life itself becomes an expression of love and compassion.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Your Samvedana Practice
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Open your heart, observe, and act with compassion. Let sensitivity guide your 
            journey toward inner awakening.
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

export default Samvedana;
