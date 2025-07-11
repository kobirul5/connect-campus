export interface College {
  id: number;
  name: string;
  image: string;
  admissionDates: string;
  events: {
    name: string;
    date: string;
  }[];
  researchHistory: {
    title: string;
    year: number;
  }[];
  sports: string[];
  rating: number;
  description: string;
}

export const featuredColleges: College[] = [
  {
    id: 1,
    name: "Tech University",
    image: "/collage/1.jpg",
    admissionDates: "Fall: Sep 15 | Spring: Jan 10",
    events: [
      { name: "Tech Symposium", date: "Oct 15, 2023" },
      { name: "Career Fair", date: "Nov 5, 2023" }
    ],
    researchHistory: [
      { title: "AI in Healthcare", year: 2023 },
      { title: "Quantum Computing", year: 2022 }
    ],
    sports: ["Basketball", "Swimming", "Soccer"],
    rating: 4.7,
    description:
      "Tech University stands as a beacon of innovation and excellence in modern higher education. With world-class faculty and cutting-edge research facilities, it offers students an opportunity to learn and grow in a dynamic, forward-thinking environment. The university’s strong focus on technology, science, and interdisciplinary studies helps students develop real-world skills that employers value. From hosting annual tech symposiums to organizing industry-focused career fairs, Tech University connects students with leaders and innovators across various sectors. The institution’s commitment to research is reflected in projects exploring artificial intelligence, quantum computing, and other frontier technologies. Students are encouraged to participate in diverse extracurricular activities, including well-maintained sports facilities for basketball, swimming, and soccer. This balance between academics and athletics ensures that students have a holistic college experience. Tech University’s alumni network is active and supportive, creating opportunities for mentoring and career growth long after graduation. Its reputation for quality education and student success continues to attract ambitious learners from all over the world. Choosing Tech University means joining a vibrant, diverse community driven by curiosity, creativity, and a shared passion for shaping the future together."
  },
  {
    id: 2,
    name: "Green Valley College",
    image: "/collage/2.jpg",
    admissionDates: "Rolling Admissions",
    events: [
      { name: "Environmental Summit", date: "Sep 20, 2023" },
      { name: "Arts Festival", date: "Dec 10, 2023" }
    ],
    researchHistory: [
      { title: "Sustainable Agriculture", year: 2023 },
      { title: "Renewable Energy", year: 2022 }
    ],
    sports: ["Track & Field", "Tennis", "Volleyball"],
    rating: 4.5,
    description:
      "Green Valley College is a thriving hub for students who are passionate about sustainability, the environment, and community engagement. Located in a scenic setting surrounded by nature, the college provides a peaceful yet stimulating atmosphere for learning and growth. With rolling admissions, Green Valley welcomes motivated learners throughout the year. The college regularly hosts events such as the Environmental Summit and Arts Festival, encouraging students to think creatively and act responsibly. Its research teams work on groundbreaking projects in sustainable agriculture and renewable energy, pushing the boundaries of what’s possible in eco-friendly innovation. Green Valley’s commitment to student well-being extends beyond academics; the college offers excellent sports facilities for track & field, tennis, and volleyball, promoting a healthy and active lifestyle. Students benefit from small class sizes, personalized attention, and a collaborative community that values diversity and inclusion. Graduates leave Green Valley College ready to tackle global environmental challenges and contribute to building a greener, more sustainable world. By choosing Green Valley, students become part of a supportive network dedicated to making a positive impact locally and globally."
  },
  {
    id: 3,
    name: "Metropolitan Institute",
    image: "/collage/3.jpg",
    admissionDates: "Fall: Aug 28 | Spring: Jan 15",
    events: [
      { name: "Business Hackathon", date: "Nov 15, 2023" },
      { name: "Alumni Meet", date: "Dec 5, 2023" }
    ],
    researchHistory: [
      { title: "Urban Development", year: 2023 },
      { title: "Economic Trends", year: 2022 }
    ],
    sports: ["Basketball", "Badminton", "Cricket"],
    rating: 4.3,
    description:
      "Metropolitan Institute is an energetic, forward-thinking educational institution located at the heart of the city. It offers students unparalleled access to industry connections, cultural experiences, and real-world learning opportunities. Known for its robust business and urban development programs, the institute hosts annual events like the Business Hackathon and Alumni Meet to help students network and showcase their skills. Its research initiatives focus on critical urban issues such as sustainable development and economic trends, empowering students to contribute solutions for modern city life. The campus is designed to foster collaboration, innovation, and inclusivity. Sports and recreation are an important part of student life at Metropolitan Institute, with popular facilities for basketball, badminton, and cricket that encourage teamwork and physical fitness. The institute’s diverse student body and active alumni network create a dynamic community where new ideas thrive and lifelong connections are made. With dedicated faculty, modern classrooms, and strong career support services, students graduate ready to excel in fast-paced urban industries. Choosing Metropolitan Institute means embracing a vibrant, multicultural environment that prepares learners to lead and innovate in the ever-evolving urban landscape."
  },
  {
    id: 4,
    name: "Skyline Arts Academy",
    image: "/collage/4.jpg",
    admissionDates: "Fall: Sep 1 | Spring: Jan 12",
    events: [
      { name: "Annual Art Expo", date: "Oct 22, 2023" },
      { name: "Student Theatre Night", date: "Dec 2, 2023" }
    ],
    researchHistory: [
      { title: "Modern Art Movements", year: 2023 },
      { title: "Digital Media Studies", year: 2022 }
    ],
    sports: ["Yoga", "Dance", "Table Tennis"],
    rating: 4.6,
    description:
      "Skyline Arts Academy is a premier institution for students passionate about the fine arts, performing arts, and creative expression. Nestled in a vibrant cultural district, it provides students with unique opportunities to collaborate with local artists and participate in city-wide exhibitions and performances. The academy’s curriculum combines traditional art disciplines with modern digital media studies, preparing students for evolving creative industries. Events like the Annual Art Expo and Student Theatre Night highlight student talent and foster a sense of community. Alongside their artistic pursuits, students can engage in recreational activities such as yoga, dance, and table tennis, promoting balance and well-being. Skyline’s dedicated faculty and artist-in-residence programs inspire students to push the boundaries of their creativity. Its strong network of alumni includes renowned designers, performers, and media professionals, offering mentorship and career pathways. Choosing Skyline Arts Academy means stepping into a world of imagination, collaboration, and artistic excellence."
  },
  {
    id: 5,
    name: "Highland Medical College",
    image: "/collage/5.jpg",
    admissionDates: "Fall: Aug 20 | Spring: Jan 5",
    events: [
      { name: "Health Awareness Camp", date: "Sep 25, 2023" },
      { name: "Medical Research Conference", date: "Nov 30, 2023" }
    ],
    researchHistory: [
      { title: "Cancer Research Innovations", year: 2023 },
      { title: "Public Health Policies", year: 2022 }
    ],
    sports: ["Cricket", "Badminton", "Swimming"],
    rating: 4.8,
    description:
      "Highland Medical College is dedicated to producing highly skilled healthcare professionals ready to serve communities worldwide. With state-of-the-art laboratories and partnerships with leading hospitals, students receive hands-on training and exposure to real-world medical scenarios. Annual events like the Health Awareness Camp and Medical Research Conference provide platforms for students to present research and engage with industry experts. The college’s research centers focus on critical areas such as cancer innovations and public health policies. To promote a healthy work-life balance, Highland offers excellent sports facilities for cricket, badminton, and swimming. A supportive network of faculty mentors guides students through rigorous academic and clinical training, ensuring they graduate as competent and compassionate medical practitioners. Highland’s reputation attracts top-tier students and faculty, making it a trusted name in medical education. By choosing Highland Medical College, students commit to excellence, service, and a future dedicated to advancing healthcare."
  },
  {
    id: 6,
    name: "Summit Business School",
    image: "/collage/6.jpg",
    admissionDates: "Fall: Sep 10 | Spring: Jan 20",
    events: [
      { name: "Entrepreneurship Summit", date: "Oct 12, 2023" },
      { name: "Startup Pitch Fest", date: "Dec 8, 2023" }
    ],
    researchHistory: [
      { title: "Global Market Trends", year: 2023 },
      { title: "Startup Ecosystem", year: 2022 }
    ],
    sports: ["Basketball", "Tennis", "Football"],
    rating: 4.4,
    description:
      "Summit Business School is a hub for aspiring entrepreneurs and future business leaders. Located in a dynamic urban center, the school offers unmatched opportunities for students to connect with industry mentors and investors. With events like the Entrepreneurship Summit and Startup Pitch Fest, students gain practical exposure to the startup ecosystem. The school’s research initiatives delve into global market trends and new business models, encouraging students to innovate and disrupt traditional industries. Summit emphasizes holistic development, offering sports facilities for basketball, tennis, and football to help students maintain a balanced lifestyle. Small class sizes and an experienced faculty ensure personalized learning experiences. Summit’s alumni network includes successful startup founders and corporate executives who frequently return to mentor current students. Choosing Summit Business School means stepping into an environment that nurtures ambition, creativity, and practical business skills for the leaders of tomorrow."
  }
];
