# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치 (이미 리눅스, node, npm, yarn 까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:16

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행시키기 
# RUN과 CMD는 동일하지만 RUN은 이미지에 저장이 되지만 CMD는 이미지에 저장이 안됨 실행되고나서 CMD 명령어가 호출된다
# RUN은 계속 사용가능하지만 CMD는 마지막에 단 한번만 가능
CMD node index.js

