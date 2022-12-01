import { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledSection } from './Section.styled';
import { Title } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterPositivePercentage() {
    return Number.parseInt((this.state.good / this.counterTotal(this.state)) * 100
    );
  }

  counterTotal = count =>
    Object.values(count).reduce((item, total) => item + total);

  onUpdateStates = e => {
    const name = e.currentTarget.name;  
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good = 0, neutral = 0, bad = 0,} = this.state;
    const totalCounter = this.counterTotal(this.state);
    const positivePercentageCounter = this.counterPositivePercentage();
    const message = 'There is no feedback'
    return (

      <StyledSection>
        <Title title={this.props.title} />
        <FeedbackOptions
          onLeaveFeedback={this.onUpdateStates}
          options={['good', 'neutral', 'bad']}
        />
        {totalCounter > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCounter}
            positivePercentage={positivePercentageCounter}
        
          />
        ) : (
          <Notification
            message={message}
          />)}
      </StyledSection>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};