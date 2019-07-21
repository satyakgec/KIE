import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSE_SUCCESS, courses };
}
function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}
function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourse()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(newCourse) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(newCourse)
      .then(course => {
        newCourse.id
          ? dispatch(updateCourseSuccess(course))
          : dispatch(createCourseSuccess(course));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course);
  };
}
