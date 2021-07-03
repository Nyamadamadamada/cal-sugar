<template>
  <div class="header">
    <v-app-bar
      dark
      flat
      class="header-bar"
    >
      <NuxtLink to="/">
        <v-toolbar-title>
          <img class="icon" src="/icon.svg">
          <span id="site-title">カルシュガー</span>
        </v-toolbar-title>
      </NuxtLink>
      <v-spacer />
      <v-list
        nav
        dense
        class="d-none d-md-flex d-lg-flex d-xl-flex"
      >
        <v-list-item-group
          v-for="(item) in items"
          :key="item.title"
        >
          <NuxtLink :to="item.to">
            <div class="header-link">
              {{ item.title }}
            </div>
          </NuxtLink>
        </v-list-item-group>
        <div>
          <a class="header-link" href="https://forms.gle/sh5XKkFEhdtj29u37">お問い合わせ</a>
        </div>
      </v-list>
      <v-app-bar-nav-icon
        class="d-md-none d-xg-flex"
        @click="drawer = true"
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-for="(item) in items"
          :key="item.title"
        >
          <NuxtLink :to="item.to">
            <v-list-item>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
        <v-list-item>
          <v-list-item-title>
            <a href="https://forms.gle/sh5XKkFEhdtj29u37">お問い合わせ</a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'ホーム',
        to: '/'
      },
      {
        title: '糖質計算',
        to: '/calculate'
      },
      {
        title: 'ご利用方法',
        to: '/about'
      }
    ]
  })
}
</script>

<style>
  #site-title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .icon {
    width: 40px;
  }

  .header {
    color: #fff;
  }

  .header-bar {
    z-index: 1;
  }

  .header-link {
    color: #fff !important;
    padding-left: 20px;
  }
</style>
