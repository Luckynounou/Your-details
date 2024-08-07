document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const answers = [];
    queryParams.forEach((value, key) => {
        answers.push(value);
    });

    const recommendations = {
        a: {
            type: 'دهنية',
            morning: [
                { img: 'p5.png', text: 'واقي شمس', url: 'https://iherb.co/AyeTNLYe' },
                { img: 'p14.jpeg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' }
            ],
            night: {
                routine: [
                    { img: 'p14.jpeg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },     
                    { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' }
                ],
                special: [
                    { img: 'Day 1.png' },
                    { img: 'Day 2.png' },
                    { img: 'Day 3.png' },
                    { img: 'Day 4.png' },
                    { img: 'Day 5.png' }
                ]
            }
        },
        b: {
            type: 'جافة',
            morning: [
                { img: 'p5.png', text: 'واقي شمس', url: 'https://iherb.co/y8qsfZTW' },
                { img: 'p6.png', text: 'مرطب', url: 'https://iherb.co/2ENeJaMg' },
                { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/JT7YfcZ' },
                
            ],
            night: {
                routine: [
                    { img: 'p6.png', text: 'مرطب', url: 'https://iherb.co/xjm78UNm' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/JT7YfcZ' },
                    { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/iGopBp9' },
                    
                ],
                special: [
                    { img: 'Day 1.png' },
                    { img: 'Day 2.png' },
                    { img: 'Day 3.png' },
                    { img: 'Day 4.png' },
                    { img: 'Day 5.png' }
                ]
            }
        },
        c: {
            type: 'مختلطة',
            morning: [
                { img: 'p5.png', text: 'واقي شمس', url: 'https://iherb.co/AyeTNLYe' },
                { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/2j63KVnA' }
            ],
            night: {
                routine: [
                    { img: 'p14.jpeg', text: 'مرطب', url: 'https://iherb.co/o6e1vQWq' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' },
                    
                ],
                special: [
                    { img: 'Day 1.png' },
                    { img: 'Day 2.png' },
                    { img: 'Day 3.png' },
                    { img: 'Day 4.png' },
                    { img: 'Day 5.png' }
                ]
            }
        },
        d: {
            type: 'حساسة',
            morning: [
                { img: 'p5.png', text: 'واقي شمس', url: 'https://iherb.co/VWwd2qG8' },
                { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/z3y7Xutn' },
                { img: 'p1.png', text: 'ترطيب/تقشير', url: 'https://iherb.co/QmK34cVe' }
            ],
            night: {
                routine: [
                    { img: 'p6.png', text: 'مرطب', url: 'https://iherb.co/mJPivu29' },
                    { img: '1.png', text: 'ريتينول', url: 'https://iherb.co/prRDMj4f' },
                    { img: 'p3.png', text: 'سيروم', url: 'https://iherb.co/8g2uJKS' },
                    { img: 'p7.png', text: 'منظف', url: 'https://iherb.co/XSbSkwNh' },
                   
                ],
                special: [
                    { img: 'DAY 1.png' },
                    { img: 'Day 2.png' },
                    { img: 'Day 3.png' },
                    { img: 'Day 4.png' },
                    { img: 'Day 5.png' }
                ]
            }
        }
    };

    function createProductCard(img, text, step, url) {
        const container = document.createElement('div');
        container.classList.add('product-container');

        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${img}" alt="${text}">
            <p>${text}</p>
        `;

        const button = document.createElement('button');
        button.classList.add('product-button');
        button.textContent = 'اشتري الآن';

        button.onclick = () => {
            window.location.href = url;
        };

        container.appendChild(card);
        container.appendChild(button);

        return container;
    }

    function createSpecialProductCard(img) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `<img src="${img}" alt="يوم خاص">`;
        return card;
    }

    const skinTypeKey = answers[1]; // بافتراض أن سؤال نوع البشرة هو الثاني
    if (skinTypeKey) {
        const recommendation = recommendations[skinTypeKey.toLowerCase()];
        if (recommendation) {
            const skinType = recommendation.type;
            const morningRoutine = recommendation.morning;
            const nightRoutine = recommendation.night.routine;
            const specialRoutine = recommendation.night.special;

            document.getElementById('skin-type').textContent = skinType;

            const morningContainer = document.getElementById('morning-routine').querySelector('.products');
            const nightContainer = document.getElementById('night-routine').querySelector('.products');

            morningRoutine.forEach(product => {
                const productCard = createProductCard(product.img, product.text, 'روتين الصباح', product.url);
                morningContainer.appendChild(productCard);
            });

            nightRoutine.forEach(product => {
                const productCard = createProductCard(product.img, product.text, 'روتين الليل', product.url);
                nightContainer.appendChild(productCard);
            });

            const specialContainer = document.createElement('div');
            specialContainer.classList.add('special-products');
            nightContainer.appendChild(specialContainer);

            specialRoutine.forEach(product => {
                const productCard = createSpecialProductCard(product.img);
                specialContainer.appendChild(productCard);
            });

            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', () => {
                    window.location.href = button.getAttribute('data-url');
                });
            });
        } else {
            console.error('لم يتم العثور على توصيات لنوع البشرة المعطى:', skinTypeKey);
        }
    } else {
        console.error('لم يتم العثور على مفتاح نوع البشرة في معلمات URL.');
    }
});
