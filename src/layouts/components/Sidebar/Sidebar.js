import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import { Compass, Home, Live, People } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<Home />} />
                <MenuItem title="Đang Follow" to={config.routes.following} icon={<People />} />
                <MenuItem title="Khám phá" to={config.routes.explore} icon={<Compass />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<Live />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
