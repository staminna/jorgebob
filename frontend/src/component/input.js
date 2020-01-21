import React from 'react';
import { connect } from 'react-redux';
import '../layout.css'

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: "",
          data: [],
          filteredData: ''
        };
    }

    handleChange = event => {
      this.setState({ filter: event.target.value });
      this.setState((state, props) => ({
        data: this.props.myData.Brastlewark
      }))
    };

    render() {

      const { filter } = this.state;
      return (
        <div className="header">
          <h2>
            {this.props.isFetching && <div>Loading...</div>}
          </h2>
          <div className="infobox">
            {!this.props.isFetching && <div>Search for Bobs in the vilage by typing into the search box above. </div>}
          </div>
        </div>
        )
    }

}

const mapStateToProps = ({response: { myData, isFetching }}) => ({
  myData,
  isFetching,
});


export default connect(mapStateToProps)(InputText);