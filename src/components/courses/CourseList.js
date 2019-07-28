import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Bug ID</th>
          <th>Title</th>
          <th>Component</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          //console.log(course.description);
          return (
            <tr key={course.id}>
              
              <td>
             <Link to={"/course/" + course.slug}>{course.id}</Link> 
             {/*  <Link to={"../about/AboutPage.js"}>{course.id}</Link> */}
              </td>
              <td>{course.title}</td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>{course.description}</td>
             
              
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

  );
};

CourseList.prototype = {
  courses: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.array.isRequired
};

export default CourseList;
