import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  onChange,
  onSave,
  saving = false,
  errors = {}
}) => {
  return (  
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Issue</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave} 
        </div>
      )}
{/*       { <TextInput
        name="bugid"
        label="BugId"
        value={course.bugid}
        onChange={onChange}
        error={errors.bugid}
      /> } */}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      
     <SelectInput 
        name="authorId"
        label="Component"
        value={course.authorId || ""}
        defaultOption="Select Component"
        options={authors.map(authors =>({
            value: authors.id,
            text: authors.name
        }))}
        onChange={onChange}
        error={errors.author}
     />

    <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

<TextInput 
        name="description"
        label="Description"
        value={course.description}
        onChange={onChange}
        error={errors.category}
      />
      
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"} 
    </button>
    
    <font color="white">{course.NOS++}</font>
    </form>
  );
};

CourseForm.propTypes = {
    authors: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default CourseForm;