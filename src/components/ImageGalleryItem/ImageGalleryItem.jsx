import '../styles.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

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
            largeImage={largeImageURL}
            closeModal={this.handleToggleModal}
          />
        )}
      </li>
    );
  }
}
