import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";

import {
  getTestimonialsQuery,
  addTestimonialMutation,
} from "../../queries/queries";

function Testimonials() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [comment, setComment] = useState("");
  const [addTestimonial] = useMutation(addTestimonialMutation);
  const { loading, error, data } = useQuery(getTestimonialsQuery);

  const displayTestimonials = () => {
    if (loading) {
      return <div>Loading Testimonials...</div>;
    } else if (error) return <div>{error}</div>;
    else {
      return data.testimonials.map((testimonial) => {
        return (
          <div key={testimonial.id}>
            <h2>{testimonial.name}</h2>
            <h4>{testimonial.project}</h4>
            <p>{testimonial.comment}</p>
          </div>
        );
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTestimonial({
      variables: {
        name: name,
        email: email,
        project: project,
        comment: comment,
      },
    });
    setName("");
    setEmail("");
    setProject("");
    setComment("");
  };

  return (
    <div>
      <h3>Testimonials</h3>
      <h4>Show Testimonials</h4>
      {displayTestimonials()}
      <hr />
      <h4>Write Testimonials</h4>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label> Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label> Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label> Project:</label>
            <input
              type="text"
              required
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div>
            <label> Comment:</label>
            <input
              type="text"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>Note Comments will be posted after verification</p>
      </div>
    </div>
  );
}

// export default compose(
//   graphql(getTestimonialsQuery, { name: "getTestimonialsQuery" }),
//   graphql(addTestimonialMutation, { name: "addTestimonialMutation" })
// )(Testimonials);

export default Testimonials;
