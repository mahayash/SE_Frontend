import React, { Component } from 'react'
import Slider from 'react-slick'
import './multiContentStyle.css'
import StudentCard from '../Cards/studentCard'
import TestimonialCard from '../Cards/testimonialCard'

export default class MultiContentSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      rows: 1,
      swipeToSlide: true,
      arrows :false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    let testimonialSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      rows: 1,
      swipeToSlide: true,
      arrows :false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    let displayValueItems = this.props.displayValue
    let displayInTitle = this.props.displayInCategory

    if (displayInTitle === 'Testimonials') {
      return (
        <div>
          <div className="cardSliderTitle"> {displayInTitle} </div>
          <Slider {...testimonialSettings}>
            {displayValueItems.map(function(slides) {
              return (
                <TestimonialCard
                  testimonialCardInfo={slides.node}
                  key={slides.node.id}
                />
              )
            })}
          </Slider>
        </div>
      )
    } else {
      return (
        <div>
          <div className="cardSliderTitle"> {displayInTitle} </div>
          <Slider {...settings}>
            {displayValueItems.map(function(slides) {
              return (
                <StudentCard
                  studentCardInfo={slides.node}
                  key={slides.node.id}
                />
              )
            })}
          </Slider>
        </div>
      )
    }
  }
}
