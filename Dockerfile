FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Sf0gmailcomceb5ace3/ceb5ace3 /root/ceb5ace3
WORKDIR /root/ceb5ace3/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
