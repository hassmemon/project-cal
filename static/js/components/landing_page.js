function renderLandingPage() {
    console.log("I'm here!");
    const page = document.querySelector('#page');
    page.innerHTML = `
  <div>
    <video class="background-video" controls autoplay loop>
        <source src="https://res.cloudinary.com/dvbb6mvgw/video/upload/v1647045885/Slowmotion_River_Water_rtfqle.mp4" type="video/mp4">
    </video>
    <div class="video-overlay">
        <h2>Welcome text</h2>
    </div>
</div>
    `;
}
