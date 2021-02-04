<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index" :index="0" align="center" label="No." width="95" />
      <el-table-column prop="username" label="Username" align="center" />
      <el-table-column prop="name" label="Name" align="center" />
      <el-table-column prop="gender" label="Gender" align="center" />
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template v-slot="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template v-slot="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/user'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        DELETED: 'danger',
        ACTIVE: 'success',
        FROZEN: 'warning'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        sort: '+id'
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.records
        this.listLoading = false
      })
    }
  }
}
</script>
