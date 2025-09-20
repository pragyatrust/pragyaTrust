import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/Common/SEO';

const OtherCourseDetail: React.FC = () => {
  const { slug } = useParams();

  const courseData: { [key: string]: any } = {
    'yog-pranayam': {
      title: 'Yog Pranayam',
      subtitle: 'Breath Control Techniques',
      what: 'Pranayam means regulating the breath to harmonize body, mind, and spirit. Through mindful breathing, one balances energy and cultivates inner strength.',
      philosophicalRoots: 'In yogic philosophy, prana (life-force) is the bridge between body and consciousness. Mastery of prana leads to mastery of mind.',
      howToApproach: [
        'Begin with simple deep breathing.',
        'Learn alternate nostril breathing (Anulom-Vilom).',
        'Progress gradually to advanced techniques under guidance.'
      ],
      benefits: [
        'Strengthens lungs and nervous system.',
        'Increases vitality and focus.',
        'Creates calmness and stability.'
      ],
      caution: 'Practice pranayam gradually and never force the breath. Advanced techniques should be learned under proper guidance.',
      reflection: 'Through breath, we touch the rhythm of life itself.'
    },
    'sahajawastha': {
      title: 'Sahajawastha',
      subtitle: 'Cultivating a State of Natural Awareness',
      what: 'Sahajawastha means living in a state of natural ease, where awareness flows effortlessly without force. It is the art of being without struggle, resting in the Self while engaging with the world.',
      philosophicalRoots: 'The Upanishads and sages describe it as the ultimate state — awareness beyond practice, where the seeker becomes established in their true nature.',
      howToApproach: [
        'Begin by observing without judgment.',
        'Allow thoughts to come and go like clouds.',
        'Practice effortless witnessing in daily activities.'
      ],
      benefits: [
        'Brings natural calm and joy.',
        'Removes the sense of inner struggle.',
        'Helps integrate spirituality into ordinary life.'
      ],
      caution: 'Do not confuse natural awareness with carelessness or indulgence. True sahaj is full of alert presence.',
      reflection: 'Natural awareness is not something you achieve. It is what you already are.'
    },
    'dhyan-dharana': {
      title: 'Dhyan Dharana',
      subtitle: 'Meditation and Concentration Practices',
      what: 'Dharana is concentration, holding attention on one object; Dhyan is meditation, where that concentration deepens into a flow. Together, they quiet the restless mind.',
      philosophicalRoots: 'Patanjali\'s Yoga Sutras describe Dharana and Dhyan as essential steps toward Samadhi — the union with pure consciousness.',
      howToApproach: [
        'Start with Dharana: focus on breath, mantra, or flame.',
        'Transition to Dhyan: let concentration soften into effortless presence.',
        'End with silence and gratitude.'
      ],
      benefits: [
        'Improves focus and clarity.',
        'Deepens spiritual insight.',
        'Relieves stress and mental fatigue.'
      ],
      caution: 'Too much effort creates tension. Too little effort leads to distraction. Balance is key.',
      reflection: 'Concentration is the doorway. Meditation is stepping through it.'
    },
    'jap-practice': {
      title: 'Jap',
      subtitle: 'Recitation of Mantras or Sacred Sounds',
      what: 'Jap is the rhythmic repetition of mantras or sacred sounds, done aloud or silently. It connects the heart with divine vibration.',
      philosophicalRoots: 'Mantras are considered sound-forms of divine energy. Repetition purifies the mind and anchors awareness in devotion.',
      howToApproach: [
        'Choose a mantra with reverence.',
        'Use a mala for 108 repetitions.',
        'Continue until the mantra flows effortlessly in the heart.'
      ],
      benefits: [
        'Purifies emotions and thoughts.',
        'Cultivates devotion and inner strength.',
        'Creates a steady rhythm of peace.'
      ],
      caution: 'Mechanical chanting has no power. Jap works only when heart and sound become one.',
      reflection: 'Jap is like a boat—it carries you across the river of thoughts into the ocean of silence.'
    },
    'swadhyay': {
      title: 'Swadhyay n Path',
      subtitle: 'Study and Reflection on Spiritual Texts',
      what: 'Swadhyay is self-study of sacred texts, and Path is devotional recitation. Together, they combine learning with heart-based remembrance.',
      philosophicalRoots: 'The Bhagavad Gita calls Swadhyay a form of yajna (sacrifice). It refines the intellect and deepens connection with higher truth.',
      howToApproach: [
        'Read scriptures daily with focus.',
        'Chant verses aloud with devotion.',
        'Reflect and apply wisdom to life.'
      ],
      benefits: [
        'Expands knowledge and inner clarity.',
        'Strengthens values and self-discipline.',
        'Connects the seeker with a timeless tradition.'
      ],
      caution: 'Do not let study become mere debate or ego play. Its purpose is transformation, not pride.',
      reflection: 'Swadhyay is a mirror—it reflects your inner Self back to you.'
    },
    'puja-path': {
      title: 'Puja-Path',
      subtitle: 'Worship & Rituals',
      what: 'Puja means worship, Path means chanting/recitation. Together, they are devotional practices where the heart offers itself to the Divine.',
      philosophicalRoots: 'The Vedic tradition emphasizes ritual worship as a way to purify the heart and invite divine presence. Puja symbolizes outer offering; Path strengthens inner devotion.',
      howToApproach: [
        'Begin with cleanliness and preparation.',
        'Light a lamp, offer flowers, incense, and food.',
        'Chant mantras or stotras with reverence.',
        'Conclude with silence and gratitude.'
      ],
      benefits: [
        'Creates sacred atmosphere.',
        'Connects daily life with divine remembrance.',
        'Purifies emotions and deepens bhakti.'
      ],
      caution: 'Ritual without feeling becomes mechanical. True Puja is heart\'s offering, not just hand\'s work.',
      reflection: 'Every flower, every chant, is a symbol of surrender.'
    },
    'teerth-yatra': {
      title: 'Yatra',
      subtitle: 'Pilgrimage or Spiritual Journey',
      what: 'Yatra means traveling to holy places with devotion. It is both an outer and inner journey — walking towards sacredness outside and awakening it within.',
      philosophicalRoots: 'Scriptures describe Teerth Yatra as a purifier of karma. It takes the seeker away from daily routines and fills them with divine energy.',
      howToApproach: [
        'Prepare with simplicity and humility.',
        'Travel with devotion, not tourism.',
        'Let each step be an offering, each darshan a blessing.'
      ],
      benefits: [
        'Breaks worldly attachments.',
        'Infuses inspiration and bhakti.',
        'Strengthens community and shared spirituality.'
      ],
      caution: 'Pilgrimage loses meaning if done only for show or comfort. Its power lies in humility and devotion.',
      reflection: 'The true pilgrimage ends not at the temple, but in the heart where the Divine resides.'
    }
  };

  const course = courseData[slug || ''];

  if (!course) {
    return (
      <div className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto container-padding text-center py-20">
          <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            to="/courses"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${course.title} - Other Courses | Pragya Trust`}
        description={course.what.substring(0, 160)}
        url={`https://pragyatrust.com/courses/other/${slug}`}
      />

      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-ochre-500">Courses</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">{course.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Link
              to="/courses"
              className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Courses
            </Link>

            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-ochre-500 font-medium mb-6">
              {course.subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-12">
              {/* What is */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  What is {course.title}?
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {course.what}
                </p>
              </div>

              {/* Philosophical Roots */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Philosophical Roots
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {course.philosophicalRoots}
                </p>
              </div>

              {/* How to Approach */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  How to {course.title === 'Sahajawastha' ? 'Approach It' : 'Practice'}
                </h2>
                <ul className="space-y-3">
                  {course.howToApproach.map((step: string, index: number) => (
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
                  {course.benefits.map((benefit: string, index: number) => (
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
                  {course.caution}
                </p>
              </div>

              {/* Reflection */}
              <div className="bg-ochre-50 border-l-4 border-ochre-500 p-8 rounded-xl">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Reflection
                </h3>
                <p className="text-body text-gray-900 leading-relaxed italic">
                  {course.reflection}
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
                to="/courses"
                className="btn-outline inline-flex items-center"
              >
                <ArrowLeft className="mr-2" size={20} />
                All Courses
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

export default OtherCourseDetail;
