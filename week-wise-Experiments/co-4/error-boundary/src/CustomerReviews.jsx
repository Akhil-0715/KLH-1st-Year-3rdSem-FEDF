function CustomerReviews() {
    const reviews = null;


    return (
        <div>
            <h3>Reviews</h3>
            {reviews.map(review => (
                <p>{review}</p>
            ))}
        </div>
    );
}
export default CustomerReviews;
