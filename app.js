document.getElementById('hero-btn').addEventListener('click', function(){
    const heroField = document.getElementsByClassName('hero');
    for (const hero of heroField){
        hero.style.backgroundColor = 'lightgreen';
        hero.style.color = 'red';
    }
})

document.getElementById('heroein-btn').addEventListener('click', function(){
    const heroeinField = document.getElementsByClassName('heroein');
    for (const heroein of heroeinField){
        heroein.style.backgroundColor = 'yellow';
        heroein.style.color = 'red';
    }
})

document.getElementById('web-bg-change').addEventListener('click', function(){
    const mainSectionField = document.getElementById('main-section');
    mainSectionField.style.backgroundColor = 'lightblue';
})

document.getElementById('add-hero-btn').addEventListener('click', function(){
    const heroContainer = document.getElementById('add-new-hero');
    const newHeroDiv = document.createElement('div');
    newHeroDiv.innerHTML = `
    <div class="hero card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/ataul.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ataul Hossain</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    
    `
    heroContainer.appendChild(newHeroDiv);

})