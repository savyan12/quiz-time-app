<template>
  <div class="specialization-page">
    <v-layout>
      <v-app-bar class="pa-1 py-2" elevation="0">
        <div class="container mb-3">
          <v-btn color="#0F172A" variant="text" :ripple="false" icon @click="back"
            ><v-icon class="mt-1" size="20 " v-if="tab > 1">fas fa-chevron-left</v-icon></v-btn
          >
          <h3>{{ tab > 1 ? title : `الفصول الدراسية` }}</h3>
          <v-btn size="small" :ripple="false"></v-btn>
        </div>
      </v-app-bar>
      <v-main class="mt-5">
        <v-container>
          <!-- search  -->
          <SearchBar />
          <!-- tabs -->
          <v-locale-provider rtl>
            <v-card class="mt-10 tabs" elevation="0">
              <v-tabs-window class="bg-transparent" v-model="tab">
                <v-tabs-window-item :value="1">
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      :value="item"
                      color="#0f0f0f"
                      variant="text"
                      @click="nextPage(item)"
                      ><template v-slot:append>
                        <v-icon icon="fas fa-chevron-left" size="15" />
                      </template>

                      <v-list-item-title
                        style="font-weight: bold"
                        v-text="item.specializationName"
                      ></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-tabs-window-item>
                <v-tabs-window-item :value="2">
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in specialization.semesters"
                      :key="i"
                      :value="item"
                      color="#0f0f0f"
                      variant="text"
                      @click="nextPage(item)"
                      ><template v-slot:append>
                        <v-icon icon="fas fa-chevron-left" size="15" />
                      </template>

                      <v-list-item-title
                        style="font-weight: bold"
                        v-text="item.semesterName"
                      ></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-tabs-window-item>
                <v-tabs-window-item :value="3">
                  <v-list>
                    <v-list-item value="jbh" color="#0f0f0f" variant="text" @click="nextPage()"
                      ><template v-slot:append>
                        <v-icon icon="fas fa-chevron-left" size="15" />
                      </template>
                      <v-list-item-title style="font-weight: bold">
                        المقررات الدراسية
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item value="vgb" color="#0f0f0f" variant="text"
                      ><template v-slot:append>
                        <v-icon icon="fas fa-chevron-left" size="15" />
                      </template>
                      <v-list-item-title style="font-weight: bold"> شيتات </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-tabs-window-item>
                <v-tabs-window-item :value="4">
                  <v-row class="my-4 pa-3">
                    <v-col cols="6" v-for="subject in subjects">
                      <v-card
                        class="text-center bg-indigo-darken-2 rounded-lg"
                        width="100%"
                        height="70"
                        ><h4 class="mt-5">{{ subject.arabic_name }}</h4></v-card
                      >
                    </v-col>
                  </v-row>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card>
          </v-locale-provider>
        </v-container>
      </v-main>
    </v-layout>
    <v-btn class="add-btn" color="#1DC417" variant="tonal" v-if="tab === 4"
      ><v-icon class="mx-1" size="19">qt:qt-circlePlus</v-icon> اضف مقررات الى موادك</v-btn
    >
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
const tab = ref(1)
const title = ref('')
const specialization = ref({})
const subjects = ref([])
const back = () => {
  if (tab.value === 3) {
    title.value = specialization.value.specializationName
  }
  if (tab.value > 1) {
    tab.value--
  }
}
const nextPage = (value) => {
  if (value && tab.value === 1) {
    specialization.value = value
    title.value = specialization.value.specializationName
  } else if (tab.value === 2) {
    subjects.value = value.courses
    title.value = value.semesterName
  }
  tab.value = tab.value + 1
}
const items = ref([
  {
    specializationId: 1,
    specializationName: 'القسم العام',
    semesters: [
      {
        specializationSemesterId: 1,
        semesterName: 'الفصل الاول',
        courses: [
          { code: 'GS101', arabic_name: 'اللغة الإنجليزية 1', english_name: 'English I' },
          { code: 'GS121', arabic_name: 'الرياضيات', english_name: 'Mathematics' },
          {
            code: 'EE101',
            arabic_name: 'الدوائر الكهربائية 1',
            english_name: 'Electric Circuits I',
          },
          { code: 'GS111', arabic_name: 'الدوائر الرقمية 1', english_name: 'Digital Circuits I' },
          { code: 'GS112', arabic_name: 'الفيزياء', english_name: 'Physics' },
          { code: 'GS122', arabic_name: 'اللغة الإنجليزية 2', english_name: 'English II' },
        ],
      },
      {
        specializationSemesterId: 2,
        semesterName: 'الفصل الثاني',
        courses: [
          { code: 'GS102', arabic_name: 'الرياضيات 2', english_name: 'Mathematics II' },
          { code: 'GS221', arabic_name: 'الدوائر الرقمية 2', english_name: 'Digital Circuits II' },
          {
            code: 'EE111',
            arabic_name: 'الدوائر الكهربائية 2',
            english_name: 'Electric Circuits II',
          },
          { code: 'EE112', arabic_name: 'الدوائر الرقمية 3', english_name: 'Digital Circuits III' },
          {
            code: 'EE102L',
            arabic_name: 'أساسيات البرمجة',
            english_name: 'Programming Fundamentals',
          },
          {
            code: 'EE220L',
            arabic_name: 'معمل الدوائر الكهربائية',
            english_name: 'Electric Circuits (Lab)',
          },
          {
            code: 'GS222',
            arabic_name: 'معمل الدوائر الرقمية',
            english_name: 'Digital Circuits (Lab)',
          },
          { code: 'GS223', arabic_name: 'اللغة الإنجليزية 3', english_name: 'English III' },
        ],
      },
    ],
  },
  {
    specializationId: 2,
    specializationName: 'الحاسب الالي',
    semesters: [
      {
        specializationSemesterId: 3,
        semesterName: 'الفصل الثالث',
        courses: [
          {
            code: 'GS201',
            arabic_name: 'الإحصاء والاحتمالات',
            english_name: 'Statistics & Probabilities',
          },
          {
            code: 'EE121',
            arabic_name: 'نظام المعالجات الدقيقة',
            english_name: 'Microprocessor System',
          },
          {
            code: 'EE212L',
            arabic_name: 'معمل الدوائر الإلكترونية',
            english_name: 'Electronic Circuits Lab',
          },
          {
            code: 'CS211',
            arabic_name: 'صيانة أنظمة الحاسوب',
            english_name: 'Computer System Maintenance',
          },
          { code: 'CS212', arabic_name: 'برمجة 1', english_name: 'Programming I' },
          { code: 'GS251', arabic_name: 'مهارات الدراسة', english_name: 'Study skills' },
        ],
      },
      {
        specializationSemesterId: 4,
        semesterName: 'الفصل الرابع',
        courses: [
          {
            code: 'CS201',
            arabic_name: 'كتابة التقارير الفنية',
            english_name: 'Technical Report Writing',
          },
          {
            code: 'GS252',
            arabic_name: 'أنظمة الحاسوب الصغير',
            english_name: 'Microcomputer System',
          },
          { code: 'CS213', arabic_name: 'وظائف الشبكات', english_name: 'Network Functions' },
          {
            code: 'CS202',
            arabic_name: 'أساسيات البرمجة الكائنية',
            english_name: 'OOP Fundamentals',
          },
          {
            code: 'CN201',
            arabic_name: 'تحليل وتصميم الأنظمة',
            english_name: 'System Analysis & Design',
          },
          { code: 'CS221', arabic_name: 'معمارية الحاسوب', english_name: 'Computer Architecture' },
          { code: 'CN201', arabic_name: 'بروتوكولات التوجيه', english_name: 'Routing Protocols' },
        ],
      },
      {
        specializationSemesterId: 5,
        semesterName: 'الفصل الخامس',
        courses: [
          {
            code: 'CS311',
            arabic_name: 'قواعد البيانات / التحليل والتصميم',
            english_name: 'Database/Analysis & Design',
          },
          { code: 'CS322', arabic_name: 'هندسة البرمجيات', english_name: 'Software Engineering' },
          { code: 'CS212', arabic_name: 'تطبيقات أنظمة التشغيل', english_name: 'OS Applications' },
          {
            code: 'CS313',
            arabic_name: 'أمن الحاسوب والمعلومات',
            english_name: 'Computer & Info. Security',
          },
          {
            code: 'CS325',
            arabic_name: 'أساسيات البرمجة المرئية',
            english_name: 'Visual Programming Fundamentals',
          },
          {
            code: 'CN301',
            arabic_name: 'الأنظمة المدمجة (تنفيذ)',
            english_name: 'Embedded Systems (implementation)',
          },
          {
            code: 'CN201',
            arabic_name: 'الشبكات المحلية اللاسلكية والمبدلات',
            english_name: 'LAN Switching & Wireless',
          },
        ],
      },
      {
        specializationSemesterId: 6,
        semesterName: 'الفصل السادس',
        courses: [
          { code: 'CS321', arabic_name: 'برمجة الويب', english_name: 'Web Programming' },
          { code: 'CS322', arabic_name: 'موضوع اختياري 1', english_name: 'Selective Topic I' },
          { code: 'GS221', arabic_name: 'اختبار البرمجيات', english_name: 'Software Testing' },
          {
            code: 'CS325',
            arabic_name: 'إدارة الشبكات الواسعة WAN',
            english_name: 'Accounting the WAN',
          },
          {
            code: 'CN302-CN303',
            arabic_name: 'موضوع اختياري 2',
            english_name: 'Selective Topic II',
          },
          { code: 'CS322', arabic_name: 'برمجة الويب', english_name: 'Web Programming' },
          {
            code: 'CS323 + CS331',
            arabic_name: 'إدارة قواعد البيانات',
            english_name: 'Database Administration',
          },
          {
            code: 'CS321',
            arabic_name: 'البرمجة المرئية المتقدمة',
            english_name: 'Advanced Visual Programming',
          },
        ],
      },
      {
        specializationSemesterId: 7,
        semesterName: 'الفصل السابع',
        courses: [
          { code: 'CS316 + CS322', arabic_name: 'تدريب ميداني', english_name: 'On Job Training' },
          { code: 'CS499', arabic_name: 'تدريب متقدم', english_name: 'Senior Training' },
          { code: 'CS498', arabic_name: 'مشروع التخرج', english_name: 'Project Graduation' },
        ],
      },
    ],
  },
  {
    specializationId: 3,
    specializationName: 'الاتصالات',
    semesters: [
      { specializationSemesterId: 9, semesterName: 'الفصل الثالث', courses: [] },
      { specializationSemesterId: 10, semesterName: 'الفصل الرابع', courses: [] },
      { specializationSemesterId: 11, semesterName: 'الفصل الخامس', courses: [] },
      { specializationSemesterId: 12, semesterName: 'الفصل السادس', courses: [] },
      { specializationSemesterId: 13, semesterName: 'الفصل السابع', courses: [] },
      { specializationSemesterId: 14, semesterName: 'الفصل الثامن', courses: [] },
    ],
  },
  {
    specializationId: 4,
    specializationName: 'التحكم الالي',
    semesters: [
      { specializationSemesterId: 15, semesterName: 'الفصل الثالث', courses: [] },
      { specializationSemesterId: 16, semesterName: 'الفصل الرابع', courses: [] },
      { specializationSemesterId: 17, semesterName: 'الفصل الخامس', courses: [] },
      { specializationSemesterId: 18, semesterName: 'الفصل السادس', courses: [] },
      { specializationSemesterId: 19, semesterName: 'الفصل السابع', courses: [] },
      { specializationSemesterId: 20, semesterName: 'الفصل الثامن', courses: [] },
    ],
  },
])
</script>
<style scoped>
.specialization-page {
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
}
.container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container h3 {
  text-wrap: nowrap;
}
.tabs {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
}
.add-btn {
  width: 90%;
  left: 5%;
  position: fixed;
  bottom: 80px;
}
</style>
