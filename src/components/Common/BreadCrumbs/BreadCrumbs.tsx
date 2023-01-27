import { Link } from 'react-router-dom';
import { BreadCrumbsProps } from './BreadCrumbs.type';

const BreadCrumbs = ({ crumsbData, classMod }: BreadCrumbsProps): JSX.Element => {
    return (
        <nav className={`bread-crumbs mb-3 ${classMod ?? ''}`}>
            {crumsbData.map(({ id, title, link }, i) => (
                crumsbData.length === i + 1
                    ? <span key={id} className="bread-crumbs_link">{title}</span>
                    : <Link key={id} className="bread-crumbs_link" to={link}>{title}</Link>
            ))}
        </nav>
    );
};

export { BreadCrumbs };
