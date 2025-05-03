<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/* Images */
import factory77 from '@/assets/images/png/project/factory77.png';
import muall from '@/assets/images/png/project/muall.png';
import mualumni from '@/assets/images/png/project/mualumni.png';
import spr1965 from '@/assets/images/png/project/spr1965.png';
import sprtt from '@/assets/images/png/project/sprtt.png';
import chaichodauto from '@/assets/images/png/project/360Auto.png';
import prosupply from '@/assets/images/png/project/prosupply.png';
import twocbiz from '@/assets/images/png/project/2cbiz.png';
import sd from '@/assets/images/png/project/sd.png';
import sahamit from '@/assets/images/png/project/sahamit.png';
import nppolymers from '@/assets/images/png/project/nppolymers.png';
import un from '@/assets/images/png/project/un.png';
import prowinner from '@/assets/images/png/project/prowinner.png';
import ichirin from '@/assets/images/png/project/ichirin.png';
import merge from '@/assets/images/png/project/merge.png';
import adhesiveglue from '@/assets/images/png/project/adhesiveglue.png';
import ysc from '@/assets/images/png/project/ysc.png';
import bigfivesolar from '@/assets/images/png/project/bigfivesolar.png';
import tyh from '@/assets/images/png/project/tyh.png';
import lomthong from '@/assets/images/png/project/lomthong.png';
import pipefitting from '@/assets/images/png/project/pipefitting.png';
import appmanage from '@/assets/images/png/project/appmanage.png';

const projects = [
  {
    title: 'Mahidol University All.',
    framework: 'Vue (Nuxt.js)',
    role: 'Frontend',
    year: '2024',
    image: muall,
    link: 'https://lifelong.mahidol.ac.th/'
  },
  {
    title: 'FACTORY 77 Co., Ltd.,',
    framework: 'React (Next.js)',
    role: 'Frontend',
    year: '2023',
    image: factory77,
    link: 'https://www.factory77.co.th/'
  },
  {
    title: 'Superrich Currency Exchange (1965) Co., Ltd.,',
    framework: 'Vue (Nuxt.js) / Node.js (Express.js) + RESTful API',
    role: 'FullStack',
    year: '2024',
    image: spr1965,
    link: 'https://www.superrich1965.com/'
  },
  {
    title: 'SuperRich Turtle Exchange Co., Ltd.,',
    framework: 'Vue (Nuxt.js)',
    role: 'FullStack',
    year: '2024',
    image: sprtt,
    link: 'https://www.superrichturtle.co.th/'
  },
  {
    title: 'Chaichod Co., Ltd.,',
    framework: 'PHP Laravel',
    role: 'FullStack',
    year: '2025',
    image: chaichodauto,
    link: 'https://demo.360auto.online/th'
  },
  {
    title: 'PRO WINNER CO.,LTD.',
    framework: 'PHP (Woocommerce)',
    role: 'FullStack',
    year: '2025',
    image: prowinner,
    link: 'https://www.prowinner.co.th/'
  },
  {
    title: 'SD Consultant Co., Ltd.,',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2025',
    image: sd,
    link: 'https://www.sdieducation.com/'
  },
  {
    title: 'Ichirin Co., Ltd.',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2023',
    image: ichirin,
    link: 'https://ichirinwellness.com/'
  },
  {
    title: 'บริษัท โปรอินดัสเตรียล ซัพพลาย จำกัด',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2025',
    image: prosupply,
    link: 'https://prosupply.co.th/'
  },
  {
    title: 'บริษัท ทูซี บิซ จำกัด',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2025',
    image: twocbiz,
    link: 'https://2cbiz.co.th/'
  },
  {
    title: 'NP Polymer CO.,LTD',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2025',
    image: nppolymers,
    link: 'https://www.nppolymers.com/'
  },
  {
    title: 'UNIDO',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2025',
    image: un,
    link: 'https://decarbonizethaicementconcrete.org/'
  },
  {
    title: 'Merge Property',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: merge,
    link: 'https://mergeproperty.co.th/'
  },
  {
    title: 'T.P. SahaMit Group',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: sahamit,
    link: 'https://sahamitgroup.com/'
  },
  {
    title: 'P. ADHESIVE GLUE MANUFACTURING',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: adhesiveglue,
    link: 'https://p-adhesiveglue.com/'
  },
  {
    title: 'YSC Clinic',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: ysc,
    link: 'https://ysc-clinic.com/'
  },
  {
    title: 'THAI YONG HONG ELECTRIC FACTORY CO., LTD.',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: tyh,
    link: 'https://caribbeanfan.com/'
  },
  {
    title: 'BIG FIVE ELECTRIC GROUP CO.,LTD.',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: bigfivesolar,
    link: 'https://bigfivesolar.com/'
  },
  {
    title: 'Pantip Lomthong',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: lomthong,
    link: 'https://lomthong.com/'
  },
  {
    title: 'บริษัท สหชัย เอกประสิทธิ์ จำกัด',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: pipefitting,
    link: 'https://pipefittingthai.com/'
  },
  {
    title: 'APP Services and Management',
    framework: 'PHP (Wordpress)',
    role: 'Frontend',
    year: '2024',
    image: appmanage,
    link: 'https://appmanagement.co.th/'
  },
  
  {
    title: 'Mahidol University Alumni Relations.',
    framework: 'PHP (Wordpress)',
    role: 'FullStack',
    year: '2022',
    image: mualumni,
    link: 'https://alumni.mahidol.ac.th/'
  },
]
</script>

<template>
    <section class="bg-grey" id="project">
        <div class="container-fluid p-0 pt-4 pb-4">
            <div class="row">
                <div class="col-12">
                <h2 class="text-center primary-blue900 custom-padding__sectionproject">Web Development Projects</h2>
                <p class="text-center primary-blue600 custom-padding__sectionproject">Explore my work with frameworks like Vue.js, React, and WordPress</p>
                </div>
            </div>
            <template>
                <div class="pathbox">
                    <Swiper
                        :modules="[Navigation]"
                        navigation
                        :slides-per-view="3"
                        :space-between="32"
                        :loop="true"
                        :pagination="{
                          clickable: true,
                        }"
                        :breakpoints="{
                          '320': { slidesPerView: 1.4, centeredSlides: true, spaceBetween: 32 },
                          '375': { slidesPerView: 1.4, centeredSlides: true, spaceBetween: 32 },
                          '425': { slidesPerView: 1.2, centeredSlides: true, spaceBetween: 24 },
                          '768': { slidesPerView: 2.2, centeredSlides: true, spaceBetween: 32 },
                          '1024': { slidesPerView: 2.8, centeredSlides: true, spaceBetween: 32 },
                          '1280': { slidesPerView: 3.1, centeredSlides: true, spaceBetween: 32 },
                          '1440': { slidesPerView: 3.75, centeredSlides: true, spaceBetween: 32 },
                          '1920': { slidesPerView: 4.5, centeredSlides: true, spaceBetween: 32 }
                        }"
                        :autoplay="{ delay: 8000, disableOnInteraction: true }"
                        class="frame-item"
                    >
                        <SwiperSlide
                            v-for="(project, index) in projects"
                            :key="index"
                        >
                            <a :href="project.link" target="_blank">
                                <div class="item-card card">
                                    <div class="wrapper">
                                        <div class="wrapper-content d-flex">
                                            <div class="bg-blur primary-blue500">CMS / Framework: {{ project.framework }}</div>
                                        </div>
                                    </div>
                                    <div class="backgroundImage" :style="`background-image: url(${project.image})`" ></div>
                                    <div class="the-content">
                                        <div class="title">{{ project.title }}</div>
                                        <div class="metadata">
                                            <div class="list-course">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23"
                                                    height="23" viewBox="0 0 23 23" fill="none">
                                                    <rect id="Playlist" x="0.333313" y="0.5" width="22.1667" height="22.1667"
                                                        fill="url(#pattern0_916_7684)" />
                                                    <defs>
                                                        <pattern id="pattern0_916_7684" patternContentUnits="objectBoundingBox" width="1"
                                                            height="1">
                                                            <use xlink:href="#image0_916_7684" transform="scale(0.0111111)" />
                                                        </pattern>
                                                        <image id="image0_916_7684" width="90" height="90"
                                                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO3cTU7DMBRF4YwoS2gTlkhhhrtCfkaUpaB04tFFQRlUlSVIJF/K8/kkJsiy8CFyBk9K1wEAAAAAAKCTdCvpUdKbpJPiOkl6lfQgaWP910u6k/Sh9hynszuf5BYjn8eu/2TP10Xr9o7Q053cuhdH6PGvT3kFRkdoSCK0CaFNCG1CaBNCNxw6S3qS1M8/af7dj+sNZ/nN3/NvQqfCHmnJesOZUoTQu8Ie2yXrDWfaRgjdF/YYlqw3nGmIenUclqw3nOkQIXSe78AlL8Pv9YazhHoZhkRoE0KbENqE0CaENiG0CaFNCG1CaBNCmxC64dCZCYsndCrswYSlQuhdYQ8mLBVC94U9mLBUCJ0KezBhqRA6M2HxhA5pTTtCr0BoE0KbENqE0CaENiG0CaFNCG1CaBNCNxw6M2HxhE6FPZiwVAi9K+zBhKVC6L6wBxOWCqFTYQ8mLBVCZyYsntAhrWlH6BUIbUJoE0KbEDpQaD7HJn06QvOBQXk+MDh9dbZ1947Qm/lDqK16l3RTPfTZZ42PjUYeLJEvnuz9dF8Ff0GOkp6n68L2JAMAAAAAAHTX7QtD4g9fVN2edQAAAABJRU5ErkJggg==" />
                                                    </defs>
                                                </svg>
                                                {{ project.role }}
                                            </div>
                                            <div class="time">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.8333 6.0354V12.3354H18.1333" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M11.8333 22.8335C17.6323 22.8335 22.3333 18.1324 22.3333 12.3335C22.3333 6.5345 17.6323 1.8335 11.8333 1.8335C6.03432 1.8335 1.33331 6.5345 1.33331 12.3335C1.33331 18.1324 6.03432 22.8335 11.8333 22.8335Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                {{ project.year }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
/* ===== General ===== */
.bg-grey {
  background-color: #f0f3f9;
}
.pathbox {
    display: flex;
    justify-content: center;
    align-items: center !important;
}
.frame-box {
  display: flex;
  justify-content: center;
  align-content: center;
}

.frame-item {
  padding: 30px 0px;
  top: 15px;
  position: relative;
}

.frame-item a {
  text-decoration: none;
}

.bg-blur {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 4px;
  padding: 2px 8px;
}

/* ===== Card Style ===== */
.item-card {
  margin: 0 !important;
  min-height: 250px;
  border-radius: 18px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
}

.item-card::before {
  content: "";
  border-radius: 14px !important;
  background: rgba(24, 73, 142, 0.5);
  position: absolute;
  z-index: 2;
  top: -14px;
  width: 100%;
  height: 100%;
}

.item-card::after {
  content: "";
  border-radius: 14px;
  background: rgba(24, 73, 142, 0.3);
  position: absolute;
  top: -28px;
  width: 80%;
  height: 100%;
  transform: translateX(-12%);
  left: 20%;
  z-index: 1;
}

.card:hover {
  transform: scale(1.025);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* ===== Background Layers ===== */
.wrapper {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(<path-to-image>) rgba(211, 211, 211, 0) 50% / cover no-repeat;
  box-shadow: 0px 4.667px 12.25px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 18.667px;
  z-index: 4;
}

.wrapper-content {
    padding: 12px 24px;
    color: #FFF;
}

.backgroundImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 18.667px;
  background-size: cover;
  z-index: 3;
}

/* ===== Content Area ===== */
.the-content {
  z-index: 5;
  position: relative;
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 24px;
}

.title {
  width: 60%;
  color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.metadata {
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.list-course,
.time {
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 48px;
  height: 48px;
  background-color: #18498e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #0c2d5c;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
  color: white;
}

.custom-padding__sectionproject {
  padding: 0 32px;
}

:deep(.swiper-button-prev) {
  width: 48px;
  height: 48px;
  background-color: #18498e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next) {
  width: 48px;
  height: 48px;
  background-color: #18498e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-prev:hover,
.swiper-button-next:hover) {
  background-color: #0c2d5c;
}

:deep(.swiper-button-next:hover) {
  background-color: #0c2d5c;
}

:deep(.swiper-button-prev::after) {
  font-size: 14px;
  color: white;
}

:deep(.swiper-button-next::after) {
  font-size: 14px;
  color: white;
}

:deep(.swiper-pagination) {
  margin-top: 32px;
  position: relative; /* สำคัญมากหากอยู่ใน container ที่ไม่ absolute */
}

/* สีปกติ */
:deep(.swiper-pagination-bullet) {
  background-color: #acacad;
  opacity: 1; /* ให้เห็นชัด */
  transition: background-color 0.3s ease;
}

/* hover */
:deep(.swiper-pagination-bullet:hover) {
  background-color: #537EBA;
}

/* เมื่อเป็น active */
:deep(.swiper-pagination-bullet-active) {
  background-color: #18498E;
}



/* ===== Swiper Custom Positioning ===== */

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .the-content {
    padding: 12px;
    font-size: 14px;
  }

  .title {
    width: 60%;
  }

  .metadata {
    width: 40%;
  }

  .metadata svg {
    width: 18px;
    height: 18px;
  }
}
@media(max-width: 767px) {
  .mobile-custom-padding {
    padding: 0;
  }
  .frame-item {
    padding: 30px 0px;
  }
}
</style>