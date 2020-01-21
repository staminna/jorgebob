import React from 'react';

class Bobs extends React.Component {
    render() {
            const filteredData = this.props.dataFromInput;
            return (
              <div>
                <div className="container">
                  <div className="row justify-content-md-center">
                    {filteredData && filteredData.map(item => (
                      <div className="col-md-4 col-xs-6" key={item.id}>
                      <div className="card">
                        <img className="card-img-top img-fluid" src={item.thumbnail} alt={item.age}/>
                        <div className="card-block">
                          <h5 className="card-title"> {item.name} </h5>
                          <p className="card-text"> <small className="text-muted">Friends: {item.bags} </small> </p>
                        </div>
                      </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
          );
        }
    }

export default Bobs;