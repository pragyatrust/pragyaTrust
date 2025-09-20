import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Heart, Lightbulb, Users, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/Common/SEO';

const PITCs: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const features = [
    {
      id: 'holistic-engagement',
      icon: Heart,
      title: 'Holistic Engagement',
      subtitle: 'Learning with the Mind, Heart, and Life',
      brief: 'Learning that engages mind, heart, and life — not just intellectual understanding but lived experience.',
      introduction: 'True spiritual learning cannot be limited to the intellect. Scriptures are not merely to be read and debated, but to be absorbed, reflected upon, and lived. Holistic engagement means that every part of the seeker — the analytical mind, the feeling heart, and the active life — is touched and transformed.',
      explanation: {
        mind: 'Clarity of thought is cultivated through study and reflection. Confusion dissolves as knowledge becomes sharp and precise.',
        heart: 'Devotion and love awaken. When knowledge touches the heart, learning ceases to be dry philosophy; it becomes alive and nurturing.',
        life: 'The ultimate test of wisdom is how it translates into daily living — relationships, actions, and attitudes. When knowledge is applied, it becomes power.'
      },
      whyItMatters: 'Most people approach spirituality only intellectually or emotionally. Holistic engagement ensures balance. It prevents spiritual bypassing, making sure seekers grow as complete human beings.',
      benefits: [
        'Balanced growth in all dimensions.',
        'Spiritual knowledge that doesn\'t remain abstract but becomes lived truth.',
        'A path that integrates head, heart, and hands.'
      ]
    },
    {
      id: 'personal-transformation',
      icon: Brain,
      title: 'Personal Transformation',
      subtitle: 'Knowledge that Changes the Knower',
      brief: 'Knowledge that transforms the knower — bringing clarity, purpose, and inner growth to daily life.',
      introduction: 'The goal of study is not to become a scholar, but to become transformed. Personal transformation is the real fruit of Vedantic learning: clarity, inner strength, and alignment with one\'s higher self.',
      explanation: {
        main: 'Every text studied is like a mirror. It reflects back not only eternal truths but also our limitations, attachments, and blind spots. Transformation begins when knowledge moves from being external information to inner realization.'
      },
      whyItMatters: 'In today\'s fast-paced world, information is abundant but wisdom is rare. Knowledge without transformation becomes pride. Transformation ensures that what we learn actually shifts our way of being.',
      benefits: [
        'Greater clarity in decisions and purpose.',
        'Inner calmness even amidst external chaos.',
        'Real growth that is visible in character, not just in words.'
      ]
    },
    {
      id: 'living-consciousness',
      icon: Lightbulb,
      title: 'Living Consciousness',
      subtitle: 'Learning and Living as Awareness',
      brief: 'As you learn about consciousness, you simultaneously live in greater consciousness.',
      introduction: 'Consciousness is not an abstract theory. It is the very essence of who we are. In Vedantic study, Living Consciousness means that as one learns about awareness, one simultaneously lives as awareness.',
      explanation: {
        main: 'Each teaching invites a shift in perspective: from identifying with the body and mind, to recognizing the unchanging witness. The more this is understood, the more daily life becomes infused with awareness. Walking, working, speaking, all become reminders of one\'s true nature.'
      },
      whyItMatters: 'Many seekers get trapped in intellectual gymnastics. They understand "consciousness" as a concept but don\'t live it. This approach ensures knowledge translates into direct experience.',
      benefits: [
        'Freedom from stress and over-identification with thoughts.',
        'A natural presence in daily interactions.',
        'Gradual abiding in the Self as pure awareness.'
      ]
    },
    {
      id: 'integrated-approach',
      icon: Users,
      title: 'Integrated Approach',
      subtitle: 'Touching Every Aspect of Existence',
      brief: 'Beyond academic study — a comprehensive approach that touches every aspect of existence.',
      introduction: 'Vedanta is not just philosophy; it is a way of life. An integrated approach means the teachings permeate all aspects of existence — body, mind, work, relationships, and inner devotion.',
      explanation: {
        study: 'Intellectual clarity.',
        practice: 'Meditation, chanting, reflection.',
        devotion: 'Cultivating humility and surrender.',
        service: 'Bringing wisdom into action for the benefit of others.',
        note: 'Instead of fragmenting life into "spiritual" and "worldly," the integrated approach sees all life as spiritual.'
      },
      whyItMatters: 'Modern living often creates fragmentation — work separate from family, family separate from inner life. This approach restores unity. It shows how every moment, every activity, can be a doorway to truth.',
      benefits: [
        'Harmony between outer duties and inner growth.',
        'A seamless spiritual life, not confined to rituals.',
        'A comprehensive path where nothing is left out.'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="PITCs - Pragya Institute for Transformational Consciousness Studies"
        description="Transformational consciousness studies that engage the whole being - mind, heart, and life. Knowledge that is not only understood but lived."
        url="https://pragyatrust.com/pitcs"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">PITCs</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Link
              to="/"
              className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mr-6">
                <Brain size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  PITCs
                </h1>
                <p className="text-xl text-ochre-500 font-medium">
                  Pragya Institute for Transformational Consciousness Studies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="card p-8">
                <p className="text-body text-gray-900 leading-relaxed mb-6">
                  In most academic and research settings, consciousness is often studied from a distance — as an object of inquiry, much like any other subject in science, philosophy, or the arts. It is observed, analyzed, and classified in theoretical frameworks, but rarely does this kind of study touch the inner life of the one studying it. Such an approach can leave the student unchanged — the knowledge remains external, an intellectual possession without personal transformation.
                </p>
                
                <p className="text-body text-gray-900 leading-relaxed">
                  At the Pragya Institute for Transformational Consciousness Studies, we believe that the study of consciousness should be more than an academic pursuit.
                </p>
              </div>

              {/* What is Transformational Studies */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    What is Transformational Studies?
                  </h2>
                </div>
                
                <p className="text-body text-gray-900 leading-relaxed mb-6">
                  <strong>Transformational Studies</strong> means that the very process of learning about consciousness will engage the whole being of the student — mind, heart, and life. Here, knowledge is not only understood; it is lived. The exploration of consciousness is designed to awaken deeper awareness, refine thought, harmonize emotions, and bring lasting positive change to one's life.
                </p>
                
                <p className="text-body text-gray-900 leading-relaxed">
                  This approach ensures that as you learn about consciousness, you also live in greater consciousness — bringing clarity, purpose, and inner growth that radiates into every aspect of your existence.
                </p>
              </div>

              {/* Expandable Key Features */}
              <div className="space-y-6">
                <h2 className="text-h2 font-heading font-bold text-navy-500 text-center mb-8">
                  Key Features
                </h2>
                
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  const isExpanded = expandedCard === feature.id;
                  
                  return (
                    <div key={feature.id} className="card overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start flex-1">
                            <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                              <IconComponent size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-ochre-500 font-medium mb-3 text-sm">
                                {feature.subtitle}
                              </p>
                              <p className="text-gray-600 leading-relaxed">
                                {feature.brief}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleCard(feature.id)}
                            className="ml-4 p-2 text-ochre-500 hover:text-ochre-600 transition-colors duration-200"
                          >
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                        
                        {isExpanded && (
                          <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                            {/* Introduction */}
                            <div>
                              <h4 className="text-lg font-heading font-semibold text-navy-500 mb-3">
                                Introduction
                              </h4>
                              <p className="text-gray-900 leading-relaxed">
                                {feature.introduction}
                              </p>
                            </div>
                            
                            {/* Explanation */}
                            <div>
                              <h4 className="text-lg font-heading font-semibold text-navy-500 mb-3">
                                Explanation
                              </h4>
                              {feature.id === 'holistic-engagement' ? (
                                <div className="space-y-3">
                                  <div>
                                    <strong className="text-ochre-500">Mind:</strong> {feature.explanation.mind}
                                  </div>
                                  <div>
                                    <strong className="text-ochre-500">Heart:</strong> {feature.explanation.heart}
                                  </div>
                                  <div>
                                    <strong className="text-ochre-500">Life:</strong> {feature.explanation.life}
                                  </div>
                                </div>
                              ) : feature.id === 'integrated-approach' ? (
                                <div className="space-y-3">
                                  <p className="text-gray-900 leading-relaxed mb-4">This approach includes:</p>
                                  <div>
                                    <strong className="text-ochre-500">Study:</strong> {feature.explanation.study}
                                  </div>
                                  <div>
                                    <strong className="text-ochre-500">Practice:</strong> {feature.explanation.practice}
                                  </div>
                                  <div>
                                    <strong className="text-ochre-500">Devotion:</strong> {feature.explanation.devotion}
                                  </div>
                                  <div>
                                    <strong className="text-ochre-500">Service:</strong> {feature.explanation.service}
                                  </div>
                                  <p className="text-gray-900 leading-relaxed mt-4">
                                    {feature.explanation.note}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-gray-900 leading-relaxed">
                                  {feature.explanation.main}
                                </p>
                              )}
                            </div>
                            
                            {/* Why It Matters */}
                            <div>
                              <h4 className="text-lg font-heading font-semibold text-navy-500 mb-3">
                                Why It Matters
                              </h4>
                              <p className="text-gray-900 leading-relaxed">
                                {feature.whyItMatters}
                              </p>
                            </div>
                            
                            {/* Benefits */}
                            <div>
                              <h4 className="text-lg font-heading font-semibold text-navy-500 mb-3">
                                Benefits
                              </h4>
                              <ul className="space-y-2">
                                {feature.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-900">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="bg-ochre-50 rounded-xl p-8 text-center">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Experience Transformational Learning
                </h3>
                <p className="text-gray-600 mb-6">
                  Join us in exploring consciousness not as an external subject, but as the very ground of your being.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Learn More
                  <ArrowLeft className="ml-2 rotate-180" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PITCs;