import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import Menu, { MenuItem } from './Menu';
import { Compass, Home, Live, People } from '~/components/Icons';
import FollowingAccounts from '~/layouts/components/FollowingAccounts';
import NoAccount from '~/layouts/components/NoAccount'

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<Home />} />
                <MenuItem title="Đang Follow" to={config.routes.following} icon={<People />} />
                <MenuItem title="Khám phá" to={config.routes.explore} icon={<Compass />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<Live />} />
            </Menu>
            {currentUser ? (
                <FollowingAccounts label="Các tài khoản đang follow" />
            ) : (
                <NoAccount />
            )}
        </aside>
    );
}

export default Sidebar;
