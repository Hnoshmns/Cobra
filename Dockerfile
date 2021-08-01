FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Sf0gmailcomceb5ace3/scbdecwc52q98wd49sva62wcwcec /root/scbdecwc52q98wd49sva62wcwcec
WORKDIR /root/scbdecwc52q98wd49sva62wcwcec/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
