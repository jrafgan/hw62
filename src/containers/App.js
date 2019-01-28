import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Footer from "../components/elements/footer/Footer";
import Header from "../components/elements/header/Header";
import LeftSideBar from "../components/elements/body_div/LeftSideBar";
import MainBar from "../components/elements/body_div/MainBar";
import Catalog from "../components/elements/body_div/Catalog";
import Advantage from "../components/elements/body_div/Advantage";
import Delivery from "../components/elements/body_div/Delivery";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <div className='Body'>
            <Header/>
            <div className='body_div'>
                <LeftSideBar/>
                <MainBar/>
            </div>
            <Footer/>
        </div>
    },
    {
        path: "/catalog",
        main: () => <div className='Body'>
            <Header/>
            <div className='body_div'>
                <LeftSideBar/>
                <Catalog/>
            </div>
            <Footer/>
        </div>
    },
    {
        path: "/advantage",
        main: () => <div className='Body'>
            <Header/>
            <div className='body_div'>
                <LeftSideBar/>
                <Advantage/>
            </div>
            <Footer/>
        </div>
    },
    {
        path: "/delivery",
        main: () => <div className='Body'>
            <Header/>
            <div className='body_div'>
                <LeftSideBar/>
                <Delivery/>
            </div>
            <Footer/>
        </div>
    }

];

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => (

                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
