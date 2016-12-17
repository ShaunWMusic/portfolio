<template lang="html">
  <div class="app" @scroll="onScroll">
    <div class="section is-paddingless">
      <div class="image image-mobile"></div>
      <h1 class="nav-item title name-title title-hidden"><a href="/">Shaun Willis | Web Developer</a></h1>
      <h1 class="nav-item title-mobile name-title"><a href="tel:615-556-3930">Shaun Willis</a></h1>
      <h5 class="name-title__email"><a href="mailto:hello@shaunwillis.co">hello@shaunwillis.co</a></h5>
      <h5 class="name-title__phone"><a href="tel:615-556-3930">615-556-3930</a></h5>
      <nav class="nav nav-mobile" :class="navOffset < scrollPosition ? 'nav--dark': null">
        <ul class="nav-center">
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__hidden">Shaun Willis | Web Developer</a></li>
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__mobile">Shaun Willis</a></li>
          <div class="nav-mobile--menu" id="menu">
            <li class="link nav-item"><a href="#about">About</li>
            <li class="link nav-item"><a href="#skills">Skills</a></li>
            <li class="link nav-item"><a href="#portfolio">Portfolio</a></li>
            <li class="link nav-item"><a href="#contact">Contact</li>
            <li class="link nav-item"><a href="http://www.shaunwillisblog.wordpress.com">Blog</li>
          </div>
          <div class="fa fa-bars" id="hidebars" v-on:click="displayMenu"></div>
          <div class="fa fa-times hide-times" id="hidetimes" v-on:click="closeMenu"></div>
        </ul>
      </nav>
      <nav class="nav nav-desktop" :class="navOffset < scrollPosition ? 'nav--dark': null">
        <ul class="nav-center">
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__hidden">Shaun Willis | Web Developer</a></li>
          <li class="link nav-item nav--hidden" :class="navOffset < scrollPosition ? 'nav--title': null">
                <a href="/" class="subtitle nav--title__mobile">Shaun Willis</a></li>
                <li class="link nav-item"><a href="#about">About</li>
                  <li class="link nav-item"><a href="#skills">Skills</a></li>
          <li class="link nav-item"><a href="#portfolio">Portfolio</a></li>
          <li class="link nav-item"><a href="#contact">Contact</li>
          <li class="link nav-item"><a href="http://www.shaunwillisblog.wordpress.com">Blog</li>
        </ul>
      </nav>
      </div>
      <a href="#about"><div class="fa fa-angle-down page-down animated infinite bounce"></div></a>
      <div class="section section-about">
        <div class="container">
          <h2 class="title has-text-centered" id="about"></h2>
            <div class="about">
              <img class="about-img"src="./img/fam.jpg" alt="">
              <div class="about-content">

                <p><h4 class="about-content__header">HELLO,</h4>I am a web developer in greater Nashville area.
                  I found my way into the tech scene after trying a few online coding schools
                   and attending an immersive coding school at The Iron Yard Nashville. The Iron Yard
                   lit a fire for a love of learning and continually pushing myself to learn the latest
                    frameworks in Javascript, HTML and CSS.

                 When I'm not on the job, I enjoy spending time with my wife and son, and serving in
                  the community. I actively volunteer with my church, Water's Edge. I sing for the Saturday
                  night service as well.</p>

                <p>  With my unique background and experience, I'm eager to start building your next web application.
                  You can email me here: hello@shaunwillis.co.
                  You can follow me on Twitter. My username is <a href="http://twitter.com/shaunwmusic">@Shaunwmusic</a>.</p>
              </div>
            </div>
        </div>
      </div>
      <div class="section">
        <a class="button button-position is-large center" v-on:click="displayResume">View Résumé</a>
        <div class="resume">
          <i class="fa fa-times close-resume" v-on:click="closeResume" id="hidex" aria-hidden="true"></i>
          <iframe class="pdf" id="resume" src="https://drive.google.com/file/d/0B8LYSPVaGYxQQU5WNzJzcU56QlU/preview" width="100%" height="100vh"></iframe>
        </div>
        <div class="wrap">
          <a href="https://asafetynet.herokuapp.com/">
            <img src="/img/ASafetyNetGif.gif" class="gif-finalproject" alt="">
            <img src="/img/imac.png" class="imac" alt="">
          </a>
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
            <div class="card black-space-left"></div>
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
      <div class="card black-space-top"></div>
      </div>
    </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="skills" id="skills">
          <h2>Technologies</h2>
          <h3 class="skills-content">Ember.js, Vue.js, Vanilla.js, ESlint, Github, Git, CSS3, HTML5, Handlebars, jQuery, NPM,
          SASS, Atom, Sketch, Bulma, Adonis.js, Node.js, Babel, TravisCI, Heroku, Yeoman, Yarn,
          Broccoli.js, Visual Studio</h3>
        </div>

      </div>
    </div>
      <div class="section">
          <div class="container">
            <h2 class="title has-text-centered" id="contact"></h2>
            <div class="about">
              <div class="contact-details has-text-centered">

              <a href="tel:615-556-3930"><span class="fa fa-phone"></span></a>
              <a href="mailto:hello@shaunwillis.co"><span class="fa fa-envelope"></span></a>
              <a href="https://www.twitter.com/intent/tweet?screen_name=shaunwmusic"><span class="fa fa-twitter"></span></a>
              <a href="http://facebook.com/shaunwmusic"><span class="fa fa-facebook"></span></a>
              <a href="https://www.linkedin.com/in/shaunwillis"><span class="fa fa-linkedin"></span></a>
              <a href="https://www.github.com/shaunwmusic"><span class="fa fa-github"></span></a>
              <p>©2016 Shaun Willis.</p>
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
      cb: null,
    };
  },

  mounted() {
    this.navOffset = this.$el.querySelector('.nav').offsetTop;
    this.scrollPosition = this.$el.scrollTop;
    console.log('Hi! You must work in tech?!');
    console.log('Thanks for checking out my portfolio site!');
    console.log('I am currently available for hire, here is my email: hello@shaunwillis.co, phone: 615-556-3930 & twitter: shaunwmusic');
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
    displayMenu() {
      document.getElementById("menu").style.display = "block";
      document.getElementById("hidetimes").style.visibility = "visible";
      document.getElementById("hidebars").style.visibility = "hidden";
    },
    closeMenu() {
      document.getElementById("menu").style.display = "none";
      document.getElementById("hidetimes").style.visibility = "hidden";
      document.getElementById("hidebars").style.visibility = "visible";
    },
  },
};
</script>
