import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Clock, Star } from 'lucide-react';
import SEO from '../components/Common/SEO';

const VedanticTextDetail: React.FC = () => {
  const { slug } = useParams();

  const textData: { [key: string]: any } = {
    'viveka-chudamani': {
      title: 'Viveka Chudamani',
      subtitle: 'The Crest Jewel of Discrimination',
      about: 'Composed by Adi Shankaracharya, Viveka Chudamani is one of the most celebrated texts of Vedanta. It is considered the "crown jewel" of spiritual inquiry, guiding the seeker to discriminate between the eternal and the ephemeral.',
      keyTeachings: [
        'Distinguishing the Self (Atman) from the body, mind, and senses.',
        'The qualifications of a true aspirant — viveka (discrimination), vairagya (dispassion), shatsampatti (discipline), and mumukshutva (desire for liberation).',
        'The Guru-disciple dialogue that illuminates the path to Self-realization.'
      ],
      whyUseful: 'This course helps seekers understand the very foundation of spiritual practice: knowing what is real and lasting, and what is transient. It clears confusion and sets the ground for advanced study.',
      benefits: [
        'Clear framework for self-inquiry.',
        'Practical guidance for daily detachment and focus.',
        'A timeless manual for inner clarity and liberation.'
      ]
    },
    'sanskrit-class': {
      title: 'Sanskrit Class',
      subtitle: 'Language of the Scriptures',
      about: 'Sanskrit is the mother tongue of most Indian scriptures, including the Vedas, Upanishads, and commentaries of Vedanta. A basic grounding in Sanskrit opens the door to unfiltered wisdom.',
      keyTeachings: [
        'Learning alphabets, pronunciation, and script.',
        'Introduction to grammar, sandhi (word-joining), and basic sentence formation.',
        'Reading simple verses from Vedantic texts.'
      ],
      whyUseful: 'Translations often miss subtle meanings. Sanskrit study empowers the seeker to directly grasp the authentic spirit of the teachings, cultivating a deeper bond with tradition.',
      benefits: [
        'Independent understanding of scriptures.',
        'Enhanced clarity in chanting and mantra practice.',
        'Foundation for lifelong scriptural study.'
      ]
    },
    'tattva-bodh': {
      title: 'Tattva Bodh',
      subtitle: 'Knowledge of the Truth',
      about: 'Authored by Adi Shankaracharya, Tattva Bodh is a short yet powerful introductory text in Vedanta. It lays out the basic categories of Vedantic knowledge in a systematic way.',
      keyTeachings: [
        'Explanation of the Atman (Self) and Anatman (non-Self).',
        'The three bodies (gross, subtle, causal) and five sheaths (pancha kosha).',
        'The meaning of Moksha (liberation) and the role of self-knowledge.'
      ],
      whyUseful: 'This course is a perfect entry point for beginners. It simplifies complex spiritual concepts and gives seekers a solid foundation before moving to advanced texts.',
      benefits: [
        'A clear roadmap of Vedanta.',
        'Essential terminology for deeper study.',
        'Practical clarity on what liberation means.'
      ]
    },
    'sadhana-panchakam': {
      title: 'Sadhana Panchakam',
      subtitle: 'Forty Verses on Practice',
      about: 'In Sadhana Panchakam, Adi Shankaracharya gives 40 concise instructions for living a life aligned with Vedanta. These verses are like a manual for daily discipline.',
      keyTeachings: [
        'The importance of study (svadhyaya) and satsang (company of the wise).',
        'Cultivating virtues like self-control, humility, and devotion.',
        'Guidance on meditation, renunciation, and living a purposeful life.'
      ],
      whyUseful: 'While other texts describe the ultimate truth, Sadhana Panchakam tells us how to live every day in alignment with that truth. It is practical, structured, and universally applicable.',
      benefits: [
        'Daily-life guidance for spiritual growth.',
        'Integration of study, devotion, and meditation.',
        'A step-by-step lifestyle framework for seekers.'
      ]
    },
    'drig-drishya-vivek': {
      title: 'Drig-Drishya Vivek',
      subtitle: 'The Seer and the Seen',
      about: 'Attributed to Adi Shankaracharya, Drig-Drishya Vivek explores the nature of perception and consciousness through a systematic inquiry into the relationship between the observer (Drig) and the observed (Drishya).',
      keyTeachings: [
        'The seer (consciousness) is permanent, while the seen (objects, body, mind) is impermanent.',
        'Disentangling identity from thoughts and sensations.',
        'Steps toward realizing the Self as pure witness.'
      ],
      whyUseful: 'This course provides a simple yet profound method for meditation and inquiry. By constantly reflecting on the distinction between seer and seen, seekers move toward pure awareness.',
      benefits: [
        'Practical tool for meditation.',
        'Direct approach to Self-realization.',
        'Helps reduce attachment and mental restlessness.'
      ]
    },
    'darshan-sarvasvam': {
      title: 'Darshan Sarvasvam',
      subtitle: 'The Essence of Philosophies',
      about: 'Darshan Sarvasvam is a comprehensive summary of the major philosophical schools of India, presenting their core arguments and Vedantic standpoint.',
      keyTeachings: [
        'Overview of different schools (Nyaya, Sankhya, Yoga, Mimamsa, Buddhism, etc.).',
        'The strengths and limitations of each system.',
        'The ultimate conclusion of Vedanta as the harmonizing vision.'
      ],
      whyUseful: 'For seekers who want context, this course is invaluable. It shows the intellectual landscape of Indian philosophy and highlights why Vedanta holds a unique, non-dual perspective.',
      benefits: [
        'Broader understanding of Indian philosophy.',
        'Intellectual clarity on different views of truth.',
        'Deeper appreciation of Vedanta\'s supremacy.'
      ]
    },
    'siddhanta-lesha-sangraha': {
      title: 'Siddhanta Lesha Sangraha',
      subtitle: 'Compendium of Doctrines',
      about: 'Written by Appayya Dikshita, this text is a profound survey of Vedantic commentaries and doctrines. It explores subtle differences among Advaita Vedanta teachers.',
      keyTeachings: [
        'Differences in interpretations of Maya, Brahman, and liberation.',
        'Exploration of various sub-schools of Advaita Vedanta.',
        'A critical look at how commentaries shape understanding.'
      ],
      whyUseful: 'This course is for advanced seekers who want depth beyond introductory texts. It refines the seeker\'s knowledge and deepens intellectual conviction in Advaita.',
      benefits: [
        'Clarity on subtle doctrinal issues.',
        'Richer appreciation for Advaita tradition.',
        'Strengthened philosophical foundation for higher contemplation.'
      ]
    }
  };

  const text = textData[slug || ''];

  if (!text) {
    return (
      <div className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto container-padding text-center py-20">
          <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">Text Not Found</h1>
          <p className="text-gray-600 mb-8">The text you're looking for doesn't exist.</p>
          <Link
            to="/resources"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${text.title} - Vedantic Texts | Pragya Trust`}
        description={text.about.substring(0, 160)}
        url={`https://pragyatrust.com/resources/vedantic-texts/${slug}`}
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <Link to="/resources" className="hover:text-ochre-500">Resources</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">{text.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Link
              to="/resources"
              className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Resources
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mr-6">
                <BookOpen size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  {text.title}
                </h1>
                <p className="text-xl text-ochre-500 font-medium">
                  {text.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-12">
              {/* About the Text */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  About the Text
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {text.about}
                </p>
              </div>

              {/* Key Teachings */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Key Teachings
                </h2>
                <ul className="space-y-3">
                  {text.keyTeachings.map((teaching: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-body text-gray-900">{teaching}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Useful */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Why It's Useful
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {text.whyUseful}
                </p>
              </div>

              {/* Course Benefits */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Course Benefits
                </h2>
                <ul className="space-y-3">
                  {text.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-body text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-ochre-50 rounded-xl p-8 text-center">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Interested in This Text?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us to learn more about studying this profound text and joining our learning community.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get in Touch
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

export default VedanticTextDetail;