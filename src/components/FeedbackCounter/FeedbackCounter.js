import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './FeedBackCounter.styled';
import { Title } from 'components/Title/Title';

export class FeedBackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  render() {


    return (
      <StyledSection>
        <Title title={this.props.title} />
      </StyledSection>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
