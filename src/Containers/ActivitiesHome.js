import React from 'react';
import CreateTask from '../Components/CreateTask';
import SelectedActivityContainer from '../Components/SelectedActivityContainer';

class ActivitiesHome extends React.Component {

  state = {
    businesses: [],
    SelectedActivityContainer: null
  }

  handleInput = (userInput) => {
    fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${userInput.term}&location=${userInput.location}&open_now=true&radius=${userInput.radius}&price=${userInput.price}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': 'Bearer ' + `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(resp => resp.json())
      .then(businesses => this.setState({businesses: businesses.businesses}))
  }

  handleAddActivity = (activityInfo) => {
    this.setState({
      SelectedActivityContainer: activityInfo
    })
  }

  handleConfirmActivity = (activityInfo) => {
    fetch('http://localhost:3000/api/v1/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({activity: {term: activityInfo.categories[0].title, location: activityInfo.location.display_address.join(", ")}})
    }).then(resp => resp.json())
      .then(activity => {
        fetch('http://localhost:3000/api/v1/experiences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
          },
          body: JSON.stringify({experience: {date:Date.now(), user_id: this.props.user.id, activity_id: activity.id}})
        }).then(resp => resp.json())
          .then(console.log)
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="current-task">
        <h1>Tasks Home</h1>
        {this.state.SelectedActivityContainer ? <SelectedActivityContainer SelectedActivityContainer={this.state.SelectedActivityContainer} handleAddActivity={this.handleConfirmActivity} /> : <CreateTask user={this.props.user} handleInput={this.handleInput} businesses={this.state.businesses} handleAddActivity={this.handleAddActivity} />}
      </div>
    )
  }
}

export default ActivitiesHome