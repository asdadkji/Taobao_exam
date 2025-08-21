<script setup lang="ts">
import {ref, watch,onMounted} from "vue";
import { useCartStore } from "@/stores/cart";

//tabs导航
const tabs = [
  { id: 'UNUSED', label: '未使用', count: 0 },
  { id: 'USED', label: '已使用', count: 0 },
  { id: 'EXPIRED', label: '已过期', count: 0 }
]
const activeTab = ref(tabs[0].id)
//导入用户已有的优惠券
import {showCoupon} from '@/composables/coupon/useMyCoupons'
const {categorizedCoupons,MyCouponList} = showCoupon(activeTab.value)

let categorizedCouponss = ref(null)
watch(categorizedCoupons,(newVal) => {
  if (newVal) {
    categorizedCouponss.value = newVal
  }
},{immediate:true})

// 动态计算每个标签的数量
const updateTabCounts = () => {
  tabs.forEach(tab => {
    tab.count = categorizedCouponss.value[tab.id as keyof typeof categorizedCouponss.value]?.length || 0
  })
}
onMounted(() => {
  updateTabCounts()
})
</script>

<template>
  <div class="coupon-tabs">
    <!-- 标签页头 -->
    <div class="tab-header">
      <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="{ active: activeTab === tab.id }"
      >
        {{ tab.label }}
        <span class="count-badge">{{ tab.count }}</span>
      </button>
    </div>
    <!-- 内容区 -->
    <div class="tab-content">
      <div v-for="tab in tabs" :key="tab.id">
        <div v-if="activeTab === tab.id" class="coupon-list">
          <div
              v-for="coupon in categorizedCouponss[activeTab]"
              :key="coupon.id"
              class="coupon-card"
          >
            <h3>{{ coupon.name }}</h3>
            <p class="status" :class="coupon.status.toLowerCase()">
              {{
                { UNUSED: '未使用', USED: '已使用', EXPIRED: '已过期' }[coupon.status]
              }}
            </p>
            <button>使用</button>
            <!-- 其他优惠券信息 -->
          </div>

          <div v-if="categorizedCouponss[activeTab].length === 0" class="empty-state">
            暂无{{ tabs.find(t => t.id === activeTab)?.label }}的优惠券
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coupon-tabs {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
}

.tab-header {
  display: flex;
  background: #f8f8f8;
  border-bottom: 1px solid #eaeaea;
}

.tab-header button {
  position: relative;
  padding: 12px 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-header button:hover {
  background: #f0f0f0;
}

.tab-header button.active {
  color: #1890ff;
  background: #fff;
  font-weight: 500;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #1890ff;
}

.count-badge {
  background: #e0e0e0;
  color: #666;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
}

.tab-header button.active .count-badge {
  background: #1890ff;
  color: white;
}

.coupon-list {
  padding: 16px;
  display: grid;
  gap: 12px;
}

.coupon-card {
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.status {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.status.unused {
  background: #e6f7ff;
  color: #1890ff;
}

.status.used {
  background: #f6ffed;
  color: #52c41a;
}

.status.expired {
  background: #fff2f0;
  color: #ff4d4f;
}

.empty-state {
  text-align: center;
  padding: 24px;
  color: #999;
}
</style>