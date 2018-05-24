import React from "react";
import Link from "gatsby-link";
import { Button } from "react-bootstrap";
import SpotLightSlider from "../components/Slider/spotLightSlider";
import MultiContentSlider from "../components/Slider/multiContentSlider";

export default function IndexPage({ data }) {
  let topScorer = [];
  let subjectHighest = [];
  let growthAchieved = [];
  let testimonial = [];

  if (data.allMongodbSquareeducationStudentscores != null) {
    var dataStr = data.allMongodbSquareeducationStudentscores.edges;
    for (let i = 0; i < dataStr.length; i++) {
      const item = dataStr[i];
      switch (item.node.diplayInCategories) {
        case 1:
          topScorer.push(item);
          break;
        case 2:
          subjectHighest.push(item);
          break;
        case 3:
          growthAchieved.push(item);
          break;
      }
    }
  }
  if (data.allMongodbSquareeducationTestimonials != null) {
    testimonial = data.allMongodbSquareeducationTestimonials.edges;
  }
  return (
    /** Pre-defined  */
    <div>
      <SpotLightSlider />
      <br />
      <MultiContentSlider
        displayValue={topScorer}
        displayInCategory={"Top Scorer"}
      />
      <br />
      <MultiContentSlider
        displayValue={subjectHighest}
        displayInCategory={"Subject Highest"}
      />
      <br />
      <MultiContentSlider
        displayValue={growthAchieved}
        displayInCategory={"Growth Achieved"}
      />
      <br />
      {/* Parents testimonial Card */}
      <MultiContentSlider
        displayValue={testimonial}
        displayInCategory={"Testimonials"}
      />
      <br />
      {/* Auto scroll list of schools */}
    </div>
  );
}

// TopScorer / SubjectHighest / Growth
export const studentQuery = graphql`
  query finalResult {
    allMongodbSquareeducationTestimonials {
      edges {
        node {
          id
          parentImagePath
          relationWithStudent
          parentName {
            last
            first
          }
          studentName {
            last
            first
          }
          testimonial
          fromSquareEducation
        }
      }
    }
    allMongodbSquareeducationStudentscores {
      edges {
        node {
          studentName {
            last
            first
          }
          id
          percentScored
          examination
          school
          courseOpted
          lastPercent
          displayInCategories
          lastPercent
          studentRank
          scoredIn {
            algebra
            english
            geography
            geometry
            hindi
            history
            marathi
            science1
            science2
          }
        }
      }
    }
  }
`;
