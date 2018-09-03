FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y apache2
RUN apt-get install -y apache2-utils

RUN rm -rf /etc/apache2/sites-enabled/000-default.conf
ADD ./config/apache/000-default.conf /etc/apache2/sites-enabled

CMD tail -f /dev/null