<template lang="html">
  <div class="app" @scroll="onScroll">
    <div class="section is-paddingless">
      <img class="image image-mobile" src="../img/image-7c.jpeg" alt="">
      <h1 class="nav-item title name-title title-hidden"><a href="/">Shaun Willis | Web Developer</a></h1>
      <h1 class="nav-item title-mobile name-title"><a href="/">Shaun Willis</a></h1>
      <nav class="nav" :class="navOffset < scrollPosition ? 'nav--dark': null">
        <ul class="nav-center">
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__hidden">Shaun Willis | Web Developer</a></li>
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__mobile">Shaun Willis</a></li>
          <li class="link nav-item"><a href="#portfolio">Portfolio</a></li>
          <li class="link nav-item"><a href="#about">About</li>
          <li class="link nav-item"><a href="#contact">Contact</li>
        </ul>
      </nav>

      </div>
      <div class="section section-about">
        <div class="container">
          <h2 class="title has-text-centered" id="about"></h2>
            <div class="about">
              <img class="about-img"src="./img/image-1.jpg" alt="">
              <div class="about-content">
              <h4 class="title">HELLO,</h4>
                <p>I am a web developer in greater Nashville area.
                  I found my way into the tech scene after trying a few online coding schools
                   and attending an immersive coding school at The Iron Yard Nashville. The Iron Yard
                   lit a fire for a love of learning and continually pushing myself to learn the latest
                    frameworks in Javascript, HTML and CSS.

                 When I'm not on the job, I enjoy spending time with my wife and son, and serving in
                  the community. I actively volunteer with my church, Water's Edge. I sing for the Saturday
                  night service as well.</p>

                <p>  With my unique background and experience, I'm eager to start building your next web application.
                  You can email me here: Shaun.m.willis@gmail.com.
                  You can follow me on Twitter. My username is <a href="http://twitter.com/shaunwmusic">@Shaunwmusic</a>.</p>
              </div>
            </div>
        </div>
      </div>
      <div class="section">
        <a class="button is-large center" v-on:click="displayResume">View Resumé</a>
          <div class="resume">
              <i class="fa fa-times close-resume" v-on:click="closeResume" id="hidex" aria-hidden="true"></i>
            <iframe class="pdf" id="resume" src="https://drive.google.com/file/d/0B8LYSPVaGYxQX2tUOGd1bkY3RXc/preview" width="100%" height="100vh"></iframe>
          </div>
    <div class="columns columns-portfolio is-desktop is-mobile" id="portfolio">
      <div class="column">
          <div class="control">
          <a href="http://shaunpuppyadoption.surge.sh/">
            <img class="gif gif-mobile gif-left" src="/img/puppies.gif" alt=""></a>
            <img class="iphone" src="./img/iphonepic.png" alt="">
            <div class="description">
              <h4 class="card has-text-centered">App built using Vue.js</h4>
              <h4 class="card has-text-centered">
                <a href="https://github.com/ShaunWMusic/17-puppy-adoption/tree/develop">Click to view code</a></h4>
            </div>
        </div>
      </div>
    <div class="column">
        <div class="control">
          <a href="http://shaunmonstermash.surge.sh/">
            <img class="gif gif-mobile gif-boo" src="/img/boo.gif" alt=""></a>
        <img class="iphone" src="./img/iphonepic2.png" alt="">
      <div class="description">
          <h4 class="card has-text-centered">App built using Vue.js</h4>
        <h4 class="card has-text-centered">
          <a href="https://github.com/ShaunWMusic/16-monster-mash/tree/develop">Click to view code</a></h4>
      </div>
      <div class="card black-space"></div>
      </div>
    </div>
      </div>
    </div>
      <div class="section">
          <div class="container">
            <h2 class="title has-text-centered" id="contact"></h2>
            <div class="about">
              <div class="contact-details has-text-centered">

              <a href="tel:615-556-3930"><span class="fa fa-phone"></span></a>
              <a href="mailto:shaunwmusic@gmail.com"><span class="fa fa-envelope"></span></a>
              <a href="https://www.twitter.com/intent/tweet?screen_name=shaunwmusic"><span class="fa fa-twitter"></span></a>
              <a href="http://facebook.com/shaunwmusic"><span class="fa fa-facebook"></span></a>
              <a href="https://www.linkedin.com/in/shaunwillis"><span class="fa fa-linkedin"></span></a>
              <a href="https://www.github.com/shaunwmusic"><span class="fa fa-github"></span></a>
              <p>© Shaun Willis.</p>
              </div>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      scrollPosition: 0,
      navOffset: 0,
    };
  },

  mounted() {
    this.navOffset = this.$el.querySelector('.nav').offsetTop;
    this.scrollPosition = this.$el.scrollTop;
    console.log('Hi! You must work in tech?!');
    console.log('Thanks for checking out my portfolio site!');
    console.log('If you are looking to hire, here is my email: shaunwmusic@gmail.com & twitter: shaunwmusic');
  },

  methods: {
    onScroll(e, position) {
      this.scrollPosition = e.target.scrollTop;
    },
    displayResume() {
      document.getElementById("resume").style.width = "75%";
      document.getElementById("hidex").style.visibility = "visible";
    },
    closeResume() {
      document.getElementById("resume").style.width = "0%";
      document.getElementById("hidex").style.visibility = "hidden";

    },
  },
};
</script>
