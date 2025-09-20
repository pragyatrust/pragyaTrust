import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, BookOpen, Youtube } from 'lucide-react';
import SEO from '../components/Common/SEO';

const CourseDetail: React.FC = () => {
  const { slug } = useParams();

  // Course data
  const courseData: { [key: string]: any } = {
    'drg-drsya-viveka': {
      title: 'Dṛg-Dṛśya-Viveka',
      subtitle: 'The Discrimination between the Seer and the Seen',
      type: 'upcoming',
      description: `Dṛg-Dṛśya-Viveka is a short but profoundly powerful text of Advaita Vedānta, traditionally attributed to Vidyāraṇya Svāmī. In just 46 ślokas, it systematically unfolds a method of inner enquiry: separating the "Seer" (dṛg) from the "Seen" (dṛśya) until the ultimate Witness (sākṣī)—the Self—is recognized as distinct from all that is perceived.

The text is not merely philosophical; it is a practical manual for direct Self-inquiry, combining sharp logical reasoning with meditative contemplation. By training the mind to discriminate between the changing objects of experience and the changeless Subject, the student is led to recognize their own true nature as pure Consciousness.`,
      whyStudy: `In our daily life, the Seer-Seen confusion is the root of ignorance (avidyā). We identify with body, senses, and mind—the "seen"—and forget the Self, the eternal Witness. Dṛg-Dṛśya-Viveka dismantles this confusion through:

1. Direct Inquiry: Leading from gross-level discrimination (eye vs. objects) to subtle-level discrimination (mind vs. awareness).
2. Experiential Practice: Encouraging nididhyāsana—deep meditation—to abide as the Witness.
3. Integration: Showing how to apply the Seer-Seen discrimination in every state of experience—waking, dream, and deep sleep.`,
      objectives: [
        'Define dṛg (Seer) and dṛśya (Seen) according to Advaita Vedānta.',
        'Practice discrimination at various levels—from physical perception to subtle mental processes.',
        'Recognize the Witness-Consciousness (sākṣī) as separate from body, senses, and mind.',
        'Understand the role of māyā in creating the appearance of duality.',
        'Apply the insights in daily life for detachment and inner freedom.'
      ],
      courseFlow: [
        'Foundation Concepts: Seer-Seen distinction, epistemological background.',
        'Outer Discrimination: Eye and objects, senses and their fields.',
        'Inner Discrimination: Mind as seen, Witness as Seer.',
        'Nature of the Witness: Changeless, self-luminous, beyond time and space.',
        'Role of Māyā: How ignorance superimposes the unreal on the real.',
        'Abidance in the Self: Meditative absorption and liberation.'
      ],
      prerequisites: 'A sincere interest in Vedānta and Self-inquiry. Familiarity with basic Vedāntic terms like ātman, brahman, māyā, and viveka is helpful but not mandatory. An open mind willing to contemplate deeply.',
      outcome: 'Upon completion, students will not only understand Dṛg-Dṛśya-Viveka intellectually but also gain practical tools for direct Self-realization, making this text a bridge from philosophical study to lived spiritual experience.',
      duration: '8-10 weeks',
      level: 'Intermediate',
      hasYoutube: false
    },
    'darsana-sarvasvam': {
      title: 'Darśana Sarvasvam',
      subtitle: 'A Study of Four Types of Non-Duality',
      type: 'upcoming',
      description: `Darśana Sarvasvam, authored by Swami Shri Shankar Chaitanya Bharati Ji, is a unique and profound Sanskrit treatise that systematically investigates the fundamental nature of reality through the lens of four distinct types of non-duality. This work is organized into four comprehensive chapters, each dedicated to one major non-dual philosophical viewpoint:

1. Vijñānavāda (Idealistic Consciousness Doctrine)
2. Śūnyavāda (Doctrine of Emptiness)
3. Svatantravāda (Independent Reality Doctrine)
4. Vivartavāda (Illusory Appearance Doctrine — Advaita Vedānta)`,
      whyStudy: `The core subject matter of Darśana Sarvasvam is the meticulous examination and critical analysis of these four non-dual perspectives, which represent major streams of Indian philosophical thought, especially in Buddhist and Vedāntic traditions. Each chapter presents:

• The foundational principles of the respective doctrine.
• Logical and scriptural scrutiny of its claims.
• Comparative evaluation against rival philosophies.
• The text's ultimate positioning of Advaita Vedānta's Vivartavāda as the definitive understanding of non-duality.

Understanding these four non-dual doctrines in depth equips the student with:
• A panoramic vision of how Indian philosophy addresses the mystery of reality and selfhood.
• Critical thinking skills to discern subtle differences between related metaphysical views.
• Insight into how Darśana Sarvasvam defends Advaita Vedānta's unique stance amid competing worldviews.
• Practical wisdom to deepen one's own inquiry into the nature of the Self and liberation.`,
      objectives: [
        'Gain a clear grasp of Vijñānavāda, Śūnyavāda, Svatantravāda, and Vivartavāda philosophies.',
        'Analyze the strengths and limitations of each non-dual view.',
        'Understand the methodology employed by Darśana Sarvasvam in dialectical reasoning and scriptural interpretation.',
        'Appreciate the integrative and transcendental nature of Advaita Vedānta as presented in the text.'
      ],
      courseFlow: [
        'Chapter 1: Vijñānavāda — Consciousness as the sole reality',
        'Chapter 2: Śūnyavāda — The emptiness of all phenomena',
        'Chapter 3: Svatantravāda — Reality as diverse yet unified',
        'Chapter 4: Vivartavāda — The illusory world and the non-dual Brahman'
      ],
      prerequisites: 'Familiarity with basic Indian philosophical concepts is recommended but not mandatory. Openness to philosophical dialogue and meditative inquiry.',
      outcome: 'Upon completion, students will have a solid philosophical foundation in classical non-dual doctrines and an enriched perspective on Advaita Vedānta\'s approach to ultimate reality as presented by Swami Shri Shankar Chaitanya Bharati Ji in Darśana Sarvasvam. This course serves as both an academic and spiritual journey toward understanding non-duality in its multifaceted dimensions.',
      duration: '12-14 weeks',
      level: 'Advanced',
      hasYoutube: false
    },
    'siddhanta-lesha-sangraha': {
      title: 'Siddhānta Leśha Saṅgraha',
      subtitle: 'Collection of Doctrinal Glosses',
      type: 'upcoming',
      description: `Siddhānta Leśha Saṅgraha is a concise yet profound compilation of key doctrinal points (leśha means "gloss" or "touch") that serve as clarifications and essential insights within the classical Advaita Vedānta tradition. This work functions as a precise digest highlighting nuanced interpretations and critical distinctions across major Vedāntic teachings and philosophical debates.

Designed to sharpen the student's understanding of intricate doctrinal subtleties, Siddhānta Leśha Saṅgraha bridges the gap between terse aphorisms (sūtras) and their expansive commentaries, offering distilled wisdom to aid advanced study and spiritual reflection.`,
      whyStudy: `• To gain mastery over essential Advaitic doctrines in a compact format.
• To understand the fine distinctions that resolve apparent contradictions in Vedāntic literature.
• To develop clarity on complex metaphysical concepts through focused doctrinal glosses.
• To enhance one's ability to engage in informed philosophical debate and contemplative practice.`,
      objectives: [
        'Identify and explain critical doctrinal points within Advaita Vedānta.',
        'Appreciate the subtle nuances that differentiate related Vedāntic concepts.',
        'Employ these glosses as tools for deeper scriptural interpretation and self-inquiry.',
        'Integrate doctrinal clarity into contemplative and teaching practices.'
      ],
      courseFlow: [
        'Introduction to Siddhānta Leśha – Definition, purpose, and context within Vedānta.',
        'Major Doctrinal Themes – Analysis of key glosses on Brahman, Ātman, Māyā, and Mokṣa.',
        'Resolving Doctrinal Tensions – How glosses clarify ambiguous or debated points.',
        'Application in Philosophy and Practice – Using doctrinal precision in study and meditation.'
      ],
      prerequisites: 'Prior familiarity with Advaita Vedānta basics is recommended. Willingness to engage with precise philosophical language and concepts.',
      outcome: 'Students completing this course will hold a refined understanding of essential Vedāntic doctrines, empowering them to both deepen their personal spiritual practice and contribute meaningfully to scholarly discourse.',
      duration: '6-8 weeks',
      level: 'Advanced',
      hasYoutube: false
    },
    'viveka-chudamani': {
      title: 'Viveka Chudamani',
      subtitle: 'The Crest Jewel of Discrimination',
      type: 'previous',
      description: `विवेक चूड़ामणि, meaning "The Crest Jewel of Discrimination," is a seminal Advaita Vedānta text attributed to Adi Shankaracharya. It is revered for its profound exposition of the path to Self-realization through rigorous discrimination between the real (Brahman) and the unreal (the world and the ego).

This course offers a deep and systematic study of the Viveka Chudamani, focusing on:

• The nature of the self (Ātman) and its distinction from the body, mind, and intellect.
• The central role of viveka (discrimination) and vairāgya (dispassion) in spiritual practice.
• The methods of self-inquiry and meditation leading to the dissolution of ignorance (avidyā).
• The description of the qualities of a realized sage (jñāni) and the signs of awakening.
• The detailed commentary on key verses to clarify subtle philosophical points.`,
      whyStudy: `Course Features:

• Verse-by-verse explanation with emphasis on Sanskrit grammar and meaning.
• Integration of classical commentaries to enrich understanding.
• Practical guidance on applying the teachings to daily spiritual practice.
• Interactive discussions to resolve doubts and deepen insight.`,
      objectives: [
        'Develop refined ability to discriminate the real from the unreal',
        'Understand the spiritual path outlined by Advaita Vedānta',
        'Learn practical application of discrimination in daily life',
        'Gain insight into the nature of the Self and liberation'
      ],
      courseFlow: [
        'Introduction to Viveka Chudamani and its significance',
        'Study of key verses on discrimination and dispassion',
        'Analysis of the nature of the Self vs. the not-Self',
        'Methods of self-inquiry and meditation',
        'Qualities of the realized sage and signs of awakening'
      ],
      prerequisites: 'Basic understanding of Vedantic concepts helpful but not required',
      outcome: 'By the end of this course, students will have developed a refined ability to discriminate the real from the unreal and a clear understanding of the spiritual path outlined by one of Advaita Vedānta\'s greatest texts, empowering them to advance steadily toward liberation (moksha).',
      duration: 'Completed',
      level: 'Intermediate',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I2YB3oBBesI05S7KVXU4W6s'
    },
    'sadhana-panchakam': {
      title: 'Sādhana Pañcakam',
      subtitle: 'Five Verses on Spiritual Practice',
      type: 'previous',
      description: `Sādhana Pañcakam, composed by Ādi Śaṅkarācārya, is a concise yet profound manual of spiritual practice consisting of just five verses, each packed with transformative instructions for the aspirant. These fifty directives guide the seeker from the fundamentals of disciplined living to the highest realization of the Self.`,
      whyStudy: `In this course, we will:

• Study each verse in depth, understanding its literal meaning, implied meaning, and practical application in daily life.
• Explore the Vedāntic foundation behind each instruction, drawing from traditional commentaries and the living tradition of teachers.
• Learn how the text integrates karma-yoga, upāsanā, śravaṇa-manana-nididhyāsana, and direct abidance in the Self.
• Examine the progressive structure of the instructions, from outer disciplines (yamas, niyamas) to subtle inner sādhanās.
• Discuss modern-day applications of these timeless teachings, ensuring they are not merely understood but lived.`,
      objectives: [
        'Understand the five verses and their practical applications',
        'Learn to integrate spiritual practice into daily life',
        'Develop disciplined spiritual living',
        'Progress from outer disciplines to inner practices'
      ],
      courseFlow: [
        'Introduction to Sādhana Pañcakam',
        'Verse-by-verse study and analysis',
        'Practical application exercises',
        'Integration of teachings into daily practice'
      ],
      prerequisites: 'Sincere interest in spiritual practice',
      outcome: 'Students will gain practical tools for spiritual development and learn to apply ancient wisdom in contemporary life.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I3YB3oBBesI05S7KVXU4W6s'
    },
    'tattvabodha': {
      title: 'Tattvabodha',
      subtitle: 'Knowledge of Reality',
      type: 'previous',
      description: `तत्वबोध is a foundational Vedānta text authored by Adi Shankaracharya, designed to introduce seekers to the essential principles of Advaita Vedānta in a concise and accessible manner. Through clear definitions and straightforward explanations, it awakens the aspirant's understanding of the ultimate reality (Brahman), the self (Ātman), and the nature of the world (Jagat).`,
      whyStudy: `In this course, we will:

• Explore the fundamental concepts of Advaita Vedānta as presented in Tattvabodha, including the nature of reality, the illusory world, and the individual self.
• Study the Sanskrit verses with detailed word-by-word meanings, grammatical analysis, and philosophical commentary.
• Understand the distinctions and non-distinctions between the self and Brahman, and how ignorance (avidyā) creates apparent duality.
• Learn about the methods of spiritual inquiry recommended in the text, such as discrimination (viveka) and dispassion (vairāgya).
• Discuss practical insights for applying Vedantic wisdom in daily life and meditation.

Course Highlights:
• Stepwise guided study making complex concepts approachable.
• Integration of traditional commentary to deepen comprehension.
• Opportunities for questions, reflection, and experiential understanding.`,
      objectives: [
        'Gain solid grounding in Vedantic philosophy',
        'Understand the nature of reality, self, and world',
        'Learn methods of spiritual inquiry',
        'Apply Vedantic wisdom in daily life'
      ],
      courseFlow: [
        'Introduction to Advaita Vedānta principles',
        'Study of fundamental concepts and definitions',
        'Analysis of the nature of Brahman and Ātman',
        'Understanding ignorance and its removal'
      ],
      prerequisites: 'None - suitable for beginners',
      outcome: 'By completing this course, students will gain a solid grounding in Vedantic philosophy and a clear understanding of their true nature, empowering their spiritual journey toward Self-realization.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I1YB3oBBesI05S7KVXU4W6s'
    },
    'sanskrit-class': {
      title: 'Sanskrit Class',
      subtitle: 'शतश्लोकेन पण्डितः',
      type: 'previous',
      description: `The "शतश्लोकेन पण्डितः" approach is a focused and practical method designed to help students develop the ability to parse Sanskrit ślokas and understand their meanings independently, using dictionaries and available linguistic tools.`,
      whyStudy: `In this course, we will:

• Learn to parse and analyse Sanskrit verses step-by-step, identifying grammatical structures, sandhi, samāsa, and key vocabulary.
• Master the use of Sanskrit dictionaries—both online and offline—along with other reliable resources for reference.
• Focus on understanding simpler Sanskrit, which forms the language of most traditional texts used in our study.
• Build confidence in approaching Sanskrit texts without constant reliance on translations.

Course Duration:
The course will be completed in approximately 25–30 hours, spread across multiple days for steady learning and practice.

Learning Platform:
To ensure deep engagement and genuine learning, recordings will not be posted publicly on YouTube. Instead, all recorded sessions will be securely hosted on a dedicated platform and made available on request to enrolled participants.`,
      objectives: [
        'Learn to parse Sanskrit verses independently',
        'Master use of Sanskrit dictionaries and resources',
        'Build confidence in reading Sanskrit texts',
        'Develop practical Sanskrit skills for spiritual study'
      ],
      courseFlow: [
        'Introduction to Sanskrit grammar basics',
        'Learning to use dictionaries and resources',
        'Practice with simple verses',
        'Progressive complexity in parsing'
      ],
      prerequisites: 'Interest in learning Sanskrit',
      outcome: 'By the end of this course, students will not only have learnt 100 verses but will also have acquired the skills and self-reliance needed to explore Sanskrit literature with understanding and appreciation.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I0YB3oBBesI05S7KVXU4W6s'
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
        title={`${course.title} - Pragya Trust Courses`}
        description={course.description.substring(0, 160)}
        url={`https://pragyatrust.com/courses/${slug}`}
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
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <Link
                  to="/courses"
                  className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Courses
                </Link>
                
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-4">
                  {course.title}
                  {course.hasYoutube && (
                    <Youtube className="inline-block ml-3 text-ochre-500" size={32} />
                  )}
                </h1>
                
                <p className="text-xl text-ochre-500 font-medium mb-6">
                  {course.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2" size={20} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="mr-2" size={20} />
                    <span>{course.level} Level</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="mr-2" size={20} />
                    <span>{course.type === 'upcoming' ? 'Upcoming' : 'Completed'}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="card p-8 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-heading font-bold text-ochre-500 mb-2">
                      {course.type === 'upcoming' ? 'Register Interest' : 'Course Completed'}
                    </div>
                    <p className="text-gray-600">
                      {course.type === 'upcoming' 
                        ? 'Be notified when enrollment opens' 
                        : 'View course materials and recordings'
                      }
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {course.type === 'upcoming' ? (
                      <button className="w-full btn-primary">
                        Register Interest
                      </button>
                    ) : (
                      <button className="w-full btn-secondary">
                        Contact for Queries
                      </button>
                    )}
                    
                    {course.hasYoutube && (
                      <a
                        href={course.playlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-ochre-500 text-white py-3 px-6 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium flex items-center justify-center"
                      >
                        <Youtube className="mr-2" size={20} />
                        Watch Playlist
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Course Overview</h2>
                  <div className="prose max-w-none">
                    {course.description.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="text-body text-gray-900 leading-relaxed mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Why Study */}
                {course.whyStudy && (
                  <div className="card p-8">
                    <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Why Study This Course?</h2>
                    <div className="prose max-w-none">
                      {course.whyStudy.split('\n\n').map((paragraph: string, index: number) => (
                        <div key={index} className="mb-4">
                          {paragraph.includes('•') ? (
                            <ul className="list-disc pl-6 space-y-2">
                              {paragraph.split('•').filter(item => item.trim()).map((item: string, i: number) => (
                                <li key={i} className="text-body text-gray-900 leading-relaxed">
                                  {item.trim()}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-body text-gray-900 leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Learning Objectives */}
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Learning Objectives</h2>
                  <ul className="space-y-3">
                    {course.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-body text-gray-900">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Course Flow */}
                <div className="card p-8">
                  <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Course Structure</h2>
                  <div className="space-y-4">
                    {course.courseFlow.map((item: string, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-ochre-50 rounded-xl">
                        <div className="w-8 h-8 bg-ochre-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-body text-gray-900 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* YouTube Playlist Embed */}
                {course.hasYoutube && (
                  <div className="card p-8">
                    <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Course Videos</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${course.playlistUrl.split('list=')[1]}`}
                        title={`${course.title} Playlist`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 md:h-96 rounded-xl"
                      ></iframe>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Complete video series for this course. Click to watch on YouTube.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                {/* Course Info */}
                <div className="card p-8">
                  <h3 className="text-h3 font-heading font-bold text-navy-500 mb-6">Course Information</h3>
                  <div className="space-y-4">
                    <div>
                      <dt className="font-semibold text-gray-700">Duration:</dt>
                      <dd className="text-gray-600">{course.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Level:</dt>
                      <dd className="text-gray-600">{course.level}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Prerequisites:</dt>
                      <dd className="text-gray-600 text-sm">{course.prerequisites}</dd>
                    </div>
                  </div>
                </div>
                
                {/* Outcome */}
                <div className="card p-8">
                  <h3 className="text-h3 font-heading font-bold text-navy-500 mb-6">Expected Outcome</h3>
                  <p className="text-body text-gray-900 leading-relaxed">{course.outcome}</p>
                </div>
                
                {course.hasYoutube && (
                  <div className="bg-ochre-50 rounded-xl p-8 border-2 border-ochre-200">
                    <div className="text-center">
                      <Youtube className="mx-auto mb-4 text-ochre-500" size={48} />
                      <h3 className="text-h3 font-heading font-bold text-navy-500 mb-2">YouTube Playlist</h3>
                      <p className="text-gray-600 mb-4">
                        Access video lessons from this completed course
                      </p>
                      <a
                        href={course.playlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                      >
                        <Youtube className="mr-2" size={20} />
                        Watch Videos
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetail;