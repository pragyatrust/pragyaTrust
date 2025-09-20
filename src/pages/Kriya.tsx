import React from 'react';
import { ArrowRight, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const Kriya: React.FC = () => {
  return (
    <>
      <SEO
        title="Kriya - Action with Awareness - Pragya Trust"
        description="Explore the transformative practice of Kriya to turn ordinary actions into sacred, mindful practices for spiritual awakening."
        url="https://pragyatrust.com/meditation/kriya"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
            Kriya <span className="text-ochre-500">Action with Awareness</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Kriya transforms the ordinary into the extraordinary. Through mindful action, 
            each gesture, breath, and movement becomes a sacred expression of inner consciousness.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto container-padding prose">
          <p>
            Kriya is an ancient practice of performing actions with full awareness. It is 
            not merely about completing tasks, but about infusing intention, mindfulness, 
            and presence into every activity. When applied consistently, Kriya elevates 
            everyday life into a continuous spiritual practice.
          </p>
          <p>
            Through Kriya, the practitioner learns to observe the body, mind, and breath 
            simultaneously, allowing ordinary movements to become portals of awakening. 
            Each step, whether walking, eating, or cleaning, becomes an opportunity to 
            deepen one’s inner connection.
          </p>
          <p>
            Beyond the physical, Kriya strengthens mental clarity, emotional stability, 
            and spiritual insight. It is a practice that harmonizes all layers of being, 
            creating a profound sense of balance and inner peace.
          </p>
        </div>
      </section>

      {/* Techniques / Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Flower2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Mindful Breath
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Begin every action with awareness of the breath. Observe the inhale and 
              exhale, feeling the flow of life energy. Breathing consciously aligns the 
              mind and body with the present moment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Flower2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Intentional Movement
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every physical gesture is executed with intention. Whether lifting an object, 
              walking, or reaching, focus your awareness entirely on the action and the 
              sensations it generates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Flower2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Presence in Daily Life
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kriya is not restricted to a meditation hall. It is applied in every interaction, 
              from washing dishes to speaking to loved ones. Each action, infused with presence, 
              becomes a stepping stone to spiritual awakening.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6">
              <Flower2 size={32} />
            </div>
            <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
              Reflection & Awareness
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              After every action, pause and reflect. Notice how mindful activity affects 
              your emotional and mental state. With consistent practice, awareness gradually 
              becomes second nature.
            </p>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-white prose max-w-4xl mx-auto container-padding">
        <p>
          Kriya teaches the art of living consciously. It encourages the mind to slow down, 
          appreciate the subtle nuances of life, and act with clarity. Practitioners develop 
          a heightened sense of self-discipline, emotional resilience, and inner harmony.
        </p>
        <p>
          Over time, one notices a transformation in relationships, work, and personal habits. 
          The practice fosters patience, understanding, and a profound appreciation for the 
          interconnectedness of all life.
        </p>
        <p>
          The beauty of Kriya lies in its simplicity. There are no complicated rituals; 
          it is simply a conscious way of living. Each breath, step, and gesture becomes 
          an expression of inner awareness, guiding the practitioner toward realization 
          of the Self.
        </p>
        <p>
          Practicing Kriya consistently allows one to move beyond mechanical living, 
          creating a life where every act is sacred and purposeful. It is a journey 
          that transforms ordinary existence into a tapestry of conscious experience.
        </p>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
            Begin Your Kriya Practice
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start small, be mindful, and observe how conscious action transforms your 
            daily life. Step into the journey of awakening through Kriya.
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

export default Kriya;
