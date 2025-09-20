import React from 'react';
import { ArrowRight, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const Jap: React.FC = () => {
  return (
    <>
      <SEO
        title="Jap - Sacred Repetition - Pragya Trust"
        description="Explore the practice of Jap, the sacred repetition of mantras, to deepen spiritual awareness and vibration of consciousness."
        url="https://pragyatrust.com/meditation/jap"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Jap <span className="text-ochre-500">Sacred Repetition</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Jap is the disciplined repetition of sacred sounds or mantras, creating resonance 
            that awakens consciousness and harmonizes mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto container-padding prose">
          <p>
            The practice of Jap has been revered for centuries in various spiritual traditions. 
            It is more than chanting; it is immersing oneself in the vibration of the universe. 
            Each repetition carries a subtle energy that transforms mental patterns and elevates 
            awareness.
          </p>
          <p>
            Consistency in Jap develops concentration, emotional stability, and spiritual 
            clarity. Through repetition, the mind gradually becomes quieter, allowing the 
            practitioner to experience deeper states of meditation and inner peace.
          </p>
          <p>
            Jap can be performed silently, aloud, or with mala beads, providing flexibility 
            and personalization in practice. The essence lies not in the quantity, but in 
            the conscious quality and connection to the sound.
          </p>
        </div>
      </section>

      {/* Techniques / Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Volume2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Choosing Your Mantra
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Select a mantra that resonates with your spiritual intention. It could be a traditional 
              Sanskrit mantra or a word of personal significance. Connection to the mantra enhances 
              its effectiveness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Volume2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Repetition & Rhythm
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Repeat the mantra mindfully, paying attention to rhythm, pronunciation, and energy. 
              Use mala beads or set a daily count. Focus on the vibration and allow it to penetrate 
              your awareness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Volume2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Silent Awareness
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jap is as much about silence as repetition. Allow the mind to rest in the space between sounds, 
              observing thoughts without attachment. The quiet resonance amplifies inner calm.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Volume2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Integration in Daily Life
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The transformative power of Jap unfolds as you integrate its vibration into daily life. 
              Repeating the mantra during challenges, transitions, or contemplative moments enhances 
              mindfulness and spiritual alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Jap is an intimate dialogue with the divine presence within. Over time, repetition 
          becomes effortless, yet deeply profound. Emotional turbulence reduces, clarity 
          increases, and an enduring sense of peace emerges.
        </p>
        <p>
          The practice also connects practitioners to a lineage of wisdom. Each sound carries 
          subtle vibrations inherited through tradition, reinforcing a connection to timeless 
          spiritual knowledge.
        </p>
        <p>
          Engaging in Jap nurtures patience, devotion, and consistency. The mind gradually 
          becomes a receptive space, sensitive to subtle cues and higher awareness. Over 
          months, practitioners notice a shift in perception: life becomes more luminous, 
          relationships more harmonious, and inner silence more accessible.
        </p>
        <p>
          Ultimately, Jap is a bridge between the ordinary and the sacred. It is a gentle 
          reminder that through dedicated practice, even a single sound can awaken the 
          entire being.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Your Jap Practice
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Dedicate a few moments each day to repetition and mindfulness. Allow the vibration 
            of your mantra to awaken inner awareness and transform your consciousness.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center"
          >
            Get Guidance
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Jap;
