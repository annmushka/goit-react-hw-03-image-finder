// const API_KEY = '33067692-1a5baf69be2ef609319513ff4';
import './styles.css';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { getImageService } from './services/images';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    isLoading: false,
    query: '',
    page: 1,
    total: 0,
    per_page: 12,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { query, per_page, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ status: 'loading' });
      try {
        const response = await getImageService(query, page, per_page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          total: response.total,
          status: 'fulfilled',
        }));
      } catch (error) {
        this.setState({ status: 'rejected' });
        throw new Error(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && !this.isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
