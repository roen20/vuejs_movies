<template>
    <div class=" d-flex position-relative m-1 mt-1" style="cursor:pointer;width:300px;">
        <div class="border p-1" style="width:300px;">
            <b style="font-size:14px;" class="mt-0">{{title}}</b>
            <p style="text-align:right">
                {{year}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
      title: String,
      year: String
  },
  methods: {
      
  }
}
</script>

<style scoped>

</style>