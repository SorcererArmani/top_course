import React, { useState } from 'react';
import Card from './Card';

 const Cards = (props) => {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);
  let category = props.category;
  function getCourses () {

    if(category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        //to get only values from filterData object and iterate through them
        if (array && array.length > 0) {
          array.forEach((courseData) => {
            //to iterate through each of the value because each value in filterData is an array
            allCourses.push(courseData);
          });
        }
      })
      return allCourses;
    }
    else {
      // matra specific category no data show karva
      return courses[category];
    }
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={props.courses.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}
export default  Cards;