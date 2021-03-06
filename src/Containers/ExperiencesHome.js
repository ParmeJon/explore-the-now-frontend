import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import CurrentExperience from '../Components/CurrentExperience'
import HistoryContainer from './HistoryContainer'

class ExperiencesHome extends React.Component {

  render() {
    return (
      <div className="current-task">
        <h1>Past Experiences</h1>
        {this.props.currentExperience ? <CurrentExperience currentExperience={this.props.currentExperience} currentActivity={this.props.currentActivity} handleSetCurrentExp={this.props.handleSetCurrentExp} handleExperienceCard={this.props.handleExperienceCard}/> : <HistoryContainer experiences={this.props.user.experiences} activities={this.props.user.activities} />}
      </div>
    )
  }
}

export default withRouter(ExperiencesHome)
