/// Stores all the routes to clean up the App component

import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import SnackOrBoozeApi from "./Api";
import FoodForm from "./FoodForm";

const Routes = () => {
    const INITIAL_STATE = {
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
        type: "snack"
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getItems() {
            let snacks = await SnackOrBoozeApi.getSnacks();
            let drinks = await SnackOrBoozeApi.getDrinks();
            setDrinks(drinks);
            setSnacks(snacks);
            setIsLoading(false);
        }
        getItems();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    const addSnack = (snackData) => {
        setSnacks(items => [...items, snackData])
    }

    const addDrink =  (drinkData) => {
        setDrinks(items => [...items, drinkData])
    }

    const onChange = e => {
        let {name, value} = e.target;
        setFormData(fD => ({
            ...fD,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.id = formData.name.toLocaleLowerCase()
        let temp = formData;
        if(formData.type === "snack"){
            addSnack(formData)
        } else {
            addDrink(formData)
        }
        setFormData(INITIAL_STATE);
        history.push(`/${temp.type}s/${temp.id}`)
    }

    return (
        <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} type="snacks" title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks}  cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} type="drinks" title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/new">
                <FoodForm onChange={onChange} handleSubmit={handleSubmit} formData={formData}/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
    )
}

export default Routes;