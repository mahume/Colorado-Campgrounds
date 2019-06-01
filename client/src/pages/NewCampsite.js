import React from 'react';

class NewCampsite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div className='form'>
      <form onSubmit={this.handleSubmit}>
      <div className='formRowOne'>
        <label className='formInputLabel'>
          Campsite Name:
        </label>
          <input className='formInput' type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className='formRowTwo'>
        <label className='formInputLabel'>
          Latitude:
        </label>
          <input className='formInput' type="text" value={this.state.value} onChange={this.handleChange} />
      </div> 
      <div className='formRowThree'>
        <label className='formInputLabel'>
          Longitude:
        </label>
          <input className='formInput' type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className='formRowFour'>  
        <label>
          Amenities:
        </label>
      </div>
      <div className='formRowFive'>
        <label className='Amenity'>
          Space for Tent:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Space for Van:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Space for RV:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Water Source:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className='formRowSix'>
        <label className='Amenity'>
          Bathrooms:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Shower:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Kid Friendly:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Pet Friendly:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className='formRowSeven'>
        <label className='Amenity'>
          Wifi:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Fishing:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Hiking:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          River:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div className='formRowEight'>
        <label className='Amenity'>
          Lake:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Campfire Friendly:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Reservation/Permit Needed:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
        <label className='Amenity'>
          Free:
        </label>
          <input type="checkbox" value={this.state.value} onChange={this.handleChange} />
      </div>
      <div>
        <textarea className='newCampDescripArea' name="comment" form="usrform">Enter a brief description here...</textarea>
      </div>
      <div className='newCampFormSbmt'>
        <input type="submit" value="Submit" /> 
      </div>
      </form>
    </div>  
    );
  }
}

export default NewCampsite;