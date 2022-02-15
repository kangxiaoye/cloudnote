import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login";
import NotebookList from "../components/NotebookList";
import NoteDetail from "../components/NoteDetail";
import TrashDetail from "../components/TrashDetail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/NotebookList',
      name: 'NotebookList',
      component: NotebookList
    },
    {
      path: '/NoteDetail/:noteId',
      name: 'NoteDetail',
      component: NoteDetail
    },
    {
      path: '/TrashDetail/:noteId',
      name: 'TrashDetail',
      component: TrashDetail
    }
  ]
})
