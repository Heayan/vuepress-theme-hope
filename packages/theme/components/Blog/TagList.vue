<template>
  <ul class="tag-list-wrapper">
    <li
      v-for="(tag, index) in tagList"
      :key="tag.path"
      class="tag"
      :class="{ active: isActive(tag.name), [`tag${index % 9}`]: true }"
      @click="clickTag(tag.path)"
    >
      <div class="tag-name">{{ tag.name }}</div>
    </li>
  </ul>
</template>

<script src="./TagList" />

<style lang="stylus">
.tag-list-wrapper
  position relative
  z-index 2
  display flex
  flex-wrap wrap
  justify-content space-evenly
  padding-left 0
  list-style none

  .tag
    display inline-block
    position relative
    vertical-align middle
    min-width 24px
    padding 3px 8px
    margin 4px 6px
    cursor pointer
    font-size 12px
    text-align center
    border-radius 14px
    box-shadow 0 1px 6px 0 var(--box-shadow-color)
    overflow hidden
    transition all 0.5s
    color var(--white)

    &:hover
      cursor pointer

    &.active
      padding 3px 12px

@require '~@mr-hope/vuepress-shared-utils/styles/colors.styl'

for $color, $index in $colors
  .tag-list-wrapper .tag{$index}
    .theme-light &, &
      background-color lighten($color, 10%)

      &:hover, &.active
        background-color darken($color, 5%)

    .theme-dark &
      background-color darken($color, 5%)

      &:hover, &.active
        background-color lighten($color, 10%)
</style>
