import Link from "next/link";

const Form = ({ review, setReview, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Review your Movie</span>
      </h1>
      

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Review
          </span>

          <input
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
            type='number'
            placeholder='your Rating'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Movie
          </span>

          <input
            value={review.movie}
            onChange={(e) => setReview({ ...review, movie: e.target.value })}
            type='text'
            placeholder='Movie you want to Rate'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Review
          </span>

          <textarea
            value={review.review}
            onChange={(e) => setReview({ ...review, review: e.target.value })}
            type='text'
            placeholder='Enter your review'
            required
            className='form_textarea'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm black_btn rounded-full text-black'
          >
            {submitting ? "reviewing..." : "done"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;