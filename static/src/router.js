import Install from './components/install'

import Login from './components/login'

import Protal from './components/protal'

import Apps from './components/apps/index'

import AppsList from './components/apps/list'
import AppsCreate from './components/apps/create'
import AppsDetail from './components/apps/detail'

export default (router) => {
  router.map({
    '/login': {
      component: Login
    },
    '/install': {
      component: Install
    },
    '/protal': {
      component: Protal
    },
    '/apps': {
      component: Apps,
      subRoutes: {
        '/list': {
          component: AppsList
        },
        '/create': {
          component: AppsCreate
        },
        '/detail': {
          component: AppsDetail
        }
      }
    }
  })

  router.redirect({
    '*': '/login'
  })
}
