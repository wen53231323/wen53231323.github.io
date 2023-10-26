// 获取所有按钮元素
const btns = document.getElementsByClassName("btn");
// 对每个按钮进行遍历
Array.from(btns).forEach(btn => {
    // 为每个按钮添加点击事件监听器
    btn.addEventListener('click', () => {
        // 创建一个粒子数组和随机颜色
        const particles = [];
        const color = randomColor();

        // 创建一个粒子元素并设置类和样式
        const particle = document.createElement('span');
        particle.classList.add('particle', 'move');

        // 随机生成位置并设置粒子元素的样式
        const { x, y } = randomLocation();
        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);
        particle.style.background = color;
        btn.style.background = color;

        // 将粒子元素添加到按钮内并将其添加到粒子数组中
        btn.appendChild(particle);
        particles.push(particle);

        setTimeout(() => {
            // 循环创建更多的粒子元素
            for (let i = 0; i < 100; i++) {
                const innerP = document.createElement('span');
                innerP.classList.add('particle', 'move');
                innerP.style.transform = `translate(${x}, ${y})`;

                const xs = Math.random() * 200 - 100 + 'px';
                const ys = Math.random() * 200 - 100 + 'px';
                innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
                innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
                innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
                innerP.style.background = color;

                btn.appendChild(innerP);
                particles.push(innerP);
            }

            // 一定时间后移除所有粒子元素
            setTimeout(() => {
                particles.forEach(particle => {
                    particle.remove();
                });
            }, 1000);
        }, 1000);
    });
});

// 生成随机位置
function randomLocation() {
    return {
        x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
        y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
    };
}

// 生成随机颜色
function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}
