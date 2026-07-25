戶政國考學習平台 V7 PWA

這一版新增
- 手機、平板、Windows、Mac 響應式介面
- PWA 安裝能力
- Service Worker 離線快取
- 學習進度 JSON 匯出／匯入
- Android、iPhone、iPad、電腦皆可使用

重要限制
1. PWA 安裝與 Service Worker 不能直接用 file:// 雙擊啟用。
2. 必須放在 HTTPS 網站，或在電腦上用 localhost 開啟。
3. 本版尚未連接雲端帳號，因此不同裝置不會自動同步。
4. 跨裝置可先使用「匯出學習進度／匯入學習進度」。

電腦本機測試
- Windows：雙擊「啟動本機網站.bat」
- 瀏覽器開啟 http://localhost:8000
- 關閉黑色視窗即可停止

正式跨裝置使用
- 將整個資料夾部署到 GitHub Pages、Cloudflare Pages、Netlify 或其他 HTTPS 主機。
- 部署後用手機瀏覽器開啟網址，再選「加入主畫面」或「安裝」。

資料核對日期：2026-07-25
