import React from 'react';

const Schedule = () => {
  return (
    <div class="schedule">
      <h1 className="schedule-title">Our Schedule</h1>
      <table className="schedule-table">
        <tr>
          <th className="schedule-table--offset"></th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <th>10:00-11:00</th>
          <td>HTML/CSS/JS 101</td>
          <td>React 101</td>
          <td>AWS DevOps</td>
        </tr>
        <tr>
          <th>11:00-12:30</th>
          <td>CSS Flexbox/Grid 101</td>
          <td>AWS Cloud</td>
          <td>React Hooks 101</td>
        </tr>
        <tr>
          <th>1:00-2:30</th>
          <td>Webpack NodeJS</td>
          <td>Angular 101</td>
          <td>AWS Developer</td>
        </tr>
        <tr>
          <th>3:00-4:30</th>
          <td>SASS/LESS</td>
          <td>AWS Security</td>
          <td>VueJs 101</td>
        </tr>
        <tr>
          <th>5:00-6:00</th>
          <td>NoSQL</td>
          <td>Tailwind CSS</td>
          <td>Wordpress</td>
        </tr>
        <tr>
          <th>6:00-7:30</th>
          <td>Back End w/ PHP</td>
          <td>Amazon Alexa</td>
          <td>NextJS</td>
        </tr>
      </table>
    </div>
  )
}

export default Schedule;
