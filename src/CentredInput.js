import React from 'react';
import './CentredInput.css';

class CentredInput extends React.Component {
  componentDidMount() {
    const label = document.createElement('label');
    label.classList.add('CentredInput-label');
    label.textContent = this.props.placeholder;
    document.body.appendChild(label);
    const { width } = label.getBoundingClientRect();
    document.body.removeChild(label);
    this.input.dataset.width = `${width}px`;
  }

  setWidth = () => {
    if (this.input.value) {
      this.clearWidth();
    } else {
      this.input.style.width = this.input.dataset.width;
    }
  }

  clearWidth = () => {
    this.input.style.width = '';
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="CentredInput">
        <input
          className="CentredInput-input" placeholder={placeholder}
          onInput={this.setWidth} onFocus={this.setWidth}
          onBlur={this.clearWidth} ref={(el) => { this.input = el; }} />
      </div>
    );
  }
}

export default CentredInput;
