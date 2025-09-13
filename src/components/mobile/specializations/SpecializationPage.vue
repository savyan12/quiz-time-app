<template>
  <div class="specialization-page">
    <v-layout>
      <PageHeader
        :title="title"
        :tab="tabs"
        :add-mode="addMode"
        @change-mode="() => (addMode = false)"
        @go-back="backTab"
      />
      <v-main class="mt-5">
        <v-container>
          <SearchBar />
          <v-locale-provider rtl>
            <v-card class="mt-13" elevation="0">
              <v-window v-model="tabs">
                <SpecializationTab
                  :tab="1"
                  :items="items"
                  :itemKeyProp="
                    (item) => {
                      return item.specializationName
                    }
                  "
                  @next-tab="(index) => nextTab(index)"
                />
                <SpecializationTab
                  :tab="2"
                  :items="semesters"
                  :itemKeyProp="
                    (item) => {
                      return item.semesterName
                    }
                  "
                  @next-tab="(index) => nextTab(index)"
                />
                <SpecializationTab
                  :tab="3"
                  :items="[{ title: 'المقررات الدراسية' }, { title: 'شيتات' }]"
                  :itemKeyProp="
                    (item) => {
                      return item.title
                    }
                  "
                  @next-tab="(index) => nextTab(index)"
                />
                <SpecializationTab
                  :tab="4"
                  :items="subjects"
                  :itemKeyProp="
                    (item) => {
                      return item.arabic_name
                    }
                  "
                  :add-mode="addMode"
                  @next-tab="(index) => nextTab(index)"
                />
              </v-window>
            </v-card>
          </v-locale-provider>
        </v-container>
        <Transition
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
        >
          <button class="add-btn" @click="addMode = true" v-show="tabs === 4">
            <span>اضافة مقررات</span><v-icon class="mx-2" size="22">qt:qt-circlePlus</v-icon>
          </button>
        </Transition>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import SpecializationTab from './specializationTab.vue'
import PageHeader from './PageHeader.vue'

// flags
const addMode = ref(false)
//data
const tabs = ref(1)
const semesters = ref([])
const subjects = ref([])
const title = ref('الفصول الدراسية')
const titleHistory = ref(['الفصول الدراسية'])

const nextTab = (index) => {
  if (tabs.value === 1) {
    semesters.value = items.value[index].semesters
    title.value = items.value[index].specializationName
  }
  if (tabs.value === 2) {
    subjects.value = semesters.value[index].courses
    title.value = semesters.value[index].semesterName
  }
  if (tabs.value === 3 && index === 1) return

  titleHistory.value.push(title.value)
  tabs.value++
}

const backTab = () => {
  if (tabs.value === 1) return

  titleHistory.value.pop()
  title.value = titleHistory.value[titleHistory.value.length - 1]
  tabs.value--
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
.v-card {
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
}
.add-btn {
  position: fixed;
  bottom: 85px;
  left: 20px;
  width: 90%;
  height: 50px;
  background: #1dc4174d;
  color: #0c8808da;
  border-radius: 10px;
  font-size: 18px;
}
.add-btn:active {
  background: #1dc41759;
}
</style>
