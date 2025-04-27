<script setup>
import SectionSkill from "@/components/pages/homepage/SectionSkill.vue";
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const el = ref(null)

onMounted(() => {
  new Typed(el.value, {
    strings: ['Web Developer', 'Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1100,
    loop: true,
  })
})
</script>

<template>
    <section class="bg__sectionname space-top intro">
        <div class="overlay-intro"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column align-items-center">
                    <h1 class="intro-title mb-4">I'm Paradon <div class="pc-hide"></div>Padjuntuk</h1>
                    <p class="intro-subtitle"><strong ref="el"></strong></p>
                </div>
            </div>
        </div>
    </section>
  
</template>

<style scoped>
    .bg__sectionname {
        background-image: url("~/assets/images/jpg/breeze.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
    }

    .space-top {
        padding-top: 120px;
    }

    /* Intro */
    .intro {
        height: 100vh;
        position: relative;
        color: #fff;
    }

    .intro .overlay-intro {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0px;
        padding: 0;
        height: 100%;
        width: 100%;
        opacity: 0.9;
    }

    .intro .intro-title {
        color: #fff;
        font-weight: 600;
        font-size: 3rem;
        z-index: 2;
    }

    .intro .intro-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        z-index: 2;
    }

    @media (min-width: 767px) {
        .pc-hide {
            display: none;
        }
    }

</style>