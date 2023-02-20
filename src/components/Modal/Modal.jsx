import { Component } from 'react';
import { createPortal } from 'react-dom';

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
    const { id, largeImage, tag } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.onClickBackDrop}>
        <div className="Modal" key={id}>
          <img src={largeImage} alt={tag} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}
