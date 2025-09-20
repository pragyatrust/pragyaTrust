import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flower2, Volume2, Heart, Eye, Sun, Pause } from 'lucide-react';
import SEO from '../components/Common/SEO';

const MeditationDetail: React.FC = () => {
  const { slug } = useParams();

  const practiceData: { [key: string]: any } = {
    'kriya': {
      title: 'Kriya',
      subtitle: 'Action with Awareness',
      icon: Flower2,
      color: 'bg-ochre-500',
      what: 'Kriya means action with awareness. Every breath, every movement, every gesture can become sacred when done consciously. Unlike mechanical activity, kriya transforms ordinary actions into spiritual practice.',
      innerScience: 'The yogic masters say that body and breath are directly linked to the mind. When the breath is restless, the mind is restless. Kriya works by regulating breath and energy, so that mind naturally becomes calm.',
      howToPractice: [
        'Begin your day with 10–15 minutes of deep rhythmic breathing.',
        'Move your body slowly, feeling each motion as if it were a prayer.',
        'Let every kriya (action) remind you of the presence within.'
      ],
      benefits: [
        'Purification of body and mind.',
        'Energy becomes steady, not scattered.',
        'The heart becomes ready for meditation.'
      ],
      caution: 'Kriya without awareness is just exercise. Awareness makes it spiritual.',
      reflection: 'Kriya is not something you do—it is something you allow, as life flows through you with awareness.'
    },
    'jap': {
      title: 'Jap',
      subtitle: 'Sacred Repetition',
      icon: Volume2,
      color: 'bg-ochre-500',
      what: 'Jap is the repetition of a sacred mantra. It is not about sound alone, but about entering the vibration of Truth through that sound.',
      innerScience: 'Every mantra carries a subtle energy. When repeated with devotion, it transforms the restless mind into a calm lake where reflection of the Self becomes clear.',
      howToPractice: [
        'Sit comfortably with a mala or on your breath.',
        'Repeat the mantra softly, either aloud or mentally.',
        'Feel its vibration sinking from lips to heart.',
        'Allow it to continue until silence itself takes over.'
      ],
      benefits: [
        'Sharpens focus.',
        'Calms emotional storms.',
        'Opens the doorway to devotion.'
      ],
      caution: 'Mechanical chanting has no power. Jap works only when heart and sound become one.',
      reflection: 'Jap is like a boat—it carries you across the river of thoughts into the ocean of silence.'
    },
    'samvedana': {
      title: 'Samvedana',
      subtitle: 'Sensitivity & Compassion',
      icon: Heart,
      color: 'bg-ochre-500',
      what: 'Samvedana means sensitivity and compassion. It is the flowering of the heart that feels deeply and responds with love.',
      innerScience: 'In Vedanta, realization without compassion is incomplete. The awakened one naturally becomes sensitive to the suffering and joy of all beings.',
      howToPractice: [
        'Be fully present when someone speaks.',
        'Notice the subtle moods of people, nature, and even your own body.',
        'Instead of reacting, respond with gentleness.'
      ],
      benefits: [
        'Strengthens relationships.',
        'Opens the heart to divine grace.',
        'Balances wisdom with warmth.'
      ],
      caution: 'Sentimentality is not samvedana. True sensitivity is steady, not weak.',
      reflection: 'Samvedana is the fragrance of the heart when it blooms in awareness.'
    },
    'sakshi': {
      title: 'Sakshi',
      subtitle: 'Dhyan Vicharon ke Prati',
      icon: Eye,
      color: 'bg-ochre-500',
      what: 'Sakshi means witnessing. It is the art of observing without becoming entangled.',
      innerScience: '"You are not the mind, you are the seer of the mind." This is the essence of sakshi. When thoughts come, let them come. When they go, let them go. You remain the witness.',
      howToPractice: [
        'Sit quietly, spine erect.',
        'Watch thoughts as you watch clouds in the sky.',
        'Do not suppress, do not follow. Just be aware.'
      ],
      benefits: [
        'Creates space between you and thoughts.',
        'Dissolves identification with the mind.',
        'Opens the door to true meditation.'
      ],
      caution: 'Do not make witnessing into effort. Witnessing happens naturally when you stop clinging.',
      reflection: 'The witness is the eternal Self—unchanging, pure, and free.'
    },
    'ahangrah-upasana': {
      title: 'Ahangrah Upasana',
      subtitle: 'Worship of the Self',
      icon: Sun,
      color: 'bg-ochre-500',
      what: 'Ahangrah Upasana means worship of the Self as divine. Instead of seeking God outside, one begins to revere the "I" within as the very presence of Brahman.',
      innerScience: 'The Upanishads teach "Aham Brahmasmi" — I am Brahman. By meditating on the self-identity with divinity, the boundaries of ego dissolve.',
      howToPractice: [
        'Sit silently and bring attention to the feeling "I am."',
        'Offer reverence to this inner sense of existence.',
        'Contemplate: "This I is not limited—this I is universal."'
      ],
      benefits: [
        'Dissolution of small ego.',
        'Direct experience of oneness with all.',
        'Freedom from dependency on outer rituals.'
      ],
      caution: 'Do not mistake ego for the Self. The practice points to the infinite "I," not the personal one.',
      reflection: 'To worship the Self is to discover that worshipper, worship, and worshipped are one.'
    },
    'chup-sadhana': {
      title: 'Chup Sadhana',
      subtitle: 'Non-Doing',
      icon: Pause,
      color: 'bg-ochre-500',
      what: 'Chup means silence. Non-doing is resting in the natural state, beyond effort and techniques.',
      innerScience: 'All practices prepare the ground, but the highest realization is effortless. In silence, the Self shines without obstruction.',
      howToPractice: [
        'Sit quietly. Do nothing.',
        'Drop techniques, drop effort.',
        'Simply remain as you are.'
      ],
      benefits: [
        'Deep inner peace.',
        'Effortless awareness of the Self.',
        'Freedom from striving.'
      ],
      caution: 'Non-doing is not laziness. It is alert stillness, not dull sleep.',
      reflection: 'In silence, you discover that you were never bound—you are freedom itself.'
    }
  };

  const practice = practiceData[slug || ''];

  if (!practice) {
    return (
      <div className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto container-padding text-center py-20">
          <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">Practice Not Found</h1>
          <p className="text-gray-600 mb-8">The practice you're looking for doesn't exist.</p>
          <Link
            to="/meditation"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Practices
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = practice.icon;

  return (
    <>
      <SEO
        title={`${practice.title} - Meditation Practices | Pragya Trust`}
        description={practice.what.substring(0, 160)}
        url={`https://pragyatrust.com/meditation/${slug}`}
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <Link to="/meditation" className="hover:text-ochre-500">Meditation</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">{practice.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Link
              to="/meditation"
              className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Practices
            </Link>
            
            <div className="flex items-center mb-6">
              <div className={`inline-flex items-center justify-center w-20 h-20 ${practice.color} text-white rounded-xl mr-6`}>
                <IconComponent size={40} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  {practice.title}
                </h1>
                <p className="text-xl text-ochre-500 font-medium">
                  {practice.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-12">
              {/* What is */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  What is {practice.title}?
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {practice.what}
                </p>
              </div>

              {/* Inner Science / Philosophical Roots */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  {practice.title === 'Kriya' ? 'The Inner Science' : 
                   practice.title === 'Jap' ? 'The Power of Mantra' :
                   practice.title === 'Samvedana' ? 'Philosophical Roots' :
                   practice.title === 'Sakshi' ? 'The Upanishadic Teaching' :
                   practice.title === 'Ahangrah Upasana' ? 'Philosophical Roots' :
                   'Philosophical Roots'}
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {practice.innerScience}
                </p>
              </div>

              {/* How to Practice */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  How to Practice
                </h2>
                <ul className="space-y-3">
                  {practice.howToPractice.map((step: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-body text-gray-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {practice.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-body text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caution */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-xl">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Caution
                </h3>
                <p className="text-body text-gray-900 leading-relaxed">
                  {practice.caution}
                </p>
              </div>

              {/* Reflection */}
              <div className="bg-ochre-50 border-l-4 border-ochre-500 p-8 rounded-xl">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Reflection
                </h3>
                <p className="text-body text-gray-900 leading-relaxed italic">
                  {practice.reflection}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/meditation"
                className="btn-outline inline-flex items-center"
              >
                <ArrowLeft className="mr-2" size={20} />
                All Practices
              </Link>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Get Guidance
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MeditationDetail;