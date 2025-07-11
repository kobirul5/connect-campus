'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      college: "Tech University",
      rating: 4.5,
      reviewer: "Alex Johnson",
      role: "Computer Science Graduate",
      date: "2023-05-15",
      content: "The computer science program at Tech University provided me with excellent hands-on experience. The faculty is knowledgeable and the campus facilities are top-notch."
    },
    {
      id: 2,
      college: "Green Valley College",
      rating: 5,
      reviewer: "Sarah Williams",
      role: "Environmental Science Student",
      date: "2023-06-22",
      content: "I love the sustainability focus at Green Valley. The small class sizes allowed for personalized attention and the research opportunities were incredible."
    },
    {
      id: 3,
      college: "Metropolitan Institute",
      rating: 4,
      reviewer: "Michael Chen",
      role: "Business Administration",
      date: "2023-04-10",
      content: "Great networking opportunities and career services. The business program connects students with industry leaders through regular guest lectures."
    },
    {
      id: 4,
      college: "Tech University",
      rating: 4.5,
      reviewer: "Emily Rodriguez",
      role: "Electrical Engineering",
      date: "2023-07-05",
      content: "The engineering labs are well-equipped and the curriculum is industry-relevant. I secured a job before graduation thanks to the university's career fair."
    },
    {
      id: 5,
      college: "Green Valley College",
      rating: 4,
      reviewer: "David Kim",
      role: "Biology Major",
      date: "2023-03-18",
      content: "Excellent biology department with research opportunities starting from freshman year. The campus is beautiful and environmentally conscious."
    }
  ];

  const renderStars = (rating:number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Student Reviews
            </span>
          </h2>
          
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            navigation={{
              nextEl: '.review-swiper-button-next',
              prevEl: '.review-swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.review-swiper-pagination',
              type: 'bullets',
            }}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="card bg-base-100 shadow-xl h-full">
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="card-title">{review.college}</h3>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm">{review.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <FaQuoteLeft className="text-primary opacity-20 text-3xl" />
                    </div>
                    
                    <p className="mb-6">{review.content}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                          <div className="bg-neutral text-neutral-content rounded-full w-10">
                            <span>{review.reviewer.charAt(0)}</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{review.reviewer}</p>
                          <p className="text-sm opacity-70">{review.role}</p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="review-swiper-button-prev btn btn-circle btn-sm btn-outline">
              <FaChevronLeft />
            </button>
            <div className="review-swiper-pagination"></div>
            <button className="review-swiper-button-next btn btn-circle btn-sm btn-outline">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/*ToDO: Add Review CTA */}
        {/* <div className="text-center mt-12">
          <button className="btn btn-primary">
            Share Your Experience
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewSection;