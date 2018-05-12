import React from 'react'
import Helmet from 'react-helmet'

import '../styles/form.css'

export default function Form() {
  return (
    <div>
      <Helmet title={`Form`} />
      <div id="#formMain">
        <input id="tab1" type="radio" name="tabs" defaultChecked />
        <label htmlFor="tab1">Clear Your Doubt</label>

        <input id="tab2" type="radio" name="tabs" />
        <label htmlFor="tab2">Suggestion</label>

        <input id="tab3" type="radio" name="tabs" />
        <label htmlFor="tab3">Complaint</label>

        <input id="tab4" type="radio" name="tabs" />
        <label htmlFor="tab4">Submit Marks</label>

        <section id="content1">
          <iframe style={{width:'100%', height:'520px'}}
            src="https://docs.google.com/forms/d/e/1FAIpQLSfQPwVwo1ypbufJIquj28Ip0XgW--_NW_tMu6qDhZ8LmNDhJQ/viewform?embedded=true"
          >
            Loading...
          </iframe>
        </section>

        <section id="content2">
          <h1>Content 2</h1>
        </section>

        <section id="content3">
          <h1>Content 3</h1>
        </section>

        <section id="content4">
          <h1>Content 4</h1>
        </section>
      </div>
    </div>
  )
}
