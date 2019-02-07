import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AppContext } from "../../App";
import { StandardPage } from "../../components/StandardPage/StandardPage";

import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import { routeCodes } from "../../constants/routes";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: "100%";
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  link: {
    textDecoration: "none",
  },
}));

export const Login = () => {
  const { setIsAutorized } = useContext(AppContext);
  const classes = useStyles();

  const handleLogin = () => {
    setIsAutorized(true);
  };

  return (
    <StandardPage title="Welcome to ambrite Cloud">
      <Wrapper>
        <ContentWrapper>
          <Link to={routeCodes.HOME.route} className={classes.link}>
            <Fab
              onClick={handleLogin}
              variant="extended"
              className={classes.fab}
              color="primary"
            >
              <NavigationIcon className={classes.extendedIcon} />
              Sign in with Google
            </Fab>
          </Link>
        </ContentWrapper>
      </Wrapper>
    </StandardPage>
  );
};
