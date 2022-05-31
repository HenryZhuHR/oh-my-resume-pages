<script setup lang="ts">
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import { MyThemeHomePageFrontmatter } from './MyThemeHomePageFrontmatter'

const frontmatter = usePageFrontmatter<MyThemeHomePageFrontmatter>()
const educations = computed(() => {
  console.log(frontmatter.value);
  if (isArray(frontmatter.value.educations)) {
    console.log(frontmatter.value.educations);
    return frontmatter.value.educations
  }
  return []
})
</script>

<template>
  <!-- year: 2014
    degree: Ph.D.
    major: Information Engineering
    college: School of Electrical and Electronic Engineering
    school: Nanyang Technological University, Singapore
    school_link: https://www.ntu.edu.sg -->
  <div v-if="educations.length" class="title">Education</div>
  <div v-if="educations.length" class="educations">
    <a v-for="education in educations" :key="education.year" class="education" :href="education.school_link"
      target="_blank">

      <div class="year-degree">
        <p class="edutext year">{{ education.year }}</p>
        <p class="edutext degree">{{ education.degree }}</p>
      </div>
      <div class="major-school">
        <li class="edutext major">&nbsp;{{ education.major }}</li>
        <li class="edutext college">&nbsp;{{ education.college }}</li>
        <li class="edutext school">&nbsp;{{ education.school }}</li>
      </div>

    </a>
  </div>
</template>

<style lang="scss">
@import './styles/education.scss';

.title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--c-text);
}
</style>