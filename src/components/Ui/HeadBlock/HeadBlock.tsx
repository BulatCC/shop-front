import { BreadCrumbs } from '../../Common/BreadCrumbs/BreadCrumbs';
import { Img } from '../../Common/Img/Img';

import { mockCrumbsData } from '../../../api/mocks';

const HeadBlock = (): JSX.Element => {
    return (
        <div className="head-block hidden-mobile mb-3">
            <div className="container head-block_container">
                <div className="head-block_wrap">
                    <BreadCrumbs crumsbData={mockCrumbsData} />
                    <h2 className="head-block_title">Denim Collection <br /> Fall 2023</h2>
                </div>
                <div className="head-block_picture-wrap">
                    <Img imgPath='head-block' className='head-block_img' width="294" height="260" />
                </div>
            </div>
        </div>
    );
};

export { HeadBlock };
