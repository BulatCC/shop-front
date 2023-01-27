const ButtonsChoose = (): JSX.Element => {
    return (
        <nav className="buttons-choose">
            <ul className="buttons-choose_list scrollable">
                <li className="buttons-choose_item">
                    <a className="buttons-choose_link active" href="#">Woman</a>
                </li>
                <li className="buttons-choose_item">
                    <a className="buttons-choose_link" href="#">Man</a>
                </li>
            </ul>
        </nav>
    );
};

export { ButtonsChoose };
