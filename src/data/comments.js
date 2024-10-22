export const initialComments = [
  {
    id: 1,
    user: "John Doe",
    content: "This is a great course!",
    likes: 10,
    likedByUser: false,
    replies: [],
  },
  {
    id: 2,
    user: "Jane Smith",
    content: "I loved the teacher's approach.",
    likes: 5,
    likedByUser: false,
    replies: [
      {
        id: 1,
        user: "Sam Wilson",
        content: "Same here! Very detailed explanations.",
        likes: 2,
        likedByUser: false,
      },
    ],
  },
];
