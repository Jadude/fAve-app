import React from 'react';

// COMPONENT for pagination
const PaginationControls = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
    return (
        <section className="fave__prevNext">
            {/* button to go to the previous page */}
            <button onClick={onPreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            {/* display current page number and total pages */}
            <p>Page {currentPage} of {totalPages}</p>
            {/* button to go to the next page */}
            <button onClick={onNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </section>
    );
};

export default PaginationControls;