function renderLandingPage() {
    console.log("I'm here!");
    const page = document.querySelector('#page');
    page.innerHTML = `
  <div style="position: relative; width: 300px; height: 300px">
    <video class="background-video" style="filter: brightness(60%); position: absolute; z-index: 0; width:100%; height:100%; object-fit: cover" autoplay muted loop>
        <source src="https://res.cloudinary.com/dvbb6mvgw/video/upload/v1647045885/Slowmotion_River_Water_rtfqle.mp4" type="video/mp4">
    </video>
    <div class="video-overlay" style: "position: relative; z-index: 100;">
        <h2>Welcome text</h2>
    </div>
    
</div>
    `;
}
