<template>
  <div class="sidebar">
    <div class="sidebar-title">后台管理系统</div>
    <div class="sidebar-box">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="false"
        :default-active="activeMenu"
        background-color="transparent"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></SidebarItem>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import Layout from '@/layout' //布局页
export default {
  components: { SidebarItem },
  data(){
    return {
      permission_routes:[
  ]
    }
  },
  computed: {
    // ...mapGetters(["permission_routes"]),

    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // 默认激活项
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return {
        menuText: "#ffffff",  // "#bfcbd9"
        menuActiveText: "#ffffff",
        menuBg:  "#001529"

      };
    }
  },
  mounted() {
    console.log(JSON.stringify(this.permission_routes) )

    if(sessionStorage.getItem('role_id')==2){
    //教师
      this.permission_routes =[ {
    path: '/teacherManage',
    component: Layout,
    meta:{
      title: "教师管理",
      icon: 'el-icon-s-platform',
      hidden: false,
    },
    children: [
      // {
      //   path: 'offindex',
      //   component: () => import('@/views/doctorManage/OffIndex.vue'),
      //   name: 'offindex',
      //   meta: {
      //     title: "用户订单管理",
      //     icon: 'el-icon-tickets',
      //     hidden: false,
      //     roles: ['admin','jerry']
      //   }
      // },
      {
        path: 'student',
        component: () => import('@/views/teacherManage/student.vue'),
        name: 'student',
        meta: {
          title: "学生管理",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin', 'jerry']
         }
        },
      {
        path: 'course',
        component: () => import('@/views/teacherManage/course.vue'),
        name: 'course',
        meta: {
          title: "课程管理",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'askleave',
        component: () => import('@/views/teacherManage/askleave.vue'),
        name: 'askleave',
        meta: {
          title: "请假管理",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      }
    ]
  }]
    }else if(sessionStorage.getItem('role_id')==1){
        //管理员
    this.permission_routes =[ {
    path: '/doctorManage',
    component: Layout,
    redirect: '/doctorManage/index',
    meta:{
      title: "教师管理",
      icon: 'el-icon-s-goods',
      hidden: false,
    },
    children: [
      {
        path: 'fromgood',
        component: () => import('@/views/doctorManage/FromGood.vue'),
        name: 'fromgood',
        meta: {
          title: "添加(编辑产品)",
          icon: 'el-icon-tickets',
          hidden: true,
          roles: ['admin','jerry'],

        }
      },
      {
        path: 'onindex',
        component: () => import('@/views/doctorManage/merchandise.vue'),
        // component: () => import('@/views/goods/OnIndex.vue'),
        name: 'onindex',
        meta: {
          title: "教师管理",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry']
        }
      },
      {
        path: 'timetable',
        component: () => import('@/views/adminManage/timetable.vue'),
        name: 'timetable',
        meta: {
          title: "功课管理",
          icon: 'el-icon-tickets',
          hidden: false,
          roles: ['admin','jerry'],

        }
      },

    ]
  }]
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
}
.sidebar-title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  color: #ffffff;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
}
.sidebar-box {
  width: 100%;
  height: calc(100% - 64px);
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: "-moz-scrollbars-none";
  scrollbar-width: none; /*  火狐   */
}
.sidebar-box::-webkit-scrollbar {
  display: none; /*  Chrome  */
  width: 0 !important ; /*  Chrome  */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
