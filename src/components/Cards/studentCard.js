import React, { Component } from 'react'
import './cardStyle.css'

export default class StudentCard extends Component {
  render() {
    let cardInfo = this.props.studentCardInfo
    let appendTitle = ''
    switch (cardInfo.diplayInCategories) {
      case 1:
        appendTitle = `${cardInfo.percentScored}% Scored`
        break
      case 2:
        appendTitle = subjectScore(cardInfo.scoredIn)
        break
      case 3:
        appendTitle = `${cardInfo.percentScored}% Growth`
        break
    }

    return (
      <div id="studentCardContainter">
        <h2>{appendTitle}</h2>
        <div className="img-wrapper">
          <img src="" />
        </div>
        <div className="details">
          <h4>{`${cardInfo.studentName.first} ${
            cardInfo.studentName.last
          }`}</h4>
          <p style={{ marginTop: '-5px'}}>{`${
            cardInfo.courses
          } - ${cardInfo.school}`}</p>
        </div>
      </div>
    )
  }
}

function subjectScore(SubjectMarks) {
  if (SubjectMarks != null) {
    if (SubjectMarks.algebra !== null) {
      return SubjectMarks.algebra + '% in Algebra'
    } else if (SubjectMarks.geometry !== null) {
      return SubjectMarks.geometry + '% in Geometry'
    } else if (SubjectMarks.science1 !== null) {
      return SubjectMarks.science1 + '% in Science 1'
    } else if (SubjectMarks.science2 !== null) {
      return SubjectMarks.science1 + '% in Sciecne 2'
    } else if (SubjectMarks.history !== null) {
      return SubjectMarks.history + '% in History'
    } else if (SubjectMarks.geography !== null) {
      return SubjectMarks.geography + '% in Geography'
    } else if (SubjectMarks.english !== null) {
      return SubjectMarks.english + '% in English'
    } else if (SubjectMarks.hindi !== null) {
      return SubjectMarks.hindi + '% in Hindi'
    } else if (SubjectMarks.marathi !== null) {
      return SubjectMarks.marathi + '% in Marathi'
    }
  }
}
