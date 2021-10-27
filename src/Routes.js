import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import Listings from "./Listings";
import Listing from "./Listing";
import NewListingForm from "./NewListingForm";

/** Site-wide routes. Visiting a non-existant route
 *  redirects to the homepage.
 *  
 *  Props: 
 *  - None
 * 
 *  State:
 *  - None
 * 
 *  App -> Routes 
 *          -> { Homepage, Listing, Listings, NewListingForm }
 * 
 */
function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>

            <Route exact path="/listings">
                <Listings />
            </Route>

            <Route exact path="/listings/:id">
                <Listing />
            </Route>

            <Route exact path="/addListing">
                <NewListingForm />
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;