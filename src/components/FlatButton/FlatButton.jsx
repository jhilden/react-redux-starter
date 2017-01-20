import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import classNames from 'classnames';

import Styles from './FlatButton.sass';

/**
 * FlatButton
 */
export default class FlatButton extends Component {
  handleOnClick = ::this.handleOnClick;
  handleMouseEnter = ::this.handleMouseEnter;
  handleMouseLeave = ::this.handleMouseLeave;

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  state = {
    class: ''
  }

  handleOnClick(event) {
    this.props.onClick(event);
  }

  handleMouseEnter() {
    this.setState({class: 'is-hovered'});
  }

  handleMouseLeave() {
    this.setState({class: ''});
  }

  render() {
    return (
      <div
        className={classNames(Styles.FlatButton, this.state.class)}
        onClick={this.handleOnClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}
