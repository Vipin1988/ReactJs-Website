import React from 'react';
import { useState } from 'react';

class Api extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          loading: true,
          data: []
        };
      }

    async componentDidMount(){
        const url="https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({data : data.info,loading:false});
        console.log(data.results);

    }
  
  render() {
    return (
        <div>
            
            {this.state.loading || !this.state.data ?(
                <div>Loading wait...</div>
            ): (
                <div>{this.state.data['seed']}</div>
            )}
            
        </div>
    );
  }
}
export default Api;
