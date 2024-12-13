import ReviewCard from "../Components/ReviewCard";
import {reviews} from "../Constants/index"

function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-semibold text-4xl">
        What Our <span className="text-coral-red">Customers </span>
      say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
      Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
          {reviews.map((review)=> (
            <ReviewCard key={review.id} {...review} />
          ))}
      </div>

    </section>
  )}

export default CustomerReviews;