import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "50",
    flexShrink: 0,
  },
}));

export default function SimpleAccordion({ directions }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {directions.map((direction, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {direction.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List style={{ width: "100%" }}>
                {direction.instructions.map(
                  (instruction, instructionsIndex) => {
                    return (
                      <div key={instructionsIndex}>
                        <ListItem>
                          <Typography>{instruction}</Typography>
                        </ListItem>
                        <Divider />
                      </div>
                    );
                  }
                )}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
      {/* {directions.map((item, index) => {
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                {item.instructions.map((instruction, indexInstruction) => {
                  <li key={indexInstruction}>{instruction}</li>;
                })}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>;
      })} */}
    </div>
  );
}

SimpleAccordion.propTypes = {
  directions: PropTypes.arrayOf(PropTypes.object),
};
