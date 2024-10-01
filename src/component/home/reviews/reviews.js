import React from "react";
import Contact from '../../includes/contact/contact';
import ReviewList from "../../includes/reviewlist/reviewlist";
import BePartner from "../../includes/bepartner/bepartner";
import Try from "../../includes/try/try";
import './reviews.css';

function Reviews() {
    return (
        <div className="home-reviews-container">
            <div className="container text-center">
                <ReviewList />
                <Try />
                <BePartner />
                <Contact />
            </div>
        </div>
    )
}

export default Reviews;