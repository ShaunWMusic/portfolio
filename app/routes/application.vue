<template lang="html">
  <div class="app" @scroll="onScroll">
    <div class="section is-paddingless">
      <img class="image image-mobile" src="../img/image.jpg" alt="">
      <img class="image image-tablet" src="../img/image-1.jpg" alt="">
      <h1 class="nav-item title name-title"><a href="/">Shaun Willis | Web Developer</a></h1>

      <nav class="nav" :class="navOffset < scrollPosition ? 'nav--dark': null">
        <ul class="nav-center">
          <li class="link nav-item"><a href="#portfolio">Portfolio</a></li>
          <li class="link nav-item"><a href="#skills">Skills</li>
          <li class="link nav-item"><a href="#about">About</li>
          <li class="link nav-item"><a href="#contact">Contact</li>
        </ul>
      </nav>
      <div class="section">
        <h2 class="title has-text-centered portfolio" id="portfolio">Portfolio</h2>
    <div class="columns">
      <div class="column is-one-third">
          <div class="control">
          <a href="https://github.com/ShaunWMusic/17-puppy-adoption/tree/develop"><img class="gif gif-mobile" src="/img/puppies.gif" alt=""></a>
        <a href="https://github.com/ShaunWMusic/17-puppy-adoption/tree/develop"><img class="gif gif-desktop" src="/img/dpuppies.gif" alt=""></a>
        </div>
      </div>
    <div class="column is-one-third">
        <div class="control">
          <a href="https://github.com/ShaunWMusic/16-monster-mash/tree/develop"><img class="gif gif-mobile gif-boo" src="/img/boo.gif" alt=""></a>
        <a href="https://github.com/ShaunWMusic/16-monster-mash/tree/develop"><img class="gif gif-desktop gif-boo" src="/img/dboo.gif" alt=""></a>
      </div>
    </div>
      </div>
    </div>
      <div class="section section-skills">
        <div class="container">
            <h2 class="title has-text-centered" id="skills">Skills</h2>
          <div class="skills-content">
            <h4 class="title">Web Development</h4>
            <p>Html,CSS,Vanilla JavaScript,Vue.js,Github,Git,NPM,Yarn,Adonis.js,Node.js,
            Heroku,Bulma,Flexbox(CSS),Float(CSS)</p>
          </div>
          <div class="skills-content">
            <h4 class="title">Dabble In</h4>
            <p>Sketch,Adobe Photoshop,</p>
          </div>
        </div>
      </div>
      <div class="section section-about">
        <div class="container">
          <h2 class="title has-text-centered" id="about">About</h2>
            <div class="about">
              <img class="about-img"src="./img/image-6.jpg" alt="">
              <div class="about-content">
                <p>Hi, I'm Shaun Willis. This is my design portfolio where I share
                     all of my favorite work. When I'm not developing, I enjoy spending
                     time with my family, leading worship at my church, drinking great
                      coffee with my wife, eating peanut butter sandwiches with my son
                      and more!
                      If you would like to follow me on Twitter. My username is <a href="/http://twitter.com/shaunwmusic">@Shaunwmusic</a>.</p>
              </div>
            </div>
        </div>
      </div>
      <div class="section">
          <div class="container">
            <h2 class="title has-text-centered" id="contact">Contact</h2>
            <div class="about">
              <div class="general-information">
                <h2 class="title">General Information</h2>
                <p>I am currently enrolled at Iron Yard in Nashville, and I will
                  be attending their Front-End Developers' Course in September.</p>
                <p>I will be pursuing design work after December 16th, 2016.</p>
                <p>Please only use phone contact for urgent inquiries. Otherwise, Twitter and email
                  are the best way to reach me.</p>
              </div>
              <div class="about-content">
                <h2 class="title">Contact Details</h2>
              <p><span class="fa fa-phone"></span><a href="tel:615-556-3930">615-556-3930</a></p>
              <p><span class="fa fa-envelope"></span><a href="mailto:shaunwmusic@gmail.com">shaunwmusic@gmail.com</a></p>
              <p><span class="fa fa-twitter"></span><a href="https://www.twitter.com/intent/tweet?screen_name=shaunwmusic">@shaunwmusic</a></p>
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
      navOffset: 1,
    };
  },

  mounted() {
    this.navOffset = this.$el.querySelector('.nav').offsetTop;
    this.scrollPosition = this.$el.scrollTop;
  },

  methods: {
    onScroll(e, position) {
      this.scrollPosition = e.target.scrollTop;
    }
  },
};
</script>
