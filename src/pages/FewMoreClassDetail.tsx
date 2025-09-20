import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/Common/SEO';

const FewMoreClassDetail: React.FC = () => {
  const { slug } = useParams();

  const classData: { [key: string]: any } = {
    'asparsha-yoga': {
      title: 'Asparsha Yoga',
      subtitle: 'The Path Beyond Contact',
      introduction: 'Asparsha Yoga means "Yoga without touch" — a way of spiritual practice that is free from the disturbances of mental grasping, personal ambition, and the endless push-and-pull of desire and aversion. It is a yoga where the seeker no longer clings to the thought, "I am doing sādhanā to get something."',
      description: 'In most forms of practice, there is still a hidden "I" — I am the seeker, I am meditating, I will attain. This subtle ego, even when refined, keeps the mind in contact with the idea of "me" and "my progress." Asparsha Yoga points beyond this. Here, the emphasis is not on the external actions alone — chanting, rituals, techniques — but on a radical inner shift: the dissolution of the sense of doership.',
      keyPrinciples: [
        'Freedom from grasping: The practice is not driven by the craving for results. Even spiritual achievements are seen as distractions if they feed the "I" sense.',
        'Clarity over emotionalism: True sādhanā is rooted in realism — a clear understanding of what transforms the mind, not in temporary inspiration or imitation of others.',
        'Continuous awareness: It is not limited to certain hours of meditation. The practitioner remains in the awareness of the Self throughout daily life.',
        'Beyond outer show: Methods and appearances are not the essence; the heart of the path is direct knowledge of the Self (Ātma-sākṣātkāra).',
        'Guru\'s role: The guidance of a realised teacher is essential — not as an external controller, but as one who points you to your own inner knowing.'
      ],
      conclusion: 'In Asparsha Yoga, the mind gradually releases its hold on personal identity. Individuality loses its grip, and the yogi rests in the infinite, where there is no "other" to be touched, no separation to be bridged. This is not a path of escape from life, but a path of deep living — where awareness infuses every moment, and the play of the world is seen without entanglement. Asparsha Yoga is both subtle and powerful: subtle because it works inwardly without noise, and powerful because it transforms the very foundation of how we experience existence.',
      hasCourseOptions: true,
      courseOptions: [
        {
          title: '1 Day Course',
          description: 'Introduction to Asparsha Yoga principles',
          link: 'https://www.youtube.com/watch?v=4OAqJqDzQl4',
          external: true
        },
        {
          title: '3 Day Course',
          description: 'Deeper exploration of the practice',
          link: '/courses/few-more/asparsha-yoga/3-day',
          external: false
        },
        {
          title: '7 Day Course',
          description: 'Intensive immersion program',
          link: '/courses/few-more/asparsha-yoga/7-day',
          external: false
        }
      ]
    },
    'vedanta': {
      title: 'Vedānta',
      subtitle: 'Coming Closer to the Essence of Knowing',
      introduction: 'The word Vedānta is made of two parts: Veda and anta. In one meaning, Veda means "knowledge" and anta means "end" — so Vedānta is "the end of knowledge," the highest and final wisdom. In another meaning, Veda means "knowledge" and anta means "essence" or "final decision" — the deepest truth that knowledge reveals.',
      description: 'But at Pragya Trust, we focus on a third and even more beautiful meaning. In this meaning: Veda does not mean ordinary knowledge — like facts, information, or book learning. It means pure Knowingness itself, the very awareness by which all things are known. This pure Knowingness is another name for Brahman — the infinite, formless, unchanging reality. Anta here means "near" — as in coming closer to something, or moving towards it.',
      keyPrinciples: [
        'So, Vedānta means "that which brings you nearer to pure Knowingness itself." It is the path, the subject, and the inner practice that draws you toward the direct experience of truth — not just thinking about it, but living it.',
        'In this way, Vedānta is not just a subject to study like science, history, or philosophy. Those may add to your information, but they do not necessarily transform you.',
        'Vedānta, when approached in this way, changes the one who studies it. It refines the mind, purifies the heart, and leads to a deeper understanding of yourself and the world.',
        'It is both the map and the journey — showing you the direction toward the Self, and also preparing you to walk that path.'
      ],
      workingThrough: [
        'Scripture — sacred texts that point to truth.',
        'Contemplation — thinking deeply about what is heard.',
        'Direct Experience — stabilizing in the awareness of the Self.'
      ],
      conclusion: 'Under the guidance of a teacher, Vedānta becomes a living connection between the seeker and the ultimate reality. It is a process of coming home — to your own nature as pure awareness.',
      hasCourseOptions: false
    },
    'yoga': {
      title: 'Yoga',
      subtitle: 'Union with the Self',
      introduction: 'Yoga is not merely physical exercise; it is the art and science of uniting the individual self with the universal Self. Rooted in ancient wisdom, Yoga integrates body, breath, mind, and spirit into one harmonious flow. At Pragya Trust, Yoga is taught as a pathway of awareness and transformation, not just as postures.',
      whatIsYoga: 'The word Yoga means "union." It signifies the dissolving of separation — between body and mind, between the inner and outer, between the seeker and the sought. Through Yoga, one discovers balance, clarity, and inner stillness.',
      dimensions: [
        'Asana (Posture Practice): Cultivates strength, flexibility, and steadiness of body.',
        'Pranayama (Breath Awareness): Balances energy and quietens the restless mind.',
        'Dhyana (Meditation): Leads the practitioner into stillness and Self-awareness.',
        'Bhakti Yoga (Devotion): Melts the ego in love and surrender to the Divine.',
        'Jnana Yoga (Wisdom): Inquiry into the nature of Self through study and reflection.',
        'Karma Yoga (Action): Acting with selflessness, turning daily life into a practice of offering.'
      ],
      whyPractice: [
        'To release stress and restore inner calm.',
        'To strengthen the body and purify the mind.',
        'To live with awareness, rather than in distraction.',
        'To recognize the Self that is beyond body and thought.'
      ],
      atPragyaTrust: 'Our approach to Yoga is holistic. Classes and teachings focus not just on the external posture but on the deeper posture of the heart and mind. The purpose is transformation, not performance. Students are encouraged to integrate Yoga into their daily routine so that practice flows into life naturally.',
      benefits: [
        'A healthier, more energized body.',
        'Emotional balance and resilience.',
        'Greater focus and clarity in thought.',
        'A deep sense of peace and spiritual connection.'
      ],
      conclusion: 'Yoga is the bridge that connects the human to the divine, the restless to the still, the seeker to the Self. By walking this path, one does not become someone new but realizes who one has always truly been.',
      hasCourseOptions: false
    },
    'tantra-agama': {
      title: 'Tantra Āgama',
      subtitle: 'The Path of Sacred Knowledge',
      introduction: 'The word Tantra means "to expand" and Āgama means "that which has come down." Together, Tantra Āgama refers to the sacred body of knowledge handed down from the ancient seers, guiding seekers in both external worship and inner realization. Unlike the common misconceptions that reduce Tantra to rituals alone, true Tantra Āgama is a complete spiritual science — integrating mantra, meditation, energy practices, and devotion.',
      whatIs: 'Tantra Āgamas are scriptures revealed through the wisdom of enlightened masters. They provide practical methods to connect with the Divine, harmonize inner energies, and awaken higher states of consciousness. These teachings are not limited to philosophy but are deeply experiential, designed to transform daily life into sacred practice.',
      dimensions: [
        'Mantra: The use of sacred sound vibrations to purify the mind and invoke higher states.',
        'Yantra: Geometrical diagrams that serve as tools of meditation, focusing the seeker\'s mind.',
        'Puja & Rituals: External worship that gradually leads to internalized devotion and awareness.',
        'Dhyana (Meditation): Direct practices to still the mind and rest in pure consciousness.',
        'Guru-Śiṣya Tradition: Transmission of knowledge through living guidance, ensuring authenticity.'
      ],
      whyStudy: [
        'It bridges philosophy with practice.',
        'It transforms ordinary actions into sacred acts.',
        'It awakens deeper sensitivity to energy and consciousness.',
        'It provides seekers with both external practices (puja, mantra, rituals) and internal practices (meditation, contemplation).'
      ],
      atPragyaTrust: 'At Pragya Trust, Tantra Āgama is shared as a living tradition — not as superstition, but as an integrated pathway of wisdom. The teachings help students understand the symbolic depth of rituals, while also guiding them to experience the essence of meditation and awareness.',
      benefits: [
        'Clarity about spiritual practices and their true meaning.',
        'Inner discipline and alignment with the sacred.',
        'Transformation of fear and confusion into devotion and awareness.',
        'A direct path toward realization of the Self.'
      ],
      conclusion: 'Tantra Āgama is not about external complexity but about inner simplicity. It teaches that every mantra, every symbol, every ritual points back to the same truth — the Divine within. To walk the path of Tantra Āgama is to allow knowledge to descend into the heart, where it becomes lived realization.',
      hasCourseOptions: false
    }
  };

  const classInfo = classData[slug || ''];

  if (!classInfo) {
    return (
      <div className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto container-padding text-center py-20">
          <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">Class Not Found</h1>
          <p className="text-gray-600 mb-8">The class you're looking for doesn't exist.</p>
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
        title={`${classInfo.title} - Few More Classes | Pragya Trust`}
        description={classInfo.introduction.substring(0, 160)}
        url={`https://pragyatrust.com/courses/few-more/${slug}`}
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
              <span className="text-navy-500 font-medium">{classInfo.title}</span>
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
              {classInfo.title}
            </h1>
            <p className="text-xl text-ochre-500 font-medium mb-6">
              {classInfo.subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Introduction
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  {classInfo.introduction}
                </p>
              </div>

              {/* What is (for specific classes) */}
              {classInfo.whatIsYoga && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    What is Yoga?
                  </h2>
                  <p className="text-body text-gray-900 leading-relaxed">
                    {classInfo.whatIsYoga}
                  </p>
                </div>
              )}

              {classInfo.whatIs && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    What is Tantra Āgama?
                  </h2>
                  <p className="text-body text-gray-900 leading-relaxed">
                    {classInfo.whatIs}
                  </p>
                </div>
              )}

              {/* Description */}
              {classInfo.description && (
                <div className="card p-8">
                  <p className="text-body text-gray-900 leading-relaxed">
                    {classInfo.description}
                  </p>
                </div>
              )}

              {/* Key Principles */}
              {classInfo.keyPrinciples && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    Key Principles
                  </h2>
                  <ul className="space-y-4">
                    {classInfo.keyPrinciples.map((principle: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dimensions */}
              {classInfo.dimensions && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    {classInfo.title === 'Yoga' ? 'Dimensions of Yoga' : 'Dimensions of Tantra Āgama'}
                  </h2>
                  <ul className="space-y-3">
                    {classInfo.dimensions.map((dimension: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{dimension}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Working Through (for Vedanta) */}
              {classInfo.workingThrough && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    It works through:
                  </h2>
                  <ul className="space-y-3">
                    {classInfo.workingThrough.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Practice/Study */}
              {classInfo.whyPractice && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    Why Practice Yoga?
                  </h2>
                  <ul className="space-y-3">
                    {classInfo.whyPractice.map((reason: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {classInfo.whyStudy && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    Why Study Tantra Āgama?
                  </h2>
                  <ul className="space-y-3">
                    {classInfo.whyStudy.map((reason: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* At Pragya Trust */}
              {classInfo.atPragyaTrust && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    {classInfo.title} at Pragya Trust
                  </h2>
                  <p className="text-body text-gray-900 leading-relaxed">
                    {classInfo.atPragyaTrust}
                  </p>
                </div>
              )}

              {/* Benefits */}
              {classInfo.benefits && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    Benefits of {classInfo.title}
                  </h2>
                  <ul className="space-y-3">
                    {classInfo.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conclusion */}
              <div className="bg-ochre-50 border-l-4 border-ochre-500 p-8 rounded-xl">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Conclusion
                </h3>
                <p className="text-body text-gray-900 leading-relaxed">
                  {classInfo.conclusion}
                </p>
              </div>

              {/* Course Options (for Asparsha Yoga) */}
              {classInfo.hasCourseOptions && (
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                    Course Options
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {classInfo.courseOptions.map((option: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                        <h4 className="text-h3 font-heading font-semibold text-navy-500 mb-3">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {option.description}
                        </p>
                        {option.external ? (
                          <a
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center"
                          >
                            Watch Now
                            <ExternalLink className="ml-2" size={16} />
                          </a>
                        ) : (
                          <Link
                            to={option.link}
                            className="btn-outline"
                          >
                            Coming Soon
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

export default FewMoreClassDetail;