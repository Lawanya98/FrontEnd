import React, { Component } from "react";
import data from "./data.json";
import "./Filter.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Filter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      itemsToDisplay: [],
      itemsToUse: [],
      locations: [],
      search: null,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="row">
              <div className="col-lg">
                <b> Choose a location :</b> &nbsp;
                <br />
                <br />
                <select id="itemfilter" onChange={this.optionSelected}>
                  <option value="any">Any Location</option>

                  {this.state.locations.map((location) => {
                    return <option value={location}>{location}</option>;
                  })}
                </select>
              </div>
              <div className="col-lg">
                <div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br></br>
                    <b> Choose a Type:</b> &nbsp;
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-10">
            <div className="container">
              <label className="search-label" htmlFor="search-input">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  onChange={(e) => this.searchSpace(e)}
                />
                <i className="fa fa-search search-icon" />
              </label>
            </div>
            <div className="itemfilter"></div>

            <div className="restcontainer">
              {this.state.itemsToDisplay.map((item) => {
                let locations = item["Location"]
                  .substring(1, item["Location"].length - 2)
                  .split(",");
                let Itemdetails = {
                  name: item["Name"],
                  ratings: item["Number of Reviews"],
                  location: item["Location"],
                  ranking: item["Ranking"],
                };

                return (
                  <div className="item">
                    <div className="restinfo">
                      <i
                        className="fas fa-map-marker"
                        style={{ color: "orangered", fontSize: "12px" }}
                      ></i>
                      &nbsp;
                      <br />
                      <Link
                        to={{ pathname: "/details", data: Itemdetails }}
                        className="link textdec"
                      >
                        <span className="itemname"> {item["Name"]}</span>

                        <div className="itemLocation">
                          <br />
                          <b> Available Locations:</b>
                          {locations.map((location) => {
                            let locationToshow = location.substring(
                              0,
                              location.length
                            );
                            locationToshow = locationToshow.includes("")
                              ? locationToshow.substring(
                                  1,
                                  locationToshow.length
                                )
                              : locationToshow;
                            return (
                              <div
                                pill
                                className="itemLocation"
                                variant="light"
                              >
                                {locationToshow}
                              </div>
                            );
                          })}
                        </div>
                      </Link>
                    </div>

                    <div>
                      <i style={{ fontSize: "15px" }} className="itemName"></i>{" "}
                      Reviews &nbsp;
                      {item["Number of Reviews"]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  filterOnSearch = (event) => {
    if (
      !event.target.value ||
      event.target.value === " " ||
      event.target.value === ""
    )
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(
        (item) =>
          item["Name"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          item["Location"]
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  optionSelected = () => {
    var e = document.getElementById("itemfilter");
    var selected = e.options[e.selectedIndex].text;

    if (selected === "Choose Any")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter((item) =>
        item["Location"].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });

    if (this.state.search == null)
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter((item) =>
        item["Name"].toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  componentDidMount() {
    this.reRenderList();
  }

  reRenderList() {
    var locations = [];
    var itemsToDisplay = [];
    for (var i = 0; i < data.length; i++) {
      itemsToDisplay.push(data[i]);
      data[i]["Location"]
        .substring(1, data[i]["Location"].length - 2)
        .split(",")
        .forEach((location) => {
          let c = location.substring(1, location.length);

          if (locations.indexOf(c) < 0) {
            locations.push(c);
          }
        });
    }

    this.setState({ locations });

    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}

export default Filter;
