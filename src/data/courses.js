import adv2 from "../assets/adv2.webp";
import adv3 from "../assets/adv3.jpg";
import adv4 from "../assets/adv4.avif";
import adv5 from "../assets/adv5.avif";

export const advertisedCourses = [
  {
    id: 1,
    title: "React for Beginners",
    price: 100,
    discountedPrice: 80,
    duration: "5 hours",
    isFree: false,
    description: "Learn the basics of React.",
    image: adv2,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    price: 150,
    discountedPrice: 120,
    duration: "8 hours",
    isFree: true,
    description: "Deep dive into JavaScript.",
    image: adv3,
    date: "2024-02-10",
  },
];

export const allCourses = [
  {
    id: 1,
    title: "React for Beginners",
    price: 100,
    duration: "5 hours",
    isFree: false,
    description: "Learn the basics of React.",
    rating: 4.5,
    category: "Frontend Development",
    class: "11th",
    image: adv5,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    price: 150,
    duration: "8 hours",
    isFree: true,
    description: "Deep dive into JavaScript.",
    rating: 4.8,
    category: "Backend Development",
    class: "12th",
    image: adv4,
    date: "2024-02-10",
  },
];
