export interface MockReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpfulCount: number;
}

export const mockReviews: MockReview[] = [
  {
    id: "1",
    userName: "Alice Johnson",
    userAvatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment: "Amazing sound quality and battery life!",
    createdAt: "2023-10-15",
    helpfulCount: 24,
  },
  {
    id: "2",
    userName: "Bob Smith",
    userAvatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment: "Great features but the strap is a bit uncomfortable.",
    createdAt: "2023-10-14",
    helpfulCount: 11,
  },
  {
    id: "3",
    userName: "Charlie Brown",
    userAvatar: "https://i.pravatar.cc/100?img=3",
    rating: 2,
    comment: "Wobbly and not sturdy enough for my laptop.",
    createdAt: "2023-10-12",
    helpfulCount: 3,
  },
  {
    id: "4",
    userName: "David Wilson",
    userAvatar: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    comment: "Best headphones I have ever owned.",
    createdAt: "2023-10-10",
    helpfulCount: 32,
  },
  {
    id: "5",
    userName: "Eve Davis",
    userAvatar: "https://i.pravatar.cc/100?img=5",
    rating: 1,
    comment: "Stopped working after a week. Do not buy.",
    createdAt: "2023-10-08",
    helpfulCount: 7,
  },
];
