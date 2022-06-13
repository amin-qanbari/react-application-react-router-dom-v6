import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./TestimonialsStyles.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase />
              Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              accusamus facilis ad deserunt, rerum at consequatur aut eius
              veniam rem laudantium id labor.
            </p>
            <div className="name">
                <p>Marie Chilvers</p>
                <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
