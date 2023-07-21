import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './FollowingAccounts.module.scss'

import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>Xem thêm</p>
        </div>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default FollowingAccounts;