"use strict"; const title = document.getElementById("title"), icon = document.getElementById("icon"), appleTouchIcon = document.getElementById("appleTouchIcon"), description = document.getElementById("description"), keywords = document.getElementById("keywords"), ogType = document.getElementById("ogType"), ogSiteName = document.getElementById("ogSiteName"), ogTitle = document.getElementById("ogTitle"), ogDescription = document.getElementById("ogDescription"), ogImage = document.getElementById("ogImage"), ogUrl = document.getElementById("ogUrl"), appTitle = document.getElementById("appTitle"), appDescription = document.getElementById("appDescription"), features = document.getElementById("features"), teams = document.getElementById("teams"), tryEasier = document.getElementById("tryEasier"), poweredBy = document.getElementById("poweredBy"), sponsors = document.getElementById("sponsors"), advertisers = document.getElementById("advertisers"), footer = document.getElementById("footer"), apiUrl = `${drupalSettings['video_call']['url_server']}/brand`; let BRAND = { app: { name: "MiroTalk SFU", title: "MiroTalk SFU<br />Free browser based Real-time video calls.<br />Simple, Secure, Fast.", description: "Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen." }, site: { title: "MiroTalk SFU, Free Video Calls, Messaging and Screen Sharing", icon: "../images/logo.svg", appleTouchIcon: "../images/logo.svg" }, meta: { description: "MiroTalk SFU powered by WebRTC and mediasoup, Real-time Simple Secure Fast video calls, messaging and screen sharing capabilities in the browser.", keywords: "webrtc, miro, mediasoup, mediasoup-client, self hosted, voip, sip, real-time communications, chat, messaging, meet, webrtc stun, webrtc turn, webrtc p2p, webrtc sfu, video meeting, video chat, video conference, multi video chat, multi video conference, peer to peer, p2p, sfu, rtc, alternative to, zoom, microsoft teams, google meet, jitsi, meeting" }, og: { type: "app-webrtc", siteName: "MiroTalk SFU", title: "Click the link to make a call.", description: "MiroTalk SFU calling provides real-time video calls, messaging and screen sharing.", image: "https://sfu.mirotalk.com/images/mirotalksfu.png", url: "https://sfu.mirotalk.com" }, html: { features: !0, teams: !0, tryEasier: !0, poweredBy: !0, sponsors: !0, advertisers: !0, footer: !0 } }; async function initialize() { await getBrand(), customizeSite(), customizeMetaTags(), customizeOpenGraph(), customizeApp(), checkBrand() } async function getBrand() { try { let e = await fetch(apiUrl, { headers: {'Accept': 'application/json'},referrerPolicy: 'no-referrer', timeout: 5e3 }); if (!e.ok) throw Error("Network response was not ok"); let t = await e.json(), i = t.message; i && setBrand(i) } catch (o) { console.error("FETCH GET BRAND ERROR", o.message) } } function setBrand(e) { BRAND = e } function checkBrand() { BRAND.html.features || elementDisplay(features, !1), BRAND.html.teams || elementDisplay(teams, !1), BRAND.html.tryEasier || elementDisplay(tryEasier, !1), BRAND.html.poweredBy || elementDisplay(poweredBy, !1), BRAND.html.sponsors || elementDisplay(sponsors, !1), BRAND.html.advertisers || elementDisplay(advertisers, !1), BRAND.html.footer || elementDisplay(footer, !1) } function elementDisplay(e, t, i = "block") { e && (e.style.display = t ? i : "none") } function customizeApp() { appTitle && (appTitle.innerHTML = BRAND.app.title), appDescription && (appDescription.textContent = BRAND.app.description) } function customizeSite() { title && (title.textContent = BRAND.site.title), icon && (icon.href = BRAND.site.icon), appleTouchIcon && (appleTouchIcon.href = BRAND.site.appleTouchIcon) } function customizeMetaTags() { description && (description.content = BRAND.meta.description), keywords && (keywords.content = BRAND.meta.keywords) } function customizeOpenGraph() { ogType && (ogType.content = BRAND.og.type), ogSiteName && (ogSiteName.content = BRAND.og.siteName), ogTitle && (ogTitle.content = BRAND.og.title), ogDescription && (ogDescription.content = BRAND.og.description), ogImage && (ogImage.content = BRAND.og.image), ogUrl && (ogUrl.content = BRAND.og.url) } initialize();