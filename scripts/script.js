var elementos = document.getElementsByTagName('img')

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('mouseenter', function(){

        
        if(i == 0){

            var js = document.getElementById('js')

            js.classList.add('js')
            

            js.addEventListener('mouseleave', function(){
                js.classList.remove('js')
            })

        }

        if(i == 1){
            var html = document.getElementById('html')

            html.classList.add('html')
            

            html.addEventListener('mouseleave', function(){
                html.classList.remove('html')
            })
        }

        if(i == 2){
            var css = document.getElementById('css')

            css.classList.add('css')
            

            css.addEventListener('mouseleave', function(){
                css.classList.remove('css')
            })
        }

    })

    elementos[i].addEventListener('mouseenter', function(){

        
        if(i == 0){
            var jsP = document.querySelector('.js > p')

            jsP.style.display = 'block'

            js.addEventListener('mouseleave', function(){
                jsP.style.display = 'none'
            })

            setTimeout(() => {
                jsP.style.opacity = '1'

            js.addEventListener('mouseleave', function(){
                jsP.style.opacity = '0'
            })
            }, 300);

        }

        if(i == 1){
            var htmlP = document.querySelector('.html > p')

            htmlP.style.display = 'block'

            html.addEventListener('mouseleave', function(){
                htmlP.style.display = 'none'
            })

            setTimeout(() => {
                htmlP.style.opacity = '1'

            html.addEventListener('mouseleave', function(){
                htmlP.style.opacity = '0'
            })
            }, 300);
        }

        if(i == 2){
            var cssP = document.querySelector('.css > p')

            cssP.style.display = 'block'

            css.addEventListener('mouseleave', function(){
                cssP.style.display = 'none'
            })

            setTimeout(() => {
                cssP.style.opacity = '1'

            css.addEventListener('mouseleave', function(){
                cssP.style.opacity = '0'
            })
            }, 300);
        }

    })
    
}

