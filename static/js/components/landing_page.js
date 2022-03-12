function renderLandingPage() {
    console.log("I'm here!");
    const page = document.querySelector('#page');
    page.innerHTML = `
  <div class="video-container">
    <video class="background-video" muted autoplay loop>
        <source src="https://res.cloudinary.com/dvbb6mvgw/video/upload/v1647045885/Slowmotion_River_Water_rtfqle.mp4" type="video/mp4">
    </video>
    <div class="caption">
        <h1>Seamless Task Management</h1>
        <h2 class="subcaption">Achieve Mastery<h2>
        <h2 class="subcaption">Attain Flow<h2>
    </div>
    
</div>
    `;
}