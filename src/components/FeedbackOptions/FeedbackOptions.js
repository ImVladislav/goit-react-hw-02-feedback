import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <Container>
            {options.map((option, index) => (
                <Button
                    key={index}
                    name={option}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {option}
                </Button>
            ))}
        </Container>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
