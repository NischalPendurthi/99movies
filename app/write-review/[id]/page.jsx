"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateReview = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [review, setReview] = useState({ rating: "", movie: "",review: "",image:"" });

  const createReview = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/review", {
        method: "POST",
        body: JSON.stringify({
          creater: session?.user.name,
          rating: review.rating,
          movie: review.movie,
          review: review.review,
          image: session?.user.image
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      
      review={review}
      setReview={setReview}
      submitting={submitting}
      handleSubmit={createReview}
    />
  );
};

export default CreateReview;