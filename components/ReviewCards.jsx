import ReviewCard from './ReviewCard';

const ReviewCards = ({ reviews, users }) => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={[review]} users={users} />
      ))}
    </ul>
  );
};

export default ReviewCards;