import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CivilianList } from "./civilian/CivilianList";
import { CivilianCreate } from "./civilian/CivilianCreate";
import { CivilianEdit } from "./civilian/CivilianEdit";
import { CivilianShow } from "./civilian/CivilianShow";
import { DistressSignalList } from "./distressSignal/DistressSignalList";
import { DistressSignalCreate } from "./distressSignal/DistressSignalCreate";
import { DistressSignalEdit } from "./distressSignal/DistressSignalEdit";
import { DistressSignalShow } from "./distressSignal/DistressSignalShow";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { CopList } from "./cop/CopList";
import { CopCreate } from "./cop/CopCreate";
import { CopEdit } from "./cop/CopEdit";
import { CopShow } from "./cop/CopShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CivilianCopService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Civilian"
          list={CivilianList}
          edit={CivilianEdit}
          create={CivilianCreate}
          show={CivilianShow}
        />
        <Resource
          name="DistressSignal"
          list={DistressSignalList}
          edit={DistressSignalEdit}
          create={DistressSignalCreate}
          show={DistressSignalShow}
        />
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="Cop"
          list={CopList}
          edit={CopEdit}
          create={CopCreate}
          show={CopShow}
        />
      </Admin>
    </div>
  );
};

export default App;
