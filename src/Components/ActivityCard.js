import React from 'react';

class ActivityCard extends React.Component {

  render() {
    return (
      <div className="activity-card">
        <div className="card">
        <div className="thumbnail"><img className="left" src={this.props.business.image_url}/></div>
        <div className="right">
          <h1>{this.props.business.name}</h1>
          <div className="author">
            <h2>{this.props.business.categories[0].title}</h2>
          </div>
          <div className="separator"></div>
          <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
        </div>
        <ul><li><a href={this.props.business.url} target="_blank">Visit Website</a></li></ul>
        <div className="fab" onClick={() => this.props.handleAddActivity(this.props.business)}><i className={this.props.button}></i></div>
        </div>
      </div>
    )
  }
}

export default ActivityCard
