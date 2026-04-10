// CSTI 测试逻辑
class CSTITest {
    constructor() {
        this.currentQuestion = 0;
        this.scores = {
            C: 0, // 枪法刚猛
            S: 0, // 老六阴人
            F: 0, // 白给送头
            A: 0, // 苟活保命
            L: 0, // 孤狼独狼
            B: 0, // 团队混子
            M: 0, // 战术大脑
            D: 0  // 无脑冲锋
        };
        this.answers = [];
        this.init();
    }

    init() {
        // 绑定按钮事件
        document.getElementById('start-btn').addEventListener('click', () => this.startTest());
        document.getElementById('retake-btn').addEventListener('click', () => this.retakeTest());
        document.getElementById('share-btn').addEventListener('click', () => this.showShareModal());
        document.querySelector('.close-modal').addEventListener('click', () => this.hideShareModal());
        document.getElementById('copy-btn').addEventListener('click', () => this.copyResult());
        
        // 点击模态框外部关闭
        document.getElementById('share-modal').addEventListener('click', (e) => {
            if (e.target.id === 'share-modal') {
                this.hideShareModal();
            }
        });
        
        // 显示首页
        this.showPage('home-page');
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        window.scrollTo(0, 0);
    }

    startTest() {
        this.currentQuestion = 0;
        this.resetScores();
        this.showPage('quiz-page');
        this.displayQuestion();
    }

    resetScores() {
        this.scores = { C: 0, S: 0, F: 0, A: 0, L: 0, B: 0, M: 0, D: 0 };
        this.answers = [];
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        
        // 更新进度
        document.getElementById('current-q').textContent = this.currentQuestion + 1;
        document.getElementById('total-q').textContent = questions.length;
        document.getElementById('progress').style.width = ((this.currentQuestion / questions.length) * 100) + '%';
        
        // 显示题目
        document.getElementById('question-text').textContent = question.text;
        
        // 显示选项
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.addEventListener('click', () => this.selectOption(option));
            container.appendChild(btn);
        });
    }

    selectOption(option) {
        console.log('选择题目:', this.currentQuestion + 1, '选项维度:', option.dimension);
        
        // 记录分数
        this.scores[option.dimension] += option.value;
        this.answers.push({
            question: this.currentQuestion + 1,
            dimension: option.dimension,
            value: option.value
        });

        // 下一题
        this.currentQuestion++;
        console.log('当前题目进度:', this.currentQuestion, '/', questions.length);

        if (this.currentQuestion < questions.length) {
            this.displayQuestion();
        } else {
            console.log('所有题目完成，准备显示结果');
            try {
                this.showResult();
            } catch (error) {
                console.error('显示结果时出错:', error);
                alert('显示结果时出错：' + error.message + '\n请刷新页面重试');
            }
        }
    }

    calculateResult() {
        console.log('开始计算结果，当前分数:', JSON.stringify(this.scores));
        
        // 计算四个维度的结果
        // 第一维度: C(枪法刚猛) vs S(老六阴人)
        const dim1 = this.scores.C >= this.scores.S ? 'C' : 'S';
        
        // 第二维度: F(白给送头) vs A(苟活保命)
        const dim2 = this.scores.F >= this.scores.A ? 'F' : 'A';
        
        // 第三维度: L(孤狼独狼) vs B(团队混子)
        const dim3 = this.scores.L >= this.scores.B ? 'L' : 'B';
        
        // 第四维度: M(战术大脑) vs D(无脑冲锋)
        const dim4 = this.scores.M >= this.scores.D ? 'M' : 'D';
        
        const typeCode = dim1 + dim2 + dim3 + dim4;
        console.log('四个维度结果:', dim1, dim2, dim3, dim4);
        console.log('最终类型代码:', typeCode);
        
        // 计算与所有类型的相似度
        const similarities = this.calculateSimilarities();
        
        return {
            code: typeCode,
            dimensions: {
                dim1: { C: this.scores.C, S: this.scores.S },
                dim2: { F: this.scores.F, A: this.scores.A },
                dim3: { L: this.scores.L, B: this.scores.B },
                dim4: { M: this.scores.M, D: this.scores.D }
            },
            similarities: similarities
        };
    }
    
    // 计算与所有类型的相似度
    calculateSimilarities() {
        const allTypes = Object.keys(personalityTypes);
        const similarities = [];
        
        allTypes.forEach(typeCode => {
            // 计算4个字符中有多少个匹配
            let matchCount = 0;
            if (typeCode[0] === this.getDim1()) matchCount++;
            if (typeCode[1] === this.getDim2()) matchCount++;
            if (typeCode[2] === this.getDim3()) matchCount++;
            if (typeCode[3] === this.getDim4()) matchCount++;
            
            const similarity = Math.round((matchCount / 4) * 100);
            similarities.push({
                code: typeCode,
                similarity: similarity,
                data: personalityTypes[typeCode]
            });
        });
        
        // 按相似度排序
        similarities.sort((a, b) => b.similarity - a.similarity);
        
        return similarities;
    }
    
    getDim1() { return this.scores.C >= this.scores.S ? 'C' : 'S'; }
    getDim2() { return this.scores.F >= this.scores.A ? 'F' : 'A'; }
    getDim3() { return this.scores.L >= this.scores.B ? 'L' : 'B'; }
    getDim4() { return this.scores.M >= this.scores.D ? 'M' : 'D'; }

    showResult() {
        console.log('=== showResult 开始执行 ===');
        console.log('personalityTypes 是否存在:', typeof personalityTypes);
        console.log('personalityTypes 的键:', Object.keys(personalityTypes));
        
        const result = this.calculateResult();
        console.log('计算结果:', result);
        console.log('类型代码:', result.code);
        
        const typeData = personalityTypes[result.code];
        console.log('找到的类型数据:', typeData);

        if (!typeData) {
            console.error('未找到类型数据:', result.code);
            console.log('所有可用的类型:', Object.keys(personalityTypes));
            alert('测试出现异常，类型代码: ' + result.code + '，请重新测试');
            this.retakeTest();
            return;
        }
        
        console.log('开始填充结果页面...');
        
        // 显示结果类型
        document.getElementById('result-type').textContent = result.code;
        document.getElementById('result-type').style.color = typeData.color;
        document.getElementById('result-name').textContent = typeData.emoji + ' ' + typeData.name;
        document.getElementById('type-description').textContent = typeData.description;
        
        // 显示特点列表
        const traitsList = document.getElementById('traits-list');
        traitsList.innerHTML = '';
        typeData.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            traitsList.appendChild(li);
        });
        
        // 显示真实写照
        const funText = document.getElementById('fun-text');
        if (funText) {
            funText.textContent = typeData.fun;
        }
        
        console.log('显示维度分析...');
        // 显示维度分析
        this.displayDimensionBars(result.dimensions);
        
        console.log('显示相似度分析...');
        // 显示相似度分析
        this.displaySimilarities(result.similarities, result.code);
        
        console.log('切换到结果页...');
        // 切换到结果页
        this.showPage('result-page');
        console.log('=== showResult 执行完成 ===');
    }
    
    displaySimilarities(similarities, resultCode) {
        const container = document.getElementById('similarities-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        // 显示前5个最相似的类型
        const top5 = similarities.slice(0, 5);
        
        top5.forEach(item => {
            const div = document.createElement('div');
            div.className = 'similarity-item' + (item.code === resultCode ? ' is-result' : '');
            
            const similarityPercent = item.similarity;
            const barWidth = similarityPercent + '%';
            
            div.innerHTML = `
                <div class="similarity-header">
                    <span class="similarity-code">${item.data.emoji} ${item.code} - ${item.data.name}</span>
                    <span class="similarity-percent">${similarityPercent}%</span>
                </div>
                <div class="similarity-bar-container">
                    <div class="similarity-bar" style="width: ${barWidth}; background: ${item.data.color};"></div>
                </div>
            `;
            container.appendChild(div);
        });
    }

    displayDimensionBars(dimensions) {
        const container = document.getElementById('dimension-bars');
        container.innerHTML = '';

        const dimData = [
            { name: 'Combat (战斗风格)', left: 'C - 枪法刚猛', right: 'S - 老六阴人', leftScore: dimensions.dim1.C, rightScore: dimensions.dim1.S },
            { name: 'Survival (生存策略)', left: 'F - 白给送头', right: 'A - 苟活保命', leftScore: dimensions.dim2.F, rightScore: dimensions.dim2.A },
            { name: 'Teamwork (团队风格)', left: 'L - 孤狼独狼', right: 'B - 团队混子', leftScore: dimensions.dim3.L, rightScore: dimensions.dim3.B },
            { name: 'Intellect (思维方式)', left: 'M - 战术大脑', right: 'D - 无脑冲锋', leftScore: dimensions.dim4.M, rightScore: dimensions.dim4.D }
        ];

        dimData.forEach(dim => {
            const total = dim.leftScore + dim.rightScore;
            const leftPercent = total > 0 ? (dim.leftScore / total) * 100 : 50;

            const barDiv = document.createElement('div');
            barDiv.className = 'dimension-bar';
            barDiv.innerHTML = `
                <div class="dim-header">
                    <span class="dim-name">${dim.name}</span>
                </div>
                <div class="bar-container">
                    <div class="bar-fill" style="width: ${leftPercent}%; background: linear-gradient(90deg, #ff6b6b, #4ecdc4);"></div>
                </div>
                <div class="dim-header">
                    <span class="dim-value">${dim.left} (${Math.round(leftPercent)}%)</span>
                    <span class="dim-value">${dim.right} (${Math.round(100 - leftPercent)}%)</span>
                </div>
            `;
            container.appendChild(barDiv);
        });
    }

    showShareModal() {
        const result = this.calculateResult();
        const typeData = personalityTypes[result.code];
        
        const shareText = `🎮 CSTI CS人格测试结果 🎮

我的CSTI类型是: ${result.code} - ${typeData.emoji} ${typeData.name}

${typeData.description}

特点:
${typeData.traits.map(t => '• ' + t).join('\n')}

推荐武器: ${typeData.weapons}

来测试你的CS人格类型吧！`;
        
        document.getElementById('share-text').textContent = shareText;
        document.getElementById('share-modal').classList.add('active');
    }

    hideShareModal() {
        document.getElementById('share-modal').classList.remove('active');
    }

    copyResult() {
        const text = document.getElementById('share-text').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('copy-btn');
            const originalText = btn.textContent;
            btn.textContent = '✓ 已复制！';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        });
    }

    retakeTest() {
        this.currentQuestion = 0;
        this.resetScores();
        this.showPage('home-page');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.cstiTest = new CSTITest();
});
