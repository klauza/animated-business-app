const animateBlocks = () => {
  const blocks = document.querySelectorAll('.skill-block-parent');
  blocks.forEach((block)=>{
    block.addEventListener('mouseover', function(){
      this.classList.add('shadow');
    })
    block.addEventListener('mouseleave', function(){
      this.classList.remove('shadow');
    })
    
  })
}

export default animateBlocks;