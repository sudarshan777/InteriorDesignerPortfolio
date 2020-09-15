import React, { Component } from "react";

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      project: "",
      comment: "",
      // picture:""
    };
  }

  onSubmit = (e) => {
    // e.preventDefault();
    // const post = {
    //   name: name,
    //   email: email,
    //   project: project,
    //   comment: comment,
    //   // message: message,
    // };

    // dispatch(sendMail(newDetails));

    alert("Message sent");
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  displayTestimonials = () => {
    return <div></div>;
  };

  render() {
    return (
      <div>
        <h3>Testimonials</h3>
        <h4>Show Testimonials</h4>
        {this.displayTestimonials()}
        <hr />
        <h4>Write Testimonials</h4>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label> Name:</label>
              <input
                type="text"
                required
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label> Email:</label>
              <input
                type="email"
                required
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label> Project:</label>
              <input
                type="text"
                required
                value={this.state.project}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label> Comment:</label>
              <input
                type="text"
                required
                value={this.state.comment}
                onChange={this.onChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p>Note Comments will be posted after verification</p>
        </div>
      </div>
    );
  }
}

export default Testimonials;
