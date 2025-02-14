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
    const experienceItems = document.querySelectorAll('.experience-item, .timeline-item');
    const skillItems = document.querySelectorAll('.Skill-grid li')
    const languageItems = document.querySelectorAll('.language-list li')

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

        experienceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            
            // 檢查元素是否進入視窗範圍
            if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
                item.classList.add('experience-visible');
            } else {
                item.classList.remove('experience-visible');
            }
        });

        skillItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // 檢查元素是否進入視窗範圍
            if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
                item.classList.add('skill-visible');
            } else {
                item.classList.remove('skill-visible');
            }
        });

        languageItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // 檢查元素是否進入視窗範圍
            if (rect.top <= windowHeight * 0.9 && rect.bottom >= 0) {
                item.classList.add('language-visible');
            } else {
                item.classList.remove('language-visible');
            }

         });
    };

    // 綁定滾動事件
    window.addEventListener('scroll', handleScroll);

    // 初始化檢查（確保加載後元素立即顯示）
    handleScroll();
});

/*處理導覽列問題*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight - 10,
          behavior: "smooth"
        });
      }
    });
  });
  