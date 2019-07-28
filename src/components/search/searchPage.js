import React from "react";
import { Link } from "react-router-dom";
import PieComponent from "./PieComponent";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
      // json: []

    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    /*working code*/
    // fetch('../../../tools/db.json')
    //   .then(results =>{
    //     return results.json()
    //     .then((data => console.log('db data is ',data)))
    //   });
    /*working code*/
    fetch('../../../tools/db.json')
      .then(results => {
        return results.json()
          .then(data => {
            console.log('data is ', data);
            this.setState({
              users: data.courses
            });
          })
      })

    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  /* handleClick(e) {
     e.preventDefault();
     console.log('The link was clicked.');
   } */

  render() {
    let _users = this.state.users;
    _users.sort(function (a, b) {

      return parseInt(b.NOS) - parseInt(a.NOS);
    })
    console.log(_users);
    /* _users.sort((x,y) => {
     var xInt = new Number(x.courses.NOS.substring(1,x.length));
     var yInt = new Number(y.courses.NOS.substring(1,x.length)); 
     return xInt - yInt;
    });  */
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function (user) {

        //console.log(array);
        return user.title.toLowerCase().match(search);
      });
    }

    return (
      <div className="search">
        <h3>Search Issue</h3>
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-3">
            <PieComponent users={this.state.users} />
          </div>
        </div>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type issue description here"
          />
          <ul>
            {_users.map(l => {
              /* console.log('',_users); */
              return (
                <li>
                  {/* NO. OF SEARCH:{l.NOS} Title:{l.title} Bug id:{l.id} */}
                  <p><Link to={"/course/" + l.slug}>BUG ID:{l.id}</Link></p>
                  Weight:{l.NOS++} <td></td> Title:{l.title}
                </li>

              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}



export default Search;
