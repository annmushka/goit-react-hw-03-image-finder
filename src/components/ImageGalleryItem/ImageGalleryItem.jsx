import '../styles.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  handleToggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          onClick={this.handleToggleModal}
          src={webformatURL}
          alt={tags}
        />
        {this.state.isOpenModal && (
          <Modal
            className="Modal"
            largeImageURL={largeImageURL}
            closeModal={this.handleToggleModal}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
