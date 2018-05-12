import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
//import 'bootstrap/dist/css/bootstrap.css'
import './home.css'
import NavigationBar from '../components/Header/NavigationBar'

const TemplateWrapper = ({ children }) => (
  <div>
    {/* this is used to change the value in head tag */}
    <Helmet
      title="Square Education Institute"
      meta={[
        { name: 'description', content: 'School Section & Grammar' },
        {
          name: 'keywords',
          content:
            'School, Tutoring, Grammar, English Grammar at Mira Bhayander',
        },
      ]}
    />
    {/* this is the header*/}
    <div id="indexContainer">
      <NavigationBar />
      <div id="indexBody">{children()}</div>
      <br />
      <div id="indexFooter">
        <h4>Powered by Panthrax Digital</h4>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
