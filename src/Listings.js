import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ShareBnbApi from "./Api";
import ListingCard from "./ListingCard";

/** Show page with list of listings.
 *
 * On mount, loads listings from API.
 * Re-loads filtered listings on submit from search form.
 *
 * This is routed to at /listings
 *
 * Routes -> Listings -> {SearchForm, ListingCard}
 */

function Listings() {
    const [listings, setListings] = useState(null);

    useEffect(function getListingsOnMount() {
        console.debug("Listings useEffect getListingsOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads listings. */
    async function search(searchTermsData) {
        let listings = await ShareBnbApi.getListings(searchTermsData);
        setListings(listings);
    }

    if (!listings) return <h1>Loading...</h1>;
    console.log("Listings component", listings)
    return (
        <div className="Listings col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {listings.length
                ? (
                    <div className="Listings-list">
                        {listings.map(l => (
                            <ListingCard
                                key={l.id}
                                id={l.id}
                                name={l.name}
                                city={l.city}
                                state={l.state}
                                country={l.country}
                                description={l.description}
                                photoUrl={l.photoUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="lead">Sorry, no results were found!</p>
                )}
        </div>
    );

}

export default Listings;