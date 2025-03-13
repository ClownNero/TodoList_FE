# Container 안에서 할 작업들...
# node:20.16.0, Alpine OS 이미지에서 작업을 하겠습니다.
FROM node:20.16.0-alpine3.19 as builder

# /usr/src/app 디렉터리에서 명령어를 실행할 예정입니다.
WORKDIR /usr/src/app

# package.json 파일을 현재 디렉터리로 복사해옵니다.
# 여기서 한번 캐싱
COPY package.json ./

# npm install을 실행합니다. 이미지 내에서..
# 여기서 한번 더 캐싱
RUN npm install

# 소스 코드를 불러옵니다.
# 여기서 캐싱해
COPY . .

RUN npm run build

# 2. Run stage (Next.js 서버 실행)
FROM node:20.16.0-alpine3.19 as runner

WORKDIR /usr/src/app

# 의존성 복사 (Production only)
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# 빌드된 Next.js 파일 복사
COPY --from=builder /usr/src/app/.next .next
COPY --from=builder /usr/src/app/public public
COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/package.json package.json


# Next.js를 Production 모드에서 실행
CMD ["npm", "run", "start"]

# 1. 맞는 환경을 가진 Image를 찾는다: https://hub.docker.com/
# 2. 이미지 기반으로 Build 또는 Dev Run 할 수 있도록, 외부 파일을 내부로 가져온다.
# 3. 이미지 내에서 node Build Or Dev run
# --- Dockerfile 작성 완료 ---
# 4. Docker build (Dockerfile에서 Docker image 만들기) [docker build -t <허브주소/프로젝트명/이미지명:버전> <Dockerfile 경로>]
# 4-1. -t 이미지 이름 정해주기 ("허브주소/프로젝트명/이미지명:버전") ("이미지명:버전") ("이미지명")
# 4-2. 빌드하다가 문제 생기는 경우: 로그가 다 있음... Host에서 로그보고 수정하거나, 그 전까지만 이미지를 만들고 컨테이너 생성 후 컨테이너에 들어가서 직접 명령어를 실행하여 디버깅
# 5. Docker run (Docker image에서 Container 만들기) [docker run -p <외부포트>:<컨테이너포트> --name <컨테이너 이름> <이미지명>:<태그>]
# 5-1. docker run -p <외부포트>:<컨테이너포트> : 외부 포트 열려있어야함, 컨테이너 내부에서 실행되는 애플리케이션의 포트랑 컨테이너 포트 일치
# 5-2 --name --> docker rm -f <name>
# 5-3. --name --> backend => 같은 도커네크워크 상에 있으면 외부에 공개 안해도 됨
#           Client -> [FrontEnd(services.leorca.org:port)
#                  -> [BackEnd(services.leorca.org:port): DB IP 주소가 머지..? postgres://postgis:5432 ] -> [DB (?)]
# DB (docker run --name postgis postgis:latest)
