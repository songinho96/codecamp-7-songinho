FROM node:14

# RUN mkdir class_build
COPY . /class_build/
# class_build 안의 모든 폴더들을 도커 안에 만든 class_build 폴더에 복사하기
WORKDIR /class_build/
# 커서 위치 지정하기(밑의 명령 실행하기 위해서)

# 가지고 올 때ya node_modules는 안가지고 오니까 yarn install 해주기
RUN yarn install
RUN yarn build
CMD yarn start