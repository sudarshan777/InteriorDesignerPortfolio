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
            <blockquote className="blockquote text-center">
              <p className="mb-0"> {testimonial.comment}</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
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
      {displayTestimonials()}
      <hr />
      <h4>Write Testimonials</h4>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label> Name:</label>
            <input
              type="text"
              required
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Email:</label>
            <input
              type="email"
              required
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Project:</label>
            <input
              type="text"
              required
              value={project}
              className="form-control"
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Comment:</label>
            <input
              type="text"
              required
              value={comment}
              className="form-control"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <p>Note Comments will be posted after verification</p>
      </div>
    </div>
  );
}

export default Testimonials;
