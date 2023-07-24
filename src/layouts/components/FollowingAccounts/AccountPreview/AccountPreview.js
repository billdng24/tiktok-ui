import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f9c61d365cd0222639efa7443656b17~c5_100x100.jpeg?x-expires=1690120800&x-signature=2%2BeXt4nsT2eX%2FypMQVjXDjbtU6I%3D"
                    alt=""
                ></Image>
                <div>
                    <Button className={cx('follow-btn')} primary small>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname-wrapper')}>
                    <span className={cx('nickname')}>amthuchangnga</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Ẩm Thực Hằng Nga</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>160.8k </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>1.7M </strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
