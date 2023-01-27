const Pagination = (): JSX.Element => {
    return (
        <div className="pagination">
            <p className="pagination_text" style={{ '--pagination-width': '20%' } as React.CSSProperties}>Showing 9 of 45 items</p>
            <button className="button pagination_button" type="button">Load more</button>
        </div>
    );
};

export { Pagination };
