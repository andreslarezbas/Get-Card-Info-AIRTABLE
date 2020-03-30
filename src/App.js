import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {
  state = {
    covid: ''
  }

  getCovidData = () => {
    axios.get(`https://api.airtable.com/v0/appx4wP2PAcscbpFz/Projects%20and%20Initiatives?api_key=keyq3sfh3IOH4qf2g`)
    .then(res => {
        this.setState({covid: res.data.records});
    })
    .catch((error) => {
        console.log(error);
    })
  }

  componentDidMount(){
    this.getCovidData()
  }

  render() {
    const {covid} = this.state
    if (typeof(covid) === 'object') {
      const listCovid = covid.map((e) => 
        <>
          {e.fields["Post Title"]}
          {e.fields["Region"] || "N/A"}
          {e.fields[""]}
          {e.fields[""]}
          {e.fields["Link to Product"]}
          <br></br>
        </>
      ) 
      return (
        <div>
          {listCovid}
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default App
