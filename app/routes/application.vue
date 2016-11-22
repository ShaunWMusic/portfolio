<template lang="html">
  <div class="app" @scroll="onScroll">
    <div class="section is-paddingless">
      <img class="image image-mobile" src="../img/image-7.jpg" alt="">
      <img class="image image-tablet" src="../img/image-7.jpg" alt="">
      <h1 class="nav-item title name-title"><a href="/">Shaun Willis | Web Developer</a></h1>

      <nav class="nav" :class="navOffset < scrollPosition ? 'nav--dark': null">
        <ul class="nav-center">
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle">Shaun Willis | Web Developer</a></li>
          <li class="link nav-item"><a href="#portfolio">Portfolio</a></li>
          <li class="link nav-item"><a href="#about">About</li>
            <li class="link nav-item"><a href="#skills">Skills</li>
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
                <p>I'm Shaun Willis. This is my design portfolio where I share
                     all of my favorite work. When I'm not developing, I enjoy spending
                     time with my family, leading worship at my church, drinking
                      coffee with my wife, eating pb sandwiches with my son.
                      If you would like to follow me on Twitter. My username is <a href="http://twitter.com/shaunwmusic">@Shaunwmusic</a>.</p>
              </div>
            </div>
        </div>
      </div>
      <div class="section">
        <a class="button is-large center" v-on:click="displayResume">View Resumé</a>
          <div class="resume">
              <i class="fa fa-times close-resume" v-on:click="closeResume" id="hidex" aria-hidden="true"></i>
            <iframe class="pdf" id="resume" src="https://drive.google.com/file/d/0B8LYSPVaGYxQX2tUOGd1bkY3RXc/preview" width="100%" height="100%"></iframe>
          </div>
    <div class="columns columns-portfolio is-desktop is-mobile" id="portfolio">
      <div class="column">
          <div class="control">
          <a href="https://github.com/ShaunWMusic/17-puppy-adoption/tree/develop"><img class="gif gif-mobile gif-left" src="/img/puppies.gif" alt=""></a>
        <a href="https://github.com/ShaunWMusic/17-puppy-adoption/tree/develop"><img class="gif gif-desktop" src="/img/dpuppies.gif" alt=""></a>
        <img class="iphone" src="./img/iphonepic.png" alt="" />
        </div>
      </div>
    <div class="column">
        <div class="control">
          <a href="https://github.com/ShaunWMusic/16-monster-mash/tree/develop"><img class="gif gif-mobile gif-boo" src="/img/boo.gif" alt=""></a>
        <a href="https://github.com/ShaunWMusic/16-monster-mash/tree/develop"><img class="gif gif-desktop gif-boo" src="/img/dboo.gif" alt=""></a>
        <img class="iphone" src="./img/iphonepic2.png" alt="" />
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
    console.log('I would love to meet you!');
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
