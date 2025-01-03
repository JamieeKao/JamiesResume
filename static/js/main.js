// 平滑滾動
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 時間軸動畫
    const timelineItems = document.querySelectorAll('#timeline');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
    };

    // 滾動觸發動畫功能（使用 handleScroll）
    const handleScroll = () => {
        const flipItems = document.querySelectorAll('.flip-item');
        const windowHeight = window.innerHeight;

        flipItems.forEach(item => {
            const rect = item.getBoundingClientRect();

            // 檢查元素是否進入視窗範圍
            if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            
            // 檢查時間軸元素是否進入視窗範圍
            if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    // 綁定滾動事件
    window.addEventListener('scroll', handleScroll);

    // 初始化檢查（確保加載後元素立即顯示）
    handleScroll();
});
