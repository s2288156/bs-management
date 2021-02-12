<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="success"
        icon="el-icon-refresh"
        @click="fetchData"
      >
        {{ titleMap.reload }}
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleAddRole"
      >
        {{ titleMap.add }}
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RoleList',
  data() {
    return {
      titleMap: {
        reload: '刷新',
        add: '新增'
      }
    }
  },
  methods: {
    fetchData() {
      alert('fetch data')
    },
    handleAddRole() {
      alert('add role')
    }
  }
}
</script>
