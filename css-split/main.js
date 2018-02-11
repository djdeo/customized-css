document.addEventListener('DOMContentLoaded',function(){
    let wrapper, topLayer, handle, delta;
    wrapper = document.getElementById('wrapper');
    topLayer = wrapper.querySelector('.top');
    handle = wrapper.querySelector('.handle');
    delta = 0;

    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2)*0.5;
        handle.style.left = e.clientX + delta +'px';
        topLayer.style.width = e.clientX + 1000 + delta + 'px'
    })
})