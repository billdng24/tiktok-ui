import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faGear,
    faLanguage,
    faMagnifyingGlass,
    faMoon,
    faPlus,
    faSpinner,
    faUser,
    faStore,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { Coin, Mail, Message } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });

    // Handle logic
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                // Handle change item
                break;
            default:
        }
    };

    const UserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@ugny3u_b1lldng',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
        },
        {
            icon: <Coin />,
            title: 'Nhận xu',
            to: './coin'
        },
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            title: 'Bộ công cụ dành cho doanh nghiệp',
            to: './business-suite'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightToBracket} />,
            title: 'Đăng xuất',
            to: '/settings',
            separate: true,
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('innner')}>
                <img src={images.logo} alt="Tiktok" className={cx('logo')} />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy content='Tin nhắn' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <span><Message /></span>
                                </button>
                            </Tippy >
                            <Tippy content='Hộp thư' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <Mail />
                                    <span className={cx('badge')}>3</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu items={currentUser ? UserMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff319cefac2dce31ea2abbcf1c1f33ae~c5_720x720.jpeg?x-expires=1689555600&x-signature=Gy%2BM%2BCIKwmsUXMpEBZEpCAnKwjc%3D"
                                alt="avatar"
                                fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
