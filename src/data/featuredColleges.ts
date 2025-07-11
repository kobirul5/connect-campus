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
  }
];
