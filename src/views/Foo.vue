<template>
  <div class="about">
    <h1>This is an Foo page</h1>
    <FooContent>aaa</FooContent>
  </div>
</template>

<script>
// @ is an alias to /src
import FooContent from '@/components/FooContent'

export default {
  name: 'Foo',
  components: {
    FooContent
  }
}
</script>
