<script setup>
import useDetailStore from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import DetailSection from "@/components/detailSection/DetailSection.vue";

//获取数据
const detailStore = useDetailStore();
const { houseDetail } = storeToRefs(detailStore);
const houseFacility = computed(() => {
  return houseDetail.value.data?.mainPart.dynamicModule.facilityModule
    .houseFacility;
});
</script>
<template>
  <div class="facility-container">
    <div class="facility">
      <DetailSection header-text="房屋设施" more-text="查看全部设施">
        <div class="facility">
          <template v-for="(item, index) in houseFacility?.houseFacilitys">
            <div
              class="item"
              v-if="houseFacility?.facilitySort?.includes(index)"
            >
              <div class="head">
                <img :src="item.icon" alt="" />
                <div class="text">{{ item.groupName }}</div>
              </div>
              <div class="list">
                <template v-for="(iten, index) in item.facilitys.slice(0, 4)">
                  <div class="iten">
                    <van-icon color="green" class="icon" name="passed" />
                    <span>{{ iten.name }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </DetailSection>
    </div>
  </div>
</template>
<style lang="less" scoped>
.facility {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    margin: 25px 0;

    .head {
      width: 90px;
      text-align: center;

      img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-top: 5px;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .iten {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;

        .icon {
          margin: 0 6px;
        }

        .text {
          color: #333;
        }
      }
    }
  }
}
</style>
