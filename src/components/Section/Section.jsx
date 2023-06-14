import PropTypes from 'prop-types';
import { Sections, Text } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      {title && <Text>{title}</Text>}
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};