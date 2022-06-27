<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import { ResumeThemeHomePageFrontmatter } from '../ResumeHomeFeatures/ResumeHomeFeatures'

import parse_bibtex from './parse_bibtex'
import bibtex_array from '../../../resume/bibtex';


const frontmatter = usePageFrontmatter<ResumeThemeHomePageFrontmatter>()
console.log(frontmatter.value);



const publications = ref(parse_bibtex(bibtex_array));
const publication_types: Ref<Array<string>> = ref([]);
for (const publication of publications.value) {
  if (!publication_types.value.includes(publication.publish_type)) {
    publication_types.value.push(publication.publish_type);
  }
}

</script>


<template>
  <div class="theme-default-content">
    <Content />
    <div class="publications" v-if="publications.length">
      <h2 class="title">Selected Publication (*Corresponding Author)</h2>

      <div v-if="publication_types.includes('article')" class="publications">
        <h3 class="title">Journal</h3>
        <template v-for="publication in publications" :key="publication.bibkey">
          <div v-if="publication.publish_type == 'article'">
            <div class="year-publish">
              <span>📝</span>
              <span class="year">{{ publication.year }}</span>
              <span class="publish">{{ publication.publish }}</span>
            </div>
            <div class="">
              <p>{{ publication.title }}</p>
              <span v-for="author in publication.authors">
                <span class="author main" v-if="author == frontmatter.name || author == frontmatter.cn_name">
                  {{ author + ' and ' }}
                </span>
                <span class="author" v-else>{{ author + ' and ' }}</span>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
@import './styles/experience.scss';

.theme-default-content:not(.custom),
.theme-default-content {
  padding: 0;
}
</style>