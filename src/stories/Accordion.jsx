import React from 'react';
import PropTypes from 'prop-types';
import { Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import './Accordian.css';

/**
 * Primary UI component for user interaction
 */
export const Accordion1 = ({ data, size }) => {
  return (
    <Box className={`storybook-accordian--root storybook-accordian--${size}`}>
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
          >
            <Typography>{item?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

Accordion1.propTypes = {
  size: PropTypes.string,
  data: PropTypes.array,
};

Accordion1.defaultProps = {
  data: [],
  size: 'medium',
};
