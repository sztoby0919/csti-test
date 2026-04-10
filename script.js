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
        // 记录分数
        this.scores[option.dimension] += option.value;
        this.answers.push({
            question: this.currentQuestion + 1,
            dimension: option.dimension,
            value: option.value
        });
        
        // 下一题
        this.currentQuestion++;
        
        if (this.currentQuestion < questions.length) {
            this.displayQuestion();
        } else {
            this.showResult();
        }
    }

    calculateResult() {
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
        
        return {
            code: typeCode,
            dimensions: {
                dim1: { C: this.scores.C, S: this.scores.S },
                dim2: { F: this.scores.F, A: this.scores.A },
                dim3: { L: this.scores.L, B: this.scores.B },
                dim4: { M: this.scores.M, D: this.scores.D }
            }
        };
    }

    showResult() {
        const result = this.calculateResult();
        const typeData = personalityTypes[result.code];
        
        if (!typeData) {
            console.error('未找到类型数据:', result.code);
            return;
        }
        
        // 显示结果类型
        document.getElementById('result-type').textContent = result.code;
        document.getElementById('result-type').style.color = typeData.color;
        document.getElementById('result-name').textContent = typeData.emoji + ' ' + typeData.name;
        document.getElementById('type-description').textContent = typeData.description;
        document.getElementById('famous-players-text').textContent = typeData.famousPlayers;
        
        // 显示特点列表
        const traitsList = document.getElementById('traits-list');
        traitsList.innerHTML = '';
        typeData.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            traitsList.appendChild(li);
        });
        
        // 显示维度分析
        this.displayDimensionBars(result.dimensions);
        
        // 显示所有类型
        this.displayAllTypes(result.code);
        
        // 切换到结果页
        this.showPage('result-page');
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

    displayAllTypes(resultCode) {
        const container = document.getElementById('all-types-grid');
        container.innerHTML = '';
        
        // 显示所有可能的类型
        const displayTypes = Object.keys(personalityTypes);
        
        displayTypes.forEach(typeCode => {
            const typeData = personalityTypes[typeCode];
            if (!typeData) return;
            
            const card = document.createElement('div');
            card.className = 'type-card' + (typeCode === resultCode ? ' is-result' : '');
            card.innerHTML = `
                <div class="type-emoji">${typeData.emoji}</div>
                <div class="type-code">${typeCode}</div>
                <div class="type-name">${typeData.name}</div>
            `;
            container.appendChild(card);
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
