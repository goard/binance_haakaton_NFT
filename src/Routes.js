import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RouteWithLayout from "./utils/RouteWithLayout";
import DashboardLayout from "./layouts/Dashboard";
import MainLayout from "./layouts/Main";
import MarketView from "./views/Market";
import AccountView from "./views/Account";
import DashboardView from "./views/Dashboard";
import CreateView from "./views/Create";
import NotFoundView from "./views/NotFound/NotFoundView";
import TokenNftView from "./views/TokenNft";

const Routes = (props) => {
  const { bucket } = props;

  console.log(bucket);

  if (bucket) {
    return (
      <Switch>
        <RouteWithLayout
          path="/app/dashboard"
          exact
          component={DashboardView}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path="/app/account"
          exact
          component={AccountView}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path="/app/create"
          exact
          component={CreateView}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path="/app/token/:id"
          exact
          component={TokenNftView}
          layout={DashboardLayout}
        />
        <RouteWithLayout
          path="/404"
          exact
          component={NotFoundView}
          layout={MainLayout}
        />
        <Redirect exact to="/app/dashboard" />
      </Switch>
    );
  }
  return (
    <Switch>
      <RouteWithLayout
        path="/market"
        exact
        component={MarketView}
        layout={MainLayout}
      />
      <Redirect exact to="/market" />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  bucket: state.app.bucket,
});

export default connect(mapStateToProps)(Routes);
