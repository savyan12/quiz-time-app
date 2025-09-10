<template>
  <div class="student-bag my-4" dir="rtl">
    <h3 class="my-4">مقرراتك الدراسية</h3>
    <v-window v-model="onboarding">
      <v-window-item v-for="(group, index) in chunkedData" :key="`tab-${index}`" :value="index + 1">
        <v-card class="d-flex flex-wrap justify-center pa-1" elevation="0" min-height="135">
          <div class="container" v-for="(item, idx) in group" :key="`item-${idx}`">
            <v-sheet class="ma-1 background" style="border-radius: 15px" width="145" height="55">
              {{ item.title }}
            </v-sheet>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
    <v-card class="bg-transparent" elevation="0">
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
          <v-btn size="30" variant="text" icon @click="toggle">
            <v-icon :color="isSelected ? 'primary' : '#EEEEEE'" size="10">fas fa-circle</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-card>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const length = computed(() => chunkedData.value.length)
const onboarding = ref(1)
const Data = ref([
  { title: 'كتابة التقارير الفنية' },
  { title: 'الأنظمة الدقيقة' },
  { title: 'أساسيات الشبكات' },
  { title: 'أساسيات البرمجة الكائنية' },
  { title: 'تحليل وتصميم النظم' },
  { title: 'معمارية الحاسوب' },
  { title: 'خوارزميات وهياكل بيانات' },
  { title: 'هندسة البرمجيات' },
  { title: 'تطبيقات البرمجة الكائنية' },
  { title: 'أمن الحاسوب والمعلومات' },
  { title: 'برمجة مرئية' },
  { title: 'تنفيذ قواعد البيانات' },
  { title: 'الشبكات المحلية واللاسلكية' },
  { title: 'تصميم مواقع الويب' },
  { title: 'اختبار البرمجيات' },
  { title: 'برمجة الويب' },
  { title: 'إدارة قواعد البيانات' },
  { title: 'برمجة مرئية متقدمة' },
])

const chunkedData = computed(() => {
  const chunks = []
  for (let i = 0; i < Data.value.length; i += 4) {
    chunks.push(Data.value.slice(i, i + 4))
  }
  return chunks
})
</script>
<style scoped>
.v-card {
  background: transparent;
}
.v-sheet {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  color: #ffffff;
  background: linear-gradient(to left, #119ce1, #0c5ea0);
  font-weight: bold;
}
</style>
