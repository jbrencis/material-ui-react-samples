/* https://material-ui.com/customization/themes/#palette */

import React from "react";
import CardGeneric from "./CardGeneric";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";

// Non-dependent styles
// const styles = createStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
// });

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: spacing.unit,
      backgroundColor: palette.background.default,
      color: palette.primary.main,
      // color: palette.secondary.main,
    },
  });

interface Props extends WithStyles<typeof styles> {}

const CardExample = ({ classes }: Props) => (
  <CardGeneric className={classes.root}>
    <p>test</p>
  </CardGeneric>
);

export default withStyles(styles)(CardExample);
