import Header from './components/header';
import SideNav from './components/sidenav';
import Dashboard from './pages/dashboard';
import Invoice from './pages/invoice';
import Customer from './customer/index';
import Product from './product/index';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper d-flex vh-100 ">
        <Route path="/" component={SideNav} />
        <div className="main d-flex flex-column flex-grow-1 ">
          <Switch>
            <Route path="/invoice" render={() => <Header title={"Invoices"} />} />
            <Route path="/product" render={() => <Header title={"Products"} />} />
            <Route path="/customer" render={() => <Header title={"Customers"} />} />
            <Route path="/dashboard" render={() => <Header title={"Dashboard"} />} />
            <Redirect path="/" to="/dashboard" />
          </Switch>
          <div className="content container-fluid p-4 overflow-auto ">
            <Switch>
              <Route path="/invoice" component={Invoice} />
              <Route path="/product" component={Product} />
              <Route path="/customer" component={Customer} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </div >
    </BrowserRouter>

  );
}

export default App;
