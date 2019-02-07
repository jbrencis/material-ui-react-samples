https://kamranicus.com/posts/2017-09-02-dynamic-import-material-icons-react
//async
import { asyncComponent } from "react-async-component";

  const iconName = icon.replace(/Icon$/, "");
  const resolvedEl = React.createElement(
    asyncComponent({
      resolve: () =>
        import(/* webpackMode: "eager" */
        `@material-ui/icons/${iconName}`),
    })
  );

//=======================================OR==================================================================
//=========================================================================================================

const iconName = icon.replace(/Icon$/, "");
  const resolved = require(`@material-ui/icons/${iconName}`).default;

  if (!resolved) {
    throw Error(`Could not find material-ui/${icon}`);
  }

  const resolvedEl = React.createElement(resolved);
