import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Youtube } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');

  const otherCourses = [
    {
      id: 'sahajawastha', 
      title: 'Sahajawastha',
      subtitle: 'Cultivating a State of Natural Awareness',
      description: 'Living in a state of natural ease, where awareness flows effortlessly without force.',
      level: 'Advanced'
    },
    {
      id: 'dhyan-dharana',
      title: 'Dhyan Dharana',
      subtitle: 'Meditation and Concentration Practices',
      description: 'Concentration and meditation practices that quiet the restless mind.',
      level: 'Intermediate'
    },
    {
      id: 'yog-pranayam',
      title: 'Yog Pranayam',
      subtitle: 'Breath Control Techniques',
      description: 'Regulating the breath to harmonize body, mind, and spirit through mindful breathing.',
      level: 'Beginner'
    },
    {
      id: 'jap-practice', 
      title: 'Jap',
      subtitle: 'Recitation of Mantras or Sacred Sounds',
      description: 'Rhythmic repetition of mantras or sacred sounds that connects the heart with divine vibration.',
      level: 'Beginner'
    },
    {
      id: 'swadhyay',
      title: 'Swadhyay n Path',
      subtitle: 'Study and Reflection on Spiritual Texts',
      description: 'Self-study of sacred texts and devotional recitation combining learning with heart-based remembrance.',
      level: 'Beginner'
    },
    {
      id: 'teerth-yatra',
      title: 'Yatra',
      subtitle: 'Pilgrimage or Spiritual Journey',
      description: 'Traveling to holy places with devotion — both an outer and inner journey toward sacredness.',
      level: 'Intermediate'
    }
  ];

  const upcomingCourses = [
    {
      id: 'drg-drsya-viveka',
      title: 'Dṛg-Dṛśya-Viveka',
      subtitle: 'The Discrimination between the Seer and the Seen',
      description: 'A short but profoundly powerful text of Advaita Vedānta for systematic inner enquiry and direct Self-inquiry.',
      duration: '8-10 weeks',
      level: 'Intermediate',
      hasYoutube: false
    },
    {
      id: 'darsana-sarvasvam',
      title: 'Darśana Sarvasvam',
      subtitle: 'A Study of Four Types of Non-Duality',
      description: 'Systematic investigation of fundamental reality through four distinct non-dual philosophical viewpoints.',
      duration: '12-14 weeks',
      level: 'Advanced',
      hasYoutube: false
    },
    {
      id: 'siddhanta-lesha-sangraha',
      title: 'Siddhānta Leśha Saṅgraha',
      subtitle: 'Collection of Doctrinal Glosses',
      description: 'A concise compilation of key doctrinal points that serve as clarifications within classical Advaita Vedānta.',
      duration: '6-8 weeks',
      level: 'Advanced',
      hasYoutube: false
    }
  ];

  const previousCourses = [
    {
      id: 'viveka-chudamani',
      title: 'Viveka Chudamani',
      subtitle: 'The Crest Jewel of Discrimination',
      description: 'A seminal Advaita Vedānta text on the path to Self-realization through rigorous discrimination.',
      duration: 'Completed',
      level: 'Intermediate',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I2YB3oBBesI05S7KVXU4W6s'
    },
    {
      id: 'sadhana-panchakam',
      title: 'Sādhana Pañcakam',
      subtitle: 'Five Verses on Spiritual Practice',
      description: 'A concise manual of spiritual practice with transformative instructions for the aspirant.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I3YB3oBBesI05S7KVXU4W6s'
    },
    {
      id: 'tattvabodha',
      title: 'Tattvabodha',
      subtitle: 'Knowledge of Reality',
      description: 'A foundational Vedānta text introducing essential principles of Advaita Vedānta.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I1YB3oBBesI05S7KVXU4W6s'
    },
    {
      id: 'sanskrit-class',
      title: 'Sanskrit Class',
      subtitle: 'शतश्लोकेन पण्डितः',
      description: 'Mastering Sanskrit through 100 verses - a practical method for independent Sanskrit study.',
      duration: 'Completed',
      level: 'Beginner',
      hasYoutube: true,
      playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I0YB3oBBesI05S7KVXU4W6s'
    }
  ];

  return (
    <>
      <SEO
        title="Courses - Pragya Trust"
        description="Explore our comprehensive courses in Vedanta, meditation, Sanskrit, and spiritual practices. From foundational texts to advanced consciousness studies."
        url="https://pragyatrust.com/courses"
      />
      
      <div className="pt-8 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
              Our <span className="text-ochre-500">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Transformative learning experiences in consciousness studies, Vedanta, and spiritual practices
            </p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="prose max-w-none">
              <p className="text-body text-gray-900 leading-relaxed mb-6">
                Consider the valuable insights gained from our prior courses at Pragya Trust. 
                Delve into the profound teachings offered in Upanishadic Studies, Traditional 
                Learning, Sanskrit, Meditation Techniques, Tantra, Yoga, and various transformative 
                practices. These courses have laid the groundwork for a community centered around 
                consciousness, fostering intellectual development, connections, and the shared 
                pursuit of wisdom.
              </p>
              
              <p className="text-body text-gray-900 leading-relaxed">
                Course description; This course is meant for Sharing the Traditional Teachings of Non-Dual Vedanta or Advaita Vedanta.
                The Teaching and Understanding of Vedanta are of Three Fold.
                Sravan( Listening), Manan(Reflection) and Nididhyasan(Meditative contemplation).
                Sravan is systematic listening till you arrive at the conclusion of "Non-Dual Nature" If one knows a lot of things, many different philosophies but has not arrived at the conclusion of non-duality, one should listen more.
                Manan is contemplated. It resolves the "seemingly" conflicting understanding. The common examples of conflicting views are -The questions of Doings vs. Non-Doing, Witnessing vs. Whole Awareness, Acceptance Vs. Changing Oneself and Growth, Free will vs Choice, etc . Once free from Conflicting views, the mind enters into smoothness, which helps to transcend. This Smoothness comes by reflecting as well discussing.
                Nididhyasan (Meditative Contemplation) is giving oneself space to enter and establish into Non-Duality. That may be in the form of sittings and withdrawing oneself from all other activities for some time and letting the Reality Overtake and engulf you.
                In this course, we will try to cover all the three aspects of Listening, Reflecting and Meditating, in dedicated sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Course Tabs */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === 'upcoming'
                      ? 'bg-ochre-500 text-white shadow-soft'
                      : 'text-gray-600 hover:text-ochre-500'
                  }`}
                >
                  Upcoming Courses
                </button>
                <button
                  onClick={() => setActiveTab('previous')}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === 'previous'
                      ? 'bg-ochre-500 text-white shadow-soft'
                      : 'text-gray-600 hover:text-ochre-500'
                  }`}
                >
                  Previous Courses
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeTab === 'upcoming' ? upcomingCourses : previousCourses).map((course) => (
                <div key={course.id} className="card p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === 'upcoming' 
                        ? 'bg-ochre-100 text-ochre-800' 
                        : 'bg-ochre-100 text-ochre-800'
                    }`}>
                      {activeTab === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                    {course.hasYoutube && (
                      <Youtube className="text-ochre-500 flex-shrink-0" size={20} />
                    )}
                  </div>
                  
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">{course.title}</h3>
                  <p className="text-ochre-500 font-medium mb-4 text-sm">{course.subtitle}</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={`/courses/${course.id}`}
                      className="w-full btn-primary block text-center"
                    >
                      View Details
                    </Link>
                    {course.hasYoutube && (
                      <a
                        href={course.playlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-ochre-500 text-white py-3 px-4 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium flex items-center justify-center"
                      >
                        <Youtube className="mr-2" size={16} />
                        Watch Playlist
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Courses Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Other <span className="text-ochre-500">Courses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore additional spiritual practices and approaches to deepen your understanding and experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherCourses.map((course) => (
                <div key={course.id} className="card p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-ochre-100 text-ochre-800">
                      Practice
                    </span>
                  </div>
                  
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">{course.title}</h3>
                  <p className="text-ochre-500 font-medium mb-4 text-sm">{course.subtitle}</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {course.level}
                    </div>
                  </div>
                  
                  <Link
                    to={`/courses/other/${course.id}`}
                    className="w-full btn-primary block text-center"
                  >
                    View More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Few More Classes Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Few More <span className="text-ochre-500">Classes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore additional transformative practices and wisdom traditions for deeper spiritual development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-ochre-100 text-ochre-800">
                    Advanced Practice
                  </span>
                </div>
                
                <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Asparsha Yoga</h3>
                <p className="text-ochre-500 font-medium mb-4 text-sm">The Path Beyond Contact</p>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  A way of spiritual practice that is free from the disturbances of mental grasping, personal ambition, and the endless push-and-pull of desire and aversion.
                </p>
                
                <Link
                  to="/courses/few-more/asparsha-yoga"
                  className="w-full btn-primary block text-center"
                >
                  View More
                </Link>
              </div>

              <div className="card p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-ochre-100 text-ochre-800">
                    Core Teaching
                  </span>
                </div>
                
                <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Vedānta</h3>
                <p className="text-ochre-500 font-medium mb-4 text-sm">Coming Closer to the Essence of Knowing</p>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  That which brings you nearer to pure Knowingness itself. The path that draws you toward the direct experience of truth — not just thinking about it, but living it.
                </p>
                
                <Link
                  to="/courses/few-more/vedanta"
                  className="w-full btn-primary block text-center"
                >
                  View More
                </Link>
              </div>

              <div className="card p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-ochre-100 text-ochre-800">
                    Union Practice
                  </span>
                </div>
                
                <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Yoga</h3>
                <p className="text-ochre-500 font-medium mb-4 text-sm">Union with the Self</p>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  The art and science of uniting the individual self with the universal Self. Integrating body, breath, mind, and spirit into one harmonious flow.
                </p>
                
                <Link
                  to="/courses/few-more/yoga"
                  className="w-full btn-primary block text-center"
                >
                  View More
                </Link>
              </div>

              <div className="card p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-ochre-100 text-ochre-800">
                    Sacred Knowledge
                  </span>
                </div>
                
                <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">Tantra Āgama</h3>
                <p className="text-ochre-500 font-medium mb-4 text-sm">The Path of Sacred Knowledge</p>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Sacred body of knowledge guiding seekers in both external worship and inner realization. A complete spiritual science integrating mantra, meditation, and devotion.
                </p>
                
                <Link
                  to="/courses/few-more/tantra-agama"
                  className="w-full btn-primary block text-center"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Courses;