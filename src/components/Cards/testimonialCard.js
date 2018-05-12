import React, { Component } from 'react'
import './cardStyle.css'

export default class TestimonialCard extends Component {
  //let testimonialCardInfo = this.pro

  render() {
    let cardInfo = this.props.testimonialCardInfo

    return (
      <div id="testimonialCardDetails">
        <img
          src={cardInfo.parentImagePath}
          style={{ width: '100px', height: '100px' }}
        />
        <div>
          <div id="testimonailParent">
            <div className="titleText">{`${cardInfo.parentName.first} ${
              cardInfo.parentName.last
            }`}</div>
            <span className="titleSubText">{`${
              cardInfo.relationWithStudent
            } of ${cardInfo.studentName.first} ${
              cardInfo.studentName.last
            }`}</span>
            <p id="testimonialSquare">{`${cardInfo.fromSquareEducation}`}</p>
          </div>
          <p id="testimonialText">{`"${cardInfo.testimonial}"`}</p>
        </div>
      </div>
    )
  }
}
