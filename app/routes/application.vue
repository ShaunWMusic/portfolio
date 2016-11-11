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
      <div class="section">
          <h2 class="title has-text-centered portfolio" id="skills">Skills</h2>
      </div>
      <div class="section">
          <h2 class="title has-text-centered portfolio" id="about">About</h2>
      </div>
      <div class="section">
          <h2 class="title has-text-centered portfolio" id="contact">Contact</h2>
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
