// ============================================================
//  角色名冊・連線設定
//  只有第一次設定時需要填，之後更新網站只換 index.html，這個檔案不用動
// ============================================================

// ① 從「新的」Firebase 專案「專案設定 → 你的應用程式」複製過來，整段貼上取代
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// ② 房主（你）的 Gmail，必須和 firestore.rules 裡的信箱一模一樣
export const OWNER_EMAIL = "onigidog@gmail.com";
