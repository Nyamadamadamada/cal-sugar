<template>
  <v-list-item v-show="isShowRegistration">
    <hr class="my-3">
    <v-list-item-content>
    <v-list-item-title>
        この結果をシェアしよう！
        <v-text-field
        id="copyText"
        value="コピーテキスト"
        filled
        rounded
        dense
        />
        <v-btn
        @click="copyClipboard()"
        >
        Copy
        </v-btn>
    </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
