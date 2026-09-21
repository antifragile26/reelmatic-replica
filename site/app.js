(() => {
  "use strict";

  const STORE = "reelmatic-replica-v1";
  const svgPaths = {
    aperture: '<circle cx="12" cy="12" r="9.5"/><path d="m14.3 8 5.7 9.9M9.7 8h11.4M7.4 12l5.7-10M9.7 16 4 6.1M14.3 16H2.8M16.6 12l-5.7 10"/>',
    clapper: '<path d="m20.2 6-17.1 5-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/><path d="m6.2 5.3 3.1 3.9m3.1-5.8 3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2m6-2v2m0 16v2m-6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2"/>',
    lock: '<rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/><circle cx="12" cy="16" r="1"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    plus: '<path d="M12 5v14m-7-7h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    play: '<path d="m8 5 12 7-12 7z"/>',
    trash: '<path d="M3 6h18m-2 0-1 14H6L5 6m4 0V4h6v2m-5 4v6m4-6v6"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    stack: '<path d="m12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>',
    sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20m0-20a15 15 0 0 0 0 20"/>',
    spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/>',
    film: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18m10-18v18M3 8h4m-4 8h4m10-8h4m-4 8h4"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 8h.01M7 18h.01m4-10h6m-6 10h6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-12 5h8m-8 4h8"/>',
    refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    headphones: '<path d="M3 14v-3a9 9 0 0 1 18 0v3m-18 0v4a2 2 0 0 0 2 2h2v-8H5a2 2 0 0 0-2 2zm18 0v4a2 2 0 0 1-2 2h-2v-8h2a2 2 0 0 1 2 2z"/>',
    monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  };
  const icon = (name, cls = "") => `<span class="icon ${cls}" aria-hidden="true"><svg viewBox="0 0 24 24">${svgPaths[name] || svgPaths.spark}</svg></span>`;
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const today = () => new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit" }).format(new Date());

  const starterProjects = [
    { id: "demo-1", title: "真正高效的人，都在主动减少选择", topic: "真正高效的人，都在主动减少选择？", status: "done", platform: "抖音", duration: 30, updated: "今天 10:24", scenes: 4, style: "知识解说" },
    { id: "demo-2", title: "AI 时代，如何保持专注？", topic: "在 AI 时代，如何保护自己的专注力", status: "draft", platform: "视频号", duration: 45, updated: "昨天 16:42", scenes: 0, style: "清晰、有结论" },
    { id: "demo-3", title: "复利思维：让时间成为朋友", topic: "用一分钟理解复利思维", status: "processing", platform: "抖音", duration: 30, updated: "昨天 11:08", scenes: 5, style: "轻松故事" },
  ];
  const baseWizard = () => ({ step: 1, projectTitle: "", topic: "", style: "知识解说", duration: "30", platform: "抖音", orientation: "竖屏 9:16", script: [], voice: "温柔女声", speed: "1.0×", template: "清晨信号", bgm: "轻盈氛围", saved: false });
  let store = loadStore();
  let activeFilter = "全部";
  let query = "";
  let toastTimer;

  function loadStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || "null");
      if (saved && Array.isArray(saved.projects)) return { user: saved.user || null, projects: saved.projects, wizard: { ...baseWizard(), ...(saved.wizard || {}) } };
    } catch { /* Start with the bundled demo workspace. */ }
    return { user: null, projects: starterProjects.map((p) => ({ ...p })), wizard: baseWizard() };
  }
  function persist() { localStorage.setItem(STORE, JSON.stringify(store)); }
  function currentRoute() { return (location.hash.replace(/^#/, "") || "/login").replace(/\/$/, "") || "/login"; }
  function navigate(path) { location.hash = path; }
  function initials(name = "制作人") { return [...name.trim()].slice(0, 1).join("") || "制"; }

  function renderLogin() {
    const app = document.querySelector("#app");
    const signUp = currentRoute() === "/register";
    app.innerHTML = `<main class="login-layout">
      <section class="login-story rule-grid">
        <div class="login-brand"><div class="brand-mark">${icon("aperture")}</div><div><b class="brand-name">REELMATIC</b><div class="brand-caption">PRODUCTION OS</div></div></div>
        <div class="login-copy"><p class="eyebrow">One brief. One production line.</p><h1 class="display-title">让创意<br>进入<span>生产</span>。</h1><p class="login-description">从一句选题开始，在同一个工作区完成脚本、自然配音、分镜画面和 CPU 成片交付。每个阶段都有真实状态，每个文件都可追溯。</p>
          <div class="feature-row"><article class="feature-tile">${icon("clapper")}<span class="feature-index">01</span><strong>脚本分镜</strong><div class="feature-bar"><i></i></div></article><article class="feature-tile">${icon("waves")}<span class="feature-index">02</span><strong>真实配音</strong><div class="feature-bar"><i></i></div></article><article class="feature-tile">${icon("cpu")}<span class="feature-index">03</span><strong>GPU / CPU 渲染</strong><div class="feature-bar"><i></i></div></article></div>
        </div><footer class="login-footer"><span>CPU-FIRST / REAL OUTPUT</span><span class="ready"><i class="ready-dot"></i>SYSTEM READY</span></footer>
      </section>
      <section class="login-form-side"><div class="secure-tag">${icon("lock")} Secure workspace</div><div class="login-box">
        <div class="brand"><div class="brand-mark">${icon("aperture")}</div><div><b class="brand-name">REELMATIC</b><div class="brand-caption">工作区入口</div></div></div>
        <h2>${signUp ? "创建制作席位" : "继续你的任务"}</h2><p class="login-lead">${signUp ? "建立账号并开始第一条 CPU 视频任务。" : "登录后恢复项目、队列状态和历史成片。"}</p>
        <form id="login-form" class="form-fields" novalidate>
          ${signUp ? `<div class="form-field"><label for="name">你希望我们怎么称呼</label><input id="name" name="name" class="field" autocomplete="name" placeholder="称呼" required></div>` : ""}
          <div class="form-field"><label for="email">邮箱地址</label><input id="email" name="email" class="field" type="email" autocomplete="email" placeholder="name@studio.com" required></div>
          <div class="form-field"><label for="password">登录密码</label><input id="password" name="password" class="field" type="password" autocomplete="${signUp ? "new-password" : "current-password"}" placeholder="至少 6 位字符" minlength="6" required></div>
          <div class="login-error" id="login-error" hidden></div>
          <button class="btn btn-primary btn-block" type="submit">${signUp ? "建立账号并进入" : "进入制作工作台"}${icon("arrow")}</button>
        </form>
        ${signUp ? "" : `<div class="or-row">OR</div><button class="btn btn-ghost btn-block" data-action="demo-login">${icon("spark")}进入演示工作区</button>`}
        <div class="form-switch">${signUp ? "已经有账号？" : "第一次来到 ReelMatic？"}<button class="text-button" data-route="${signUp ? "/login" : "/register"}">${signUp ? "直接登录" : "创建账号"}</button></div>
        <p class="login-note">登录即代表你同意在 CPU 环境中处理任务。GPU 生图、数字人和声音克隆当前暂不支持。</p>
      </div></section>
    </main>`;
  }

  const navs = [
    ["/projects", "grid", "项目中心"], ["/create/script", "plus", "新建视频任务"], ["/batch", "stack", "批量队列"],
    ["/nodes", "server", "渲染节点"], ["/usage", "sliders", "用量设置"],
  ];
  function activeNav(route) { return route === "/create/script" ? "/create/script" : route.split("/").slice(0, 2).join("/") || "/projects"; }
  function shell(route, body) {
    const app = document.querySelector("#app");
    const name = store.user?.name || "演示制作人";
    const title = ({ "/projects": "项目中心", "/create/script": "新建视频任务", "/batch": "批量队列", "/nodes": "渲染节点", "/usage": "用量设置" })[activeNav(route)] || "制作工作台";
    app.innerHTML = `<div class="workspace">
      <aside class="sidebar"><div class="brand"><div class="brand-mark">${icon("aperture")}</div><div><b class="brand-name">REELMATIC</b><div class="brand-caption">PRODUCTION OS</div></div></div>
        <div class="workspace-label"><small>CREATIVE LAB</small><strong>创意实验室</strong><div class="online" style="margin-top:8px">工作区在线</div></div>
        <div class="nav-label">制作工作台</div><nav class="nav-list">${navs.map(([path, ico, label]) => `<button class="nav-item ${activeNav(route) === path ? "active" : ""}" data-route="${path}">${icon(ico)}<span>${label}</span>${path === "/nodes" ? `<span class="nav-tag">CPU</span>` : ""}</button>`).join("")}</nav>
        <div class="sidebar-spacer"></div><div class="nav-label">账户</div><div class="sidebar-bottom"><button class="nav-item" data-action="language">${icon("globe")}<span>切换中文</span><span class="nav-tag">中</span></button></div>
        <div class="user-chip"><div class="avatar">${escapeHTML(initials(name))}</div><div><strong>${escapeHTML(name)}</strong><small>CPU Studio · 演示席位</small></div><button aria-label="退出登录" title="退出登录" data-action="logout">${icon("close")}</button></div>
      </aside>
      <section class="main-column"><header class="topbar"><div class="topbar-left"><div class="workspace-mobile-brand"><div class="brand-mark">${icon("aperture")}</div>REELMATIC</div><div class="crumb">制作工作台&nbsp; / &nbsp;<strong>${title}</strong></div></div>
        <div class="topbar-actions"><button class="btn btn-ghost hide-mobile" data-route="/usage">${icon("sliders")}用量设置</button><button class="btn btn-ink" data-route="/create/script">${icon("plus")}新建视频任务</button></div></header>
        <main class="main-content">${body}</main></section>
    </div><div id="toast-root"></div>`;
  }

  function statusName(status) { return ({ done: "已交付", processing: "生产中", draft: "草稿", failed: "异常" })[status] || "草稿"; }
  function statusBadge(status) { return `<span class="status-pill status-${escapeHTML(status)}">${statusName(status)}</span>`; }
  function projectRow(p) {
    return `<article class="project-row"><div class="project-thumb">${icon(p.status === "done" ? "play" : p.status === "processing" ? "cpu" : "clapper")}</div><div class="project-copy"><button class="project-title text-button" style="color:var(--ink);text-align:left" data-route="/project/${encodeURIComponent(p.id)}">${escapeHTML(p.title)}</button><div class="project-meta"><span>${escapeHTML(p.platform || "抖音")}</span><span>${p.duration || 30} 秒</span><span>${p.scenes || "未生成"} 个分镜</span><span>${escapeHTML(p.updated || today())}</span></div></div><div class="project-status">${statusBadge(p.status)}</div><div class="row-actions"><button class="icon-btn" title="打开项目" aria-label="打开项目" data-route="/project/${encodeURIComponent(p.id)}">${icon("arrow")}</button><button class="icon-btn" title="删除项目" aria-label="删除项目" data-action="delete-project" data-id="${escapeHTML(p.id)}">${icon("trash")}</button></div></article>`;
  }
  function overviewPage() {
    const projects = store.projects.filter((p) => {
      const matchesStatus = activeFilter === "全部" || statusName(p.status) === activeFilter;
      const term = query.trim().toLowerCase();
      return matchesStatus && (!term || `${p.title} ${p.topic}`.toLowerCase().includes(term));
    });
    const total = store.projects.length;
    const done = store.projects.filter((p) => p.status === "done").length;
    const working = store.projects.filter((p) => p.status === "processing").length;
    return `<div class="page-heading"><div><div class="eyebrow">CREATIVE LAB / OVERVIEW</div><h1>制作总览</h1><p>一个选题经过脚本、声音、场景与 CPU 渲染，成为可播放、可下载的真实 MP4。每一步都在这里留痕。</p></div><div class="heading-actions"><button class="btn btn-ghost" data-route="/batch">${icon("stack")}批量队列</button><button class="btn btn-primary" data-route="/create/script">${icon("plus")}新建任务</button></div></div>
      <section class="hero-panel"><div class="hero-copy"><div class="eyebrow">ONE IDEA. ONE PRODUCTION LINE.</div><h2>今天，要让什么<br>进入<span>生产</span>？</h2><p>先写下一个选题。分镜、音色与渲染设置都可以稍后调整。</p><button class="btn btn-lime" style="margin-top:15px" data-route="/create/script">${icon("plus")}开始一个新任务</button></div><div class="hero-visual"><div class="hero-visual-head"><span>单 CPU 安全队列</span><span>队列并发&nbsp; 01 / 01</span></div><div class="pipeline-mini"><div>${icon("file")}脚本</div><div>${icon("headphones")}配音</div><div>${icon("film")}分镜</div><div>${icon("cpu")}渲染</div></div><div class="hero-foot"><i class="ready-dot"></i>默认输出 720p · CPU-FIRST</div></div></section>
      <section class="metric-grid"><article class="card metric-card"><div class="metric-label">全部项目${icon("grid")}</div><div class="metric-value">${total.toString().padStart(2, "0")}</div><div class="metric-foot">本地演示工作区</div></article><article class="card metric-card"><div class="metric-label">本月配额${icon("film")}</div><div class="metric-value">${Math.min(total, 2)} <span style="font-size:14px;color:#7b8981">/ 08</span></div><div class="metric-foot">已使用视频任务</div></article><article class="card metric-card"><div class="metric-label">等待渲染${icon("clock")}</div><div class="metric-value">${working.toString().padStart(2, "0")}</div><div class="metric-foot">单 CPU 安全队列</div></article><article class="card metric-card"><div class="metric-label">已交付${icon("check")}</div><div class="metric-value">${done.toString().padStart(2, "0")}</div><div class="metric-foot">当前演示项目</div></article></section>
      <div class="section-head"><div><h2>全部项目</h2><p>继续上次的制作，或从一个新选题开始。</p></div><button class="section-link" data-action="refresh">刷新项目&nbsp; ↗</button></div>
      <div class="project-toolbar"><label class="search-box">${icon("search")}<input class="field" id="project-search" type="search" placeholder="搜索标题或选题" value="${escapeHTML(query)}"></label><div class="filter-tabs">${["全部", "已交付", "草稿", "生产中", "异常"].map((f) => `<button class="filter-tab ${activeFilter === f ? "active" : ""}" data-filter="${f}">${f}</button>`).join("")}</div></div>
      <section class="project-list">${projects.length ? projects.map(projectRow).join("") : `<div class="empty-state">${icon("search")}<strong>这里还没有匹配的制作任务</strong><p>换一个筛选条件，或从一句选题开始。</p><button class="btn btn-ghost" data-action="clear-filter">${icon("refresh")}清除筛选</button></div>`}</section>
      <div class="card quota-card"><div class="quota-ring">${Math.min(total * 12, 99)}%</div><div class="quota-copy"><strong>当前套餐 · CPU Studio</strong><span>本月已使用 ${Math.min(total, 2)} / 08 条视频额度 · 默认输出 720p</span></div><button class="btn btn-ghost" data-route="/usage">查看用量</button></div>`;
  }

  const defaultScenes = (topic) => {
    const subject = topic.trim() || "为什么真正高效的人，都在主动减少选择？";
    return [
      { title: "先问一个问题", voice: `${subject} 你有没有想过，效率真正的秘密是什么？` },
      { title: "减少无意义决策", voice: "高手不是做得更多，而是主动减少那些不重要的选择，把注意力留给真正值得的事。" },
      { title: "给重要的事留空间", voice: "从今天起，试着为重要的事保留精力。你会发现，少一点选择，反而能走得更远。" },
    ];
  };
  function stepRail(step) {
    return `<div class="steps">${[[1, "创作"], [2, "声音与画面"], [3, "渲染交付"]].map(([n, label], i) => `<div class="step ${step === n ? "active" : ""} ${step > n ? "complete" : ""}"><span class="step-num">${step > n ? "✓" : n}</span>${label}</div>${i < 2 ? `<i class="step-connector"></i>` : ""}`).join("")}</div>`;
  }
  function scriptEditor(w) {
    if (!w.script.length) return `<div class="empty-state" style="margin-top:16px">${icon("file")}<strong>等待你的第一个制作指令</strong><p>完成左侧选题后，分镜会在这里展开。旁白与画面指令都可继续编辑。</p></div>`;
    return w.script.map((scene, i) => `<div class="script-row"><span class="scene-number">${String(i + 1).padStart(2, "0")}</span><div class="scene-fields"><input class="field" data-scene-title="${i}" aria-label="分镜 ${i + 1} 标题" value="${escapeHTML(scene.title)}"><textarea class="field" data-scene-voice="${i}" aria-label="分镜 ${i + 1} 旁白">${escapeHTML(scene.voice)}</textarea><label class="field-label" style="margin-top:8px">画面指令</label><textarea class="field" data-scene-visual="${i}" aria-label="分镜 ${i + 1} 画面" style="min-height:55px">${escapeHTML(scene.visual || `使用内置 CPU 场景呈现第 ${i + 1} 个要点`)}</textarea></div></div>`).join("");
  }
  function outputPreview(w) {
    const title = w.topic || "你的选题将在这里预览";
    return `<aside class="card output-panel"><div class="output-head"><strong>制作预览</strong><span>可选 · 实时更新</span></div><div class="output-screen"><div class="screen-content"><span class="eyebrow">REELMATIC ORIGINAL</span><strong>${escapeHTML(title)}</strong><small>${escapeHTML(w.platform)} · ${escapeHTML(w.orientation)} · ${w.duration} 秒</small></div></div><div class="output-meta"><span>${escapeHTML(w.style)}</span><span>${w.script.length || "—"} 个分镜</span><span>${w.script.reduce((sum, s) => sum + (s.voice || "").length, 0) || "—"} 字旁白</span></div>${w.script.length ? `<div class="scene-preview">${w.script.slice(0, 3).map((s, i) => `<article><b>0${i + 1}</b><div><strong>${escapeHTML(s.title)}</strong><p>${escapeHTML(s.voice)}</p></div></article>`).join("")}</div>` : ""}</aside>`;
  }
  function stepOne(w) {
    return `<section class="card wizard-panel"><h2>把选题拆成可拍的分镜</h2><p>左侧确定任务边界，右侧编辑真正会进入配音与渲染的内容。</p>
      <label class="field-label" for="topic">视频选题 <span>必填</span></label><textarea id="topic" class="field" placeholder="例如：为什么真正高效的人，都在主动减少选择？">${escapeHTML(w.topic)}</textarea>
      <label class="field-label" for="project-title">项目标题 <span>可选</span></label><input id="project-title" class="field" placeholder="留空时将使用选题作为标题" value="${escapeHTML(w.projectTitle)}">
      <div class="select-row"><div><label class="field-label" for="style">内容风格</label><select id="style" class="field">${["知识解说", "清晰、有结论", "轻松故事", "资讯播报", "行动导向"].map((s) => `<option ${w.style === s ? "selected" : ""}>${s}</option>`).join("")}</select></div><div><label class="field-label" for="platform">发布平台</label><select id="platform" class="field">${["抖音", "视频号", "小红书", "B 站", "通用短视频"].map((s) => `<option ${w.platform === s ? "selected" : ""}>${s}</option>`).join("")}</select></div></div>
      <div class="select-row"><div><label class="field-label" for="duration">目标时长</label><select id="duration" class="field">${["15", "30", "45", "60", "90"].map((s) => `<option value="${s}" ${w.duration === s ? "selected" : ""}>${s} 秒</option>`).join("")}</select></div><div><label class="field-label" for="orientation">画面方向</label><select id="orientation" class="field">${["竖屏 9:16", "横屏 16:9", "方形 1:1"].map((s) => `<option ${w.orientation === s ? "selected" : ""}>${s}</option>`).join("")}</select></div></div>
      <label class="field-label" for="brief">创作补充 <span>可选</span></label><textarea id="brief" class="field" style="min-height:74px" placeholder="希望开头更有冲击力，结尾加入关注引导……">${escapeHTML(w.brief || "")}</textarea>
      <div class="wizard-actions"><button class="btn btn-ghost" data-route="/projects">取消</button><div class="right-actions"><button class="btn btn-ghost" data-action="generate-script">${icon("spark")}${w.script.length ? "重新构建脚本" : "生成可编辑脚本"}</button><button class="btn btn-primary" data-action="save-script">${w.saved ? icon("check") : ""}${w.saved ? "已保存" : "保存修改"}</button><button class="btn btn-ink" data-action="next-step" ${w.script.length ? "" : "disabled"}>进入声音与画面${icon("arrow")}</button></div></div>
    </section><section class="card wizard-panel" style="margin-top:14px"><h2>脚本与画面指令</h2><p>每行一个分镜。旁白字数与画面指令会随脚本一起保存。</p>${scriptEditor(w)}<button class="btn btn-ghost" style="margin-top:12px" data-action="add-scene">${icon("plus")}添加分镜</button></section>`;
  }
  function stepTwo(w) {
    const choices = (name, items, selected, action, descs = []) => `<div class="choice-grid">${items.map((value, i) => `<button class="choice-card ${selected === value ? "active" : ""}" data-choice="${action}" data-value="${escapeHTML(value)}"><strong>${escapeHTML(value)}</strong><small>${descs[i] || "可用于 CPU 视频制作"}</small></button>`).join("")}</div>`;
    return `<section class="card wizard-panel"><h2>给分镜配上声音与画面</h2><p>挑选一个音色、CPU 场景模板和背景氛围，交付时还可以微调。</p>
      <label class="field-label">旁白音色</label>${choices("voice", ["温柔女声", "沉稳男声", "清晰播报", "轻松讲述"], w.voice, "voice", ["自然、温和", "低沉、有力", "清晰、专业", "亲切、轻快"])}
      <label class="field-label" for="speed">语速</label><select id="speed" class="field">${["0.9×", "1.0×", "1.1×", "1.2×"].map((s) => `<option ${s === w.speed ? "selected" : ""}>${s}</option>`).join("")}</select>
      <label class="field-label">场景模板</label>${choices("template", ["清晨信号", "纸感编辑", "夜色电台"], w.template, "template", ["利落、轻快", "温暖、沉静", "电影、氛围"])}
      <label class="field-label">背景氛围</label>${choices("bgm", ["轻盈氛围", "温暖钢琴", "不使用配乐"], w.bgm, "bgm", ["轻节拍，弱存在感", "柔和钢琴旋律", "保留纯旁白"])}
      <div class="notice" style="margin-top:18px">GPU 生图、数字人和声音克隆当前暂不支持。当前演示仅保留 CPU 内置场景。</div>
      <div class="wizard-actions"><button class="btn btn-ghost" data-action="prev-step">${icon("chevron")}返回创作</button><div class="right-actions"><button class="btn btn-primary" data-action="next-step">进入渲染交付${icon("arrow")}</button></div></div>
    </section>${outputPreview(w)}`;
  }
  function stepThree(w) {
    return `<section class="card wizard-panel"><h2>检查制作设置</h2><p>确认脚本、声音与画面方向，然后保存为新的演示制作任务。</p>
      <div class="review-row"><span>项目标题</span><strong>${escapeHTML(w.projectTitle || w.topic || "未命名任务")}</strong></div><div class="review-row"><span>发布平台</span><strong>${escapeHTML(w.platform)} · ${escapeHTML(w.orientation)}</strong></div><div class="review-row"><span>内容结构</span><strong>${w.script.length} 个分镜 · ${w.duration} 秒</strong></div><div class="review-row"><span>旁白音色</span><strong>${escapeHTML(w.voice)} · ${escapeHTML(w.speed)}</strong></div><div class="review-row"><span>场景模板</span><strong>${escapeHTML(w.template)} · ${escapeHTML(w.bgm)}</strong></div>
      <div class="notice" style="margin-top:17px">本地演示版只保存任务信息，不会启动原站的视频渲染服务，也不会生成 MP4 文件。</div>
      <div class="wizard-actions"><button class="btn btn-ghost" data-action="prev-step">${icon("chevron")}返回声音与画面</button><div class="right-actions"><button class="btn btn-primary" data-action="create-project">${icon("check")}保存演示任务</button></div></div>
    </section><aside class="card output-panel"><div class="output-head"><strong>交付预览</strong><span>LOCAL DEMO</span></div><div class="render-preview">${outputPreview(w).match(/<div class="output-screen">[\s\S]*?<\/div>/)?.[0] || ""}<div class="render-progress"><i></i></div><div style="color:#10231f7d;font-size:10px">所有文件和任务均保存在当前浏览器。</div></div></aside>`;
  }
  function createPage() {
    const w = store.wizard;
    let panels = stepOne(w);
    if (w.step === 2) panels = stepTwo(w);
    if (w.step === 3) panels = stepThree(w);
    return `<div class="page-heading"><div><div class="eyebrow">PRODUCTION LINE / STEP 0${w.step}</div><h1>新建视频任务</h1><p>从一句选题开始，逐步搭好一条能继续编辑的 CPU 视频制作流程。</p></div><div class="heading-actions"><button class="btn btn-ghost" data-route="/projects">${icon("grid")}回到项目中心</button></div></div>${stepRail(w.step)}<div class="wizard-grid ${w.step === 1 ? "wizard-first" : ""}">${panels}</div>`;
  }

  function utilityPage(kind) {
    if (kind === "/batch") {
      const processing = store.projects.filter((p) => p.status === "processing");
      return `<div class="page-heading"><div><div class="eyebrow">QUEUE / CPU SAFE MODE</div><h1>批量队列</h1><p>查看排队中的 CPU 任务与近期批次。演示版不连接远程渲染服务。</p></div><div class="heading-actions"><button class="btn btn-ghost" data-action="refresh">${icon("refresh")}刷新队列</button></div></div>
        <section class="hero-panel" style="min-height:155px"><div class="hero-copy"><div class="eyebrow">单 CPU 安全队列</div><h2 style="font-size:28px">队列并发 <span>01 / 01</span></h2><p>串行处理任务，降低 CPU 渲染期间的资源峰值。</p></div><div style="position:relative;z-index:1;text-align:right"><div style="font-size:38px;font-weight:850">${processing.length.toString().padStart(2,"0")}</div><div style="color:#ffffff87;font-size:10px">等待脚本 / 渲染</div></div></section>
        <div class="section-head"><div><h2>最近任务</h2><p>项目状态与队列状态保持同步。</p></div><button class="section-link" data-route="/projects">查看全部项目&nbsp; ↗</button></div><section class="project-list">${store.projects.map(projectRow).join("")}</section>`;
    }
    if (kind === "/nodes") {
      return `<div class="page-heading"><div><div class="eyebrow">RENDER FLEET / CPU FIRST</div><h1>渲染节点</h1><p>单 CPU 安全队列用于控制工作区中的视频渲染负载。</p></div><div class="heading-actions"><button class="btn btn-ghost" data-action="refresh">${icon("refresh")}刷新节点</button></div></div>
        <section class="panel-grid"><article class="card info-card">${icon("server")}<h3>CPU 渲染节点</h3><span class="value">在线</span><p>演示环境状态。真实任务需要连接原站后端服务。</p></article><article class="card info-card">${icon("stack")}<h3>队列并发</h3><span class="value">01 / 01</span><p>单 CPU 安全队列，任务按序执行。</p></article><article class="card info-card">${icon("monitor")}<h3>默认输出</h3><span class="value">720p</span><p>竖屏、横屏与方形视频尺寸可在创作步骤调整。</p></article></section>
        <div class="section-head"><div><h2>制作能力</h2><p>当前演示使用浏览器本地数据。</p></div></div><section class="card"><div class="timeline-step"><span class="step-icon">✓</span><div><strong>脚本分镜</strong><small>可编辑标题、旁白和画面指令</small></div><span class="status-pill status-done">可用</span></div><div class="timeline-step"><span class="step-icon">✓</span><div><strong>CPU 内置场景</strong><small>提供默认场景模板用于制作流程预览</small></div><span class="status-pill status-done">可用</span></div><div class="timeline-step"><span class="step-icon">×</span><div><strong>GPU 生图与数字人</strong><small>暂不支持</small></div><span class="status-pill status-draft">未启用</span></div></section>`;
    }
    return `<div class="page-heading"><div><div class="eyebrow">PLAN / USAGE</div><h1>用量设置</h1><p>查看本地演示工作区的套餐信息、视频额度与输出默认值。</p></div></div>
      <section class="hero-panel" style="min-height:175px"><div class="hero-copy"><div class="eyebrow">YOUR WORKSPACE PLAN</div><h2 style="font-size:34px">CPU <span>Studio</span></h2><p>适合脚本、配音与 CPU 场景的基础视频制作流程。</p></div><div style="position:relative;z-index:1;text-align:right"><div style="font-size:42px;font-weight:850">08</div><div style="color:#ffffff87;font-size:10px">本月视频额度</div></div></section>
      <div class="panel-grid" style="margin-top:15px"><article class="card info-card">${icon("film")}<h3>视频任务</h3><span class="value">${Math.min(store.projects.length, 2)} / 08</span><p>本地演示数据不会影响真实服务配额。</p></article><article class="card info-card">${icon("monitor")}<h3>默认分辨率</h3><span class="value">720p</span><p>可在创建任务时调整视频比例与方向。</p></article><article class="card info-card">${icon("cpu")}<h3>队列模式</h3><span class="value">单 CPU</span><p>安全队列并发为 1，GPU 生成功能暂不支持。</p></article></div>
      <div class="section-head"><div><h2>当前默认值</h2><p>这些设置可在每个新任务中单独修改。</p></div></div><section class="card"><div class="detail-kv"><span>工作区语言</span><strong>简体中文</strong></div><div class="detail-kv"><span>输出画质</span><strong>720p</strong></div><div class="detail-kv"><span>队列并发</span><strong>1 个任务</strong></div><div class="detail-kv"><span>数据保存位置</span><strong>当前浏览器</strong></div></section>`;
  }

  function projectDetail(id) {
    const project = store.projects.find((p) => p.id === id);
    if (!project) return `<div class="empty-state">${icon("file")}<strong>无法恢复这个项目</strong><p>该项目可能已被删除，或者不存在于当前演示工作区。</p><button class="btn btn-ghost" data-route="/projects">回到项目中心</button></div>`;
    const scenes = project.script?.length ? project.script : defaultScenes(project.topic).slice(0, Math.max(3, Math.min(project.scenes || 3, 5)));
    return `<div class="page-heading"><div><div class="eyebrow">PROJECT / ${escapeHTML(project.id.slice(-6).toUpperCase())}</div><h1>${escapeHTML(project.title)}</h1><p>项目工作区加载成功。你可以检查当前配置，或回到项目中心继续其他任务。</p></div><div class="heading-actions"><button class="btn btn-ghost" data-route="/projects">${icon("grid")}项目中心</button><button class="btn btn-primary" data-action="continue-project" data-id="${escapeHTML(project.id)}">${icon("clapper")}继续制作</button></div></div>
      <div class="project-detail-grid"><section class="card"><div class="detail-cover"><div style="text-align:center">${icon("play")}<span>CPU-FIRST / 720P</span></div></div><div class="timeline"><div class="timeline-step"><span class="step-icon">✓</span><div><strong>脚本分镜</strong><small>${scenes.length} 个分镜 · ${project.style || "知识解说"}</small></div>${statusBadge(project.status === "draft" ? "draft" : "done")}</div><div class="timeline-step"><span class="step-icon">✓</span><div><strong>声音与画面</strong><small>自然旁白 · 内置 CPU 场景</small></div><span class="status-pill status-done">已配置</span></div><div class="timeline-step"><span class="step-icon">${project.status === "done" ? "✓" : "…"}</span><div><strong>渲染交付</strong><small>${project.status === "done" ? "演示项目已完成" : "演示环境不启动远程渲染"}</small></div>${statusBadge(project.status)}</div></div></section>
        <aside class="card"><div class="eyebrow">PROJECT ASSETS</div><h2 style="margin-top:7px;font-size:16px;font-weight:850">项目资产</h2><div class="detail-kv" style="margin-top:13px"><span>当前状态</span><strong>${statusName(project.status)}</strong></div><div class="detail-kv"><span>发布平台</span><strong>${escapeHTML(project.platform)}</strong></div><div class="detail-kv"><span>目标时长</span><strong>${project.duration} 秒</strong></div><div class="detail-kv"><span>更新时间</span><strong>${escapeHTML(project.updated)}</strong></div><div class="notice" style="margin-top:16px">这里没有真实 MP4 文件。连接实际渲染后端后，成片与配音资产才能在此下载。</div></aside>
      </div><div class="section-head"><div><h2>脚本分镜</h2><p>旁白与画面指令的演示内容。</p></div></div><section class="card">${scenes.map((s,i)=>`<div class="timeline-step"><span class="scene-number">${String(i+1).padStart(2,"0")}</span><div><strong>${escapeHTML(s.title)}</strong><small>${escapeHTML(s.voice)}</small></div>${icon("film")}</div>`).join("")}</section>`;
  }

  function render() {
    const route = currentRoute();
    if (route === "/login" || route === "/register") return renderLogin();
    if (!store.user) { navigate("/login"); return; }
    if (route === "/projects" || route === "/") return shell("/projects", overviewPage());
    if (route === "/create" || route === "/create/script") return shell("/create/script", createPage());
    if (route === "/batch" || route === "/nodes" || route === "/usage") return shell(route, utilityPage(route));
    if (route.startsWith("/project/")) return shell(route, projectDetail(decodeURIComponent(route.slice("/project/".length))));
    return shell("/projects", overviewPage());
  }

  function showToast(message) {
    const root = document.querySelector("#toast-root");
    if (!root) return;
    root.innerHTML = `<div class="toast">${escapeHTML(message)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { if (root) root.innerHTML = ""; }, 2800);
  }
  function saveWizard() { store.wizard.saved = true; persist(); showToast("脚本已保存在当前浏览器"); }
  function makeScript() {
    const w = store.wizard;
    if (!w.topic.trim()) { showToast("请先写下视频选题"); document.querySelector("#topic")?.focus(); return; }
    w.script = defaultScenes(w.topic).map((s, i) => ({ ...s, visual: `使用内置 CPU 场景呈现第 ${i + 1} 个要点` }));
    w.saved = false; persist(); render(); showToast("分镜草稿已生成，可继续编辑");
  }
  function createProject() {
    const w = store.wizard;
    if (!w.topic.trim()) { w.step = 1; render(); showToast("请先写下视频选题"); return; }
    const project = {
      id: `local-${Date.now().toString(36)}`, title: w.projectTitle.trim() || w.topic.trim().slice(0, 30), topic: w.topic.trim(), status: "draft",
      platform: w.platform, duration: Number(w.duration) || 30, updated: `今天 ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`,
      scenes: w.script.length, style: w.style, script: w.script.map((s) => ({ ...s })), voice: w.voice, template: w.template,
    };
    if (w.projectId) {
      const existing = store.projects.find((p) => p.id === w.projectId);
      if (existing) Object.assign(existing, project, { id: w.projectId });
      store.wizard = baseWizard(); persist(); navigate(`/project/${encodeURIComponent(w.projectId)}`);
      showToast("项目修改已保存在当前浏览器。");
    } else {
      store.projects.unshift(project); store.wizard = baseWizard(); persist(); navigate(`/project/${encodeURIComponent(project.id)}`);
      showToast("演示任务已保存。它还没有提交给远程渲染服务。");
    }
  }
  function updateWizardFromForm(target) {
    const w = store.wizard;
    if (target.id === "topic") w.topic = target.value;
    if (target.id === "project-title") w.projectTitle = target.value;
    if (target.id === "style") w.style = target.value;
    if (target.id === "platform") w.platform = target.value;
    if (target.id === "duration") w.duration = target.value;
    if (target.id === "orientation") w.orientation = target.value;
    if (target.id === "brief") w.brief = target.value;
    if (target.id === "speed") w.speed = target.value;
    const titleIndex = target.dataset.sceneTitle;
    const voiceIndex = target.dataset.sceneVoice;
    const visualIndex = target.dataset.sceneVisual;
    if (titleIndex !== undefined && w.script[titleIndex]) w.script[titleIndex].title = target.value;
    if (voiceIndex !== undefined && w.script[voiceIndex]) w.script[voiceIndex].voice = target.value;
    if (visualIndex !== undefined && w.script[visualIndex]) w.script[visualIndex].visual = target.value;
    w.saved = false;
    persist();
  }

  document.addEventListener("input", (event) => {
    const el = event.target;
    if (el.id === "project-search") { query = el.value; const pos = el.selectionStart; render(); const next = document.querySelector("#project-search"); next?.focus(); next?.setSelectionRange(pos, pos); return; }
    if (el.id === "topic" || el.id === "project-title" || el.id === "brief" || el.dataset.sceneTitle !== undefined || el.dataset.sceneVoice !== undefined || el.dataset.sceneVisual !== undefined) updateWizardFromForm(el);
  });
  document.addEventListener("change", (event) => {
    if (["style", "platform", "duration", "orientation", "speed"].includes(event.target.id)) updateWizardFromForm(event.target);
  });
  document.addEventListener("submit", (event) => {
    if (event.target.id !== "login-form") return;
    event.preventDefault();
    const form = new FormData(event.target);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    const signUp = currentRoute() === "/register";
    const error = document.querySelector("#login-error");
    if (!/^\S+@\S+\.\S+$/.test(email)) { error.textContent = "请输入有效的邮箱地址。"; error.hidden = false; return; }
    if (password.length < 6) { error.textContent = "密码至少需要 6 位字符。"; error.hidden = false; return; }
    const name = signUp ? String(form.get("name") || "").trim() : (email.split("@")[0] || "制作人");
    store.user = { name: name || "制作人", email }; persist(); navigate("/projects");
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.route) { navigate(button.dataset.route); return; }
    if (button.dataset.filter) { activeFilter = button.dataset.filter; render(); return; }
    if (button.dataset.choice) { store.wizard[button.dataset.choice] = button.dataset.value; persist(); render(); return; }
    const action = button.dataset.action;
    if (!action) return;
    if (action === "demo-login") { store.user = { name: "演示制作人", email: "demo@reelmatic.local" }; persist(); navigate("/projects"); return; }
    if (action === "logout") { store.user = null; persist(); navigate("/login"); return; }
    if (action === "language") { showToast("当前演示版本使用简体中文"); return; }
    if (action === "refresh") { render(); showToast("已刷新当前演示数据"); return; }
    if (action === "clear-filter") { query = ""; activeFilter = "全部"; render(); return; }
    if (action === "delete-project") {
      const project = store.projects.find((p) => p.id === button.dataset.id);
      if (!project || !confirm(`删除项目“${project.title}”？此操作只会从当前浏览器的演示列表中移除该项目。`)) return;
      store.projects = store.projects.filter((p) => p.id !== button.dataset.id); persist(); render(); showToast("项目记录已从此浏览器移除"); return;
    }
    if (action === "continue-project") {
      const project = store.projects.find((p) => p.id === button.dataset.id);
      if (project) store.wizard = { ...baseWizard(), projectId: project.id, projectTitle: project.title, topic: project.topic || project.title, style: project.style || "知识解说", duration: String(project.duration || 30), platform: project.platform || "抖音", script: (project.script?.length ? project.script : defaultScenes(project.topic || project.title)).map((s) => ({ ...s })), saved: true };
      else store.wizard = baseWizard();
      persist(); navigate("/create/script"); showToast("已载入项目脚本与制作设置"); return;
    }
    if (action === "generate-script") { makeScript(); return; }
    if (action === "save-script") { saveWizard(); return; }
    if (action === "add-scene") { store.wizard.script.push({ title: `新分镜 ${store.wizard.script.length + 1}`, voice: "在这里输入这一段旁白。", visual: "补充画面指令" }); persist(); render(); return; }
    if (action === "next-step") {
      if (store.wizard.step === 1 && !store.wizard.script.length) { showToast("请先生成或保存脚本"); return; }
      if (store.wizard.step < 3) { store.wizard.step += 1; persist(); render(); return; }
    }
    if (action === "prev-step") { store.wizard.step = Math.max(1, store.wizard.step - 1); persist(); render(); return; }
    if (action === "create-project") { createProject(); return; }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", render);
  render();
})();
