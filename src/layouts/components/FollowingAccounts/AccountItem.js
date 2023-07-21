import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './FollowingAccounts.module.scss';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f9c61d365cd0222639efa7443656b17~c5_100x100.jpeg?x-expires=1690120800&x-signature=2%2BeXt4nsT2eX%2FypMQVjXDjbtU6I%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <div className={cx('nickname-wrapper')}>
                    <span className={cx('nickname')}>amthuchangnga</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Ẩm Thực Hằng Nga</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
