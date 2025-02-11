
const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');

            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
        function changeImage(thumbnail, newSrc) { 
            const mainImage = document.getElementById('mainImage');
            mainImage.src = newSrc;

            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
            mainImage.style.opacity = '0.5';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        }
