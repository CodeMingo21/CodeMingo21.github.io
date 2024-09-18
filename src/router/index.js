import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Portfolio from '@/views/Portfolio.vue'

import ContactMe from '@/views/ContactMe.vue'
import Blog from '@/views/Blog.vue'
import FizzBuzz from '@/views/Projects/FizzBuzz.vue'
import API_Blog_Platform from '@/views/Projects/API_Blog_Platform.vue'
import API_C_SQL_Blog_Platform from '@/views/Projects/API_C_SQL_Blog_Platform.vue'
import API_C_SQL_Library from '@/views/Projects/API_C_SQL_Library.vue'
import API_Recipe_Page from '@/views/Projects/API_Recipe_Page.vue'
import API_Vue_Blog_Platform from '@/views/Projects/API_Vue_Blog_Platform.vue'
import API_Vue_Todo_List from '@/views/Projects/API_Vue_Todo_List.vue'
import HBS_CV_Portfolio from '@/views/Projects/HBS_CV_Portfolio.vue'
import HBS_Recipe_Page from '@/views/Projects/HBS_Recipe_Page.vue'
import MVC_Company_Page from '@/views/Projects/MVC_Company_Page.vue'
import MVC_Portfolio from '@/views/Projects/MVC_Portfolio.vue'
import MVC_Recipe_Page from '@/views/Projects/MVC_Recipe_Page.vue'
import MVC_SQL_Blog_Platform from '@/views/Projects/MVC_SQL_Blog_Platform.vue'
import MVC_SQL_Recipe_Page from '@/views/Projects/MVC_SQL_Recipe_Page.vue'
import MVC_SQL_Training_Diary from '@/views/Projects/MVC_SQL_Training_Diary.vue'
import MVC_Training_Diary from '@/views/Projects/MVC_Training_Diary.vue'
import Vue_Blog_Platform from '@/views/Projects/Vue_Blog_Platform.vue'
import Vue_Online_Butik from '@/views/Projects/Vue_Online_Butik.vue'
import Vue_Restaurant_Page from '@/views/Projects/Vue_Restaurant_Page.vue'
import Vue_Todo_List from '@/views/Projects/Vue_Todo_List.vue'
import Rock_Paper_Scissors from '@/views/Projects/Rock_Paper_Scissors.vue'
import Tic_Tac_Toe from '@/views/Projects/Tic_Tac_Toe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
 
  {
    path: '/contactme',
    name: 'contactme',
    component: ContactMe
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  

{
    path: '/fizzbuzz',
    name: 'fizzbuzz',
    component: FizzBuzz
  },
{
  path: '/api_blog_platform',
  name: 'api_blog',
  component: API_Blog_Platform
},
{
  path: '/api_c_sql_blog_platform',
  name: 'api_c_sql_blog',
  component: API_C_SQL_Blog_Platform
},
{
  path: '/api_c_sql_library',
  name: 'api_c_sql_library',
  component: API_C_SQL_Library
},

{
  path: '/api_recipe_page',
  name: 'api_recipe',
  component: API_Recipe_Page
},
{
  path: '/api_vue_blog_platform',
  name: 'api_vue_blog',
  component: API_Vue_Blog_Platform
},
{
  path: '/api_vue_todo_list',
  name: 'api_vue_todo',
  component: API_Vue_Todo_List
},
{
  path: '/hbs_cv_portfolio',
  name: 'hbs_cv_portfolio',
  component: HBS_CV_Portfolio
},
{
  path: '/hbs_recipe_page',
  name: 'hbs_recipe',
  component: HBS_Recipe_Page
},
{
  path: '/mvc_company_page',
  name: 'mvc_company',
  component: MVC_Company_Page
},

{
  path: '/mvc_portfolio',
  name: 'mvc_portfolio',
  component: MVC_Portfolio
},
{
  path: '/mvc_recipe_page',
  name: 'mvc_recipe',
  component: MVC_Recipe_Page
},
{
  path: '/mvc_sql_blog_platform',
  name: 'mvc_sql_blog',
  component: MVC_SQL_Blog_Platform
},
{
  path: '/mvc_sql_recipe_page',
  name: 'mvc_sql_recipe',
  component: MVC_SQL_Recipe_Page
},
{
  path: '/mvc_sql_training_diary',
  name: 'mvc_sql_training',
  component: MVC_SQL_Training_Diary
},
{
  path: '/mvc_training_diary',
  name: 'mvc_training',
  component: MVC_Training_Diary
},

{
  path: '/rockpaperscissors',
  name: 'rock_paper_scissors',
  component: Rock_Paper_Scissors
},
{
  path: '/tictactoe',
  name: 'tic_tac_toe',
  component: Tic_Tac_Toe
},
{
  path: '/vue_blog_platform',
  name: 'vue_blog',
  component: Vue_Blog_Platform
},
{
  path: '/vue_online_butik',
  name: 'vue_online_butik',
  component: Vue_Online_Butik
},
{
  path: '/vue_restaurant_page',
  name: 'vue_restaurant',
  component: Vue_Restaurant_Page
},
{
  path: '/vue_todo_list',
  name: 'vue_todo_list',
  component: Vue_Todo_List
},








]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
