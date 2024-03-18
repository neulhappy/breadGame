import React from 'react';
import { useMediaQuery } from 'react-responsive';

const App = () => {
    // 미디어 쿼리 정의
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <div>
            <header>
                {isDesktopOrLaptop && <p>데스크톱 또는 랩톱 화면입니다.</p>}
                {isTabletOrMobile && <p>태블릿 또는 모바일 화면입니다.</p>}
            </header>
            <main>
                <p>여기는 메인 콘텐츠가 위치합니다.</p>
            </main>
        </div>
    );
}

export default App;
