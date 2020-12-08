import React from 'react';
import Loading from '../components/Loading';
import Listing from '../components/Listing';
import { Button } from 'react-bootstrap';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { Redirect } from 'react-router-dom';
function PageButton(props) {
  return (
    <Button onClick={props.handlePageChange} key={props.key}>
      {props.pageNum}
    </Button>
  );
}

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      loading: true,
      currentPage: 1,
      prevQuery: '',
    };
  }

  handlePageChange(pageNum) {
    this.setState({
      currentPage: pageNum,
    });
  }

  createListings(currentPage, numListingsPerPage) {
    let currentPageListings = [];
    let firstListingNum = numListingsPerPage * (currentPage - 1);
    let rowListings = [];
    for (let listingNum = firstListingNum; listingNum < firstListingNum + numListingsPerPage; listingNum++) {
      rowListings.push(this.state.listings[listingNum]);
      if (rowListings.length === 3) {
        currentPageListings.push(<div className="row float-left w-75 mx-auto">{rowListings}</div>);
        rowListings = [];
      } else if (listingNum === firstListingNum + numListingsPerPage) {
        currentPageListings.push(<div className="row float-left w-75 mx-auto">{rowListings}</div>);
        rowListings = [];
      }
    }
    return currentPageListings;
  }

  createPageButtons(numPages, currentPage) {
    let pageButtons = [];
    let numPageButtonsPerPage = 9;
    let firstPage = currentPage - Math.floor(numPageButtonsPerPage / 2);
    let lastPage = firstPage + numPageButtonsPerPage - 1;

    if (firstPage < 1) {
      firstPage = 1;
      lastPage = Math.min(numPages, firstPage + numPageButtonsPerPage - 1);
    } else if (lastPage > numPages) {
      lastPage = numPages;
      firstPage = Math.max(1, lastPage - numPageButtonsPerPage + 1);
    }
    for (let pageNumber = firstPage; pageNumber <= lastPage; pageNumber++) {
      pageButtons.push(
        <PageButton handlePageChange={() => this.handlePageChange(pageNumber)} key={pageNumber} pageNum={pageNumber} />,
      );
    }
    return pageButtons;
  }

  componentDidMount() {
    const values = new URLSearchParams(this.props.location.search);
    console.log(values.get('q'));
    // console.log(values.get('page'));
    fetch('/api/items/search/' + values.get('q'))
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          loading: false,
          listings: items.map((p, ii) => <Listing {...p} handleAddCart={() => this.handleAddCart(p.id)} key={ii} />),
          prevQuery: values.get('q'),
        });
      })
      .catch((err) => console.log('API ERROR: ', err));
  }

  componentDidUpdate() {
    const values = new URLSearchParams(this.props.location.search);
    console.log(this.state.prevQuery);
    console.log(values.get('q'));
    console.log(values.get('page'));
    if (this.state.prevQuery !== values.get('q')) {
      fetch('/api/items/search/' + values.get('q'))
        .then((res) => res.json())
        .then((items) => {
          this.setState({
            loading: false,
            listings: items.map((p, ii) => <Listing {...p} key={ii} />),
            prevQuery: values.get('q'),
          });
        })
        .catch((err) => console.log('API ERROR: ', err));
    }
  }

  render() {
    const values = new URLSearchParams(this.props.location.search);
    if (!values.get('q')) return <Redirect to="/" />;

    if (this.state.loading) {
      return <Loading />;
    }

    let currentPage = this.state.currentPage;
    let numListingsPerPage = 9;
    let numPages = Math.ceil(this.state.listings.length / numListingsPerPage);

    let currentPageListings = this.createListings(currentPage, numListingsPerPage);
    let pageButtons = this.createPageButtons(numPages, currentPage);

    return (
      <div className="container-fluid text-center">
        <div className="row">{currentPageListings}</div>

        <div className="row justify-content-center m-2">{pageButtons}</div>
      </div>
    );
  }
}

export default SearchResultsPage;
