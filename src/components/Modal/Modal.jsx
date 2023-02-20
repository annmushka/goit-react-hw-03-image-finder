import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onClickEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onClickBackDrop = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEsc);
  }

  render() {
    const { id, largeImageURL, tags } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.onClickBackDrop}>
        <div className="Modal" key={id}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}
Modal.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
