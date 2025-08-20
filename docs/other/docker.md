# Docker

Docker是一个开源的容器化平台，用于自动化部署、扩展和管理应用程序。它允许开发人员将应用程序及其依赖项打包到一个称为容器的独立单元中，该容器可以在任何环境中运行。

## 一、docker基础概念

1. 镜像（Image）：Docker 镜像类似于虚拟机的镜像，是一个只读的模板，包含了应用程序运行所需的所有文件、库、环境变量等。
2. 容器（Container）：Docker 容器是镜像的运行实例，每个容器都是一个独立的、可执行的进程，它可以在主机操作系统上运行。
3. 仓库（Repository）：Docker 仓库是用于存储和分享 Docker 镜像的地方，类似于代码仓库。
4. 端口映射（Port Mapping）：Docker 允许将容器内部的端口映射到主机的端口，以便外部访问容器内的应用程序。
5. 数据卷（Volume）：Docker 数据卷是用于在容器之间共享数据的机制，它可以将主机文件系统上的目录挂载到容器中。
6. 网络（Network）：Docker 网络用于连接容器之间的通信，它可以是桥接网络、主机网络或自定义网络。
7. 容器编排（Container Orchestration）：Docker 提供了容器编排工具（如 Docker Compose 和 Kubernetes），用于定义、部署和管理多个容器应用。


## 二、docker的特点

1. 容器化：Docker 将应用程序及其依赖项打包到一个独立的容器中，确保在任何环境中都能一致运行。
2. 轻量级：Docker 容器共享主机操作系统的内核，占用资源少，启动速度快。
3. 可移植性：Docker 容器可以在任何支持 Docker 的主机上运行，无需修改应用程序代码。
4. 隔离性：每个 Docker 容器都是独立的，互不干扰，确保应用程序的安全性和稳定性。
5. 可扩展性：Docker 提供了容器编排工具（如 Docker Compose 和 Kubernetes），可以方便地部署和管理多个容器应用。
6. 资源隔离：Docker 容器使用 Linux 内核的命名空间和控制组（cgroups）技术，实现了资源的隔离和限制，确保每个容器的资源使用不会相互干扰。
7. 镜像分层与复用：Docker 镜像采用分层存储结构，每个镜像层都是只读的，不同镜像可以共享相同的层，从而实现镜像的复用和节省空间。
8. 持续集成/交付（CI/CD）：Docker 可以与持续集成/交付工具（如 Jenkins、GitLab CI）集成，实现自动化构建、测试和部署。
9. 生态系统：Docker 拥有庞大的生态系统，提供了丰富的镜像仓库（如 Docker Hub、阿里云容器镜像服务等）和容器编排工具（如 Docker Compose、Kubernetes 等）。


## 三、docker常用命令

以下是 Docker 常用命令的 Markdown 表格形式，方便你编辑和查阅：

| 命令分类       | 命令语法                                  | 功能描述                                                                 | 常用选项/示例                                                                 |
|----------------|-------------------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **基础命令**   | `docker --version`                        | 查看 Docker 版本信息                                                     | `docker --version`                                                           |
|                | `docker info`                             | 查看 Docker 系统详细信息（镜像、容器数量等）                             | `docker info`                                                                |
|                | `docker help [命令]`                      | 查看命令帮助文档                                                         | `docker run --help`                                                          |
| **镜像管理**   | `docker pull [镜像名:标签]`               | 从仓库拉取镜像                                                           | `docker pull nginx:1.25`、`docker pull ubuntu`                              |
|                | `docker build -t [镜像名:标签] [路径]`    | 根据 Dockerfile 构建镜像                                                 | `-t`：指定名称和标签；`docker build -t myapp:v1 .`                          |
|                | `docker images` / `docker image ls`       | 列出本地所有镜像                                                         | `docker images`                                                              |
|                | `docker rmi [镜像ID/名称]`                | 删除本地镜像（需先删除依赖容器）                                         | `-f`：强制删除；`docker rmi -f 84c316762b01`                                |
|                | `docker tag [源镜像] [新镜像名:标签]`     | 为镜像打标签（用于标记仓库地址）                                         | `docker tag nginx:1.25 myrepo/nginx:v1`                                      |
|                | `docker push [镜像名:标签]`               | 将镜像推送到远程仓库（需先登录）                                         | `docker push myrepo/nginx:v1`                                                |
| **容器管理**   | `docker run [选项] 镜像 [命令]`           | 创建并启动容器                                                           | `-it`：交互式；`-d`：后台运行；`-p 8080:80`：端口映射；`--name 容器名`     |
|                | `docker ps`                               | 列出容器                                                                 | `-a`：显示所有（含停止）；`-q`：只显示ID；`docker ps -a`                    |
|                | `docker start/stop/restart [容器]`        | 启动/停止/重启容器                                                       | `docker start mynginx`、`docker stop 1a2b3c`                                |
|                | `docker exec [选项] 容器 [命令]`          | 在运行的容器中执行命令                                                   | `-it`：交互式；`docker exec -it mynginx /bin/bash`                           |
|                | `docker logs [容器]`                      | 查看容器日志                                                             | `-f`：实时跟踪；`docker logs -f myapp`                                       |
|                | `docker rm [容器]`                        | 删除容器                                                                 | `-f`：强制删除运行中容器；`docker rm -f mynginx`                             |
|                | `docker inspect [容器/镜像]`              | 查看容器或镜像的详细信息                                                 | `docker inspect mynginx`                                                     |
| **仓库管理**   | `docker login [仓库地址]`                 | 登录到 Docker 仓库                                                       | `docker login`（默认 Docker Hub）、`docker login myrepo.com`                 |
|                | `docker logout [仓库地址]`                | 退出仓库登录                                                             | `docker logout`                                                              |
|                | `docker search [关键词]`                  | 从 Docker Hub 搜索镜像                                                   | `docker search python`                                                       |
| **网络管理**   | `docker network ls`                       | 列出所有 Docker 网络                                                     | `docker network ls`                                                          |
|                | `docker network create [网络名]`          | 创建自定义网络                                                           | `docker network create mynet`                                                |
|                | `docker network connect [网络] [容器]`    | 将容器连接到指定网络                                                     | `docker network connect mynet mynginx`                                       |
|                | `docker network rm [网络名]`              | 删除网络                                                                 | `docker network rm mynet`                                                    |
| **数据卷管理** | `docker volume ls`                        | 列出所有数据卷                                                           | `docker volume ls`                                                           |
|                | `docker volume create [卷名]`             | 创建数据卷                                                               | `docker volume create mydata`                                                |
|                | `docker volume rm [卷名]`                 | 删除数据卷                                                               | `docker volume rm mydata`                                                    |
|                | `docker run -v [卷名:容器路径] ...`       | 将卷挂载到容器（持久化数据）                                             | `docker run -v mydata:/app/data --name myapp myapp:v1`                       |
| **系统管理**   | `docker system prune [选项]`              | 清理无用资源（停止的容器、未使用的镜像等）                               | `-a`：删除所有未使用镜像；`docker system prune -a`（谨慎使用）                |

## 四、docker示例

**以nestjs项目为例**
```dockerfile
  # 第一阶段：构建阶段，使用官方Node镜像
  # 选择特定版本而非latest，确保构建一致性
  FROM node:18-alpine AS builder

  # 设置工作目录，所有后续命令将在此目录执行
  WORKDIR /app

  # 复制package.json和package-lock.json（或yarn.lock）
  # 这一步会创建单独的依赖层，只有依赖变动时才会重新构建
  COPY package*.json ./

  # 安装所有依赖（包括开发依赖）
  # 使用--production=false确保安装devDependencies，因为构建需要它们
  RUN npm ci --production=false

  # 复制项目源代码到工作目录
  # 源代码变动频率高，放在依赖安装之后，避免频繁重建依赖层
  COPY . .

  # 执行构建命令，生成生产环境代码
  # 假设你的package.json中build脚本为"nest build"
  RUN npm run build


  # 第二阶段：生产阶段，使用更小的基础镜像
  # 只包含运行时所需文件，减小最终镜像体积
  FROM node:18-alpine AS runner

  # 设置工作目录
  WORKDIR /app

  # 创建非root用户并切换，增强容器安全性
  # 避免容器内应用以root权限运行带来的安全风险
  RUN addgroup -g 1001 -S nodejs && \
      adduser -S nestjs -u 1001 && \
      chown -R nestjs:nodejs /app

  USER nestjs

  # 从构建阶段复制package.json和package-lock.json
  # 只复制生产环境需要的依赖配置
  COPY --from=builder --chown=nestjs:nodejs /app/package*.json ./

  # 安装生产环境依赖（不包含开发依赖）
  # --production=true是默认值，可以省略
  RUN npm ci --only=production

  # 从构建阶段复制编译后的dist目录
  # 这是应用运行的核心代码，放在最后以利用缓存
  COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

  # 暴露应用运行的端口
  # 根据实际项目配置修改（NestJS默认3000）
  EXPOSE 3000

  # 设置环境变量，指定生产环境
  ENV NODE_ENV=production

  # 启动命令
  # 使用node直接运行编译后的入口文件
  # 假设你的入口文件是dist/main.js（NestJS默认输出路径）
  CMD ["node", "dist/main.js"]

```

**构建镜像**
```bash
docker build -t mynestjsapp .

```

**运行容器**
```bash
docker run -p 3000:3000 -d --name mynestjsapp --restart=always mynestjsapp

```

