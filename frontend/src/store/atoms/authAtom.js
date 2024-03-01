import { atom, selector } from 'recoil'
import authService from '../../gcp/auth'


export const userAtom = atom({
  key: "userAtom",
  default: selector({
    key: "userSelector",
    get: async () => {
      const userData = await authService.getCurrentUser()
      return userData
    }
  })
})


// export const totalNoticationsSelector = selector({
//   key: "totalNoticationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notificationAtom);
//     return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging
//   }
// })