# ReelMatic 网站复刻

这是对 `http://47.242.43.35:3032` 可见页面的静态前端复刻。页面使用原站的中文文案风格、色彩和布局，包含工作区入口、项目中心、新建任务流程、任务详情、批量队列、渲染节点和用量设置。

登录、项目、筛选和新建任务为浏览器本地演示数据，不会访问原站 API，也不会真实创建账号、提交渲染任务或生成 MP4。无构建依赖，站点文件都在 `site/`。

## 本地打开

直接打开 `site/index.html`，或从仓库根目录运行：

```sh
python -m http.server 8000 --directory site
```

然后访问 `http://localhost:8000`。

## 推送到 GitHub 并自动发布 Pages

1. 在 GitHub 创建空仓库，将本目录作为仓库内容推送到 `main` 分支。
2. 在仓库的 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。
3. 推送到 `main` 后，`Deploy to GitHub Pages` 工作流会发布 `site/` 目录。之后可在 **Actions** 的发布任务中查看站点地址。

这个站点使用 hash 路由（例如 `/#/projects`），可直接托管在 GitHub Pages 的项目子路径下。

## 部署到阿里云 ECS

AI PM 项目中现有的阿里云 ECS 使用 Nginx 在 80 端口提供 SkillHub。本项目单独监听 TCP 3032，部署后地址为 <http://47.116.109.213:3032/>；SkillHub 继续使用原来的地址 <http://47.116.109.213/>。旧的 `/reelmatic/` 路径仍可作为兼容入口。

阿里云安全组需允许 TCP 3032 入站；ECS 还需允许 SSH 入站。部署用户需要能写入 `/var/www/reelmatic`、`/etc/nginx/conf.d`，并能运行 `nginx -t` 与重载 Nginx。

在 GitHub 仓库的 **Settings → Secrets and variables → Actions** 添加以下 Secrets：

| Secret | 内容 |
| --- | --- |
| `ALIYUN_HOST` | ECS 公网 IP 或域名；当前 AI PM 主机为 `47.116.109.213` |
| `ALIYUN_PORT` | SSH 端口；默认 `22` |
| `ALIYUN_USER` | ECS 登录用户名 |
| `ALIYUN_SSH_KEY` | 有权限部署的 SSH 私钥 |
| `ALIYUN_KNOWN_HOSTS` | ECS 的 SSH 主机公钥记录 |

随后在 **Actions → Deploy to Alibaba Cloud ECS → Run workflow** 手动运行部署。工作流把静态文件复制到 `/var/www/reelmatic/site`，安装 Nginx 配置并在配置检查通过后重载 Nginx。SkillHub 的 80 端口与 ReelMatic 的 3032 端口分别提供两个网站。

也可以在一台空白 ECS 上使用 Docker Compose 独立部署：

```sh
git clone <你的 GitHub 仓库地址> reelmatic
cd reelmatic
docker compose up -d --build
```

## 目录

- `site/`：静态网站
- `Dockerfile`、`nginx.conf`、`compose.yaml`：ECS 容器部署
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署
- `.github/workflows/deploy-aliyun.yml`：阿里云 ECS 手动部署
