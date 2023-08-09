import React, { useState } from "react";
import {
  Box,
  Button,
  Grommet,
  grommet,
  Header,
  Page,
  PageContent,
  PageHeader,
  Text,
} from "grommet";
import { Moon, Sun } from "grommet-icons";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

function App() {
  const [dark, setDark] = useState(false);
  const AppBar = (props) => (
    <Header
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      {...props}
    />
  );

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="large">Grommet/React Starter Kit</Text>
          <Button
            a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
              content: (
                <Box
                  pad="small"
                  round="small"
                  background={dark ? "dark-1" : "light-3"}
                >
                  {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Box>
              ),
              plain: true,
            }}
          />
        </AppBar>
        <PageContent>
          <PageHeader title="Welcome to Grommet!" />
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
