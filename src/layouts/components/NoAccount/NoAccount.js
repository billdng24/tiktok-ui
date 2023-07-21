import classNames from "classnames/bind";
import styles from './NoAccount.module.scss';
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function NoAccount() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('desc')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button outline className={cx('desc-btn')} >Đăng nhập</Button>
        </div>
    );
}

export default NoAccount;